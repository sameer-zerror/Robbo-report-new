// import React from 'react'

// const RelatedCard = () => {
//   return (
//     <div>RelatedCard</div>
//   )
// }

// export default RelatedCard

import React from "react";

const RelatedCard = ({ image, heading, description }) => {
  return (
    <div className="story_interesting_classname_container">
      <div className="story_interesting_classname_card">
        <div className="story_interesting_classname_imageWrapper">
          <img
            className="story_interesting_classname_image"
            src={image}
            alt="Interesting Story"
          />
        </div>
        <div className="story_interesting_classname_text">
          <p className="story_interesting_classname_heading">{heading}</p>
          <p className="story_interesting_classname_description">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RelatedCard;
