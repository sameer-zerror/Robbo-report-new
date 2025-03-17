import React from "react";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Parallax,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import Image from "next/image";
const data = [
  {
    titleName:
      "Watch 'Operation Restoration': New Video Series on Ecosystem Restoration",
    desc: "Watch 11th Hour Racing's five-part video series Operation Restoration",
    imgUrl:
      "https://cdn.prod.website-files.com/66336211b81e8a10a1428f79/6710160a185bbe3f30a2170f_BN_ORCAVeroBeach-2191.jpg",
  },
  {
    titleName: "Shaped by Water",
    desc: "From the highest mountains to the darkest depths and every facet in between, the ocean intertwines with our daily lives and the world surrounding us.",
    imgUrl:
      "https://cdn.prod.website-files.com/66336211b81e8a10a1428f79/667ea9d71cf1de6b8c441b98_shapeby%20water%20main.webp",
  },
  {
    titleName: "The Race Below",
    desc: "The Race Below is an immersive experience that's travelled the globe encouraging support for better ocean health, that's now been translated into a digital format for you to explore. Brought to life with audio, video clips, interactive maps, 3D underwater life this project will make it impossible to resist to take action",
    imgUrl:
      "https://cdn.prod.website-files.com/66336211b81e8a10a1428f79/66f53da8e168c74898c53d78_Tile%20-%20The%20Race%20Below%20-%20Image%20only%20(1).jpg",
  },
];
const Hero = () => {
  return (
    <div className="specials-section">
      <div className="specials-slider-wrap">
        <div className="swiper specials_swiper w-dyn-list swiper-initialized swiper-horizontal swiper-ios swiper-backface-hidden">
          {/* <div className="swiper-wrapper specials_swiper_wrapper w-dyn-items">
        
        </div> */}
          <Swiper
            breakpoints={{
              1024: {
                // slidesPerView: ,
                spaceBetween: 30,
                allowTouchMove: true,
                slidesPerView: 1.2,
              },
              992: {
                // slidesPerView: ,
                spaceBetween: 35,
                allowTouchMove: true,
              },
              768: {
                // slidesPerView: ,
                spaceBetween: 30,
                allowTouchMove: true,
              },
              600: {
                // slidesPerView: ,
                spaceBetween: 30,
                allowTouchMove: true,
              },
            }}
            // slidesPerView={1.1}
            speed={1600}
            modules={[
              Autoplay,
              Navigation,
              Pagination,
              Keyboard,
              Parallax,
              Mousewheel,
            ]}
            loop={true}
            direction="horizontal"
            effect="slide"
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            parallax={true}
            // rtl={true}
            // loopFillGroupWithBlank={true}
            // mousewheel={{
            //   enabled: true,
            //   eventsTarget: ".swiper-slide",
            //   sensitivity: 1,
            // }}
            keyboard={{
              enabled: true,
              onlyInViewport: true,
            }}
            scrollbar={{
              el: ".swiper-scrollbar",
              hide: false,
              draggable: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            pagination={{
              el: ".swiper-paginationn",
              type: "progressbar",
            }}
            className="swiper-wrapper"
            role="list"
          >
            {data.map((el, i) => (
              <SwiperSlide
                key={i}
                className="swiper-slide specials_swiper_slide w-dyn-item"
                role="listitem"
              >
                <div
                  className="special-stories-slider-block"
                  // style={{ backgroundImage: `url("${el.imgUrl}")` }}
                >
                  <Image
                    width={1000}
                    height={1000}
                    src={el.imgUrl}
                    alt={el.titleName}
                  />
                  <div className="film-overlay-wrap">
                    <div className="heroSliderContentWrapper">
                      <div className="containerWrapper">
                        <div className="video-stories-slider-inner-block">
                          <div className="special-stories-date-block color-white">
                            <div>6.25.24</div>
                            <div>|</div>
                            <div>Film</div>
                          </div>
                          <div className="special-stories-title letter-animation text-color-white">
                            <h2 className="heading-h2 split-text">
                              {el.titleName}
                            </h2>
                          </div>
                          <div className="special-stories-summary text-color-white">
                            <p className="remove-margin-bottom">{el.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="slider-inner" data-swiper-parallax={100}>
                  <div className="grad_up"></div>

                  <img
                    data-scroll
                    data-scroll-speed="-0.4"
                    muted
                    // loop
                    // autoPlay
                    // playsInline
                    src={el.imgUrl}
                    alt=""
                    className="full_screen-image"
                  />
                </div> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="swiper-arrow-wrap">
          <div
            className="swiper-button-prev"
            role="button"
            aria-label="Previous slide"
          >
            <div className="play-films-html w-embed">
              <BsArrowLeft />
            </div>
          </div>
          <div
            className="swiper-button-next"
            role="button"
            aria-label="Next slide"
          >
            <div className="play-films-html w-embed">
              <BsArrowRight />
            </div>
          </div>
        </div>
        <div className="controls-wrapper">
          <div className="next-up-text">
            <div>Next up</div>
          </div>
          <div className="outerslidetext">
            <div className="slide-text active">
              Watch 'Operation Restoration': New Video Series on Ecosystem
              Restoration
            </div>
            <div className="slide-text">The Race Below</div>
            <div className="slide-text">Shaped by Water</div>
          </div>
          <div className="controls-row">
            <div className="bullet-pagination">
              <div className="bullet active">1</div>
              <div className="bullet">2</div>
              <div className="bullet">3</div>
            </div>
            <div className="swiper-paginationn customscrollbar">
              <div
                className="scrollfill"
                // style="transition: width 7700ms cubic-bezier(0.257, 0.235, 0.632, 0.621); width: 33.3333%;"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
