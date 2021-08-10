import Head from 'next/head';

import config from '../config';


const PageHead = ({ pageTitle, pageDescription, pathUrl }) => {
    const outputTitle = `PixelPirate: ${pageTitle}`;
    const canonicalLink = `https://pixelpirate.club${pathUrl}`;
    const GA_ID = config.GoogleAnalyticsId || '';

    return (
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={pageDescription ? pageDescription : ''} />
        <title>{outputTitle}</title>
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@emoji_domains" />
        <meta name="twitter:creator" content="@runnr_az" />
        <meta property="og:url" content={canonicalLink} />
        <meta property="og:title" content={outputTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="https://pixelpirate.club/images/pp2x1.png" />
        <meta property="twitter:image" content="https://pixelpirate.club/images/pp2x1.png" />
  
        <meta name="keywords" content="MillionDollarHomepage, pixels, crypto, cryptocurrency, domain, domains" />
        <meta name="author" content="Domain Research Group" />
  
        <link rel="canonical" href={canonicalLink} />
  
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon-precomposed" href="/pirate-flag-152-220801.png" />
        <meta name="msapplication-TileImage" content="/pirate-flag-144-220801.png" />
        <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/pirate-flag-152-220801.png" />
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/pirate-flag-144-220801.png" />
        <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/pirate-flag-120-220801.png" />
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/pirate-flag-114-220801.png" />
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/pirate-flag-72-220801.png" />
        <link rel="apple-touch-icon-precomposed" href="/pirate-flag-57-220801.png" />
        <link rel="icon" href="/pirate-flag-32-220801.png" sizes="32x32" />
  
  
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />

        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
      </Head>
    );
  };

export default PageHead;