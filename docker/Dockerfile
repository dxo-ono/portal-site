FROM node:lts-alpine
WORKDIR /usr/src/app
# アプリケーションのソースコードをコピー
COPY app/ .
# 依存関係のインストール
RUN npm install
# Astroプロジェクトのビルド（Astroの場合）
RUN npm run build
EXPOSE 3000
