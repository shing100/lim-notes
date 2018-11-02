# Lim Notes

오프라인 마크다운 노트 앱 with Apollo

### 시작하기

npx create-react-app appname

yarn add apollo-cache-inmemory apollo-client apollo-link graphql react-apollo styled-components apollo-link-state react-apollo

### styled-components

> https://www.styled-components.com/docs/basics#getting-started

### markdown render

> yarn add react-markdown-renderer


## Prerequisites

Required | Version
---|---
node | `>=8.10.0`
Yarn | [Stable vesion](https://yarnpkg.com/lang/en/docs/install/#mac-stable)

### Install node, yarn

If your local system does not have the following environment, you have to do below.

```bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
$ nvm install 8.10.0
$ npm install -g yarn
```

### Install project
```bash
$ nvm use
$ yarn install
```

### Run
```bash
$ yarn start # Connect to http://localhost:3000/lim-notes in browser
```