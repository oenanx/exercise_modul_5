// JavaScript source code

const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Ini adalah halaman home');
});

app.all('/product', function (req, res) {
    res.send('Ini adalah halaman produk');
});

app.listen(8000, function () {
    console.log('Aplikasi ini berjalan pada port 8000!');
});