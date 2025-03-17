import Image from "next/image";
import React from "react";
import FeaturedCard from "../cards/FeaturedCard";

const CardGridSection = ({ title, data, sectionId = "" }) => {
  return (
    <>
      {data && data.length > 0 && (
        <div className="containerWrapper" id={sectionId}>
          <div className="sectioner sectioner--featured-category sectioner--the-latest-posts">
            <div className="section-header">
              <h2 className="section-header__heading">
                <span>{title || ""}</span>
              </h2>
              <p className="section-header__date">Tuesday March 11, 2025</p>
            </div>
            <div className="featured-category__secondary-wrapper the-latest__secondary-wrapper">
              {data?.map((cardData, index) => {
                return (
                  <article
                    key={index}
                    className="featured-category__story the-latest__story"
                  >
                    <FeaturedCard
                      id={cardData.id}
                      imgUrl={cardData.imgUrl}
                      title={cardData.title}
                      desc={cardData.desc}
                      alt={cardData.alt}
                    />
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardGridSection;
