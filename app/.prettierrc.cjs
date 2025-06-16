module.exports = {
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: ['*.css', '*.scss'],
      options: {
        // 必要に応じてCSS/SCSS固有のオプションをここに追加
      },
    },
    {
      files: '*.js',
      options: {
        // 必要に応じてjs固有のオプションをここに追加
      },
    },
    // 他のファイルタイプの設定もここに追加することができます
  ],
  // グローバルオプション（すべてのファイルタイプに適用されます）
  semi: false, // オプション：セミコロンを使用しない
  singleQuote: true, // オプション：シングルクォートを使用する
  // 他のグローバルオプションをここに追加
}
