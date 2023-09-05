import { DocumentProps, Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';
import i18nextConfig from '../../next-i18next.config';

function Document(props: DocumentProps) {
  const currentLocale = props.__NEXT_DATA__.locale || i18nextConfig.i18n.defaultLocale;
  return (
    <Html lang={currentLocale}>
      <Head>
        {/* <link href="https://fonts.googleapis.com/css2?family=Oxanium&display=swap" rel="stylesheet" /> */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KHFWRX7');
      `}
        </Script>
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KHFWRX7"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        ></noscript>
        <Main />
        <NextScript />
        <Script
          src={`https://www.google.com/recaptcha/enterprise.js?render=${String(
            process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          )}`}
        ></Script>
      </body>
    </Html>
  );
}

export default Document;
