/**
 * Dati del sito da completare. Tutto ciò che è tra parentesi quadre è un segnaposto:
 * sostituiscilo qui e cambia ovunque nel sito.
 */
export const SITE = {
  name: 'Corona di Murgia',

  /** Link esterni all'ospitalità di famiglia (si aprono in una nuova scheda). */
  agriturismoUrl: 'https://www.aipilieridibagnoli.it/it/il-ristorante.html',
  bnbUrl: 'https://www.aipilieridibagnoli.it/it',

  contacts: {
    address: '[Indirizzo dell\'azienda]',
    email: 'info@coronadimurgia.it',
    phone: '[Telefono]',
  },

  legal: {
    companyName: '[Ragione sociale]',
    vat: '[P. IVA]',
  },

  social: {
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
  },

  /**
   * Endpoint che riceve le iscrizioni alla lista d'attesa (POST JSON { email, lang }).
   * Vuoto = modalità dimostrativa: il modulo conferma senza inviare nulla.
   */
  waitlistEndpoint: '',

  /** Annata e formato dell'edizione numerata in corso. */
  edition: { harvest: '2026', campaign: '2026 / 2027', size: '500 ml' },
} as const;
