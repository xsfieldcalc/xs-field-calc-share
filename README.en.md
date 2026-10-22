<img src="xs-field-calc-icon-512.png" alt="" width="96" height="96">

# XS Field Calc

[Català](README.md) · **English** · [Español](README.es.md) · [Português](README.pt.md) · [Galego](README.gl.md) · [Euskara](README.eu.md) · [Français](README.fr.md) · [Esperanto](README.eo.md)

Free calculation tools for electricians in a single file. Open it in any up-to-date browser, also on a phone. Works offline, no sign-up, no ads; your data stays in your browser.

When online, the app checks this repository for a new version, downloads it, verifies its SHA-256 and switches to it. Your jobs and settings stay.

**Open it:** https://xsfieldcalc.github.io/xs-field-calc-share/en/

On a phone, open the link and choose “Install app” or “Add to Home Screen”. On a computer, use the install icon in the address bar. After that it opens offline.

Three variants of the same app; only how hidden the code is changes:

| File | Variant |
| --- | --- |
| `xs-field-calc.html` | Level 1 (recommended): minified and packed; the code leaves the page once loaded |
| `xs-field-calc-0.html` | Level 0: minified and packed |
| `xs-field-calc-2.html` | Level 2: like level 1, and also obfuscated |

Verify the files:

    sha256sum -c SHA256SUMS        # GNU/Linux
    sha256 -c "$(grep ' xs-field-calc.html$' SHA256SUMS | cut -d' ' -f1)" xs-field-calc.html   # FreeBSD

[Changelog (in Catalan)](CHANGELOG.md)

© XS Field Calc
