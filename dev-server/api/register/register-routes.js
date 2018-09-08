import express from 'express';
const router = express.Router();

router.post('/register', (req, res) => {
    res.send('post.register - register a user');
});

export default router;