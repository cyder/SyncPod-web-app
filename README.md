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

2. Edit .env file
```sh
cp .env.sample .env
vim .env
```

3. Start webpack-dev-server
```sh
yarn start
```

## Script
Build production
```sh
yarn build
```

Check lint
```sh
yarn lint
```

Generate typescript types for GraphQL queries
```sh
yarn apollo-codegen
```
