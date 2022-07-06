const jwt = require('jsonwebtoken');

const fetchUser = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).json({
            message: 'Unauthorized. Access denied',
            success: false,
        });
    }
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified.user;
        next();
    }
    catch (err) {
        return res.status(401).json({
            message: err.message,
            success: false,
        });
    }
}

module.exports = fetchUser;
