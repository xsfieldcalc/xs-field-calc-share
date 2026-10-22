<img src="xs-field-calc-icon-512.png" alt="" width="96" height="96">

# XS Field Calc

Eines de càlcul gratuïtes per a electricistes, en un sol fitxer: `xs-field-calc.html`.
Obre'l amb qualsevol navegador actual, també des del mòbil. Funciona sense connexió,
sense registre i sense anuncis; les dades es queden al teu navegador.
Quan hi ha connexió, l'app mira si hi ha una versió nova en aquest repositori,
la baixa, en comprova el SHA-256 i s'hi canvia sola. Les obres i els ajustos es conserven.

Free calculation tools for electricians in a single file: `xs-field-calc.html`.
Open it in any up-to-date browser, also on a phone. Works offline, no sign-up, no ads;
your data stays in your browser. When online, the app checks this repository for a new
version, downloads it, verifies its SHA-256 and switches to it. Your jobs and settings stay.

Comprova el fitxer / Verify the file:

    sha256sum -c SHA256SUMS        # GNU/Linux
    sha256 -c "$(cut -d' ' -f1 SHA256SUMS)" xs-field-calc.html   # FreeBSD

© XS Field Calc
