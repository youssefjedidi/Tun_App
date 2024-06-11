/*import React from 'react';

//import './Home.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';  
*/
function SlidePR(props) {
return (

  <div className="card">
  <ul>
    <a>{props.title}</a>
    <h2>{props.subtitle}</h2>
    <p>
    {props.description}
    </p>
    
  </ul>
  <img src={props.image} alt={props.subtitle}></img>
</div>
);
}

export default SlidePR;
