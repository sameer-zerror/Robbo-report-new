import React from "react";
import { BoxBorderBtn } from "../buttons/BoxBorderBtn";

const Social = ({ socialData, tagsData, authorName, authorBio }) => {
  return (
    <div className="story_social_container">
      <div className="story_social_wrapper">
        {/* Social Share Section */}
        <div className="story_social_section">
          <div className="story_social_label">
            <p>SHARE</p>
          </div>
          <div className="story_social_buttons">
            {socialData.map((data, index) => (
              <BoxBorderBtn key={index} name={data.name} url={data.url} />
            ))}
          </div>
        </div>

        {/* Tags Section */}
        <div className="story_social_section">
          <div className="story_social_label">
            <p>TAGS</p>
          </div>
          <div className="story_social_buttons">
            {tagsData.map((data, index) => (
              <BoxBorderBtn key={index} name={data.name} url={data.url} />
            ))}
          </div>
        </div>

        {/* Author Section */}
        <div className="story_social_section">
          <div className="story_social_label">
            <p>AUTHOR</p>
          </div>
          <div className="story_social_author">
            <p>{authorName}</p>
            <p className="story_social_bio">{authorBio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
