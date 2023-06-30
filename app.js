const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();
const port = 5000;

app.use(cors({ origin: '*', optionsSuccessStatus: 200 }));
const downloadManager = require('./routes/download');

app.use('/download', downloadManager);

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
