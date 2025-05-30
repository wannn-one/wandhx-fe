import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  name?: string;
  type?: string;
  image?: string;
}

const SEO = ({ 
  title = "Ikhwanul Abiyu | Portfolio",
  description = "Hi, I'm Ikhwanul Abiyu Dhiyya'ul Haq. A passionate Backend Developer / Computer Vision / IoT Enthusiast. Fresh graduate from Computer Engineering, Institut Teknologi Sepuluh Nopember.",
  name = "Ikhwanul Abiyu",
  type = "website",
  image = "/og-image.png"
}: SEOProps) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://wandhx.site';
  // Ensure absolute URL for og:image
  const ogImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={siteUrl} />

      {/* OpenGraph meta tags */}
      <meta property="og:site_name" content={name} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:secure_url" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />

      {/* Twitter meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@wandhx" />
      <meta name="twitter:creator" content="@wandhx" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* Additional meta tags */}
      <meta name="author" content={name} />
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