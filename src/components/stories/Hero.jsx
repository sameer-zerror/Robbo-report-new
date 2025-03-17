import Image from "next/image";
import React from "react";

const Hero = ({
  title,
  description,
  author,
  category,
  readTime,
  heroImage,
}) => {
  return (
    <div>
      <div className="story_hero_hero_container">
        <div className="story_hero_text_container">
          <h1 className="story_hero_title">{title}</h1>
          <p className="story_hero_description">{description}</p>
        </div>
        <div className="story_hero_info_container">
          <p className="story_hero_info">{author}</p>
          <p className="story_hero_info">{category}</p>
          <p className="story_hero_info">{readTime}</p>
        </div>
      </div>
      <div className="story_hero_image_container">
        <Image
          src={heroImage}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Hero;
