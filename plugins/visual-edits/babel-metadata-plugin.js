// babel-metadata-plugin.js
// Metadata injection disabled.
// Emergent sistemi kaldırıldığı için bu eklenti pasif hale getirildi.

const babelMetadataPlugin = () => {
  return {
    name: "element-metadata-plugin-disabled",
    visitor: {
      // Ziyaretçi (visitor) boş bırakıldı.
      // Bu sayede koduna hiçbir müdahale edilmeyecek,
      // siten saf ve hızlı çalışacak.
    },
  };
};

module.exports = babelMetadataPlugin;