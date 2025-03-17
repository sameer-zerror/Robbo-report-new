import Image from "next/image";
import React from "react";
import SliderSection from "./SliderSection";
import Social from "./Social";
import RelatedCard from "../cards/RelatedCard";

const MainContent = ({ heroImage, paragraph, sideImage }) => {
  const dummyDataForCard = {
    image:
      "https://robbreport.com/wp-content/uploads/2025/03/Enstrom_PistonLD.jpg?resize=300,169",
    heading: "Aviation",
    description: "The Best 4 Light Helicopters to Take You Anywhere",
  };

  const sliderImages = [
    {
      url: "https://robbreport.com/wp-content/uploads/2025/02/Bell_JetRanger.jpg?w=1024",
      alt: "Countryside barn with hay",
    },
    {
      url: "https://robbreport.com/wp-content/uploads/2025/02/Robinson_Raven.jpg?w=1024",
      alt: "Film production scene",
    },
    {
      url: "https://robbreport.com/wp-content/uploads/2025/02/Guimbal_Cabri.jpg?w=1024",
      alt: "Film production scene",
    },
    {
      url: "https://robbreport.com/wp-content/uploads/2025/02/Enstrom_PistonFX.jpg?w=1024",
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
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe vel sunt neque mollitia sit voluptas veritatis iste et hic delectus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe vel sunt neque mollitia sit voluptas veritatis iste et hic delectus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe vel sunt neque mollitia sit voluptas veritatis iste et hic delectus.",
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
          <br />
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
          <br />
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
              Robb Report Issue 05/2024
            </p>
          </div>
          <div className="story_main_classname_interesting">
            <p className="story_main_classname_alsoInteresting">
              <span>LATEST</span>
            </p>
            <RelatedCard {...dummyDataForCard} />
            {/* <p className="story_main_classname_alsoInteresting">
              <span>LATEST</span>
            </p> */}
            <br />

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
          <br />
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
