import React from 'react';

import TopBar from '../components/TopBar';
import SlidePL from '../components/SlidePL';
import SlidePR from '../components/SlidePR';
import Personality from '../components/Personality';
import ImageCard from '../components/ImageCard';


import './Home.css';

import TrackVisibility from 'react-on-screen';  

function TnR() {
    document.body.style.backgroundColor = "#FBF0D3"
return (
<div> 
    <TopBar />
    <div className="image-container">
        <img src="\Tun_App\images\Tunisia\st4.png" style={{ width: '100%', height:"100vh", objectFit: 'cover'}} />
    </div>
    
    <h1 className='title'> Important historical figures: </h1>

    <Personality
        title='TELNET' 
        description="Ons Jabeur is a Tunisian professional tennis player who has achieved a career-high ranking of No. 2 in the Women's Tennis Association (WTA). 
        She is the first Arab woman to reach a Grand Slam quarterfinal and the first and only muslim and Arab player, male or female, to reach a Grand Slam final in singles. 
        Jabeur has won three singles titles on the WTA Tour and has also had success on the ITF Women's Circuit. 
        In 2021, she became the first Arab woman to win a WTA Tour title and in 2022, she won her biggest title to date at the Madrid Open and reached her first major final at Wimbledon."
        image="\Tun_App\images\Tunisia\Ons_jabeur.jpg" 
        num="01"/>
    <Personality
        title='Mohamed Abid' 
        description='Dr. Mohamed Abid (Mo) is the Mars 2020 Deputy Chief Mechanical Engineer and Manager of the Mechatronics group at JPL(NASA). 
        PhD in Aerospace and mechanical engineering.'
        image="\Tun_App\images\Tunisia\mohamed_abid.jpg" 
        num="02"/>
    <Personality
        title='Osema mallouli' 
        description='Oussama Mellouli is a Tunisian swimmer and Olympic medalist who has won a total of three Olympic medals (2008, 2012(2)), 
        including two gold medals. He is the first person from Africa to win an Olympic medal in swimming, 
        and he is also the first person to win medals in both the pool and open water at the same Olympic Games. 
        Mellouli has also won numerous medals at the World Championships and other international competitions.'
        image="\Tun_App\images\Tunisia\Mellouli.jpg" 
        num="03"/>

    <h1 className='title'> Overview of Tunisia's history: </h1>  

    <div className="image-container">
        <img src="\Tun_App\images\Tunisia\Htime1.png" style={{ width: '90vw', paddingLeft: "5vw" }} />
    </div>  
    
    <SlidePL
        title="Carthage (814 BC)" 
        subtitle='"The rise of Carthage"' 
        description="Carthage was an ancient city located in modern-day Tunis. It was founded by Phoenician colonists in the 9th century BC and became a major trading and cultural center in the Mediterranean world. Carthage was conquered by the Romans in the 2nd century BC and became an important Roman city. Today, the ruins of Carthage are a major tourist attraction and a testament to the city's rich history."
        image="\Tun_App\images\Tunisia\Hcartage.jpeg" />
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
    <SlidePR 
      title="Independence (1956)" 
      subtitle="''Tunisia's journey to independence''"
      description="Tunisia gained independence from France in 1956, after over 70 years of colonial rule. Independence was followed by a period of political and economic development, as the country worked to establish itself as a sovereign nation."
      image="/Tun_App/images/Tunisia/Hindependence.jpg"/>

    <SlidePL
        title="Revolution (2011)" 
        subtitle='"Overthrowing the old regime"' 
        description="The Tunisian Revolution, also known as the Jasmine Revolution, was a period of political unrest and protests in Tunisia that began in 2010 and continued into 2011. The protests ultimately led to the overthrow of President Zine El Abidine Ben Ali and the establishment of a new, democratic government. The Revolution had a major impact on Tunisian politics and society, and is considered a major turning point in the country's history."
        image="\Tun_App\images\Tunisia\Hrevolution.png" />

    <h1 className='title'> Major historical sites and landmarks: </h1>

    <div style={{display:"flex", justifyContent: "center", width: "80vw", height:"60vh", marginLeft:"10vw" , marginTop:"5vh", marginBottom:"5vh"}}>
        <ImageCard 
        image="\Tun_App\images\Tunisia\Mosque-of-Kairouan.jpg"
        title={"The Kairouan Mosque"}
        Height={"40vh"}
        description={"a mosque and UNESCO World Heritage Site in Kairouan"}/>
        <ImageCard 
        image="\Tun_App\images\Tunisia\jam.jpg"
        title={"El Djem Amphitheater"}
        Height={"48vh"}
        description={"a Roman amphitheater in El Djem"}/>
        <ImageCard 
        image="\Tun_App\images\Tunisia\Carthage-788x537.png"
        title={"Carthage"}
        Height={"50vh"}
        description={"an ancient Phoenician city and a UNESCO World Heritage Site"}/>
        <ImageCard 
        image="\Tun_App\images\Tunisia\bardo-museum.jpg"
        title={"The Bardo Museum"}
        Height={"48vh"}
        description={"a museum of Roman mosaics and other artifacts in Tunis"}/>
        <ImageCard  
        image="\Tun_App\images\Tunisia\bulla-regia.jpg"
        title={"The Bulla Regia"}
        Height={"45vh"}
        description={"a Roman archaeological site in Jendouba"}/>
        <ImageCard 
        image="\Tun_App\images\Tunisia\dougga_tunisia.jpg"
        title={"The Dougga Archaeological Site"}
        Height={"40vh"}
        description={"a well-preserved Roman city in Siliana"}/>
    </div>
    

    <ul style={{ marginLeft: '10rem', marginRight: '10rem', display:"" }}>
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

export default TnR;

