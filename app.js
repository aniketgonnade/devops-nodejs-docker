const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('🚀 DevOps App Runnin once agai aniket!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
