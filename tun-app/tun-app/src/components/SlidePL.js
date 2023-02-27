/*import React from 'react';

//import './Home.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';  
*/
import {Link} from 'react-router-dom';

function SlidePL(props) {
return (

<div className="content">
  <img src={props.image} alt={props.subtitle}></img>
  <ul>
    <a>{props.title}</a>
    <h2>{props.subtitle}</h2>
    <p>
    {props.description}  
    </p>
    <Link to={props.link}><button>Learn More</button></Link> 
  </ul>
</div>
    
);
}

export default SlidePL ;