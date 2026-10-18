# Corona di Murgia — sito

Sito di Corona di Murgia, olio extravergine di oliva monocultivar Coratina. È costruito con **Angular 21** (componenti standalone, signals, nessuna dipendenza oltre ad Angular). Lo stile è "I pilieri", tratto a mano, ripreso dal design system.

## Avvio

Requisiti: Node.js 20.19+ o 22.12+ e npm.

```bash
npm install
npm start          # http://localhost:4200
npm run build      # versione di produzione in dist/corona-di-murgia/browser
```

Se `npm install` si ferma con l'errore *Cannot read properties of null (reading 'edgesOut')*, che con alcune versioni di npm compare su un conflitto di peer dependency che non tocca il sito, usa `npm install --legacy-peer-deps`. In alternativa crea un file `.npmrc` con la riga `legacy-peer-deps=true`.

## Cosa completare prima della pubblicazione

Tutto si trova in **`src/app/core/site.config.ts`**:

- `agriturismoUrl` e `bnbUrl`: i link ai siti dell'agriturismo e del B&B. Ora sono segnaposto `example.com`.
- `contacts`, `legal`, `social`: indirizzo, email, telefono, ragione sociale, P. IVA, profili social.
- `waitlistEndpoint`: l'indirizzo che riceve le iscrizioni alla lista d'attesa, con una richiesta `POST` JSON `{ email, lang }`. Va bene, per esempio, un form di Formspree o Brevo, oppure una funzione su Cloud Run o AWS Lambda. Finché è vuoto, il modulo conferma l'iscrizione senza inviare nulla.
- `edition`: annata, campagna e formato.

Restano da sostituire anche:

- i dati di laboratorio (acidità, polifenoli, lotto, scadenza), oggi indicati come "dall'analisi del lotto";
- i link Privacy e Cookie nel piè di pagina;
- le diciture dell'etichetta, da verificare con un consulente.

## Struttura

```
src/
  index.html                 meta, favicon, preload dei caratteri
  styles.scss                importa i tre fogli qui sotto
  styles/_tokens.scss        token del design system (colori Giorno/Notte, spazi, @font-face)
  styles/_corona.scss        classi del design system (cm-*, tratto a mano cm-m-*)
  styles/_site.scss          solo app: header fisso, menu mobile, modulo, utilità
  app/
    app.ts                   guscio: header + pagina + footer
    app.routes.ts            /, /storia, /olio, /ospitalita (caricate su richiesta)
    core/
      site.config.ts         ← link e dati da completare
      translations.ts        testi IT / EN
      i18n.service.ts        lingua attiva (salvata nel browser), t('chiave')
      t.pipe.ts              {{ 'chiave' | t }}
      title.strategy.ts      titolo della scheda tradotto per ogni pagina
    layout/header, footer
    shared/                  page-head, tre-pilieri, varco, profilo-sensoriale,
                             scheda-tecnica, edizione (lista d'attesa), ospitalita-cards
    pages/                   home, storia, olio, ospitalita
public/
  img/logo/                  marchio dei pilieri (-oliva su chiaro, -pietra su scuro)
  img/schizzi/               illustrazioni a mano: varco, piliere, bottiglia, etichetta, ramo, muretto
  img/agriturismo-pilieri.jpg
  fonts/                     Cormorant Garamond, Jost, Cinzel (OFL)
```

## Lingue

L'italiano è la lingua predefinita, l'inglese si sceglie dall'header. Per cambiare un testo si modifica la stessa chiave in `it` e in `en` dentro `translations.ts`.

## Pubblicazione

Il risultato di `npm run build` è un sito statico. Su qualsiasi hosting (Firebase Hosting, Netlify, Cloud Run con nginx, S3 + CloudFront) va configurato il fallback su `index.html`, così gli indirizzi `/storia`, `/olio` e `/ospitalita` funzionano anche se aperti direttamente. Per migliorare l'indicizzazione si può aggiungere il prerendering con `ng add @angular/ssr`.

## Caratteri e immagini

I caratteri sono sotto licenza SIL Open Font License. La foto e le illustrazioni sono dell'azienda. I disegni sono bozze generate al computer, che un illustratore può ripassare a mano.
