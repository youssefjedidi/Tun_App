import React from 'react';

import TopBar from '../components/TopBar';
import SlidePL from '../components/SlidePL';
import SlidePR from '../components/SlidePR';
import PersonTable from '../components/PersonTable';
import ImageCard from '../components/ImageCard';


import './Home.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';  

function History() {
    document.body.style.backgroundColor = "#FBF0D3"
return (
<div> 
    <TopBar />
    <div className="image-container">
        <img src="\Tun_App\images\Tunisia\Hmain1.jpg" style={{ width: '100%' }} />
    </div>
    
    <h1 style={{ color: '#8E4A00' }}> Important historical figures: </h1>

    <PersonTable
    title1 = "Ibn Khaldun (1332-1406)"
    subtitle1='Arab historian, philosopher' 
    description1='"a 14th-century Islamic philosopher who basically invented what we would now call the social sciences" Ibn Khaldun was a Tunisian historian and philosopher who is considered one of the greatest scholars of the Middle Ages. He is known for his influential work on the history and sociology of the Arab world, and is considered a pioneer in the field of historiography.'
    image1="\Tun_App\images\Tunisia\ibn_khaldun.jpg"

    title2 = "Ahmad Bey (1805-1855)"
    subtitle2='Tunisian ruler, modernizer' 
    description2='Ahmad Bey was the ruler of Tunis from 1837 to 1855. He is known for modernizing Tunisian society and government, and for promoting education and scientific research. He was responsible for the abolition of slavery in Tunisia in 1846.'
    image2="\Tun_App\images\Tunisia\Ahmed_I_Bey.jpg"

    title3 = "Habib Bourguiba(1903-2000)"
    subtitle3='Tunisian president, modernizer' 
    description3="Habib Bourguiba was the first President of Tunisia and served from 1957 to 1987. He is known for leading the country to independence from France and for implementing social and economic reforms, including the promotion of education and the advancement of women's rights."
    image3="\Tun_App\images\Tunisia\Habib_Bourguiba.jpg"
    />
    <PersonTable
    title1 = "Tahar Haddad (1898-1934)"
    subtitle1='Tunisian writer, nationalist' 
    description1='Tahar Haddad was a Tunisian writer and intellectual who was an important figure in the Tunisian nationalist movement. He is known for his contributions to Tunisian literature and for his advocacy for Tunisian independence.'
    image1="\Tun_App\images\Tunisia\Tahar_Haddad.jpg"

    title2 = "Tewhida Ben Sheikh(1909-2010)"
    subtitle2='Pioneering Female Tunisian Doctor' 
    description2="Dr. Tewhida Ben Sheikh was a pioneering physician in Tunisia, particularly in the fields of contraception and abortion access. She was the first modern Tunisian woman to become a doctor, and her work has had a lasting impact on women's healthcare in the country."
    image2="\Tun_App\images\Tunisia\Tawhida_Ben_Cheikh.jpg"

    title3 = "Aboul-Qacem Echebbi (1909–1934)"
    subtitle3='Tunisian poet, nationalist' 
    description3="Aboul-Qacem Echebbi was a Tunisian poet and nationalist who played a significant role in the country's fight for independence from French colonial rule. He is known for his powerful and moving poetry that inspired Tunisians to fight for their freedom and dignity. Echebbi is remembered as a national hero and a symbol of Tunisian resistance."
    image3="\Tun_App\images\Tunisia\Abo_Al_Qassim_Al_Shabbi.jpg"
    />

    <h1 style={{ color: '#8E4A00', paddingLeft: "3vw" }}> Overview of Tunisia's history: </h1>  

    <div className="image-container">
        <img src="\Tun_App\images\Tunisia\Htime1.png" style={{ width: '100%' }} />
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

    <h1 style={{ color: '#8E4A00', paddingLeft: "3vw" }}> Major historical sites and landmarks: </h1>

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
        image="\Tun_App\images\Tunisia\dougga_tunisia.jpg"
        title={"The Dougga Archaeological Site"}
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

export default History;

