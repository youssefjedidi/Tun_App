/*import React from 'react';

//import './Home.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';  
*/
import {Link} from 'react-router-dom';
import styles from'./Personality.module.css';

function Personality(props) {
return (

<div className={styles.personality}>
  <img src={props.image} alt={props.title}></img>
    <div>
      <ul><a>{props.title}</a><p>{props.num}</p></ul>
      <p>
      {props.description}  
      </p>
    </div>
</div>
    
);
}

export default Personality ;