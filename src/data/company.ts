export const company = {
  legalName: 'Mastertronics Representações Ltda.',
  cnpj: '93.972.982/0001-64',
  founded: 1991,
  chinaHubSince: 2001,
  email: 'contato@mastertronics.com.br',
  linkedin: 'https://www.linkedin.com/company/mastertronics-representacoes-ltda/',
  address: {
    street: 'Rua Santa Terezinha, 253 / 202',
    city: { pt: 'Porto Alegre · RS · Brasil', en: 'Porto Alegre · RS · Brazil' },
    zip: '90040-180',
    maps: 'https://www.google.com/maps/search/?api=1&query=Rua+Santa+Terezinha+253+Porto+Alegre+RS',
  },
  /**
   * Contact form — Web3Forms (https://web3forms.com, free).
   * 1. Create an access key for contato@mastertronics.com.br
   * 2. Paste it below. Until then the form falls back to opening an e-mail.
   */
  form: {
    endpoint: 'https://api.web3forms.com/submit',
    accessKey: 'YOUR_WEB3FORMS_ACCESS_KEY',
  },
};
