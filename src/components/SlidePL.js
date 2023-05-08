/*import React from 'react';

//import './Home.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';  
*/
import { useEffect } from "react";
import {Link} from 'react-router-dom';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const squareVariants = {
  visible: { transform: "translateX(0%)", transition: { duration: 1 } },
  hidden: {  transform: "translateX(100%)" }
};

function SlidePL(props) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  if (!props.link) {
    return (
          
    <motion.div ref={ref}
          animate={controls}
          initial="hidden"
          variants={squareVariants}
          className="content">
      <img src={props.image} alt={props.subtitle}></img>
      <ul>
        <a>{props.title}</a>
        <h2>{props.subtitle}</h2>
        <p>
        {props.description}  
        </p>
      </ul>
    </motion.div>
    );
  }
  else if (props.link.startsWith('http')) {
    return (

    <motion.div ref={ref}
          animate={controls}
          initial="hidden"
          variants={squareVariants}
          className="content">
      <img src={props.image} alt={props.subtitle}></img>
      <ul>
        <a>{props.title}</a>
        <h2>{props.subtitle}</h2>
        <p>
        {props.description}  
        </p>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <button>Learn More</button>
          </a>
      </ul>
    </motion.div>
    );
  }
  else{
    return (

      <motion.div ref={ref}
            animate={controls}
            initial="hidden"
            variants={squareVariants}
            className="content">
        <img src={props.image} alt={props.subtitle}></img>
        <ul>
          <a>{props.title}</a>
          <h2>{props.subtitle}</h2>
          <p>
          {props.description}  
          </p>
          <Link to={props.link}><button>Learn More</button></Link> 
        </ul>
      </motion.div>
    );
  }
}

export default SlidePL ;