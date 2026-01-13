// webpack-health-plugin.js
// Health check disabled.
// Emergent sistemi kaldırıldığı için bu eklenti pasif hale getirildi.

class WebpackHealthPlugin {
  constructor() {
    // İstatistik tutmaya gerek yok
  }

  apply(compiler) {
    // Hiçbir Webpack kancasına (hook) bağlanmıyoruz.
    // Böylece derleme süresi hızlanıyor.
  }

  getStatus() {
    // Eğer bir yerlerden bu fonksiyon çağrılırsa hata vermesin diye
    // sahte bir "Her şey yolunda" raporu dönüyoruz.
    return {
      state: 'idle',
      isHealthy: true,
      errors: [],
      warnings: [],
    };
  }

  getSimpleStatus() {
    return {
      state: 'idle',
      isHealthy: true,
    };
  }
}

module.exports = WebpackHealthPlugin;