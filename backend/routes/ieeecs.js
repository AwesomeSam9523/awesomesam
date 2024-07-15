const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();
const dotenv = require('dotenv');

dotenv.config();

router.get('/:id', (req, res) => {
  if (req.headers.authorization !== `Bearer ${process.env.IEEE_CS_KEY}`)
    return res.sendStatus(401);

  const __dirname = path.resolve();
  const filePath = path.join(__dirname, `./public/images/${req.params.id}`);
  res.sendFile(filePath);
});

router.post('/upload', async (req, res, next) => {
  if (req.headers.authorization !== `Bearer ${process.env.IEEE_CS_KEY}`)
    return res.sendStatus(401);

  try {
    const {id, image, mimeType} = req.body;
    const fileExtension = mimeType.split('/')[1];
    await fs.promises.writeFile(`./public/images/${id}.${fileExtension}`, image, 'base64');

    res.status(201).json({
      success: true,
      message: 'Image uploaded!',
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({success: false, message: 'Internal Server Error'});
    next();
  }
});

module.exports = router;
