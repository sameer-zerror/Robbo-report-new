import Image from "next/image";
import Link from "next/link";
import React from "react";

const LatestCard = ({ imgUrl, parallaxValue }) => {
  return (
    <>
      <div className="featured-image">
        <Link
          href=""
          // data-swiper-parallax={parallaxValue}
        >
          <Image
            width={1000}
            height={1000}
            // style={{ width: "100%" }}
            src={imgUrl}
            class="attachment-featured-image-320x180 size-featured-image-320x180"
            alt=""
            decoding="async"
            // sizes="(min-width: 87.5rem) 1000px, (min-width: 78.75rem) 681px, (min-width: 48rem) 450px, (max-width: 48rem) 250px"
          ></Image>
        </Link>
      </div>
      <div className="entry">
        <span className="entry__category">
          <Link href="">Men's Fashion</Link>
        </span>
        <h3 className="entry__heading">
          <Link href="">
            Formula 1 and Puma Just Dropped a New Motorsport-Inspired Clothing
            Line
          </Link>
        </h3>
      </div>
    </>
  );
};

export default LatestCard;
