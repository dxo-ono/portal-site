# astro.js サンプルプロジェクト

## 標準追加パッケージ

- Prettier
- Tailwind CSS
- PostCSS
- Sass
- Axios

## デザインファイル

[Figma]()

## サイトマップ

[スプレッドシート]()

## 環境構築

下記のコマンドを実行する

- Node インストール

```
$ ./run.sh install
```

- ブラウザレンダリング

```
$ ./run.sh dev
```

- ファイルフォーマット

```
$ ./run.sh format
```

- ファイルビルド

```
$ ./run.sh build
```

- SCSS→CSS ビルド

```
$ ./run.sh scss
```

- SCSS→CSS ホットリロード（監視ビルド）：動かないかも調整中

```
$ ./run.sh scss:watch
```

- コンテナの破棄

```
$ ./run.sh down
```

## ファイルフォーマット

フォーマットを行いたい時は以下のコマンドを実行

```
npm run format
```

## 開発用サイトマップの作成方法

1. [サイトマップテンプレ](https://docs.google.com/spreadsheets/d/1Jo1PINsawsta2O2O04N4ZWxm3W9a3pIZ235L5yF27m8/edit#gid=0)をコピーする。
2. 上部メニューから「拡張機能」を選択し、「Apps Script」を選択する
3. 右上の「デプロイ」から「新しいデプロイ」を選択
4. 「次のユーザーとして実行」が「自分」、「アクセスできるユーザー」が「全員」の状態でデプロイする
5. 「ウェブアプリ」の URL をコピーし、`sitemap.astro`の`const sid = 'xxx';`部分に URL 内の ID を貼り付ける。

例）`https://script.google.com/macros/s/AKfycbylPsqaPa2Ef-d21bI4zu6BaSgTySpLeM6LxW-VNrzf0iagTyFWv3kbcK1jwGi237_l/exec`の場合、`AKfycbylPsqaPa2Ef-d21bI4zu6BaSgTySpLeM6LxW-VNrzf0iagTyFWv3kbcK1jwGi237_l`までを貼り付け。
