import Image from "next/image";
import React from "react";
import SliderSection from "./SliderSection";
import Social from "./Social";
import RelatedCard from "../cards/RelatedCard";

const MainContent = ({ heroImage, paragraph, sideImage }) => {
  const dummyDataForCard = {
    image:
      "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=2070&auto=format&fit=crop",
    heading: "Amazing Story",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, repudiandae.",
  };

  const sliderImages = [
    {
      url: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=2070&auto=format&fit=crop",
      alt: "Countryside barn with hay",
    },
    {
      url: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=2070&auto=format&fit=crop",
      alt: "Film production scene",
    },
    {
      url: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=2070&auto=format&fit=crop",
      alt: "Film production scene",
    },
    {
      url: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=2070&auto=format&fit=crop",
      alt: "Film production scene",
    },
  ];

  const socialData = {
    socialData: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
      {
        name: "WhatsApp",
        url: "https://www.whatsapp.com/",
      },
      {
        name: "X (Twitter)",
        url: "https://www.twitter.com/",
      },
    ],
    tagsData: [
      {
        name: "Story",
        url: "https://example.com/story",
      },
      {
        name: "Horror",
        url: "https://example.com/horror",
      },
      {
        name: "Fiction",
        url: "https://example.com/fiction",
      },
      {
        name: "Thriller",
        url: "https://example.com/thriller",
      },
    ],
    authorName: "Sunny Kurmi",
    authorBio:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe vel sunt neque mollitia sit voluptas veritatis iste et hic delectus.",
  };

  return (
    <div className="story_main_classname_container containerWrapper">
      <div className="story_main_classname_main">
        <div className="story_main_classname_left">
          <div className="story_main_classname_text">
            {paragraph.split("\n\n").map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>

          <div className="story_main_classname_imageWrapper">
            <Image
              src={heroImage}
              alt="Hero Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="story_main_classname_text">
            {paragraph.split("\n\n").map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </div>
        <div className="story_main_classname_divider"></div>

        <div className="story_main_classname_right">
          <div className="story_main_classname_cardImage">
            <img
              src={sideImage}
              alt="Side Image"
              className="story_main_classname_img"
            />
            <p className="story_main_classname_cardText">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="story_main_classname_interesting">
            <p className="story_main_classname_alsoInteresting">
              Also Interesting
            </p>
            <RelatedCard {...dummyDataForCard} />
            <div className="story_main_classname_advertisement">
              <p>Advertisement</p>
            </div>
          </div>
        </div>
      </div>

      <div className="story_main_classname_slider">
        <SliderSection images={sliderImages} />
      </div>

      <div className="story_main_classname_footer">
        <div className="story_main_classname_left">
          <div className="story_main_classname_text">
            {paragraph.split("\n\n").map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </div>
        <div className="story_main_classname_divider"></div>
        <div className="story_main_classname_right">
          <div className="story_main_classname_advertisement">
            <p>Advertisement</p>
          </div>
        </div>
      </div>

      <div className="story_main_classname_social">
        <Social {...socialData} />
      </div>
    </div>
  );
};

export default MainContent;
