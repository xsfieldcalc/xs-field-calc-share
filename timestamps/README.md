# Segells de temps

Aquest directori conté proves de data independents dels commits d'aquest repo,
fetes amb `repo-timestamp`.

## Índex

- [Què hi ha a cada directori](#què-hi-ha-a-cada-directori)
- [Com es verifica](#com-es-verifica)
- [Verificació a mà, sense l'eina](#verificació-a-mà-sense-leina)

## Què hi ha a cada directori

`timestamps/<data>_<commit>/`:

- `manifest.txt`: el commit i el SHA-256 de cada fitxer d'aquell commit.
- `<servei>.tsr`: segell RFC 3161 signat pel servei (DigiCert, Sectigo…).
- `<servei>.tsq`: la petició que es va enviar (per comprovar-ne el nonce).
- `manifest.txt.ots`: prova d'OpenTimestamps, ancorada a Bitcoin.
- `stamps.txt`: resum de l'estat de cada segell.

## Com es verifica

    python3 repo_timestamp.py verify .

Torna a calcular el manifest a partir del commit i comprova cada segell.

## Verificació a mà, sense l'eina

1. Treu el commit: `git checkout <commit>`.
2. Comprova els fitxers: cada línia de `manifest.txt` és
   `sha256  mode  camí`; `sha256 <camí>` (BSD) o `sha256sum <camí>` (GNU)
   ha de donar el mateix valor.
3. Comprova el segell RFC 3161:

        openssl ts -verify -data manifest.txt -in digicert.tsr -CAfile /etc/ssl/cert.pem
        openssl ts -reply -in digicert.tsr -text | grep 'Time stamp'

4. Comprova OpenTimestamps: `ots verify manifest.txt.ots`, o puja
   `manifest.txt` i `manifest.txt.ots` a https://opentimestamps.org
