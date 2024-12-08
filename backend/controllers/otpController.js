const Otp = require('../models/otpModel');
const User = require('../models/userModel');
const { generateOtp, validateOtp } = require('../services/otpService');
const { sendEmail } = require('../services/emailService');

// Send OTP
exports.sendOtp = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const otp = generateOtp();
  const expiry = Date.now() + 5 * 60 * 1000;

  try {
    await Otp.findOneAndDelete({ email });

    const newOtp = new Otp({ email, otp, expiry });
    await newOtp.save();

    await sendEmail(email, otp);
    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ error: 'Failed to send OTP' });
  }
};

// Verify OTP
exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  const result = await validateOtp(email, otp);

  if (result.success) {
    const user = await User.findOne({ email });
    if (user) {
      user.otpVerified = true;
      await user.save();
    }
    await Otp.findOneAndDelete({ email });

    res.status(200).json({ message: 'OTP verified successfully' });
  } else {
    res.status(400).json({ error: result.error });
  }
};
