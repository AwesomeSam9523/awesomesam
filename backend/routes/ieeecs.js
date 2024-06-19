const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

router.get('/:id', (req, res) => {
  const __dirname = path.resolve();
  const filePath = path.join(__dirname, `./public/images/${req.params.id}`);
  res.sendFile(filePath);
});

router.post('/upload', async (req, res, next) => {
  if (req.headers.authorization !== process.env.IEEE_CS_KEY)
    return res.sendStatus(401);

  const {id, image, mimeType} = req.body;
  const fileExtension = mimeType.split('/')[1];
  await fs.promises.writeFile(`./public/images/${id}.${fileExtension}`, image, 'base64');

  res.status(201).json({
    success: true,
    message: 'Image uploaded!',
  });
});

module.exports = router;
