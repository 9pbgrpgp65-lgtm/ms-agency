"""
MS Agency — Scraper de prospects via Apify
Trouve les commerces parisiens sans site web ou avec un site dépassé.
Usage : python3 scraper_apify.py "dentiste" "Paris 11e"
"""

import os
import sys
import csv
import time
import json
import requests
from datetime import datetime
from dotenv import load_dotenv

load_dotenv(os.path.join(os.path.dirname(__file__), '..', '.env'))

APIFY_TOKEN = os.getenv('APIFY_API_TOKEN')
ACTOR_ID = 'compass~crawler-google-places'
BASE_URL = 'https://api.apify.com/v2'


def lancer_scraping(requete: str, ville: str = 'Paris', max_resultats: int = 50) -> list:
    """Lance l'acteur Apify Google Maps et retourne les résultats."""

    print(f"\n🔍 Recherche : '{requete}' à {ville} ({max_resultats} résultats max)")
    print("⏳ Lancement de l'acteur Apify...")

    payload = {
        "searchStringsArray": [f"{requete} {ville}"],
        "maxCrawledPlacesPerSearch": max_resultats,
        "language": "fr",
        "countryCode": "fr",
        "includeWebResults": False,
        "scrapeReviews": False,
        "scrapeImageUrls": False,
    }

    # Lancer le run
    run_resp = requests.post(
        f"{BASE_URL}/acts/{ACTOR_ID}/runs",
        headers={"Authorization": f"Bearer {APIFY_TOKEN}"},
        json=payload,
        timeout=30
    )

    if run_resp.status_code not in (200, 201):
        print(f"❌ Erreur au lancement : {run_resp.status_code} — {run_resp.text[:200]}")
        sys.exit(1)

    run_id = run_resp.json()['data']['id']
    print(f"✅ Run lancé : {run_id}")

    # Attendre la fin du run
    print("⏳ Scraping en cours", end='', flush=True)
    while True:
        status_resp = requests.get(
            f"{BASE_URL}/actor-runs/{run_id}",
            headers={"Authorization": f"Bearer {APIFY_TOKEN}"},
            timeout=15
        )
        status = status_resp.json()['data']['status']

        if status == 'SUCCEEDED':
            print(" ✅")
            break
        elif status in ('FAILED', 'ABORTED', 'TIMED-OUT'):
            print(f" ❌ Run terminé avec statut : {status}")
            sys.exit(1)

        print('.', end='', flush=True)
        time.sleep(5)

    # Récupérer les résultats
    dataset_id = status_resp.json()['data']['defaultDatasetId']
    items_resp = requests.get(
        f"{BASE_URL}/datasets/{dataset_id}/items?format=json&clean=true",
        headers={"Authorization": f"Bearer {APIFY_TOKEN}"},
        timeout=30
    )

    return items_resp.json()


def filtrer_prospects(resultats: list) -> list:
    """Garde uniquement les commerces sans site web ou avec site basique."""
    prospects = []

    for item in resultats:
        website = item.get('website', '') or ''

        # Exclure les réseaux sociaux et plateformes (pas un vrai site)
        plateformes = ['facebook.com', 'instagram.com', 'doctolib.fr',
                       'pages.google.com', 'maps.google', 'yelp.com', 'tripadvisor']

        est_plateforme = any(p in website.lower() for p in plateformes)
        sans_site = not website or est_plateforme

        if sans_site:
            prospects.append({
                'nom': item.get('title', ''),
                'adresse': item.get('address', ''),
                'telephone': item.get('phone', ''),
                'note': item.get('totalScore', ''),
                'nb_avis': item.get('reviewsCount', ''),
                'categorie': item.get('categoryName', ''),
                'site_web': website or 'Aucun',
                'google_maps_url': item.get('url', ''),
                'statut': 'À contacter',
            })

    return prospects


def exporter_csv(prospects: list, requete: str) -> str:
    """Exporte les prospects dans un fichier CSV."""
    if not prospects:
        print("⚠️  Aucun prospect trouvé.")
        return ''

    date = datetime.now().strftime('%Y-%m-%d_%H-%M')
    nom_fichier = os.path.join(
        os.path.dirname(__file__),
        f"prospects_{requete.replace(' ', '-')}_{date}.csv"
    )

    colonnes = ['nom', 'adresse', 'telephone', 'note', 'nb_avis',
                'categorie', 'site_web', 'google_maps_url', 'statut']

    with open(nom_fichier, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=colonnes)
        writer.writeheader()
        writer.writerows(prospects)

    return nom_fichier


def main():
    if not APIFY_TOKEN:
        print("❌ Token Apify manquant. Vérifiez votre fichier .env")
        sys.exit(1)

    if len(sys.argv) < 2:
        print("Usage : python3 scraper_apify.py <type_commerce> [ville] [nb_max]")
        print('Exemple : python3 scraper_apify.py "dentiste" "Paris 11e" 30')
        sys.exit(1)

    requete = sys.argv[1]
    ville = sys.argv[2] if len(sys.argv) > 2 else 'Paris'
    max_r = int(sys.argv[3]) if len(sys.argv) > 3 else 50

    # Scraping
    resultats = lancer_scraping(requete, ville, max_r)
    print(f"📦 {len(resultats)} établissements trouvés au total")

    # Filtrage
    prospects = filtrer_prospects(resultats)
    print(f"🎯 {len(prospects)} prospects SANS site web")

    # Export
    fichier = exporter_csv(prospects, f"{requete}-{ville}")

    if fichier:
        print(f"\n✅ Fichier exporté : {fichier}")
        print("\n📋 Aperçu des 5 premiers prospects :")
        for p in prospects[:5]:
            print(f"  • {p['nom']} — {p['adresse']} — ☎ {p['telephone']}")

    print(f"\n💡 Prochaine étape : Simohamed contacte ces {len(prospects)} prospects !")


if __name__ == '__main__':
    main()
