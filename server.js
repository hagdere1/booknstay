const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/build/'));
// app.use('/src/assets', express.static(__dirname + '/src/assets/'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(process.env.PORT || 5000);
console.log("server started")
