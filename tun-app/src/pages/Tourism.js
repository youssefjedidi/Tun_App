import React from 'react';

import TopBar from '../components/TopBar';
import SlidePL from '../components/SlidePL';
import SlidePR from '../components/SlidePR';
import PersonTable from '../components/PersonTable';
import RoundImageCard from '../components/RoundImageCard';
import ImageCard from '../components/ImageCard';

import './Home.css';


function Tourism() {
    document.body.style.backgroundColor = "#FBF0D3"
return (
<div> 
    <TopBar />

    <div className='sizes'>
        <a>website true sizes are obtimizied on landscape mode</a>
        <img src="\Tun_App\images\Tunisia\screen_rot.png"/>
    </div>

    <div className="image-container">
        <img src="\Tun_App\images\Tunisia\tourism_hill_byrsa.jpeg" style={{ width: '100%'}} />
    </div>
    
    <h1 className='title'> Major tourist attractions: </h1>
    <div style={{display:"flex", justifyContent: "center", width: "100vw", height:"27vw", marginLeft:"auto", marginRight:"auto" , marginTop:"5vh", marginBottom:"5vh", gap: "2vw"}}>
        <RoundImageCard 
        image="\Tun_App\images\Tunisia\douz.jpg"
        title={"douz"}
        Height={""}
        description={"Tunisian town, gateway to Sahara"}/>
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
        image="\Tun_App\images\Tunisia\tunisia_souq.jpg"
        link="https://www.tunisiatours.org/the-souks-of-tunisia" />

    <SlidePR 
      title="Tunisia Beyond the Tourist Trail: Alternative Tourism Adventures" 
      subtitle='"From Exploring Hidden Wonders to Wine Tasting and olive harvesting"' 
      description="Alternative tourism in Tunisia offers unique experiences to discover the country’s landscapes and culture. 
      Activities include horseback riding, camel riding, wine tasting, olive harvesting, and mountain trekking. 
      Visiting museums, archaeological sites, and Berber villages will immerse you in Tunisia’s rich history and cultural diversity."
      image="\Tun_App\images\Tunisia\alternative_tourism_tn.jpg"
      link="https://wildyness.com/news/vacances-en-tunisie-tourisme-alternatif?fbclid=IwAR258Av3mLSgAECKf7D7dickPW5kSd2C5viz9sZNymgUyD1b4tDsdIg58Nc"
      />
      
      <h1 className='title'>Tunisian Cuisine Chronicles: </h1>
    
      <div style={{display:"flex", justifyContent: "center", width: "80vw", height: "60vh", margin:"auto" , marginTop:"5vh", marginBottom:"5vh"}}>
        <ImageCard 
        image="\Tun_App\images\Tunisia\dar_el_jeld.jpg"
        title="Dar El Jeld (Tunis)"
        Height="40vh"
        description="Dar El Jeld is a traditional Tunisian restaurant located in the heart of the Tunis medina. 
        The restaurant offers an elegant setting and serves a range of Tunisian dishes, including couscous, brik, and seafood."
        />
        <ImageCard 
        image="\Tun_App\images\Tunisia\chouaib.jpg"
        title="Restaurant Chouaib (Sfax)"
        Height="45vh"
        description="Restaurant Chouaib is a seafood restaurant located in the coastal city of Sfax. 
        The restaurant is renowned for its fresh seafood dishes, including grilled fish, calamari, and prawns."
        />
        <ImageCard 
        image="\Tun_App\images\Tunisia\el_fondouk.jpg"
        title="El Fondouk (Djerba)"
        Height="50vh"
        description="El Fondouk is a charming traditional Tunisian restaurant located in Houmt Souk, Djerba. 
        Housed in a beautifully restored 17th-century building, the restaurant offers a range of authentic Tunisian 
        dishes in a warm and welcoming atmosphere. Diners can enjoy their meals in a lovely courtyard setting and 
        experience the rich cultural heritage of Tunisia."
        />
        <ImageCard 
        image="\Tun_App\images\Tunisia\sidi_bouhdid.jpg"
        title="Sidi Bouhdid Cafe (Hammamet)"
        Height="45vh"
        description="Sidi Bouhdid Cafe in Hammamet is a charming beachfront spot to enjoy coffee or tea with stunning views of the Mediterranean Sea. 
        Its laid-back atmosphere makes it a popular destination for both locals and tourists."
        />
        <ImageCard 
        image="\Tun_App\images\Tunisia\el_ali.jpg"
        title="El Ali (Tozeur)"
        Height="40vh"
        description="El Ali is a traditional Tunisian restaurant located in the town of Tozeur in southern Tunisia. 
        The restaurant serves a range of local dishes, including couscous with lamb and vegetables, grilled meats, and tagine."
        />
    </div>

</div>  

);
}

export default Tourism;

