/* eslint-disable react/require-default-props */
import React from "react";
import Head from "next/head";

// import ogImage from "@images/og.png";

import siteConfig from "../../helpers/config";

const HeadLayout = ({
  siteTitle = siteConfig.siteTitle,
}: {
  siteTitle?: string;
}) => (
  <Head>
    <link rel="shortcut icon" href="/images/favicons/favicon.ico" />
    <link rel="canonical" href="https://kelvs.me" />

    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />

    <title itemProp="name" lang="en">
      {siteTitle}
    </title>

    <meta name="description" content={siteConfig.siteDescription} />
    <meta name="keywords" content={siteConfig.siteKeywords} />
    <meta property="og:title" content={siteConfig.siteTitle} />
    <meta property="og:description" content={siteConfig.siteDescription} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={siteConfig.siteUrl} />
    <meta property="og:site_name" content={siteConfig.siteTitle} />
    {/* <meta property="og:image" content={`${siteConfig.siteUrl}${ogImage}`} /> */}
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:locale" content={siteConfig.siteLanguage} />
    <meta itemProp="name" content={siteConfig.siteTitle} />
    <meta itemProp="description" content={siteConfig.siteDescription} />
    {/* <meta itemProp="image" content={`${siteConfig.siteUrl}${ogImage}`} /> */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={siteConfig.siteUrl} />
    <meta name="twitter:site" content={siteConfig.twitterHandle} />
    <meta name="twitter:creator" content={siteConfig.twitterHandle} />
    <meta name="twitter:title" content={siteConfig.siteTitle} />
    <meta name="twitter:description" content={siteConfig.siteDescription} />
    {/* <meta name="twitter:image" content={`${siteConfig.siteUrl}${ogImage}`} /> */}
    <meta name="twitter:image:alt" content={siteConfig.siteTitle} />
    <meta name="msapplication-TileColor" content={siteConfig.colors.navy} />
    <meta
      name="msapplication-TileImage"
      content="/images/favicons/ms-icon-144x144.png"
    />
    <meta name="theme-color" content={siteConfig.colors.navy} />
    {/* move this to a config then map it using array */}
    <link
      rel="apple-touch-icon"
      sizes="57x57"
      href="/images/favicons/apple-touch-icon-57x57.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="60x60"
      href="/images/favicons/apple-touch-icon-60x60.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="72x72"
      href="/images/favicons/apple-touch-icon-72x72.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="76x76"
      href="/images/favicons/apple-touch-icon-76x76.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="/images/favicons/apple-touch-icon-114x114.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href="/images/favicons/apple-touch-icon-120x120.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href="/images/favicons/apple-touch-icon-144x144.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href="/images/favicons/apple-touch-icon-152x152.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/images/favicons/favicon-16x16.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/images/favicons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="96x96"
      href="/images/favicons/favicon-96x96.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="196x196"
      href="/images/favicons/favicon-196x196.png"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Lato&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap"
      rel="stylesheet"
    />
  </Head>
);

export default HeadLayout;
