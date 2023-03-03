import React, { useState, useRef, useEffect } from 'react';
import './styles.css';

const ImageCard = ({ image, title, description, Height}) => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (imageRef.current && !imageRef.current.contains(event.target)) {
        setClicked(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [imageRef]);   

  const handleHoverF = () => {
    setHovered(false);
  };
  const handleHoverT = () => {
    setHovered(true);
  };

  const handleClick = () => {
    setClicked(!clicked);
  };
  return ( 
    
    <div
      style={{height: clicked ?'' : Height}}
      className={`image-card ${clicked ? 'clicked' : ''}`}
      onMouseEnter={handleHoverT}
      onMouseLeave={handleHoverF}
      onClick={handleClick}
      ref={imageRef}
    >
      
      <img
        src={image}
        alt={title}
        className={`image ${hovered ? 'expanded' : ''}`}
      />
      
      <div className={`overlay ${clicked ? 'clicked' : ''}`}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  
  );
};  

export default ImageCard;
