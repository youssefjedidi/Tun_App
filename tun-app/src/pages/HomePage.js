import React from 'react';

import TopBar from '../components/TopBar';
import SlidePL from '../components/SlidePL';
import SlidePR from '../components/SlidePR';
import Container from '../components/Container';
import ImageCard from '../components/ImageCard';
import { Link } from 'react-router-dom';

import './Home.css';
import TrackVisibility from 'react-on-screen';  

function HomePage() {
  document.body.style.backgroundColor = "#FBF0D3"
return (
<div>
  <TopBar />
  <div className='sizes'>
    <a>website true sizes are obtimizied on landscape mode</a>
    <img src="\Tun_App\images\Tunisia\screen_rot.png"/>
  </div>
    <div className="image-container">
        <img src="\Tun_App\images\Tunisia\tun6.png" alt="image" style={{ width: '100%' }} />
        <div className="text-overlay">
          <p >Tunisia is a muslim country located in North Africa, on the Mediterranean coast. It is a democratic republic with a diverse economy and a population of around 11 million people. The official language is Arabic, but French is also widely spoken.
          Tunis is the capital city, and it is known for its rich cultural heritage and vibrant atmosphere. 
          Tunisian culture is a mix of Arab, African, and Mediterranean influences, and it is reflected in the country's art, music, literature, and food. Tunisian history is marked by a number of important events and landmarks, including the ancient city of Carthage, the medina (old city) of Sfax, and other important cultural sites.
          Tunisia is a fascinating and dynamic country with a lot to offer, and it is well worth a visit for anyone interested in experiencing its rich culture and history.
          </p>
        </div>
    </div>

    <Container
    title='"Discover the true essence of Tunisia"'
    description= "This website offers a comprehensive look at Tunisian culture, history, and landscape. Explore Tunisian art, music, literature, and food, and learn about important landmarks and natural wonders. With in-depth information and engaging content, this website is the perfect resource for anyone looking to discover the true essence of Tunisia."
    image='\Tun_App\images\Tunisia\hhh.jpg' />
    
    <SlidePL
        title="History" 
        subtitle='"Explore Tunisian history from ancient civilizations to modern democracy."' 
        description="Tunisia has a long and rich history  dating back to ancient civilizations like the Phoenicians and Romans. 
        The country has experienced periods of independence, colonization, and dictatorship, and is now a democratic republic. 
        Its 11 million population and diverse economy are centered around Tunis, the capital city. Tunisian history is marked by important events and landmarks, 
        like the ancient city of Carthage and the medina of Sfax, as well as revolutions and wars."
        image="\Tun_App\images\Tunisia\the-amphitheatre-of-el-jem_aerial-view_archeologpl.jpg" 
        link="history"/>
    <SlidePR 
      title="Culture" 
      subtitle='"Experience Tunisian culture through art, literature, sports  and food."' 
      description="Tunisia's unique cultural diversity offers a rich tapestry of indigenous Berber, Arab, and Mediterranean influences. 
      Its art, literature, sports, and food reflect this diversity, showcasing a range of traditional crafts and dishes such as couscous and tajine. 
      Tunisian culture is also shaped by Islam and sports achievements of figures like Mohamed Ben Rehaiem and Ons Jabeur. 
      Come and experience the vibrant and colorful culture of Tunisia, a true reflection of its diverse cultural influences."
      image="\Tun_App\images\Tunisia\3431090275_586a6346a3_b.jpg"
      link="culture"/>
    
    <ul style={{display:"none"}}>
        <div style={{display:"hidden", justifyContent: "center", width: "90vw" , marginLeft:"auto", marginRight:"auto" , marginTop:"1vh", marginBottom:"0vh"}}>
        <img className="Block_image" src="\Tun_App\images\Tunisia\djerba_tunisia.jpg" />
        <img className="Block_image" src="\Tun_App\images\Tunisia\douz.jpg" />
        <img className="Block_image" src="\Tun_App\images\Tunisia\El_Feidja_National_Park_Tunisia.png" />
        </div>
        <div style={{display:"hidden", justifyContent: "center", width: "90vw" , marginLeft:"auto", marginRight:"auto" , marginTop:"0vh", marginBottom:"1vh"}}>
        <li className='Block'><a>Djerba Island, Tunisia</a>List Item 1</li>
        <li className='Block'>List Item 2</li>
        <li className='Block'>List Item 3</li>
        </div>
    </ul>



    <div className="tech">
      <img  src="\Tun_App\images\Tunisia\tourism_tunisia.jpg" />
      <div className='mask'>
        <h1>Tourism in Tunisia: Discover the beauty of Tunisia!</h1>
        <p>Tunisia is home to a thriving tourism industry, with stunning beaches, rich history and culture, and delicious cuisine.
           Explore our “Tourism” section to learn more about the attractions and experiences that Tunisia has to offer, 
           and discover the beauty and charm of this Mediterranean gem.</p>
          <Link to="/tourism"><button>Learn More</button></Link>
      </div>

    </div>
    
    <Container
    title="We look forward to welcoming you to Tunisia in the future"
    description= "Thank you for visiting our website and learning more about Tunisia. From its vibrant culture and rich history to its stunning landscapes and diverse communities, this country is truly special. We hope that our website has provided you with a glimpse into Tunisian culture and history, and that you have gained a greater appreciation for all that this dynamic country has to offer. Whether you are planning a visit or simply looking to learn more, we hope that our website has been a helpful and enjoyable resource for you. Thank you again for visiting, and we hope that you will continue to discover the many wonders of Tunisia."
    image='\Tun_App\images\Tunisia\tnnn.png' />
    
</div>  
);
}

export default HomePage;

/*<Route exact path="/" component={HomePage} />
<Route path="/tourism" component={TourismPage} />
<Route path="/history" component={HistoryPage} />
<Route path="/culture" component={CulturePage} />
<Route path="/technology" component={TechnologyPage} />
<nav>
  <Link to="/">Home</Link>
  <Link to="/tourism">Tourism</Link>
  <Link to="/history">History</Link>
  <Link to="/culture">Culture</Link>
  <Link to="/technology">Technology and Research</Link>
</nav>*/