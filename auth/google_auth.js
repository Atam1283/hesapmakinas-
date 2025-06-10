const { google } = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
  'your-client-id',
  'your-client-secret',
  'http://localhost:3000/auth/callback'
);

function generateAuthUrl() {
  const scopes = ['https://www.googleapis.com/auth/userinfo.email'];
  return oauth2Client.generateAuthUrl({ scope: scopes });
}

function getUserInfo(token) {
  oauth2Client.setCredentials({ access_token: token });
  return google.oauth2('v2').userinfo.get({ auth: oauth2Client });
}

module.exports = { generateAuthUrl, getUserInfo };
