const { fetchPlaylists } = require("../services/youtubeServices");

async function getUserPlaylists(req, res) {
  try {
    const accessToken = req.headers.authorization.split(" ")[1];
    if (!accessToken) {
      return res.status(401).json({ error: "Access token required" });
    }

    const playlists = await fetchPlaylists(accessToken);
    res.json({ items: playlists });
  } catch (error) {
    console.error("Error fetching playlists:", error);
    res.status(500).json({ error: "Failed to fetch playlists" });
  }
}

module.exports = {
  getUserPlaylists,
};
