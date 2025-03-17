import React, { useEffect } from "react";
import Button from "../buttons/Button";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const HighlightSection = () => {
  useEffect(() => {
    // Select all .vf-section elements
    const vfSec = document.querySelectorAll(".wrapper_base");

    vfSec.forEach((t, index) => {
      const mediaBackground = t.querySelector(".highlightimage");

      // Check if .media-background exists in this .vf-section
      if (mediaBackground) {
        gsap.to(mediaBackground, {
          scrollTrigger: {
            trigger: t,
            start: "top 0%",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
            markers: false, // Set to `true` for debugging purposes
          },
          yPercent: 10,
          ease: "none",
        });
      }
    });

    // Cleanup the ScrollTrigger instance on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div className="wrapper_base containerWrapper">
      <div className="w-dyn-list">
        <div role="list" className="w-dyn-items">
          <div role="listitem" className="w-dyn-item">
            <div className="flexbox_wrapper special_layout">
              <div className="l_side_tall">
                <div className="headline_blog_home">
                  <div className="article_headline">
                    9 Luxe Hotel Packages to Sweep Your Squeeze Off Their Feet
                  </div>
                  <div className="b_txt">
                    Featuring fine jewelry, tropical islands and private jets
                    these packages put chocolates and roses to shame. Are you
                    ready to think beyond chocolate and champagne for
                    Valentine’s Day this year?
                  </div>
                </div>
                <Button />
              </div>
              <div className="img_blog r_side">
                <Image
                  width={1000}
                  height={1000}
                  src="https://robbreport.com/wp-content/uploads/2022/01/Anantara-Kihavah-Valentines-1.jpg?w=1000"
                  loading="lazy"
                  alt=""
                  sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, (max-width: 991px) 48vw, 68vw"
                  className="highlightimage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightSection;
