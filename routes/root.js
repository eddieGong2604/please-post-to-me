import express from 'express';

const router = express.Router();

router.post('', (req, res) => {
    console.log(req);
    console.log(req.body);
    res.json({ success: true });
});

export default router;
