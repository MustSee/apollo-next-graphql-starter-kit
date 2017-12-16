import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {

  render() {
    return (
      <html lang={'en'}>
        <Head>
          <title>High performance web frameswork</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/antd/3.0.1/antd.min.css" />
          <link rel="icon" href="favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
