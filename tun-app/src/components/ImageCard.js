import React, { useState } from 'react';
import './styles.css';

const ImageCard = ({ image, title, description }) => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      className={`image-card ${clicked ? 'clicked' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={handleClick}
    >
      <img
        src={image}
        alt={title}
        className={`image ${hovered ? 'expanded' : ''}`}
      />
      <div className={`overlay ${hovered ? 'hovered' : ''}`}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
