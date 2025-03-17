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
                    The best Safaris to remember for a lifetime
                  </div>
                  <div className="b_txt">
                    A safari is much more than just a vacation — it's an
                    adventure that takes you deep into the wild, allowing for
                    unique encounters with wildlife. From the expansive savannas
                    of Africa to the dense rainforests of Asia, safaris offer
                    the chance to witness majestic animals in their natural
                    habitats. In this blog post, Travel Next Level presents the
                    best safari destinations around the world that will provide
                    you with unforgettable memories. Book your dream safari
                    vacation easily through CHECK24 and enjoy the ultimate
                    nature experience.
                  </div>
                </div>
                <Button />
              </div>
              <div className="img_blog r_side">
                <img
                  src="https://cdn.prod.website-files.com/67192adf47c16a59cea7d889/671e9ac7ff78b91a83dcc7f6_9.avif"
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
