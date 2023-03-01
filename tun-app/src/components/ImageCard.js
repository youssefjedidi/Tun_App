import React, { useState } from 'react';
import './styles.css';

const ImageCard = ({ image, title, description }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };
  const handleExpandCard = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className="image-card"
      onMouseEnter={handleExpand}
      onMouseLeave={handleExpand}
      onClick={handleExpandCard}
    >
      <img
        src={image}
        alt={title}
        className={`image ${expanded ? 'expanded' : ''}`}
      />
      {expanded && (
        <div className="details">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
