import Head from "next/head";

const NewsArticleSchema = ({
  pageUrl,
  publisherName,
  publisherLogoUrl,
  authorName,
  headline,
  description,
  publishedDate,
  modifiedDate,
  featureImageUrl,
  featureImageWidth,
  featureImageHeight,
}) => {
  const schemaData = {
    "@context": "http://schema.org",
    "@type": "NewsArticle",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    publisher: {
      "@type": "NewsMediaOrganization",
      name: publisherName,
      logo: {
        "@type": "ImageObject",
        url: publisherLogoUrl,
      },
    },
    author: {
      "@type": "Person",
      name: authorName,
    },
    isAccessibleForFree: true,
    headline: headline,
    description: description,
    datePublished: publishedDate,
    dateModified: modifiedDate,
    image: {
      "@type": "ImageObject",
      url: featureImageUrl,
      width: featureImageWidth,
      height: featureImageHeight,
    },
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      ></script>
    </Head>
  );
};

export default NewsArticleSchema;
