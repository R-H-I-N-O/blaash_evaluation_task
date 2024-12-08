const axios = require('axios');
const { apiKey } = require('../config/youtubeApi');

exports.getUserPlaylists = async (accessToken) => {
  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/playlists', {
      params: {
        part: 'snippet',
        mine: true,
        maxResults: 12,
        key: apiKey,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data.items;
  } catch (error) {
    throw new Error('Error fetching YouTube playlists: ' + error.message);
  }
};
