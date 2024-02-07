export const environment = {
  production: false,
  msalConfig: {
    auth: {
      clientId: '7379ec4b-a6c6-4b01-b916-3769b66ff498',
      authority: 'https://login.microsoftonline.com/6892244e-9cd0-45e7-bb43-379e45b2badd'
    }
  },
  apiConfig: {
    scopes: ['user.read'],
    uri: 'https://graph.microsoft.com/v1.0/me'
  }
};