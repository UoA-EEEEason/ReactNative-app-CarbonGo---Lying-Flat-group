module.exports = {
    project: {
        ios:{},
        android:{}
    },
    assets:['./src/assets/fonts/'],
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
}