const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors({ origin: '*', optionsSuccessStatus: 200 }));
app.use(fileUpload(
  {
    useTempFiles: true,
    tempFileDir: './tmp/',
  }
));
app.use(bodyParser.json({ limit: '50mb' }));

const downloadManager = require('./routes/download');
const badgeManager = require('./routes/badge');
const mediaPlayer = require('./routes/mediaPlayer');
const ieeeManager = require('./routes/ieeecs');

app.use('/download', downloadManager);
app.use('/badge', badgeManager);
app.use('/media', mediaPlayer);
app.use('/ieee', ieeeManager);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

app.get('/', (req, res) => {
  res.send('Hello from AwesomeSam 👋');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
