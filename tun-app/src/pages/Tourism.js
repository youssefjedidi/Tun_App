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
        description={"known as the island of dreams"}/>
        <RoundImageCard 
        image="\Tun_App\images\Tunisia\sidi_bousaid.jpg"
        title={"Sidi Bou Said"}
        Height={""}
        description={"Idyllic seaside town with breathtaking Mediterranean views"}/>
        <RoundImageCard 
        image="\Tun_App\images\Tunisia\bardo-museum.jpg"
        title={"The Bardo Museum"}
        Height={""}
        description={"a museum of Roman mosaics and other artifacts in Tunis"}/>
        <RoundImageCard  
        image="\Tun_App\images\Tunisia\Chott-El-Jerid-Star-Wars-Film-Sets-in-Tunisia.jpg"
        title={"Chott El Jerid"}
        Height={""}
        description={'endorheic salt lake also a "Star Wars Film Set"'}/>
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
        Some famous souqs in Tunisia include souq el-Attarine in the Tunis Medina and the Souq Erbaa in Medina Sfax."
        image="\Tun_App\images\Tunisia\tunisia_souq.jpg" />

    <SlidePR 
      title="Tunisia Beyond the Tourist Trail: Alternative Tourism Adventures" 
      subtitle='"From Exploring Hidden Wonders to Wine Tasting and olive harvesting"' 
      description="Alternative tourism in Tunisia offers unique experiences to discover the country’s landscapes and culture. 
      Activities include horseback riding, camel riding, wine tasting, olive harvesting, and mountain trekking. 
      Visiting museums, archaeological sites, and Berber villages will immerse you in Tunisia’s rich history and cultural diversity."
      image="\Tun_App\images\Tunisia\alternative_tourism_tn.jpg"/>
      <h1 className='title'> Food and culinary traditions: </h1>

    <div style={{display:"flex", justifyContent: "center", width: "100vw", height:"22vw", marginLeft:"auto", marginRight:"auto" , marginTop:"5vh", marginBottom:"5vh", gap: "2vw"}}>
        <RoundImageCard 
        image="\Tun_App\images\Tunisia\slataMechwia.jpg"
        title={"starters"}
        description={"Grilled Salad/ Slata mechwia"}/>
        <RoundImageCard 
        image="\Tun_App\images\Tunisia\hrisa.jpg"
        title={"starters"}
        description={"Harissa with Olive oil "}/>
        <RoundImageCard 
        image="\Tun_App\images\Tunisia\couscous-viande.jpg"
        title={"main plate"}        
        description={"coucous (coscsi)"}/>
        <RoundImageCard 
        image="\Tun_App\images\Tunisia\mloukhia.jpg"
        title={"main plate"}        
        description={"mloukhia"}/>
        <RoundImageCard 
        image="\Tun_App\images\Tunisia\lablebi.jpg"
        title={"street food"}       
        description={"Lablebi"}/>
        <RoundImageCard 
        image="\Tun_App\images\Tunisia\brik.jpg"
        title={"street food"}        
        description={"Brik"}/>
    </div>
</div>  

);
}

export default Tourism;

