import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Tunisia Cultural Showcase - Discover the True Essence of Tunisia",
  description = "Discover Tunisia's rich culture, history, and tourism. Explore ancient Carthage, vibrant souqs, Mediterranean beaches, and authentic Tunisian cuisine.",
  image = "/Tun_App/images/Tunisia/tnn.png",
  url = window.location.href
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional SEO */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;