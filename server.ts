import express from 'express';
const app = express();
const port = 3009;

app.get('/', (req, res) => {
  console.log('!!!');
  res.json('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
