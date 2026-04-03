#!/usr/bin/env python3
"""
Scraper Google Maps - Version API officielle
Recherche des commerces locaux sans site web via l'API Google Maps Places.
"""

import argparse
import csv
import os
import sys
from datetime import datetime

try:
    import googlemaps
except ImportError:
    print("Erreur : la bibliothèque 'googlemaps' n'est pas installée.")
    print("Installez-la avec : pip install -r requirements.txt")
    sys.exit(1)


# --- Configuration par défaut ---
RESULTATS_PAR_PAGE = 60  # Maximum autorisé par l'API Places


def obtenir_client_gmaps():
    """Initialise et retourne le client Google Maps avec la clé API."""
    cle_api = os.environ.get("GOOGLE_MAPS_API_KEY")
    if not cle_api:
        print("Erreur : la variable d'environnement GOOGLE_MAPS_API_KEY n'est pas définie.")
        print("Exportez-la avec : export GOOGLE_MAPS_API_KEY='votre-clé-ici'")
        sys.exit(1)
    try:
        client = googlemaps.Client(key=cle_api)
        return client
    except Exception as e:
        print(f"Erreur lors de l'initialisation du client Google Maps : {e}")
        sys.exit(1)


def rechercher_commerces(client, requete, quartier=None):
    """
    Recherche des commerces sur Google Maps via l'API Places.
    Retourne une liste de résultats bruts.
    """
    # Construire la requête complète avec le quartier si spécifié
    requete_complete = requete
    if quartier:
        requete_complete = f"{requete} {quartier}"

    print(f"Recherche en cours : '{requete_complete}'...")

    tous_les_resultats = []

    try:
        # Première page de résultats
        reponse = client.places(query=requete_complete)
        tous_les_resultats.extend(reponse.get("results", []))

        # Récupérer les pages suivantes (l'API renvoie max 20 résultats par page)
        while "next_page_token" in reponse:
            import time
            # L'API exige un court délai avant d'utiliser le next_page_token
            time.sleep(2)
            reponse = client.places(
                query=requete_complete,
                page_token=reponse["next_page_token"]
            )
            tous_les_resultats.extend(reponse.get("results", []))

        print(f"  -> {len(tous_les_resultats)} résultat(s) trouvé(s) au total.")
        return tous_les_resultats

    except googlemaps.exceptions.ApiError as e:
        print(f"Erreur API Google Maps : {e}")
        return []
    except Exception as e:
        print(f"Erreur inattendue lors de la recherche : {e}")
        return []


def obtenir_details_commerce(client, place_id):
    """
    Récupère les détails complets d'un commerce via son Place ID.
    Retourne un dictionnaire avec les informations extraites.
    """
    try:
        # Champs à récupérer (optimiser pour réduire le coût API)
        champs = [
            "name",
            "formatted_address",
            "formatted_phone_number",
            "international_phone_number",
            "rating",
            "user_ratings_total",
            "website",
            "url",
            "place_id",
            "types",
            "business_status",
            "opening_hours",
        ]

        details = client.place(place_id=place_id, fields=champs)
        resultat = details.get("result", {})

        # Extraire et structurer les données
        commerce = {
            "nom": resultat.get("name", ""),
            "adresse": resultat.get("formatted_address", ""),
            "telephone": resultat.get("formatted_phone_number", ""),
            "telephone_international": resultat.get("international_phone_number", ""),
            "note": resultat.get("rating", ""),
            "nombre_avis": resultat.get("user_ratings_total", 0),
            "site_web": resultat.get("website", ""),
            "url_google_maps": resultat.get("url", ""),
            "place_id": resultat.get("place_id", place_id),
            "types": ", ".join(resultat.get("types", [])),
            "statut": resultat.get("business_status", ""),
        }

        return commerce

    except googlemaps.exceptions.ApiError as e:
        print(f"  Erreur API pour le lieu {place_id} : {e}")
        return None
    except Exception as e:
        print(f"  Erreur inattendue pour le lieu {place_id} : {e}")
        return None


def est_sans_site_web(commerce):
    """
    Vérifie si un commerce n'a pas de site web ou a un site très basique.
    Retourne True si le commerce est un prospect intéressant.
    """
    site = commerce.get("site_web", "").strip()

    # Pas de site du tout
    if not site:
        return True

    # Sites considérés comme "basiques" ou génériques (pages Facebook, etc.)
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
        "telephone_international",
        "note",
        "nombre_avis",
        "site_web",
        "url_google_maps",
        "place_id",
        "types",
        "statut",
        "a_un_site_web",
    ]

    try:
        with open(nom_fichier, "w", newline="", encoding="utf-8") as fichier:
            writer = csv.DictWriter(fichier, fieldnames=entetes)
            writer.writeheader()

            for commerce in commerces:
                # Ajouter un indicateur de site web
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
            note = c.get("note", "N/A")
            avis = c.get("nombre_avis", 0)
            tel = c.get("telephone", "Pas de tél.")
            print(f"  {i}. {c['nom']} (Note: {note}, {avis} avis) - {tel}")


def main():
    """Point d'entrée principal du script."""
    # --- Analyse des arguments en ligne de commande ---
    parser = argparse.ArgumentParser(
        description="Recherche de commerces sans site web sur Google Maps (API officielle).",
        epilog="Exemple : python scraper_gmaps.py 'restaurant italien' --quartier 'Paris 11e'",
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
        help="Quartier ou arrondissement à ajouter à la recherche (ex: 'Paris 11e')",
    )
    parser.add_argument(
        "--sortie",
        "-o",
        type=str,
        default=None,
        help="Nom du fichier CSV de sortie (par défaut : prospects_AAAA-MM-JJ.csv)",
    )
    parser.add_argument(
        "--tous",
        action="store_true",
        help="Inclure aussi les commerces qui ont un site web dans le CSV",
    )

    args = parser.parse_args()

    # --- Initialisation du client Google Maps ---
    client = obtenir_client_gmaps()

    # --- Recherche des commerces ---
    resultats_bruts = rechercher_commerces(client, args.requete, args.quartier)

    if not resultats_bruts:
        print("Aucun résultat trouvé. Essayez une autre requête.")
        sys.exit(0)

    # --- Récupération des détails pour chaque commerce ---
    print("\nRécupération des détails de chaque commerce...")
    tous_commerces = []
    for i, resultat in enumerate(resultats_bruts, 1):
        place_id = resultat.get("place_id")
        if not place_id:
            continue
        nom = resultat.get("name", "Inconnu")
        print(f"  [{i}/{len(resultats_bruts)}] {nom}...")
        details = obtenir_details_commerce(client, place_id)
        if details:
            tous_commerces.append(details)

    # --- Filtrer les commerces sans site web ---
    sans_site = [c for c in tous_commerces if est_sans_site_web(c)]

    # --- Afficher le résumé ---
    afficher_resume(tous_commerces, sans_site)

    # --- Exporter en CSV ---
    date_du_jour = datetime.now().strftime("%Y-%m-%d")
    nom_fichier = args.sortie or f"prospects_{date_du_jour}.csv"

    # Déterminer quels commerces exporter
    commerces_a_exporter = tous_commerces if args.tous else sans_site

    exporter_csv(commerces_a_exporter, nom_fichier)

    print(f"\nTerminé ! {len(commerces_a_exporter)} commerce(s) exporté(s).")


if __name__ == "__main__":
    main()
