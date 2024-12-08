const { getUserPlaylists } = require('../services/youtubeServices.js');

exports.getPlaylists = async (req, res) => {
  try {
    const playlists = await getUserPlaylists(req.query.accessToken);
    res.status(200).json(playlists);
  } catch (error) {
    console.error('Error fetching playlists:', error);
    res.status(500).json({ error: 'Failed to fetch playlists' });
  }
};
