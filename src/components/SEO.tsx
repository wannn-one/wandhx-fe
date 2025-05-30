import { Helmet } from 'react-helmet-async';

const defaultMeta = {
  title: "Ikhwanul Abiyu | Portfolio",
  siteName: "Ikhwanul Abiyu",
  description: "Hi, I'm Ikhwanul Abiyu Dhiyya'ul Haq. A passionate Backend Developer / Computer Vision / IoT Enthusiast. Fresh graduate from Computer Engineering, Institut Teknologi Sepuluh Nopember.",
  url: 'https://wandhx.site',
  image: "https://wandhx.site/og-image.png",
  type: "website",
};

type SeoProps = {
  templateTitle?: string;
} & Partial<typeof defaultMeta>;

const SEO = (props: SeoProps) => {
  const meta = {
    ...defaultMeta,
    ...props,
  };

  // Update title if templateTitle is provided
  meta.title = props.templateTitle 
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={meta.url} />

      {/* OpenGraph meta tags */}
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:image:url" content={meta.image} />
      <meta property="og:image:secure_url" content={meta.image} />
      <meta property="og:image:width" content="1905" />
      <meta property="og:image:height" content="856" />
      <meta property="og:image:type" content="image/png" />

      {/* Twitter meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@wandhx" />
      <meta name="twitter:creator" content="@wandhx" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />

      {/* Additional meta tags */}
      <meta name="author" content={meta.siteName} />
      <meta name="keywords" content="Backend Developer, Computer Vision, IoT, Software Engineer, Web Development, Portfolio" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon/favicon.ico" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      
      {/* Apple Touch Icons */}
      <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
      
      {/* Android Icons */}
      <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      
      {/* Manifest and Browser Config */}
      <link rel="manifest" href="/favicon/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
};

export default SEO; 