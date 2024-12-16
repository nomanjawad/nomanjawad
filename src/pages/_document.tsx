import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        {/* Meta Tags */}
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Portfolio website of Noman E Jawad showcasing projects and skills."
        />
        <meta name="author" content="Noman Jawad" />
        <meta property="og:title" content="Noman E Jawad - Portfolio" />
        <meta
          property="og:description"
          content="Discover my work, skills, and contact information."
        />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="/path/to/og-image.jpg" /> */}

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default Document;
