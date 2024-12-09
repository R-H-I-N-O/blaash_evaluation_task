const { google } = require("googleapis");
const { oauth2Client } = require("../utils/googleAuth");

const youtube = google.youtube("v3");

async function fetchPlaylists(accessToken) {
  oauth2Client.setCredentials({ access_token: accessToken });

  const response = await youtube.playlists.list({
    part: "snippet,contentDetails",
    mine: true,
    maxResults: 10,
    auth: oauth2Client,
  });

  return response.data.items.map((playlist) => ({
    id: playlist.id,
    title: playlist.snippet.title,
    description: playlist.snippet.description,
    thumbnail: playlist.snippet.thumbnails.medium.url,
    itemCount: playlist.contentDetails.itemCount,
  }));
}

module.exports = {
  fetchPlaylists,
};
