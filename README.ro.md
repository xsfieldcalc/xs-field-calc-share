<img src="xs-field-calc-icon-512.png" alt="" width="96" height="96">

# XS Field Calc

[Català](README.md) · [English](README.en.md) · [Español](README.es.md) · [Português](README.pt.md) · [Galego](README.gl.md) · [Euskara](README.eu.md) · [Français](README.fr.md) · [Esperanto](README.eo.md) · **Română** · [Aranés](README.oc.md)

Instrumente de calcul gratuite pentru electricieni, într-un singur fișier. Deschideți-l în orice browser actualizat, inclusiv pe telefon. Funcționează fără conexiune la internet, fără înregistrare și fără reclame; datele dumneavoastră rămân în browser.

Când există conexiune, aplicația verifică dacă în acest depozit există o versiune nouă, o descarcă, îi verifică SHA-256 și trece singură la ea. Lucrările și setările dumneavoastră se păstrează.

**Deschideți-o:** https://xsfieldcalc.github.io/xs-field-calc-share/ro/

Pe telefon, deschideți linkul și alegeți „Instalați aplicația” sau „Adăugați pe ecranul de pornire”. Pe computer, folosiți pictograma de instalare din bara de adrese. După aceea, se deschide și fără conexiune la internet.

Trei variante ale aceleiași aplicații; diferă doar cât de ascuns este codul:

| Fișier | Variantă |
| --- | --- |
| `xs-field-calc.html` | Nivelul 1 (recomandată): minificată și împachetată; codul părăsește pagina după încărcare |
| `xs-field-calc-0.html` | Nivelul 0: minificată și împachetată |
| `xs-field-calc-2.html` | Nivelul 2: ca nivelul 1 și, în plus, obfuscată |

Verificați fișierele:

    sha256sum -c SHA256SUMS        # GNU/Linux
    sha256 -c "$(grep ' xs-field-calc.html$' SHA256SUMS | cut -d' ' -f1)" xs-field-calc.html   # FreeBSD

[Jurnalul modificărilor (în catalană)](CHANGELOG.md)

© 2026 XS Field Calc. Toate drepturile rezervate. [Licență](LICENSE.ro.md) · Contact: contacte@xsfieldcalc.com
