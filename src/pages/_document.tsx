import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&family=JetBrains+Mono&family=Poppins&family=Roboto:wght@400;700;900&display=swap"
            rel="stylesheet"
          ></link>

          <link rel="shortcut icon" href="/icon/favicon.ico" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
