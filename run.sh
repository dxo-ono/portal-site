#!/bin/bash

# ディレクトリ変数
DIR_DOCKER="docker"
CONTAINER_NAME="astro-app"

#------------------
# コマンドのヘルプ表示
#------------------
function display_help {
    echo "Usage:" >&2
    echo "" >&2
    echo "  command [arguments]" >&2
    echo "" >&2
    echo "Commands:" >&2
    echo "" >&2
    echo "    up                  コンテナの開始" >&2
    echo "    down                コンテナの破棄" >&2
    echo "    destroy             コンテナを停止し、ボリュームを削除" >&2
    echo "    ps                  Docker Composeのサービス一覧表示" >&2
    echo "    exec                コンテナ内に移動" >&2
    echo "    install             Node インストール" >&2
    echo "    dev                 ブラウザレンダリング" >&2
    echo "    format              ファイルフォーマット" >&2
    echo "    build               ファイルビルド" >&2
    echo "    sass                 style.scss をビルド (SCSS→CSS)" >&2
    echo "    help                Show help" >&2
    echo "" >&2
    exit 0;
}

#------------------
# コマンド判定と実行
#------------------
if [ $# -eq 0 ]; then
    display_help
fi

case "$1" in
    help)
        display_help
        ;;
    up)
        cd ${DIR_DOCKER} && docker-compose up -d
        ;;
    exec)
        docker exec -it ${CONTAINER_NAME} sh
        ;;
    install)
        docker exec -it ${CONTAINER_NAME} npm i
        ;;
    dev)
        docker exec -it ${CONTAINER_NAME} npm run dev -- --host 0.0.0.0
        ;;
    format)
        docker exec -it ${CONTAINER_NAME} npm run format
        docker exec -it ${CONTAINER_NAME} npx prettier --write "."
        ;;
    build)
        docker exec -it ${CONTAINER_NAME} npm run build
        ;;
    down)
        cd ${DIR_DOCKER} && docker-compose down
        ;;
    ps)
        cd ${DIR_DOCKER} && ${CMD_DOCKER} ps
        ;;
    destroy)
        cd ${DIR_DOCKER} && ${CMD_DOCKER} down --volumes
        ;;
    scss)
        docker exec -it ${CONTAINER_NAME} sh -c "cd /usr/src/app && npx sass src/assets/styles/style.scss public/styles/style.css" \
        && echo -e "\033[1;32m\n==============================\n[ SUCCESS ] style.scss → style.css ビルド成功！\n==============================\033[0m"
        ;;
    scss:watch)
        docker exec -it ${CONTAINER_NAME} sh -c "cd /usr/src/app && npx sass --watch src/assets/styles/style.scss:public/styles/style.css"
        ;;
    *)
        echo "Unknown command: $1" >&2
        display_help
        ;;
esac
