import jwt from 'jsonwebtoken';

export function generateJWT(user) {
    const tokenData = { username: user.username, id: user._id };
    return jwt.sign({ user: tokenData }, process.env.TOKEN_SECRET);
}

export function requireLogin(req, res, next) {
    const token = decodeToken(req);
    if (!token) {
        return res.status(401).json({ message: 'You must be logged in.' });
    }
    next();
}

/**
 * Will verify that the token came from this application (using secret). Then,
 * will decode it and grab the signed data (username, etc.) and return decoded token
 * @param {HTTP Request} req 
 */
export function decodeToken(req) {
    const token = req.headers.authorization || req.headers['authorization'];

    if (!token) {
        return null;
    }

    try {
        return jwt.verify(token, process.env.TOKEN_SECRET);
    } catch (error) {
        return null;
    }
}