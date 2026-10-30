<img src="xs-field-calc-icon-512.png" alt="" width="96" height="96">

# XS Field Calc

[Català](README.md) · [English](README.en.md) · [Español](README.es.md) · [Português](README.pt.md) · [Galego](README.gl.md) · [Euskara](README.eu.md) · **Français** · [Esperanto](README.eo.md) · [Română](README.ro.md) · [Aranés](README.oc.md)

Outils de calcul gratuits pour électriciens, en un seul fichier. Ouvrez-la dans n'importe quel navigateur récent, aussi sur un téléphone. Fonctionne hors ligne, sans inscription et sans publicité ; vos données restent dans votre navigateur.

Quand il y a une connexion, l'app vérifie s'il y a une nouvelle version dans ce dépôt, la télécharge, contrôle son SHA-256 et bascule dessus toute seule. Vos chantiers et réglages sont conservés.

**Ouvrez-la:** https://xsfieldcalc.github.io/xs-field-calc-share/fr/

Sur un téléphone, ouvrez le lien et choisissez « Installer l'application » ou « Ajouter à l'écran d'accueil ». Sur un ordinateur, l'icône d'installation de la barre d'adresse. Ensuite, elle s'ouvre hors ligne.

Trois variantes de la même app ; seul le degré de dissimulation du code change :

| Fichier | Variante |
| --- | --- |
| `xs-field-calc.html` | Niveau 1 (recommandée) : minifiée et empaquetée ; le code quitte la page une fois chargé |
| `xs-field-calc-0.html` | Niveau 0 : minifiée et empaquetée |
| `xs-field-calc-2.html` | Niveau 2 : comme le niveau 1, et en plus obfusquée |

Vérifiez les fichiers :

    sha256sum -c SHA256SUMS        # GNU/Linux
    sha256 -c "$(grep ' xs-field-calc.html$' SHA256SUMS | cut -d' ' -f1)" xs-field-calc.html   # FreeBSD

[Journal des modifications (en catalan)](CHANGELOG.md)

© 2026 XS Field Calc. Tous droits réservés. [Licence d'utilisation](LICENSE.fr.md) · Contact: contacte@xsfieldcalc.com
