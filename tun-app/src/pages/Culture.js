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

    <div style={{display:"flex", justifyContent: "center", width: "80vw", marginLeft:"10vw" , marginTop:"5vh", marginBottom:"5vh"}}>
        <ImageCard 
        image="\Tun_App\images\Tunisia\virgil_bardo1.jpg"
        title={"mosaic of Virgil"}
        description={"The Bardo Museum's crown jewel is this mosaic of the Roman poet Virgil writing the eighth verse of the epic the Aeneid. Clio, the muse of tragedy, and Melpomene, the muse of history, look on. Discovered in a private residence in Sousse, it is the only known mosaic of Virgil."}/>
        <ImageCard 
        image="\Tun_App\images\Tunisia\bardo_diane_chasseresse-1.jpg"
        title={"Diane the Huntress"}
        description={"This colorful mosaic panel represents Diane the Huntress. Wearing short clothes, boots and her hair held in a bun, she appears poised to shoot a gazelle that is quietly grazing acacia leaves. "}/>
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
      title="Ez-zitouna University (737 CE)" 
      subtitle='"The oldest university in THE WORLD"' 
      description="Ez-zitouna University, also known as the University of Ez-Zitouna, is the oldest university in THE WORLD in continuous operation.
      It was founded in the 8th century CE and has played an important role in Tunisian education and intellectual life. The university is known for its Islamic studies programs and has educated many prominent scholars and religious leaders over the years.
      Despite the religion's dominance, in Madrasas students could learn about science, philosophy, mathematics, art, and many other subjects."
      image="\Tun_App\images\Tunisia\Ez_Zitouna-mosque.jpg"/>

    <SlidePL
        title="Ottoman empire (1534)" 
        subtitle='"Tunisia under Ottoman rule."' 
        description="Carthage was an ancient city located in modern-day Tunis. It was founded by Phoenician colonists in the 9th century BC and became a major trading and cultural center in the Mediterranean world. Carthage was conquered by the Romans in the 2nd century BC and became an important Roman city. Today, the ruins of Carthage are a major tourist attraction and a testament to the city's rich history."
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

