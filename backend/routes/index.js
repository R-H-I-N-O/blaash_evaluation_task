const express = require('express');
const otpRoute = require("./otpRoutes");
const authMiddleware = require('../middlewares/authMiddleware');
const playlistController = require('../controllers/playlistController');

const router = express.Router();

router.use('/api/otp', otpRoute);
router.get('/api/playlists', playlistController.getPlaylists);
// router.get('/api/validate', )

module.exports = router;
