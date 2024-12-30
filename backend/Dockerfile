# ベースイメージ
FROM node:23-alpine3.20

# 作業ディレクトリを設定
WORKDIR /usr/src/app

# package.json と package-lock.json をコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# ソースコードをコピー
COPY . .

# Prisma のクライアントを生成
RUN npx prisma generate

# アプリのポートを公開
EXPOSE 3000

CMD ["sh", "-c", "npx nodemon src/index.ts"]