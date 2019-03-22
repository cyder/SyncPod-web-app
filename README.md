# SyncPod-web-app | [![Netlify Status](https://api.netlify.com/api/v1/badges/51fcabe2-1558-4d8e-85ad-b56dfec5a176/deploy-status)](https://app.netlify.com/sites/romantic-tesla-8e52d2/deploys)
SyncPod for web

## Required Tools
* [yarn](https://yarnpkg.com/lang/ja/)
* [editorconfig plugin](http://editorconfig.org/#download)

## Setup
1. Clone repository and install dependencies
```sh
git clone git@github.com:git@github.com:cyder/SyncPod-web-app.git
cd SyncPod-web-app
yarn install
```

2. Setup GraphQL server
```sh
git clone https://github.com/cyder/SyncPod-BFF.git
cd SyncPod-BFF
yarn install
yarn start
```

3. Start webpack-dev-server
```sh
yarn start
```

## Script
本番ビルド
```sh
yarn build
```

lintチェック
```sh
yarn lint
```

graphqlからtypescriptの型を生成する
```sh
yarn apollo-codegen
```
