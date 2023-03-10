import React from 'react';

import TopBar from '../components/TopBar';
import SlidePL from '../components/SlidePL';
import SlidePR from '../components/SlidePR';
import PersonTable from '../components/PersonTable';
import ImageCard from '../components/ImageCard';


import './Home.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';  

function Culture() {
    document.body.style.backgroundColor = "#FBF0D3"
return (
<div> 
    <TopBar />
    
    <div className="image-container">
        <img src="\Tun_App\images\Tunisia\tunisiaCv6.png" style={{ width: '100%'}} />
    </div>

    <h1 className='title'> Art and architecture: </h1>

    <div style={{display:"flex", justifyContent: "center", width: "80vw", height: "60vh", marginLeft:"10vw" , marginTop:"5vh", marginBottom:"5vh"}}>
        <ImageCard 
        image="\Tun_App\images\Tunisia\virgil_bardo1.jpg"
        title={"mosaic of Virgil"}
        Height={"40vh"}
        description={"The Bardo Museum's crown jewel is this mosaic of the Roman poet Virgil writing the eighth verse of the epic the Aeneid. Clio, the muse of tragedy, and Melpomene, the muse of history, look on. Discovered in a private residence in Sousse, it is the only known mosaic of Virgil."}/>
        <ImageCard 
        image="\Tun_App\images\Tunisia\bardo_diane_chasseresse-1.jpg"
        title={"Diane the Huntress"}
        Height={"45vh"}
        description={"This colorful mosaic panel represents Diane the Huntress. Wearing short clothes, boots and her hair held in a bun, she appears poised to shoot a gazelle that is quietly grazing acacia leaves. "}/>
        <ImageCard 
        image="\Tun_App\images\Tunisia\Carthage-788x537.png"
        title={"Carthage"}
        Height={"50vh"}
        description={"an ancient Phoenician city and a UNESCO World Heritage Site"}/>
        <ImageCard 
        image="\Tun_App\images\Tunisia\bardo-museum.jpg"
        title={"The Bardo Museum"}
        Height={"45vh"}
        description={"a museum of Roman mosaics and other artifacts in Tunis"}/>
        <ImageCard 
        image="\Tun_App\images\Tunisia\bulla-regia.jpg"
        title={"The Bulla Regia"}
        Height={"40vh"}
        description={"a Roman archaeological site in Jendouba"}/>
    </div>
    
    <div style={{display:"flex", justifyContent: "center", width: "80vw", height: "60vh", marginLeft:"10vw" , marginTop:"5vh", marginBottom:"5vh"}}>
        <ImageCard 
        image="\Tun_App\images\Tunisia\Mosque-of-Kairouan.jpg"
        title={"The Kairouan Mosque"}
        Height={"45vh"}
        description={"a mosque and UNESCO World Heritage Site in Kairouan"}/>
        <ImageCard 
        image="\Tun_App\images\Tunisia\jam.jpg"
        title={"El Djem Amphitheater"}
        Height={"50vh"}
        description={"a Roman amphitheater in El Djem"}/>
        <ImageCard 
        image="\Tun_App\images\Tunisia\Carthage-788x537.png"
        title={"Carthage"}
        Height={"42vh"}
        description={"an ancient Phoenician city and a UNESCO World Heritage Site"}/>
        <ImageCard 
        image="\Tun_App\images\Tunisia\bardo-museum.jpg"
        title={"The Bardo Museum"}
        Height={"40vh"}
        description={"a museum of Roman mosaics and other artifacts in Tunis"}/>
        <ImageCard 
        image="\Tun_App\images\Tunisia\bulla-regia.jpg"
        title={"The Bulla Regia"}
        Height={"50vh"}
        description={"a Roman archaeological site in Jendouba"}/>
        <ImageCard 
        image="\Tun_App\images\Tunisia\Carthage-788x537.png"
        title={"Carthage"}
        Height={"41vh"}
        description={"an ancient Phoenician city and a UNESCO World Heritage Site"}/>
        <ImageCard 
        image="\Tun_App\images\Tunisia\bardo-museum.jpg"
        title={"The Bardo Museum"}
        Height={"48vh"}
        description={"a museum of Roman mosaics and other artifacts in Tunis"}/>
        <ImageCard 
        image="\Tun_App\images\Tunisia\bulla-regia.jpg"
        title={"The Bulla Regia"}
        Height={"44vh"}
        description={"a Roman archaeological site in Jendouba"}/>
    </div>

    <div style={{display:"flex", justifyContent: "center", width: "80vw", marginLeft:"10vw" , marginTop:"5vh", marginBottom:"5vh"}}>
        <ImageCard 
        image="\Tun_App\images\Tunisia\Mosque-of-Kairouan.jpg"
        title={"The Kairouan Mosque"}
        description={"a mosque and UNESCO World Heritage Site in Kairouan"}/>
        <ImageCard 
        image="\Tun_App\images\Tunisia\jam.jpg"
        title={"El Djem Amphitheater"}
        description={"a Roman amphitheater in El Djem"}/>
        <ImageCard 
        image="\Tun_App\images\Tunisia\Carthage-788x537.png"
        title={"Carthage"}
        description={"an ancient Phoenician city and a UNESCO World Heritage Site"}/>
        <ImageCard 
        image="\Tun_App\images\Tunisia\bardo-museum.jpg"
        title={"The Bardo Museum"}
        description={"a museum of Roman mosaics and other artifacts in Tunis"}/>
        <ImageCard 
        image="\Tun_App\images\Tunisia\bulla-regia.jpg"
        title={"The Bulla Regia"}
        description={"a Roman archaeological site in Jendouba"}/>
    </div>

    <h1 className='title'> Religion, Literature and language: </h1>
    <SlidePR 
      
      subtitle='"Tunisian Heritage: From Ancient Times to the Present Day"'
      description="Tunisia is a country with a rich and diverse cultural heritage that reflects its long history of interactions with different civilizations and peoples.
      The official language of Tunisia is Arabic, which is also the language of Quraan, islam is the dominant religion in the country. 
      According to the 2014 constitution, Tunisia is a free and democratic republic that recognizes Islam as its state religion, but also guarantees freedom of conscience and belief for all citizens.
      Tunisia also has a distinguished literary tradition that spans from ancient times to the present day, producing renowned poets, writers, scholars and thinkers who have influenced Arabic literature and culture as well as world literature."
      image="\Tun_App\images\Tunisia\Ez_Zitouna-mosque.jpg"/>

    <SlidePL
        
        subtitle='"Tunisian Literature: A Reflection of the Country???s Past and Present or A Rich and Diverse Legacy"' 
        description="Tunisia has a rich literary tradition that spans centuries.
         The country has produced many notable writers and poets who have contributed to the Arabic literary canon.
         Tunisian literature often reflects the country???s history and cultural heritage, with themes such as identity, nationalism, and social justice being common. 
         In addition to Arabic, French is also widely used in Tunisian literature due to the country???s history as a French protectorate."
        image="\Tun_App\images\Tunisia\CuktureBab.jpg" />

    <ul style={{ marginLeft: '10rem', marginRight: '10rem', display:"none" }}>
        <li><img src="\Tun_App\images\Tunisia\Htime.png" style={{ width: '30%' }} /></li>
        <li><img src="\Tun_App\images\Tunisia\Htime.png" style={{ width: '30%' }} /></li>
        <li><img src="\Tun_App\images\Tunisia\Htime.png" style={{ width: '30%' }} alt='' /></li>

        <li className='Block'>List Item 1</li>
        <li className='Block'>List Item 2</li>
        <li className='Block'>List Item 3</li>
    </ul>

    

</div>  

);
}

export default Culture;

