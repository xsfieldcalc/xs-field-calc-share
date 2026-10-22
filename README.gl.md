<img src="xs-field-calc-icon-512.png" alt="" width="96" height="96">

# XS Field Calc

[Català](README.md) · [English](README.en.md) · [Español](README.es.md) · [Português](README.pt.md) · **Galego** · [Euskara](README.eu.md) · [Français](README.fr.md) · [Esperanto](README.eo.md)

Ferramentas de cálculo gratuítas para electricistas, nun só ficheiro. Ábrea con calquera navegador actual, tamén desde o móbil. Funciona sen conexión, sen rexistro e sen anuncios; os datos quedan no teu navegador.

Cando hai conexión, a app mira se hai unha versión nova neste repositorio, descárgaa, comproba o seu SHA-256 e cámbiase soa. As obras e os axustes consérvanse.

**Ábrea:** https://xsfieldcalc.github.io/xs-field-calc-share/gl/

No móbil, abre a ligazón e escolle «Instalar app» ou «Engadir á pantalla de inicio». No ordenador, a icona de instalar da barra de enderezos. Despois ábrese sen conexión.

Tres variantes da mesma app; só cambia canto de agochado está o código:

| Ficheiro | Variante |
| --- | --- |
| `xs-field-calc.html` | Nivel 1 (recomendada): compactada e empaquetada; o código sae da páxina unha vez cargado |
| `xs-field-calc-0.html` | Nivel 0: compactada e empaquetada |
| `xs-field-calc-2.html` | Nivel 2: coma o nivel 1 e, ademais, ofuscada |

Comproba os ficheiros:

    sha256sum -c SHA256SUMS        # GNU/Linux
    sha256 -c "$(grep ' xs-field-calc.html$' SHA256SUMS | cut -d' ' -f1)" xs-field-calc.html   # FreeBSD

[Rexistro de cambios (en catalán)](CHANGELOG.md)

© 2026 XS Field Calc. Todos os dereitos reservados. [Licenza de uso](LICENSE.gl.md)
