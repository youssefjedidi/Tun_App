import React, { useState, useRef, useEffect } from 'react';
import styles from'./RoundImageCard.module.css';

const RoundImageCard = ({ image, title, description, Height}) => {
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
  const image_cardC = clicked ? styles.clicked : '';
  return ( 
    
    <div
      style={{height: clicked ?'' : Height}}
      className={`${styles.image_card} ${clicked ? styles.clicked : ''}`}
      onMouseEnter={handleHoverT}
      onMouseLeave={handleHoverF}
      onClick={handleClick} 
      ref={imageRef}
    >
      
      <img
        src={image}
        alt={title}
        className={`${styles.image} ${hovered ? styles.expanded : ''}`}
      />
      
      <div className={`${styles.overlay} ${clicked ? styles.clicked : ''}`}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  
  );
};  

export default RoundImageCard;
