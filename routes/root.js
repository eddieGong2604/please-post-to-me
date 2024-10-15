import express from 'express';

const router = express.Router();

router.post('', (req, res) => {
    console.log(req.body.team_roles);
    res.json({ success: true });
});

export default router;
