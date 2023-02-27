/*import React from 'react';

//import './Home.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';  
*/
import {Link} from 'react-router-dom';

function PersonTable(props) {
return (
  <table className="Person" >
        <tr>
            <td>
                <img src={props.image1}></img>
                <h3>{props.title1}</h3>
                <a>{props.subtitle1}</a>
                <p>{props.description1}</p>
            </td>
            
            <td style={{borderRight: '3px solid orange', borderLeft: '3px solid orange'}}>
            <img src={props.image2}></img>
                <h3>{props.title2}</h3>
                <a>{props.subtitle2}</a>
                <p>{props.description2}</p>
            </td>
            
            <td>
            <img src={props.image3}></img>
                <h3>{props.title3}</h3>
                <a>{props.subtitle3}</a>
                <p>{props.description3}</p>    
            </td>
        </tr>

    </table>
);
}

export default PersonTable;
