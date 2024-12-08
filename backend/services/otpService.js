const Otp = require('../models/otpModel');

const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const validateOtp = async (email, otp) => {
  const otpRecord = await Otp.findOne({ email });
  if (!otpRecord) {
    return { success: false, error: 'OTP not found' };
  }
  if (otpRecord.expiry < Date.now()) {
    return { success: false, error: 'OTP expired' };
  }
  if (otpRecord.otp !== otp) {
    return { success: false, error: 'Invalid OTP' };
  }
  return { success: true };
};

module.exports = { generateOtp, validateOtp };
