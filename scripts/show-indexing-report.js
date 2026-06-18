#!/usr/bin/env node

/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  SEO Indexing Rapor Gösterimi                                   ║
 * ║  Kullanım: npm run indexing:report                              ║
 * ║  Veya:     node scripts/show-indexing-report.js                 ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

'use strict';

const path = require('path');
const fs   = require('fs');

const REPORT_FILE = path.join(__dirname, 'indexing-report.json');

function main() {
  if (!fs.existsSync(REPORT_FILE)) {
    console.log('\n❌ Rapor dosyası bulunamadı!');
    console.log(`   Beklenen: ${REPORT_FILE}`);
    console.log('\n   Henüz hiç indexing çalıştırılmamış.');
    console.log('   Çalıştırmak için: npm run indexing\n');
    return;
  }

  const report = JSON.parse(fs.readFileSync(REPORT_FILE, 'utf8'));

  console.log('\n╔═══════════════════════════════════════════════════════════╗');
  console.log('║           SEO GOOGLE INDEXING RAPORU                    ║');
  console.log('╠═══════════════════════════════════════════════════════════╣');
  console.log(`║  Tarih: ${report.date.padEnd(52)}║`);
  console.log('╠═══════════════════════════════════════════════════════════╣');
  console.log(`║  ✅ Başarılı: ${String(report.success?.length || 0).padEnd(48)}║`);
  console.log(`║  ❌ Başarısız: ${String(report.failed?.length || 0).padEnd(48)}║`);
  console.log('╚═══════════════════════════════════════════════════════════╝');

  if (report.success && report.success.length > 0) {
    console.log('\n✅ Başarıyla indexlenen sayfalar:');
    report.success.slice(0, 10).forEach((url, i) => {
      console.log(`   ${i + 1}. ${url}`);
    });
    if (report.success.length > 10) {
      console.log(`   ... ve ${report.success.length - 10} sayfa daha`);
    }
  }

  if (report.failed && report.failed.length > 0) {
    console.log('\n❌ Hata ile karşılaşılan sayfalar:');
    report.failed.slice(0, 5).forEach((item, i) => {
      console.log(`   ${i + 1}. ${item.url}`);
      console.log(`      → ${item.error}`);
    });
    if (report.failed.length > 5) {
      console.log(`   ... ve ${report.failed.length - 5} sayfa daha`);
    }
  }

  console.log('\n📄 Tam rapor: ' + REPORT_FILE + '\n');
}

main();
