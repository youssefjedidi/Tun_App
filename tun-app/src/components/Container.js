/*import React from 'react';

//import './Home.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';  
*/

function Container(props) {
return (

<div className="intro-container">
  <ul>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
  </ul>
  <img src={props.image}></img>
</div>

);
}

export default Container;
