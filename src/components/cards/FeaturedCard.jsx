import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedCard = ({ imgUrl, title, id, alt, desc }) => {
  return (
    <>
      <div className="featured-image">
        <Link href="/motoring/sedans/article-1">
          <Image
            width={480}
            height={270}
            // width="480"
            // height="270"
            src={imgUrl}
            className="attachment-featured-image-480x270 size-featured-image-480x270 wp-post-image"
            alt={alt}
            data-lazy-loaded="1"
            sizes="(min-width: 87.5rem) 1000px, (min-width: 78.75rem) 681px, (min-width: 48rem) 450px, (max-width: 48rem) 250px"
          />
        </Link>
      </div>
      <div className="entry">
        <span className="entry__category">
          <Link href="">{title}</Link>
        </span>
        <h3 className="entry__heading">
          <Link href="">{desc}</Link>
        </h3>
        <div className="post-meta">
          <span
            className="post-meta__author"
            aria-label="Author"
            itemProp="author"
            itemScope=""
            itemType=""
          >
            By{" "}
            <Link href="">
              <span>Eric Jackson for Sportico</span>
            </Link>
          </span>
          <span className="post-meta__timestamp">8 hours ago</span>
        </div>
      </div>
    </>
  );
};

export default FeaturedCard;
