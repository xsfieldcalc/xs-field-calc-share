<img src="xs-field-calc-icon-512.png" alt="" width="96" height="96">

# XS Field Calc

[Català](README.md) · [English](README.en.md) · **Español** · [Português](README.pt.md) · [Galego](README.gl.md) · [Euskara](README.eu.md) · [Français](README.fr.md) · [Esperanto](README.eo.md)

Herramientas de cálculo gratuitas para electricistas, en un solo archivo. Ábrela con cualquier navegador actual, también desde el móvil. Funciona sin conexión, sin registro y sin anuncios; los datos se quedan en tu navegador.

Cuando hay conexión, la app mira si hay una versión nueva en este repositorio, la descarga, comprueba su SHA-256 y se cambia sola. Las obras y los ajustes se conservan.

**Ábrela:** https://xsfieldcalc.github.io/xs-field-calc-share/es/

Tres variantes de la misma app; solo cambia lo oculto que está el código:

| Archivo | Variante |
| --- | --- |
| `xs-field-calc.html` | Nivel 1 (recomendada): compactada y empaquetada; el código sale de la página una vez cargado |
| `xs-field-calc-0.html` | Nivel 0: compactada y empaquetada |
| `xs-field-calc-2.html` | Nivel 2: como el nivel 1 y, además, ofuscada |

Comprueba los archivos:

    sha256sum -c SHA256SUMS        # GNU/Linux
    sha256 -c "$(grep ' xs-field-calc.html$' SHA256SUMS | cut -d' ' -f1)" xs-field-calc.html   # FreeBSD

[Registro de cambios (en catalán)](CHANGELOG.md)

© XS Field Calc
