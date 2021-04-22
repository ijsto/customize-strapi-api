module.exports = () => ({
  email: {
    provider: 'mailjet',
    providerOptions: {
      publicApiKey: YOUR_MAILJET_publicApiKey,
      secretApiKey: YOUR_MAILJET_secretApiKey
    },
    settings: {
      defaultFrom: 'test@ijs.to',
      defaultFromName: 'Tester'
    }
  }
});
