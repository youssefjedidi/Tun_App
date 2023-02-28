/*import React from 'react';

//import './Home.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';  
*/
import {Link} from 'react-router-dom';

function SlidePR(props) {
return (

  <div className="content">
  <ul>
    <a>{props.title}</a>
    <h2>{props.subtitle}</h2>
    <p>
    {props.description}
    </p>
    
    <Link to={props.link}><button>Learn More</button></Link>
    
  </ul>
  <img src={props.image} alt={props.subtitle}></img>
</div>
);
}

export default SlidePR;
