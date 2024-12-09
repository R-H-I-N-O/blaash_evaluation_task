const { google } = require("googleapis");
const config = require("../config/default");

const oauth2Client = new google.auth.OAuth2(
  config.google.clientId,
  config.google.clientSecret,
  config.google.redirectUri
);

module.exports = {
  oauth2Client,
  googleAuthUrl: oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/youtube.readonly"],
  }),
};
