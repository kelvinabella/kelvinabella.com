import Head from "next/head";
import config from "~/helpers/config";

// https://github.com/joshbuchea/HEAD
const MainHead = ({ siteTitle = config.title }: { siteTitle?: string }) => (
  <Head>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
    />

    <title>{siteTitle}</title>

    {/* <base href={config.url} /> */}
    {/* <meta httpEquiv="Content-Security-Policy" content="default-src 'self'" /> */}
    <link rel="manifest" href="/manifest.json" />
    <meta name="theme-color" content="#00214d" />
    <meta name="description" content={config.description} />
    <meta name="keywords" content={config.keywords} />
    <meta name="robots" content="index,follow" />
    <meta name="googlebot" content="index,follow" />
    <meta name="google" content="notranslate" />
    <meta name="google-site-verification" content={config.googleVerification} />
    <meta name="generator" content="Node" />
    <meta name="referrer" content="no-referrer" />

    <link rel="icon" sizes="192x192" href={config.icons.favicon196} />
    <link rel="apple-touch-icon" href={config.icons.appleTouch152} />
    <link rel="mask-icon" href={config.icons.appleTouch152} color="blue" />

    {/* FB */}
    <meta property="fb:app_id" content="" />
    <meta property="og:url" content={config.url} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={config.title} />
    <meta property="og:image" content={config.image} />
    <meta property="og:image:alt" content={config.title} />
    <meta property="og:description" content={config.description} />
    <meta property="og:site_name" content={config.title} />
    <meta property="og:locale" content="en_US" />
    <meta property="article:author" content={config.name} />

    {/* Twitter */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content={config.twitterHandle} />
    <meta name="twitter:creator" content={config.twitterHandle} />
    <meta name="twitter:url" content={config.url} />
    <meta name="twitter:title" content={config.title} />
    <meta name="twitter:description" content={config.description} />
    <meta name="twitter:image" content={config.image} />
    <meta name="twitter:image:alt" content={config.title} />

    {/* Schema.org */}
    <link rel="author" href={config.url} />
    <link rel="publisher" href={config.url} />
    <meta itemProp="name" content={config.title} />
    <meta itemProp="description" content={config.description} />
    <meta itemProp="image" content={config.image} />

    <meta
      name="issues"
      content="Hey fellow geek. Found some issues. File it on https://github.com/kelvinabella/kelvs.me/issues."
    />
    {/* TODO: Add adidtional missing tags and image. */}
  </Head>
);

MainHead.defaultProps = {
  siteTitle: config.title,
};

export default MainHead;
