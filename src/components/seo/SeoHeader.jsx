import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Const } from "@/utils/Constants";
import WebPageSchema from "@/components/seo/WebPageSchema";
import NewsMediaOrganizationSchema from "@/components/seo/NewsMediaOrganizationSchema";
import SiteNavigationSchema from "@/components/seo/SiteNavigationSchema";

const SeoHeader = ({ meta }) => {
  const router = useRouter();
  const canonical = `${Const.ClientLink}/${router.asPath?.slice(1)}`;
  return (
    <Head>
      <title>{meta?.title ?? ""}</title>
      <meta name="description" content={meta?.description ?? ""} />
      <meta name="keywords" content={meta?.keywords ?? ""} />
      <meta name="author" content={meta?.author ?? ""} />
      <meta
        name="robots"
        content={
          `${meta?.robots}, max-image-preview:large` ??
          "index,follow, max-image-preview:large"
        }
      />
      <link rel="canonical" href={meta?.canonical ?? canonical} />
      {/* OG Tags */}
      <meta property="fb:app_id" content="446498535209610" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={meta?.og?.title ?? ""} />
      <meta property="og:description" content={meta?.og?.description ?? ""} />
      <meta property="og:url" content={meta?.canonical ?? canonical} />
      <meta property="og:site_name" content={"The Hollywood Reporter India"} />
      <meta property="og:image" content={meta?.og?.image ?? ""} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {/* Twitter Tag */}
      <meta
        name="twitter:card"
        content={meta?.twitter?.card ?? "summary_large_image"}
      />
      <meta
        name="twitter:title"
        content={meta?.twitter?.title ?? meta?.title}
      />
      <meta
        name="twitter:description"
        content={meta?.twitter?.description ?? meta?.description}
      />
      <meta name="twitter:site" content={"@THRIndia_"} />
      <meta name="twitter:image" content={meta?.twitter?.image ?? ""} />
      <meta name="twitter:creator" content={"@THRIndia_"} />
      <meta charset="UTF-8" />
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-thr-india-16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-thr-india-32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicon-thr-india-192.png"
      />
      <link rel="apple-touch-icon" href="/favicon-thr-india-192.png" />
      <link
        rel="alternate"
        hreflang="en-in"
        href={meta?.canonical ?? canonical}
      />
      <WebPageSchema
        name={meta?.title ?? ""}
        description={meta?.description ?? ""}
        url={meta?.canonical ?? canonical}
      />
      <NewsMediaOrganizationSchema
        name="The Hollywood Reporter India"
        clientLink={`${Const.ClientLink}/`}
        logoUrl={`${Const.ClientLink}/thr-logo.png`}
        address={{
          streetAddress:
            "RPSG Lifestyle Media, Thapar House, 3rd floor, Janpath Lane",
          addressLocality: "New Delhi",
          addressRegion: "India",
          postalCode: "110 001",
        }}
        contact={{
          telephone: "+91–11–23486700",
          contactType: "Customer Service",
          areaServed: "IN",
          availableLanguage: "English",
          hoursAvailable: {
            opens: "09:00",
            closes: "19:00",
          },
        }}
        sameAs={[
          "https://www.facebook.com/hollywoodreporterindia",
          "https://www.instagram.com/hollywoodreporterindia/",
          "https://twitter.com/thrindia_",
          "https://www.youtube.com/@HollywoodReporterIndia",
        ]}
      />
      <SiteNavigationSchema />
    </Head>
  );
};

export default SeoHeader;
