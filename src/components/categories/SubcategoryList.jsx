import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const SubcategoryList = () => {
  useEffect(() => {
    const pages = document.querySelectorAll(".tab_section");
    const bars = document.querySelectorAll(".tab .full_bg");

    gsap.to(".fixed_item", {
      scrollTrigger: {
        trigger: ".fixed_item",
        start: "top 0%",
        end: "bottom 100%",
        scrub: true,
        markers: false,
        onEnter: () => {
          // When you scroll to the top (enter the trigger zone)
          document.querySelector(".fixed_item")?.classList?.remove("page_bar");
        },

        onEnterBack: () => {
          // When scrolling back towards the top
          document.querySelector(".fixed_item")?.classList?.add("page_bar");
        },
      },
    });
    pages.forEach((page, index) => {
      let progressBar = bars[index]; // Get the corresponding strip bar
      gsap.to(progressBar, {
        scrollTrigger: {
          trigger: page,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
          markers: false,
          onUpdate: (self) => {
            progressBar.style.width = `${self.progress * 100}%`;
          },
        },
      });
    });
  }, []);
  const scrollHandler = (id = null) => {
    if (!id) return;
    document.getElementById(`section-element-${id}`).scrollIntoView();
  };
  return (
    <div className="fixed-bar">
      <div className="page_bar fixed_item">
        <div className="tabs_bar">
          <div
            className="tab"
            data-id={1}
            aria-hidden="true"
            onClick={() => scrollHandler(0)}
          >
            <i className="full_bg" />
            <div className="tab_content">
              {/* <span className="f_16">Edition #24</span> */}
              <span className="f_40 alt">Sub-category 1</span>
            </div>
          </div>
          <div
            className="tab"
            data-id={2}
            aria-hidden="true"
            onClick={() => scrollHandler(1)}
          >
            <i className="full_bg" />
            <div className="tab_content">
              {/* <span className="f_16">Edition #23</span> */}
              <span className="f_40 alt">Sub-category 2</span>
            </div>
          </div>
          <div className="tab" data-id={3} aria-hidden="true">
            <i className="full_bg" />
            <div className="tab_content">
              {/* <span className="f_16">Edition #22</span> */}
              <span className="f_40 alt">Sub-category 3</span>
            </div>
          </div>
          <div className="tab" data-id={4} aria-hidden="true">
            <i className="full_bg" />
            <div className="tab_content">
              {/* <span className="f_16">Edition #21</span> */}
              <span className="f_40 alt">Sub-category 4</span>
            </div>
          </div>
          <div className="tab" data-id={5} aria-hidden="true">
            <i className="full_bg" />
            <div className="tab_content">
              {/* <span className="f_16">Edition #20</span> */}
              <span className="f_40 alt">Sub-category 5</span>
            </div>
          </div>
          <div className="tab" data-id={6} aria-hidden="true">
            <i className="full_bg" />
            <div className="tab_content">
              {/* <span className="f_16">Edition #19</span> */}
              <span className="f_40 alt">Sub-category 6</span>
            </div>
          </div>
          <div className="tab" data-id={7} aria-hidden="true">
            <i className="full_bg" />
            <div className="tab_content">
              {/* <span className="f_16">Edition #19</span> */}
              <span className="f_40 alt">Sub-category 7</span>
            </div>
          </div>
          <div className="tab" data-id={8} aria-hidden="true">
            <i className="full_bg" />
            <div className="tab_content">
              {/* <span className="f_16">Edition #19</span> */}
              <span className="f_40 alt">Sub-category 8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubcategoryList;
