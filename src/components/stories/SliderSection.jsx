"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { useState, useRef } from "react";

const SliderSection = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  // Create refs for navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="story_swiper_classname_container">
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={30}
        slidesPerView={2}
        speed={1000}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="story_swiper_classname_swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="story_swiper_classname_slide">
              <img
                src={image.url}
                alt={image.alt}
                className="story_swiper_classname_image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="story_swiper_classname_controls">
        <div className="story_swiper_classname_buttons">
          <button
            ref={prevRef}
            className="story_swiper_classname_prev story_swiper_classname_arrow"
            aria-label="Previous slide"
          >
            <BsArrowLeft className="story_swiper_classname_icon" />
          </button>
          <button
            ref={nextRef}
            className="story_swiper_classname_next story_swiper_classname_arrow"
            aria-label="Next slide"
          >
            <BsArrowRight className="story_swiper_classname_icon" />
          </button>
        </div>
        <div className="story_swiper_classname_counter">
          ({String(currentSlide).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")})
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
