const express = require('express');
const router = express.Router();
const fs = require('fs');
const pool = require('../utils/db');

function generateShortId() {
    const length = 6;
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

router.get('/:id', (req, res) => {
    const shortId = req.params.id;
    res.sendFile(`media/${shortId}`, { root: 'public' });
});

router.post('/', (req, res) => {
    const token = req.headers.authorization;
    const name = req.query.name;

    if (token !== 'Bearer abc@sam') {
        res.status(401).send({
            success: false,
            error: 'Unauthorized'
        });
        return;
    }
    // file is sent in FormData
    // get the file
    const file = req.files.file;
    const filename = file.name;
    const fileExtension = filename.split('.').pop();
    console.log(filename, fileExtension);
    // save it to media
    // return the shortId
    let shortId;
    while (true) {
        shortId = generateShortId();
        if (!fs.existsSync(`public/media/${shortId}.${fileExtension}`)) {
            break;
        }
    }
    // stream data into a file
    const readStream = fs.createReadStream(file.tempFilePath);
    const writeStream = fs.createWriteStream(`public/media/${shortId}.${fileExtension}`);
    readStream.pipe(writeStream);
    readStream.on('end', async () => {
        res.send({
            success: true,
            url: `https://awesomesam.dev/player/${shortId}.${fileExtension}`
        });
        // delete the temp file
        fs.unlinkSync(file.tempFilePath);
        // save to db
        const query = 'INSERT INTO media ("id", "name", "extension", "size", "createdAt") VALUES ($1, $2, $3, $4, $5)';
        try {
            await pool.query(query, [shortId, name, fileExtension, file.size, new Date()]);
        } catch (error) {
            console.error(error);
        }
    });
    readStream.on('error', (err) => {
        console.error(err);
        res.status(500).send({
            success: false,
            error: 'Error saving file'
        });
    });
});

module.exports = router;