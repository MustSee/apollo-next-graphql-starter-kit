const nextApp = require('next');
const express = require('express');
const { config } = require('dotenv');
const bodyParser = require('body-parser');
const { parse } = require('url');
const { join } = require('path');


const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

const schema = require('./schema/schema');

config();

const dev = process.env.NODE_ENV === 'development';

const app = nextApp({ dev });

const handle = app.getRequestHandler();

const PORT = process.env.PORT;

app.prepare().then(() => {
  const server = express();

  server.use((req, res, next) => {
    const parsedUrl = parse(req.url, true);
    const rootStaticFiles = [
      '/sitemap.xml',
      '/favicon.ico',
      '/robots.txt',
    ];

    if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
      const path = join(__dirname, '../static', parsedUrl.pathname);
      return app.serveStatic(req, res, path);
    }
    return next();
  });

  server.use(bodyParser());

  server.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress(() => ({
      context: {},
      rootValue: {},
      schema,
    })),
  );
  if (dev) {
    server.use(
      '/graphiql',
      graphiqlExpress({
        endpointURL: '/graphql',
      }),
    );
  }


  server.get('*', (req, res) => handle(req, res));

  server.listen(PORT, () => {
    console.info(`\n App is served at ${PORT}\n`);     // eslint-disable-line no-console
  });
});
