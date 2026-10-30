<img src="xs-field-calc-icon-512.png" alt="" width="96" height="96">

# XS Field Calc

[Català](README.md) · [English](README.en.md) · [Español](README.es.md) · [Português](README.pt.md) · [Galego](README.gl.md) · **Euskara** · [Français](README.fr.md) · [Esperanto](README.eo.md) · [Română](README.ro.md) · [Aranés](README.oc.md)

Elektrizistentzako doako kalkulu-tresnak, fitxategi bakar batean. Ireki edozein nabigatzaile eguneratutan, baita mugikorretik ere. Konexiorik gabe dabil, erregistrorik eta iragarkirik gabe; datuak zure nabigatzailean geratzen dira.

Konexioa dagoenean, aplikazioak biltegi honetan bertsio berririk dagoen begiratzen du, deskargatu egiten du, haren SHA-256 egiaztatzen du eta bere kabuz aldatzen da. Obrak eta ezarpenak gorde egiten dira.

**Ireki:** https://xsfieldcalc.github.io/xs-field-calc-share/eu/

Mugikorrean, ireki esteka eta aukeratu «Instalatu aplikazioa» edo «Gehitu hasierako pantailan». Ordenagailuan, helbide-barrako instalatzeko ikonoa. Gero konexiorik gabe irekitzen da.

Aplikazio beraren hiru aldaera; kodea zenbateraino dagoen ezkutatuta baino ez da aldatzen:

| Fitxategia | Aldaera |
| --- | --- |
| `xs-field-calc.html` | 1. maila (gomendatua): trinkotua eta paketatua; kodea orritik ateratzen da kargatu ondoren |
| `xs-field-calc-0.html` | 0. maila: trinkotua eta paketatua |
| `xs-field-calc-2.html` | 2. maila: 1. maila bezala, eta gainera nahasia (obfuskatua) |

Egiaztatu fitxategiak:

    sha256sum -c SHA256SUMS        # GNU/Linux
    sha256 -c "$(grep ' xs-field-calc.html$' SHA256SUMS | cut -d' ' -f1)" xs-field-calc.html   # FreeBSD

[Aldaketen erregistroa (katalanez)](CHANGELOG.md)

© 2026 XS Field Calc. Eskubide guztiak erreserbatuta. [Erabiltzeko lizentzia](LICENSE.eu.md) · Harremanetarako: contacte@xsfieldcalc.com
