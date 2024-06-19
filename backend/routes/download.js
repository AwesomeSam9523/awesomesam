const express = require('express');
const router = express.Router();
const path = require('path');

const pool = require('../utils/db');

router.get('/', (req, res) => {
    res.send('Hello from AwesomeSam 👋');
});

router.get('/:identifier', async(req, res) => {
    try {
        const token = req.query.token;
        const method = req.query.method || 'id';
        if (!['id', 'name'].includes(method)) {
            res.send("Invalid method.").status(400);
        }
        const fileName = req.params.identifier;
        const identifier = method === 'id' ? 'id' : 'name';
        const query = `SELECT * FROM downloads WHERE "${identifier}" = $1`;
        const result = await pool.query(query, [fileName]);
        if (result.rows.length === 0) {
            return res.send("No such download found.").status(404);
        }
        const download = result.rows[0];
        if (download.isPrivate && !token) {
            return res.send("Forbidden.").status(401);
        }

        const updateQuery = `UPDATE downloads SET downloads = downloads + 1 WHERE "${identifier}" = $1`;
        await pool.query(updateQuery, [fileName]);
        const downloadPath = path.join(__dirname, '..', 'public', download.path);
        res.download(downloadPath);

    } catch (error) {
        console.error(error);
        if (res.headersSent) return;
        res.send("Something went wrong ❗").status(500);
    }
});

module.exports = router;
