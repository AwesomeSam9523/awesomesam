const express = require('express');
const router = express.Router();

router.get('/:shortId', (req, res) => {
    const shortId = req.params.shortId;
    res.sendFile(`badges/${shortId}`, { root: 'public' });
});

module.exports = router;