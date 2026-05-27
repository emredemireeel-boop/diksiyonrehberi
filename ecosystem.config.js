/**
 * PM2 Ecosystem Config — diksiyonrehberi.com
 *
 * Kurulum (sunucuda):
 *   npm install -g pm2
 *   pm2 start ecosystem.config.js
 *   pm2 save
 *   pm2 startup   ← Sunucu yeniden başlayınca otomatik çalışsın
 *
 * Günlük komutlar:
 *   pm2 status                    → Tüm process'lerin durumu
 *   pm2 logs diksiyonrehberi      → Canlı log izle
 *   pm2 restart diksiyonrehberi   → Yeni deployment sonrası yeniden başlat
 *   pm2 reload diksiyonrehberi    → Zero-downtime yeniden başlat (cluster mode)
 *   pm2 monit                     → CPU/RAM izleme paneli
 */

'use strict';

module.exports = {
  apps: [
    // ── Ana Uygulama ────────────────────────────────────────────────────────
    {
      name: 'diksiyonrehberi',
      script: 'index.js',

      // Fork mode (en güvenilir standart çalışma biçimi)
      instances: 1,
      exec_mode: 'fork',

      // Ortam değişkenleri
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },

      // Hata yönetimi
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 4000,

      // Loglama
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,

      // Bellek limiti — 512MB aşarsa otomatik yeniden başlat
      max_memory_restart: '512M',

      // Watch (geliştirme için, production'da false olmalı)
      watch: false,
    },

    // ── SEO Indexing Cron Job ────────────────────────────────────────────────
    // Her gün saat 09:00'da Google Indexing API'ye toplu bildirim gönderir.
    // Günlük 200 URL kotası yeterli (38 blog sayfası + ana sayfa = 39 URL)
    {
      name: 'seo-daily-indexing',
      script: 'scripts/indexing-service.js',
      args: '--batch',

      // Cron: Her gün saat 09:00
      cron_restart: '0 9 * * *',

      // Cron job tamamlanınca yeniden başlamasın
      autorestart: false,
      watch: false,

      env_production: {
        NODE_ENV: 'production',
      },

      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
  ],
};
