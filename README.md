<img src="xs-field-calc-icon-512.png" alt="" width="96" height="96">

# XS Field Calc

**Català** · [English](README.en.md) · [Español](README.es.md) · [Português](README.pt.md) · [Galego](README.gl.md) · [Euskara](README.eu.md) · [Français](README.fr.md) · [Esperanto](README.eo.md) · [Română](README.ro.md) · [Aranés](README.oc.md)

Eines de càlcul gratuïtes per a electricistes, en un sol fitxer. Obre-la amb qualsevol navegador actual, també des del mòbil. Funciona sense connexió, sense registre i sense anuncis; les dades es queden al teu navegador.

Quan hi ha connexió, l'app mira si hi ha una versió nova en aquest repositori, la baixa, en comprova el SHA-256 i s'hi canvia sola. Les obres i els ajustos es conserven.

**Obre-la:** https://xsfieldcalc.github.io/xs-field-calc-share/ca/

Al mòbil, obre l'enllaç i tria «Instal·la l'app» o «Afegeix a la pantalla d'inici». A l'ordinador, la icona d'instal·lar de la barra d'adreces. Després s'obre sense connexió.

Tres variants de la mateixa app; només canvia com d'amagat està el codi:

| Fitxer | Variant |
| --- | --- |
| `xs-field-calc.html` | Nivell 1 (recomanada): compactada i empaquetada; el codi surt de la pàgina un cop carregat |
| `xs-field-calc-0.html` | Nivell 0: compactada i empaquetada |
| `xs-field-calc-2.html` | Nivell 2: com el nivell 1 i, a més, ofuscada |

Comprova els fitxers:

    sha256sum -c SHA256SUMS        # GNU/Linux
    sha256 -c "$(grep ' xs-field-calc.html$' SHA256SUMS | cut -d' ' -f1)" xs-field-calc.html   # FreeBSD

[Registre de canvis](CHANGELOG.md)

© 2026 XS Field Calc. Tots els drets reservats. [Llicència d'ús](LICENSE.md) · Contacte: contacte@xsfieldcalc.com
