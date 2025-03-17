import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import "@/styles/homeHero.css";
import "@/styles/animatedParagraph.css";
import "@/styles/cardGridSection.css";
import "@/styles/highlightSection.css";
import "lenis/dist/lenis.css";
import "@/styles/swiperCardSection.css";
import "@/styles/categoryPage.css";
import "@/styles/stories.css";
import "@/styles/navbar.css";
import "@/styles/footer.css";
import LenisScroll from "@/components/LenisScroll";
import Lenis from "lenis";
// import Header from "@/components/common/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Header /> */}
      <Layout>
        <LenisScroll>
          <Component {...pageProps} />
        </LenisScroll>
      </Layout>
    </>
  );
}
