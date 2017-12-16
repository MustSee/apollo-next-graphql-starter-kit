# Starter Kit

High performance starter kit based on next.js, react 16, apollo 2.0 and various examples from next.js repository

## Prerequisities

please move .env into your gitignore when developing locally and make sure that you have installed node js with version higher than 8 and npm version higher than 5

## .env configuration
place it to your root folder

```
HOST=localhost
DB_NAME=develop
DB_USER=develop
DB_PASSWORD=dbpassword
DB_HOST=localhost
DB_PORT=5432
PORT=3000
DEFAULT_LANG=en
ENDPOINT=graphql
PROTOCOL=http
```

run in development environment

`yarn run dev`

build production version

`yarn run build`

start a production version

`yarn run start`

running tests

`yarn run test`

running eslint

`yarn run eslint`
