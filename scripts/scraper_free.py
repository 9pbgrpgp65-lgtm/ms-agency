#!/usr/bin/env python3
"""
Scraper Google Maps - Version GRATUITE (sans clé API)
Utilise requests + BeautifulSoup pour extraire les données de Google Maps.

ATTENTION : Ce script effectue du web scraping sur Google Maps.
- Il peut cesser de fonctionner si Google modifie son HTML.
- L'utilisation intensive peut entraîner un blocage de votre IP.
- Cette méthode est moins fiable que l'API officielle.
- Respectez les conditions d'utilisation de Google.
"""

import argparse
import csv
import json
import re
import sys
import time
import random
from datetime import datetime
from urllib.parse import quote_plus

try:
    import requests
    from bs4 import BeautifulSoup
except ImportError:
    print("Erreur : les bibliothèques 'requests' et 'beautifulsoup4' sont requises.")
    print("Installez-les avec : pip install -r requirements.txt")
    sys.exit(1)


# --- Avertissement important ---
AVERTISSEMENT = """
╔══════════════════════════════════════════════════════════════════╗
║  ATTENTION - VERSION GRATUITE (WEB SCRAPING)                    ║
║                                                                  ║
║  Ce script scrape directement les pages Google Maps.             ║
║  - Il peut CESSER de fonctionner si Google modifie son HTML.     ║
║  - Google peut BLOQUER votre IP en cas d'utilisation intensive.  ║
║  - Les résultats sont MOINS FIABLES que via l'API officielle.    ║
║  - Utilisez la version API (scraper_gmaps.py) pour un usage     ║
║    professionnel et fiable.                                      ║
╚══════════════════════════════════════════════════════════════════╝
"""

# --- En-têtes HTTP pour simuler un navigateur ---
HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/120.0.0.0 Safari/537.36"
    ),
    "Accept-Language": "fr-FR,fr;q=0.9,en;q=0.8",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
}


def pause_aleatoire(minimum=1.0, maximum=3.0):
    """Pause aléatoire pour éviter d'être détecté comme robot."""
    duree = random.uniform(minimum, maximum)
    time.sleep(duree)


def rechercher_via_google(requete, quartier=None):
    """
    Recherche des commerces via une recherche Google classique
    avec le paramètre 'site:google.com/maps' ou en parsant les résultats Maps.
    Retourne une liste de dictionnaires avec les infos extraites.
    """
    # Construire la requête
    requete_complete = requete
    if quartier:
        requete_complete = f"{requete} {quartier}"

    print(f"Recherche en cours : '{requete_complete}'...")
    print("(Cette méthode est lente pour éviter le blocage par Google)\n")

    # Utiliser la recherche Google Maps via URL directe
    url = f"https://www.google.com/maps/search/{quote_plus(requete_complete)}"

    commerces = []

    try:
        session = requests.Session()
        session.headers.update(HEADERS)

        reponse = session.get(url, timeout=15)
        reponse.raise_for_status()

        # Google Maps renvoie du HTML avec des données JSON intégrées
        contenu = reponse.text

        # Tenter d'extraire les données JSON intégrées dans la page
        commerces = extraire_donnees_json(contenu)

        if not commerces:
            # Méthode alternative : chercher via Google Search
            print("  Méthode Maps directe échouée, tentative via Google Search...")
            commerces = rechercher_via_google_search(session, requete_complete)

    except requests.exceptions.RequestException as e:
        print(f"Erreur réseau : {e}")
    except Exception as e:
        print(f"Erreur inattendue : {e}")

    return commerces


def extraire_donnees_json(html_content):
    """
    Tente d'extraire les données JSON intégrées dans la page Google Maps.
    Google intègre les résultats dans des blocs de données JavaScript.
    """
    commerces = []

    try:
        # Chercher les blocs de données JSON dans le HTML
        # Google Maps utilise souvent window.APP_INITIALIZATION_STATE ou des balises script
        patterns = [
            r'window\.APP_INITIALIZATION_STATE\s*=\s*(\[.*?\]);',
            r"null,null,null,\[null,null,\"(.*?)\"\]",
        ]

        # Chercher les noms et adresses dans le HTML brut
        # Pattern pour les données structurées de lieux
        soup = BeautifulSoup(html_content, "html.parser")

        # Chercher dans les balises script contenant des données JSON
        for script in soup.find_all("script"):
            texte = script.string or ""

            # Chercher des structures de données de type lieu
            # Format typique : ["nom du lieu", null, [...coordonnées...], "adresse", ...]
            noms_trouves = re.findall(
                r'\["([^"]{3,80})",\s*null,\s*\[null,\s*null,\s*([-\d.]+),\s*([-\d.]+)\]',
                texte,
            )

            for nom, lat, lng in noms_trouves:
                # Vérifier que c'est un vrai nom de commerce (pas un élément UI)
                if len(nom) > 2 and not nom.startswith("http"):
                    commerce = {
                        "nom": nom,
                        "adresse": "",
                        "telephone": "",
                        "note": "",
                        "nombre_avis": 0,
                        "site_web": "",
                        "url_google_maps": f"https://www.google.com/maps/search/?api=1&query={quote_plus(nom)}",
                        "place_id": "",
                        "types": "",
                    }
                    # Éviter les doublons
                    if not any(c["nom"] == nom for c in commerces):
                        commerces.append(commerce)

    except Exception as e:
        print(f"  Erreur lors de l'extraction JSON : {e}")

    return commerces


def rechercher_via_google_search(session, requete):
    """
    Méthode alternative : utilise Google Search pour trouver des commerces.
    Cherche les fiches Google My Business dans les résultats de recherche.
    """
    commerces = []
    url = f"https://www.google.com/search?q={quote_plus(requete)}&num=20"

    try:
        pause_aleatoire(2, 4)  # Pause plus longue pour Google Search
        reponse = session.get(url, timeout=15)
        reponse.raise_for_status()

        soup = BeautifulSoup(reponse.text, "html.parser")

        # Chercher les blocs de résultats locaux (pack local Google)
        # Ces blocs contiennent généralement les fiches Google My Business
        resultats_locaux = soup.find_all("div", class_=re.compile(r"VkpGBb|rllt__details"))

        for bloc in resultats_locaux:
            commerce = extraire_info_bloc_local(bloc)
            if commerce and commerce.get("nom"):
                commerces.append(commerce)

        # Si pas de résultats locaux, chercher dans les résultats classiques
        if not commerces:
            # Chercher les liens vers Google Maps dans les résultats
            liens_maps = soup.find_all("a", href=re.compile(r"google\.com/maps"))
            for lien in liens_maps:
                texte = lien.get_text(strip=True)
                if texte and len(texte) > 2:
                    commerce = {
                        "nom": texte,
                        "adresse": "",
                        "telephone": "",
                        "note": "",
                        "nombre_avis": 0,
                        "site_web": "",
                        "url_google_maps": lien.get("href", ""),
                        "place_id": "",
                        "types": "",
                    }
                    commerces.append(commerce)

    except requests.exceptions.RequestException as e:
        print(f"  Erreur lors de la recherche Google : {e}")
    except Exception as e:
        print(f"  Erreur inattendue : {e}")

    return commerces


def extraire_info_bloc_local(bloc):
    """
    Extrait les informations d'un bloc de résultat local Google.
    La structure HTML change fréquemment -- cette fonction peut nécessiter des mises à jour.
    """
    commerce = {
        "nom": "",
        "adresse": "",
        "telephone": "",
        "note": "",
        "nombre_avis": 0,
        "site_web": "",
        "url_google_maps": "",
        "place_id": "",
        "types": "",
    }

    try:
        # Nom du commerce
        nom_elem = bloc.find(["span", "div", "a"], class_=re.compile(r"OSrXXb|dbg0pd"))
        if nom_elem:
            commerce["nom"] = nom_elem.get_text(strip=True)

        # Note (étoiles)
        note_elem = bloc.find("span", class_=re.compile(r"yi40Hd|BTtC6e"))
        if note_elem:
            commerce["note"] = note_elem.get_text(strip=True)

        # Nombre d'avis
        avis_elem = bloc.find("span", string=re.compile(r"\(\d+\)"))
        if avis_elem:
            match = re.search(r"\((\d+)\)", avis_elem.get_text())
            if match:
                commerce["nombre_avis"] = int(match.group(1))

        # Adresse et type
        details = bloc.find_all("span", class_=re.compile(r"rllt__details"))
        for detail in details:
            texte = detail.get_text(strip=True)
            if any(mot in texte.lower() for mot in ["rue", "avenue", "boulevard", "paris", "lyon"]):
                commerce["adresse"] = texte
            else:
                commerce["types"] = texte

        # Lien Google Maps
        lien = bloc.find("a", href=True)
        if lien:
            href = lien.get("href", "")
            if "maps" in href or "place" in href:
                commerce["url_google_maps"] = href

        # Vérifier si un site web est mentionné
        site_elem = bloc.find("a", href=re.compile(r"^https?://(?!.*google)"))
        if site_elem:
            commerce["site_web"] = site_elem.get("href", "")

    except Exception:
        pass  # Ignorer les erreurs d'extraction -- le HTML change souvent

    return commerce


def enrichir_commerce(session, commerce):
    """
    Tente d'enrichir les informations d'un commerce en visitant sa fiche Google Maps.
    Ajoute le téléphone, l'adresse complète et le site web si trouvés.
    """
    nom = commerce.get("nom", "")
    if not nom:
        return commerce

    try:
        # Chercher la fiche du commerce sur Google
        url = f"https://www.google.com/search?q={quote_plus(nom + ' google maps')}"
        pause_aleatoire(1.5, 3.0)

        reponse = session.get(url, timeout=10)
        if reponse.status_code != 200:
            return commerce

        soup = BeautifulSoup(reponse.text, "html.parser")

        # Chercher le numéro de téléphone
        tel_match = re.search(
            r'(?:0[1-9][\s.-]?(?:\d{2}[\s.-]?){4}|\+33[\s.-]?\d[\s.-]?(?:\d{2}[\s.-]?){4})',
            reponse.text,
        )
        if tel_match and not commerce.get("telephone"):
            commerce["telephone"] = tel_match.group(0).strip()

        # Chercher l'adresse
        adresse_match = re.search(
            r'(\d{1,4}[\s,]+(?:rue|avenue|boulevard|place|passage|impasse|allée)[^"<]{5,80})',
            reponse.text,
            re.IGNORECASE,
        )
        if adresse_match and not commerce.get("adresse"):
            commerce["adresse"] = adresse_match.group(0).strip()

        # Chercher un site web dans les résultats
        if not commerce.get("site_web"):
            for lien in soup.find_all("a", href=True):
                href = lien.get("href", "")
                # Exclure les liens Google et les réseaux sociaux connus
                if (
                    href.startswith("http")
                    and "google" not in href
                    and "youtube" not in href
                    and "cache" not in href
                    and nom.lower().replace(" ", "") in href.lower().replace(" ", "")
                ):
                    commerce["site_web"] = href
                    break

    except Exception:
        pass  # Ne pas interrompre le processus en cas d'erreur

    return commerce


def est_sans_site_web(commerce):
    """
    Vérifie si un commerce n'a pas de site web ou a un site très basique.
    Retourne True si le commerce est un prospect intéressant.
    """
    site = commerce.get("site_web", "").strip()

    # Pas de site du tout
    if not site:
        return True

    # Sites considérés comme "basiques" ou génériques
    sites_basiques = [
        "facebook.com",
        "instagram.com",
        "twitter.com",
        "x.com",
        "yelp.com",
        "tripadvisor.com",
        "pagesjaunes.fr",
        "lafourchette.com",
        "thefork.com",
    ]

    site_lower = site.lower()
    for domaine in sites_basiques:
        if domaine in site_lower:
            return True

    return False


def exporter_csv(commerces, nom_fichier):
    """Exporte la liste des commerces dans un fichier CSV."""
    if not commerces:
        print("Aucun commerce à exporter.")
        return

    # En-têtes du CSV
    entetes = [
        "nom",
        "adresse",
        "telephone",
        "note",
        "nombre_avis",
        "site_web",
        "url_google_maps",
        "place_id",
        "types",
        "a_un_site_web",
    ]

    try:
        with open(nom_fichier, "w", newline="", encoding="utf-8") as fichier:
            writer = csv.DictWriter(fichier, fieldnames=entetes, extrasaction="ignore")
            writer.writeheader()

            for commerce in commerces:
                ligne = dict(commerce)
                ligne["a_un_site_web"] = "Non" if est_sans_site_web(commerce) else "Oui"
                writer.writerow(ligne)

        print(f"\nFichier CSV exporté : {nom_fichier}")

    except IOError as e:
        print(f"Erreur lors de l'écriture du fichier CSV : {e}")
        sys.exit(1)


def afficher_resume(tous_commerces, sans_site):
    """Affiche un résumé des résultats."""
    total = len(tous_commerces)
    nb_sans_site = len(sans_site)
    nb_avec_site = total - nb_sans_site

    print("\n" + "=" * 50)
    print("RÉSUMÉ DE LA RECHERCHE")
    print("=" * 50)
    print(f"  Total de commerces trouvés : {total}")
    print(f"  Avec site web              : {nb_avec_site}")
    print(f"  SANS site web (prospects)  : {nb_sans_site}")
    print("=" * 50)

    if sans_site:
        print("\nTop prospects sans site web :")
        for i, c in enumerate(sans_site[:10], 1):
            note = c.get("note", "N/A") or "N/A"
            avis = c.get("nombre_avis", 0)
            tel = c.get("telephone", "Pas de tél.") or "Pas de tél."
            print(f"  {i}. {c['nom']} (Note: {note}, {avis} avis) - {tel}")


def main():
    """Point d'entrée principal du script."""

    # --- Afficher l'avertissement ---
    print(AVERTISSEMENT)

    # --- Analyse des arguments en ligne de commande ---
    parser = argparse.ArgumentParser(
        description=(
            "Recherche GRATUITE de commerces sans site web sur Google Maps "
            "(web scraping, sans clé API)."
        ),
        epilog=(
            "Exemple : python scraper_free.py 'restaurant italien' --quartier 'Paris 11e'\n\n"
            "ATTENTION : Cette version est moins fiable que la version API (scraper_gmaps.py)."
        ),
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    parser.add_argument(
        "requete",
        type=str,
        help="Requête de recherche (ex: 'restaurant italien Paris 11e')",
    )
    parser.add_argument(
        "--quartier",
        "-q",
        type=str,
        default=None,
        help="Quartier ou arrondissement (ex: 'Paris 11e')",
    )
    parser.add_argument(
        "--sortie",
        "-o",
        type=str,
        default=None,
        help="Nom du fichier CSV de sortie (par défaut : prospects_free_AAAA-MM-JJ.csv)",
    )
    parser.add_argument(
        "--enrichir",
        "-e",
        action="store_true",
        help="Tenter d'enrichir les données (plus lent, fait des requêtes supplémentaires)",
    )
    parser.add_argument(
        "--tous",
        action="store_true",
        help="Inclure aussi les commerces qui ont un site web dans le CSV",
    )

    args = parser.parse_args()

    # --- Recherche des commerces ---
    commerces = rechercher_via_google(args.requete, args.quartier)

    if not commerces:
        print("\nAucun résultat trouvé.")
        print("Conseils :")
        print("  - Vérifiez votre connexion internet")
        print("  - Essayez une requête différente")
        print("  - Google a peut-être bloqué temporairement votre IP")
        print("  - Utilisez la version API (scraper_gmaps.py) pour des résultats fiables")
        sys.exit(0)

    print(f"\n{len(commerces)} commerce(s) trouvé(s).")

    # --- Enrichissement optionnel ---
    if args.enrichir:
        print("\nEnrichissement des données (cela peut prendre quelques minutes)...")
        session = requests.Session()
        session.headers.update(HEADERS)

        for i, commerce in enumerate(commerces, 1):
            print(f"  [{i}/{len(commerces)}] Enrichissement de '{commerce['nom']}'...")
            commerces[i - 1] = enrichir_commerce(session, commerce)

    # --- Filtrer les commerces sans site web ---
    sans_site = [c for c in commerces if est_sans_site_web(c)]

    # --- Afficher le résumé ---
    afficher_resume(commerces, sans_site)

    # --- Exporter en CSV ---
    date_du_jour = datetime.now().strftime("%Y-%m-%d")
    nom_fichier = args.sortie or f"prospects_free_{date_du_jour}.csv"

    commerces_a_exporter = commerces if args.tous else sans_site
    exporter_csv(commerces_a_exporter, nom_fichier)

    print(f"\nTerminé ! {len(commerces_a_exporter)} commerce(s) exporté(s).")
    print("\nNote : Pour des résultats plus fiables, utilisez scraper_gmaps.py avec une clé API.")


if __name__ == "__main__":
    main()
