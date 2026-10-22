<img src="xs-field-calc-icon-512.png" alt="" width="96" height="96">

# XS Field Calc

[Català](README.md) · [English](README.en.md) · [Español](README.es.md) · **Português** · [Galego](README.gl.md) · [Euskara](README.eu.md) · [Français](README.fr.md) · [Esperanto](README.eo.md)

Ferramentas de cálculo gratuitas para eletricistas, num só ficheiro. Abra-a em qualquer navegador atual, também no telemóvel. Funciona sem ligação, sem registo e sem anúncios; os dados ficam no seu navegador.

Quando há ligação, a app verifica se há uma versão nova neste repositório, descarrega-a, confirma o SHA-256 e muda para ela sozinha. As obras e as definições mantêm-se.

**Abra-a:** https://xsfieldcalc.github.io/xs-field-calc-share/pt/

Três variantes da mesma app; só muda o quão escondido está o código:

| Ficheiro | Variante |
| --- | --- |
| `xs-field-calc.html` | Nível 1 (recomendada): compactada e empacotada; o código sai da página depois de carregado |
| `xs-field-calc-0.html` | Nível 0: compactada e empacotada |
| `xs-field-calc-2.html` | Nível 2: como o nível 1 e, além disso, ofuscada |

Verifique os ficheiros:

    sha256sum -c SHA256SUMS        # GNU/Linux
    sha256 -c "$(grep ' xs-field-calc.html$' SHA256SUMS | cut -d' ' -f1)" xs-field-calc.html   # FreeBSD

[Registo de alterações (em catalão)](CHANGELOG.md)

© XS Field Calc
