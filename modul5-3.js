// JavaScript source code

const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Ini adalah halaman home');
});

app.all('/detailproduct', function (req, res) {
    res.send('Ini adalah halaman detail produk toko anda');
});

app.listen(8000, function () {
    console.log('Aplikasi ini berjalan pada port 8000!');
});