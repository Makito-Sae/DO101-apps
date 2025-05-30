var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/Mars', function (req, res) {
  res.send('Hello Mars, Maria Jose Barreras Castro!\n');
});

app.get('/Pluton', function (req, res) {
  res.send('Hello Pluton, Maria Jose\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

