import express from 'express';
const router = express.Router();

router.post('/task', (req, res) => {
    res.send('post.task - create a task');
});
router.get('/task', (req, res) => {
    res.send('get.task - get all tasks');
});
router.get('/task/:id', (req, res) => {
    res.send('get.task/:id - get task by id');
});
router.put('/task', (req, res) => {
    res.send('put.task - update a task');
});
router.delete('/task', (req, res) => {
    res.send('delete.task - Delete a task');
});

export default router;