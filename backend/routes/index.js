const express = require('express');
const otpRoute = require("./otpRoutes");
const authMiddleware = require('../middlewares/authMiddleware');
const { getUserPlaylists } = require("../controllers/playlistController");
const { googleAuthUrl } = require("../utils/googleAuth");

const router = express.Router();

router.use('/api/otp', otpRoute);
router.get('/api/playlists', getUserPlaylists);
router.get("/api/auth/google", (req, res) => {
    res.redirect(googleAuthUrl);
  });
// router.get('/api/validate', )

module.exports = router;
