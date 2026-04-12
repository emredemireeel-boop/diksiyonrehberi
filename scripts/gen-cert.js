/**
 * gen-cert.js — Yerel HTTPS geliştirme için self-signed sertifika oluşturur.
 * Kullanım: node scripts/gen-cert.js
 *
 * Gereksinim: npm install --save-dev selfsigned
 */
const selfsigned = require('selfsigned');
const fs         = require('fs');
const path       = require('path');

const certsDir = path.join(__dirname, '..', 'certs');
if (!fs.existsSync(certsDir)) fs.mkdirSync(certsDir, { recursive: true });

const attrs = [{ name: 'commonName', value: 'localhost' }];
const opts  = {
  keySize: 2048,
  days: 825,
  algorithm: 'sha256',
  extensions: [
    { name: 'subjectAltName', altNames: [
      { type: 2, value: 'localhost' },
      { type: 7, ip: '127.0.0.1' },
    ]},
  ],
};

console.log('🔐 Self-signed sertifika oluşturuluyor...');
const pems = selfsigned.generate(attrs, opts);

fs.writeFileSync(path.join(certsDir, 'cert.pem'), pems.cert);
fs.writeFileSync(path.join(certsDir, 'key.pem'),  pems.private);

console.log('✅ Sertifika oluşturuldu:');
console.log('   certs/cert.pem');
console.log('   certs/key.pem');
console.log('');
console.log('🚀 Sunucuyu başlatın: npm run dev');
console.log('🔒 HTTPS adresi: https://localhost:3443');
console.log('   (Tarayıcıda "Gelişmiş > Devam et" ile güvenlik uyarısını geçin)');
