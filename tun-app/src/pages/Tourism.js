import React from 'react';

import TopBar from '../components/TopBar';
import SlidePL from '../components/SlidePL';
import SlidePR from '../components/SlidePR';
import PersonTable from '../components/PersonTable';
import RoundImageCard from '../components/RoundImageCard';


import './Home.css';

import TrackVisibility from 'react-on-screen';  

function Tourism() {
    document.body.style.backgroundColor = "#FBF0D3"
return (
<div> 
    <TopBar />
    <div className="image-container">
        <img src="\Tun_App\images\Tunisia\kairouan_Tunisia.jpg" style={{ width: '100%'}} />
    </div>
    
    <h1 className='title'> Major tourist attractions: </h1>
    <div style={{display:"flex", justifyContent: "center", width: "100vw", height:"27vw", marginLeft:"auto", marginRight:"auto" , marginTop:"5vh", marginBottom:"5vh", gap: "2vw"}}>
        <RoundImageCard 
        image="\Tun_App\images\Tunisia\douz.jpg"
        title={"douz"}
        Height={""}
        description={"a mosque and UNESCO World Heritage Site in Kairouan"}/>
        <RoundImageCard 
        image="\Tun_App\images\Tunisia\Ras_Rmall_Island_Djerba_Houmt_Souk_Tunisia.jpg"
        title={"Djerba"}
        Height={""}
        description={"a Roman amphitheater in El Djem"}/>
        <RoundImageCard 
        image="\Tun_App\images\Tunisia\sidi_bousaid.jpg"
        title={"Carthage"}
        Height={""}
        description={"an ancient Phoenician city and a UNESCO World Heritage Site"}/>
        <RoundImageCard 
        image="\Tun_App\images\Tunisia\bardo-museum.jpg"
        title={"The Bardo Museum"}
        Height={""}
        description={"a museum of Roman mosaics and other artifacts in Tunis"}/>
        <RoundImageCard  
        image="\Tun_App\images\Tunisia\Chott-El-Jerid-Star-Wars-Film-Sets-in-Tunisia.jpg"
        title={"The Bulla Regia"}
        Height={""}
        description={"a Roman archaeological site in Jendouba"}/>
        <RoundImageCard 
        image="\Tun_App\images\Tunisia\parc-el-feija20.jpg"
        title={"El Feidja National Park"}
        Height={""}
        description={"Protected national park with diverse flora and fauna. known for its breathtaking landscapes."}/>
    </div>

   

    <h1 className='title'> Cultural experiences and activities : </h1>  
    
    <SlidePL
        title="Traditional Tunisian Souqs:" 
        subtitle='"Where tardition meets commerce"' 
        description="From Spices to handicrafts, Exploring Tunisian souqs offers a unique and immersive cultural experience. 
        These bustling marketplaces sell a variety of goods, from spices and textiles to ceramics and traditional handicrafts. 
        Visiting a souq is an essential cultural experience, providing an opportunity to immerse yourself in the local culture, sample the cuisine, and pick up authentic souvenirs. 
        Some famous souqs in Tunisia include souq el-Attarine in the Tunis Medina and the souq in medina sfax."
        image="\Tun_App\images\Tunisia\tunisia_souq.jpg" />

    <SlidePR 
      title="Ez-zitouna University (737 CE)" 
      subtitle='"The oldest university in THE WORLD"' 
      description="Ez-zitouna University, also known as the University of Ez-Zitouna, is the oldest university in THE WORLD in continuous operation.
      It was founded in the 8th century CE and has played an important role in Tunisian education and intellectual life. The university is known for its Islamic studies programs and has educated many prominent scholars and religious leaders over the years.
      Despite the religion's dominance, in Madrasas students could learn about science, philosophy, mathematics, art, and many other subjects."
      image="\Tun_App\images\Tunisia\Hzitouna.jpg"/>

    <SlidePL
        title="Ottoman empire (1534)" 
        subtitle='"Tunisia under Ottoman rule."' 
        description="Carthage was an ancient city located in modern-day Tunis. It was founded by Phoenician colonists in the 9th century BC and became a major trading and cultural center in the Mediterranean world. Carthage was conquered by the Romans in the 2nd century BC and became an important Roman city. Today, the ruins of Carthage are a major tourist attraction and a testament to the city's rich history."
        image="\Tun_App\images\Tunisia\Hottoman.jpg" />

</div>  

);
}

export default Tourism;

