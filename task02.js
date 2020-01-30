const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;

const app = express();
const port = 8002;
const pass = 'quantum';



app.get('/encode/:txt', (req,res) => {
  res.send('Your word is: ' + Vigenere.Cipher(pass).crypt(req.params.txt));
});

app.get('/decode/:txt', (req,res) => {
  res.send('Your word is: ' + Vigenere.Decipher(pass).crypt(req.params.txt));
});

app.listen(port, ()=> {
  console.log('We are live on ' + port);
});