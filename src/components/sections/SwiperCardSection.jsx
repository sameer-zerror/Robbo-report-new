import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import LatestCard from "../cards/LatestCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "swiper/css/parallax";
import { Navigation, Pagination, Parallax } from "swiper/modules";
const swiperData = [
  {
    id: "1",
    imgUrl:
      "https://robbreport.com/wp-content/uploads/2025/03/Puma_Form2.jpg?resize=1024,577",
  },
  {
    id: "2",
    imgUrl:
      "https://robbreport.com/wp-content/uploads/2025/03/WarwickPl_LDN14.jpg?resize=1024,576",
  },
  {
    id: "3",
    imgUrl:
      "https://polarcdn-terrax.com/image/v1.0.0/bin/67c9ce7a635f0045c252fc4a?v=54584&w=413&h=275&autocrop=1",
  },
  {
    id: "1",
    imgUrl:
      "https://robbreport.com/wp-content/uploads/2025/03/Puma_Form2.jpg?resize=1024,577",
  },
  {
    id: "2",
    imgUrl:
      "https://robbreport.com/wp-content/uploads/2025/03/WarwickPl_LDN14.jpg?resize=1024,576",
  },
];
const SwiperCardSection = ({ title, data }) => {
  const swiperRef = useRef(null);

  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  // Handle scrolling left (previous slide)
  const handleScrollLeft = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      scaleSlides(0.9); // Apply scaling effect when scrolling
      swiperRef.current.swiper.slidePrev();
      setTimeout(() => {
        resetSlideScale(); // Reset scaling after the slide change
      }, 800); // Wait for the transition time (same as swiper speed)
    }
  };

  // Handle scrolling right (next slide)
  const handleScrollRight = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      scaleSlides(0.9); // Apply scaling effect when scrolling
      swiperRef.current.swiper.slideNext();
      setTimeout(() => {
        resetSlideScale(); // Reset scaling after the slide change
      }, 800); // Wait for the transition time (same as swiper speed)
    }
  };
  // Function to scale all slides
  const scaleSlides = (scaleValue) => {
    const slides = document.querySelectorAll(".editor-picks__secondary-pick");
    slides.forEach((slide) => {
      slide.style.transition = "transform 0.2s ease"; // Smooth scaling transition
      slide.style.transform = `scale(${scaleValue})`;
    });
  };

  // Function to reset scale of all slides
  const resetSlideScale = () => {
    const slides = document.querySelectorAll(".editor-picks__secondary-pick");
    slides.forEach((slide) => {
      slide.style.transition = "transform 0.2s ease"; // Smooth scaling transition
      slide.style.transform = "scale(1,1)";
    });
  };

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;

    // Ensure swiper instance exists
    if (swiperInstance) {
      const updateArrowVisibility = () => {
        setIsAtStart(swiperInstance.isBeginning);
        setIsAtEnd(swiperInstance.isEnd);
      };

      // Initial arrow visibility update
      updateArrowVisibility();

      // Listen to slide change events
      swiperInstance.on("slideChange", updateArrowVisibility);

      // Cleanup the event listener when the component unmounts
      return () => {
        swiperInstance.off("slideChange", updateArrowVisibility);
      };
    }
  }, []);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;

    // Attaching touchStart and touchEnd events to swiper instance
    swiper.on("touchStart", () => {
      scaleSlides(0.95, 0); // Scale down when dragging starts
    });

    swiper.on("touchEnd", () => {
      resetSlideScale(); // Reset scale when drag ends
    });

    return () => {
      // Cleanup event listeners on component unmount
      swiper.off("touchStart");
      swiper.off("touchEnd");
    };
  }, []);
  return (
    <div className="containerWrapper">
      <div className="swipperCardsectionlatest">
        <div className="latestCardPostHeading">
          <div className="latestCardPostHeading_left">
            <div className="latestCardPostHeading_left_title">
              <h2>{title}</h2>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                aria-label="Previous story"
                className="arrows_arrow"
                onClick={handleScrollLeft}
                disabled={isAtStart}
              >
                <SlArrowLeft />
              </button>
              <button
                aria-label="Previous story"
                className="arrows_arrow"
                onClick={handleScrollRight}
                disabled={isAtEnd}
              >
                <SlArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="editor-picks__secondary-inner-wrapper noskim">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Parallax]}
            speed={1000}
            grabCursor={true}
            parallax={true}
            // pagination={{
            //   clickable: true,
            // }}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
            // modules={[Pagination]}
            className="mySwiperlatest"
          >
            {swiperData.map((el, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="editor-picks__secondary-pick"
                >
                  <article>
                    <LatestCard
                      imgUrl={el.imgUrl}
                      alt={`Image ${index}`}
                      parallaxValue={-50}
                    />
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SwiperCardSection;
