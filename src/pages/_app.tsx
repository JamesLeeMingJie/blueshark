import '../styles/globals.css';
import '../styles/custom.css';
import type { AppProps } from 'next/app';
import Layout from 'components/Layout';
import { appWithTranslation } from 'next-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';
import Head from 'next/head';
import { useRouter } from 'next/router';
// import Script from 'next/script';
// import * as gtag from '../lib/gtag';
// import { useEffect } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      retry: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // useEffect(() => {
  //   const handleRouteChange = (url: any) => {
  //     gtag.pageview(url);
  //   };
  //   router.events.on('routeChangeComplete', handleRouteChange);
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange);
  //   };
  // }, [router.events]);
  return (
    <>
      {/* <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=GTM-KHFWRX7`} /> */}
      {/* <Script
        id="GA4"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-19XFLP743W', {
              page_path: window.location.pathname,
            });
          `,
        }}
      /> */}
      {router.isFallback ? (
        <div>Loading...</div>
      ) : (
        <QueryClientProvider client={queryClient}>
          <Head>
            <title>Blueshark Asean</title>
            <link rel="shortcut icon" href="/images/fav-logo.ico" />
            <link rel="icon" type="image/png" sizes="32x32" href="/images/fav-logo-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/images/fav-logo-16x16.png" />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      )}
    </>
  );
}

export default appWithTranslation(MyApp);
