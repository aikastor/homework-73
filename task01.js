const express = require('express');

const app = express();
const port = 8001;

app.get('/:txt', (req, res) => {
  res.send('Your request was: '  + req.params.txt)
});

app.listen(port, ()=> {
  console.log('We are live on ' + port);
});