import React from 'react';
import "./app.css";
import Home from "./containers/Home";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Noto+Sans+TC:wght@400;500;700&display=swap"
        />
      </head>
      <body>
        <Home />
      </body>
    </html>
  );
}
