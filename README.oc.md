<img src="xs-field-calc-icon-512.png" alt="" width="96" height="96">

# XS Field Calc

[Català](README.md) · [English](README.en.md) · [Español](README.es.md) · [Português](README.pt.md) · [Galego](README.gl.md) · [Euskara](README.eu.md) · [Français](README.fr.md) · [Esperanto](README.eo.md) · [Română](README.ro.md) · **Aranés**

Airines de calcul gratuïtes entàs electricistes, en un solet fichèr. Dauritz-la damb quinsevolh navegador actuau, tanben en mobil. Foncione sense connexion, sense registre e sense publicitat; es donades demoren en vòste navegador.

Quan i a connexion, era app cerque se i a ua version naua en aguest repositòri, la descargue, ne verifique eth SHA-256 e passe ad aquera tota soleta. Es òbres e era configuracion se conserven.

**Daurir-la:** https://xsfieldcalc.github.io/xs-field-calc-share/oc/

En mobil, dauritz eth ligam e causitz «Installar era aplicacion» o «Apondre ara pantalha d'inici». En ordenador, utilizatz era icòna d'installar dera barra d'adreces. Dempús se daurís sense connexion.

Tres variantes dera madeisha app; sonque cambie quant amagat ei eth còdi:

| Fichèr | Varianta |
| --- | --- |
| `xs-field-calc.html` | Nivèu 1 (recomanada): compactada e empaquetada; eth còdi ges dera pagina un còp cargat |
| `xs-field-calc-0.html` | Nivèu 0: compactada e empaquetada |
| `xs-field-calc-2.html` | Nivèu 2: coma eth nivèu 1 e, a mès, ofuscada |

Verificatz es fichèrs:

    sha256sum -c SHA256SUMS        # GNU/Linux
    sha256 -c "$(grep ' xs-field-calc.html$' SHA256SUMS | cut -d' ' -f1)" xs-field-calc.html   # FreeBSD

[Registre de cambis (en catalan)](CHANGELOG.md)

© 2026 XS Field Calc. Toti es drets reservats. [Licéncia d'usatge](LICENSE.oc.md) · Contacte: contacte@xsfieldcalc.com
