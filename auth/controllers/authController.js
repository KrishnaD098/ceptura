const passport = require('passport');

// Redirects the user to Google for authentication
exports.googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });

// Google OAuth callback
exports.googleAuthCallback = passport.authenticate('google', {
    successRedirect: '/api/auth/google/success',
    failureRedirect: '/api/auth/google/failure'
});

// Success & Failure Handlers
exports.googleAuthSuccess = (req, res) => {
    res.status(200).json({ message: 'Google Authentication successful', user: req.user });
};

exports.googleAuthFailure = (req, res) => {
    res.status(401).json({ message: 'Google Authentication failed' });
};
