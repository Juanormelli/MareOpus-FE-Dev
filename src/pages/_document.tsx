import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&family=JetBrains+Mono&family=Poppins&family=Roboto:wght@400;700;900&display=swap"
            rel="stylesheet"
          ></link>

          <link
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Catamaran:wght@400;800&family=Montserrat:wght@400;600;700&display=swap"
            rel="stylesheet"
          ></link>

          <link
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bowlby+One+SC&family=Rampart+One&family=Staatliches&display=swap"
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
