module.exports = {
    google: {
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      redirectUri: "http://localhost:5000/oauth2callback",
    },
    youtubeApiKey: process.env.YOUTUBE_API_KEY,
  };
  