const express = require('express');
const path    = require('path');
const fs      = require('fs');
const app     = express();
const HTTP_PORT  = 3000;
const HTTPS_PORT = 3443;

// Statik dosyaları public klasöründen sun
app.use(express.static(path.join(__dirname, 'public')));

// Tüm istekleri index.html'e yönlendir (SPA desteği)
app.get('/{*path}', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ── HTTPS desteği (certs/ klasöründeki sertifikalar varsa) ──────
const certPath = path.join(__dirname, 'certs', 'cert.pem');
const keyPath  = path.join(__dirname, 'certs', 'key.pem');

if (fs.existsSync(certPath) && fs.existsSync(keyPath)) {
  const https = require('https');
  const opts  = {
    key:  fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath),
  };
  https.createServer(opts, app).listen(HTTPS_PORT, () => {
    console.log(`🔒 Diksiyon Rehberi (HTTPS) >> https://localhost:${HTTPS_PORT}`);
    console.log(`   Mikrofon / ses kaydı bu adreste çalışır ✅`);
  });
}

// HTTP sunucusu (localhost'ta getUserMedia yine çalışır)
app.listen(HTTP_PORT, () => {
  console.log(`✅ Diksiyon Rehberi >> http://localhost:${HTTP_PORT}`);
  if (!fs.existsSync(certPath)) {
    console.log(`   💡 Mikrofon sorunları için "npm run gen-cert" ile sertifika oluşturun`);
  }
});