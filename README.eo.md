<img src="xs-field-calc-icon-512.png" alt="" width="96" height="96">

# XS Field Calc

[Català](README.md) · [English](README.en.md) · [Español](README.es.md) · [Português](README.pt.md) · [Galego](README.gl.md) · [Euskara](README.eu.md) · [Français](README.fr.md) · **Esperanto**

Senpagaj kalkuliloj por elektristoj, en unu sola dosiero. Malfermu ĝin per iu ajn ĝisdata retumilo, ankaŭ per poŝtelefono. Ĝi funkcias senrete, sen registriĝo kaj sen reklamoj; viaj datumoj restas en via retumilo.

Kiam estas konekto, la aplikaĵo kontrolas ĉu estas nova versio en ĉi tiu deponejo, elŝutas ĝin, kontrolas ĝian SHA-256 kaj mem ŝanĝas al ĝi. Viaj laborejoj kaj agordoj restas.

**Malfermu ĝin:** https://xsfieldcalc.github.io/xs-field-calc-share/eo/

En poŝtelefono, malfermu la ligilon kaj elektu «Instali aplikaĵon» aŭ «Aldoni al hejmekrano». En komputilo, la instala piktogramo en la adresbreto. Poste ĝi malfermiĝas senrete.

Tri variantoj de la sama aplikaĵo; ŝanĝiĝas nur kiom kaŝita estas la kodo:

| Dosiero | Varianto |
| --- | --- |
| `xs-field-calc.html` | Nivelo 1 (rekomendata): densigita kaj pakita; la kodo forlasas la paĝon post la ŝargado |
| `xs-field-calc-0.html` | Nivelo 0: densigita kaj pakita |
| `xs-field-calc-2.html` | Nivelo 2: kiel nivelo 1, kaj krome malklarigita |

Kontrolu la dosierojn:

    sha256sum -c SHA256SUMS        # GNU/Linux
    sha256 -c "$(grep ' xs-field-calc.html$' SHA256SUMS | cut -d' ' -f1)" xs-field-calc.html   # FreeBSD

[Ŝanĝprotokolo (katalune)](CHANGELOG.md)

© 2026 XS Field Calc. Ĉiuj rajtoj rezervitaj. [Uzpermesilo](LICENSE.eo.md) · Kontakto: contacte@xsfieldcalc.com
