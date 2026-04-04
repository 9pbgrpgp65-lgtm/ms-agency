"""
Remplace les emojis dans les templates HTML par des alternatives propres.
"""
import re
import sys

# Map emoji → remplacement texte/SVG/symbole propre
REPLACEMENTS = {
    # Restaurant
    "&#127837;": '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>',
    "&#128293;": '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2c0 6-6 8-6 14a6 6 0 0012 0c0-6-6-8-6-14z"/></svg>',
    "&#127815;": '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>',
    "&#127863;": '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',

    # Dentiste — icônes de services
    "&#129463;": "",  # dent
    "&#10024;": "",   # étincelle
    "&#129702;": "",  # implant
    "&#128172;": "",  # bulle
    "&#128118;": "",  # enfant
    "&#128168;": "",  # parodontologie

    # Dentiste — infos pratiques
    "&#128205;": "→",
    "&#128222;": "→",
    "&#128231;": "→",
    "&#128336;": "→",
    "&#128647;": "→",
    "&#128179;": "→",
    "&#127860;": "→",
    "&#128197;": "→",

    # Dentiste — team emojis (garder juste les initiales)
    "&#128104;&#8205;&#9877;": "",
    "&#128105;&#8205;&#9877;": "",
    "&#128105;&#8205;&#128188;": "",

    # Dentiste — hero card
    "&#128567;": "",

    # Dentiste — nav logo
    "&#9877;": "+",

    # Dentiste — about list check
    "&#10003;": "✓",

    # Dentiste — urgence
    "&#9888;": "!",

    # Garage — nav logo
    "&#128663;": "",

    # Garage — services
    "&#128295;": "",
    "&#128664;": "",
    "&#128187;": "",
    "&#9898;": "",
    "&#10052;": "",
    "&#9989;": "",

    # Garage — about
    "&#128683;": "!",

    # Garage — tarifs
    "&#128196;": "",

    # Garage — avis avatar fallback
    # (les avatars sont déjà des lettres, pas d'emojis)

    # Garage — footer / infos
    "&#128205;": "—",
    "&#128222;": "—",

    # Restaurant — galerie placeholder
    "&#128506;": "",

    # Restaurant — avis quotes
    "&#8220;": "&ldquo;",
    "&#8221;": "&rdquo;",

    # Génériques
    "&#9733;": "★",  # étoile (garder en symbole unicode propre sans emoji)
    "&#10003;": "✓",
    "&#128197;": "",
    "&#128336;": "",
}

def nettoyer_fichier(chemin: str):
    with open(chemin, 'r', encoding='utf-8') as f:
        contenu = f.read()

    original = contenu

    # Remplacer les entités HTML d'emojis connues
    for emoji, remplacement in REPLACEMENTS.items():
        contenu = contenu.replace(emoji, remplacement)

    # Supprimer les vrais caractères emoji (hors ASCII étendu et symboles typographiques)
    def est_emoji(char):
        cp = ord(char)
        return (
            0x1F300 <= cp <= 0x1F9FF or
            0x2600 <= cp <= 0x26FF or
            0x2700 <= cp <= 0x27BF or
            0xFE00 <= cp <= 0xFE0F or
            0x1F000 <= cp <= 0x1FFFF
        )

    contenu_propre = ''.join('' if est_emoji(c) else c for c in contenu)

    if contenu_propre == original:
        print(f"  ✓ Aucun emoji trouvé dans {chemin}")
    else:
        with open(chemin, 'w', encoding='utf-8') as f:
            f.write(contenu_propre)
        print(f"  ✓ Emojis supprimés dans {chemin}")

if __name__ == '__main__':
    fichiers = sys.argv[1:] if len(sys.argv) > 1 else []
    for f in fichiers:
        nettoyer_fichier(f)
