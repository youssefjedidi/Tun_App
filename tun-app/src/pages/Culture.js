import React from 'react';

import TopBar from '../components/TopBar';
import SlidePL from '../components/SlidePL';
import SlidePR from '../components/SlidePR';
import Container from '../components/Container';
import ImageCard from '../components/ImageCard';
import RoundImageCard from '../components/RoundImageCard';
import Personality from '../components/Personality';

import './Home.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';  

function Culture() {
    document.body.style.backgroundColor = "#FBF0D3"
return (
<div> 
    <TopBar />
    
    <div className='sizes'>
        <a>website true sizes are obtimizied on landscape mode</a>
        <img src="\Tun_App\images\Tunisia\screen_rot.png"/>
    </div>
    
    <div className="image-container">
        <img src="\Tun_App\images\Tunisia\tunisiaCv6.png" style={{ width: '100%'}} />
    </div>

    <Container
    title='"Overview of Tunisian Culture"'
    image='\Tun_App\images\Tunisia\hhh.jpg'
    description="Tunisia is a land rich in cultural diversity, with a unique blend of indigenous  Berber, Arab, and Mediterranean influences that can be explored through its art, literature, sports, and food. 
      From traditional crafts such as ceramics and textiles to the diverse range of genres found in Tunisian literature, there is always something new to discover in Tunisian culture. 
      And when it comes to food, Tunisian cuisine is a true reflection of the country's diverse cultural influences, with dishes like couscous and tajine that are sure to satisfy even the most discerning palate. 
      Tunisian culture is also shaped by the dominant religion of Islam and by the achievements of sports figures like Mohamed Ben Rehaiem and Ons Jabeur. 
      Experience the vibrant, colorful culture of Tunisia – a culture that is truly one of a kind."
      />

    <h1 className='title'> Art and architecture: </h1>

    <div style={{display:"flex", justifyContent: "center", width: "80vw", height: "60vh", margin:"auto" , marginTop:"5vh", marginBottom:"5vh"}}>
        <ImageCard 
        image="\Tun_App\images\Tunisia\medina_tunis.jpeg"
        title="medina of tunis"
        Height="40vh"
        description="Located in the heart of the capital city, the Medina of Tunis is a UNESCO 
        World Heritage site and one of the largest and most well-preserved medinas in North Africa. 
        It boasts a maze-like network of narrow streets, historic buildings, traditional markets, 
        and numerous cultural and religious landmarks."
        />
        <ImageCard 
        image="\Tun_App\images\Tunisia\medina_mahdia.jpg"
        title="medina of mahdia"
        Height="45vh"
        description="Situated on the east coast of Tunisia, the Medina of Mahdia is a picturesque old 
        town surrounded by walls and overlooking the Mediterranean Sea. It is famous for its vibrant fishing port, 
        beautiful beaches, and well-preserved Islamic architecture, including the ancient Fatimid port and the Great Mosque."
        />
        <ImageCard 
        image="\Tun_App\images\Tunisia\medina_sfax.jpg"
        title="medina of sfax"
        Height="50vh"
        description="Located in the south-central part of Tunisia, the Medina of Sfax is 
        a bustling commercial center that dates back to the 9th century. It is known for 
        its bustling markets, colorful souks, and imposing fortifications, including the 
        Bab Bhar gate and the Kasbah."
        />
        <ImageCard 
        image="\Tun_App\images\Tunisia\medina_sousse.jpg"
        title="medina of sousse"
        Height="45vh"
        description="Situated on the central-east coast of Tunisia, the Medina of Sousse 
        is another UNESCO World Heritage site that dates back to the 9th century. It features 
        a labyrinth of narrow streets, historic buildings, souks, and religious sites, such as 
        the Grand Mosque and the Ribat of Sousse."
        />
        <ImageCard 
        image="\Tun_App\images\Tunisia\medina_kairouan.jpg"
        title="medina of kairouan"
        Height="40vh"
        description="Kairouan is home to one of the most ancient and important medinas in Tunisia. 
        It is known for its impressive Great Mosque, numerous madrasas, and the beautiful Aghlabid pools. 
        The medina also boasts a rich cultural heritage, including traditional crafts such as carpet weaving and pottery."
        />
    </div>

    <div style={{display:"flex", justifyContent: "center", width: "80vw", height: "60vh", margin:"auto" , marginTop:"5vh", marginBottom:"5vh"}}>
        <ImageCard 
        image="\Tun_App\images\Tunisia\bardo_mosaics.jpg"
        title="Bardo Museum"
        Height="40vh"
        description="The Bardo Museum in Tunis is home to the world's largest and most extensive collections 
        of Roman mosaics. The museum's mosaic collection spans from the 2nd century BC to the 7th century AD 
        and includes pieces from ancient Roman villas, Christian churches, and Byzantine basilicas."
        />
        <ImageCard 
        image="\Tun_App\images\Tunisia\sidi_bou_said.jpg"
        title="sidi bou said"
        Height="45vh"
        description="Sidi Bou Said is a picturesque village located on a hill overlooking the Mediterranean Sea. 
        The village is known for its blue and white houses, narrow streets, and stunning views. It is a popular destination 
        for tourists and artists who come to capture the village's charm and beauty."
        />
        <ImageCard 
        image="\Tun_App\images\Tunisia\okba_kairouan.jpg"
        title="Great Mosque of Kairouan"
        Height="50vh"
        description="The Great Mosque of Kairouan is one of the oldest and most important Islamic buildings in the world. 
        It was built in the 7th century AD and has been expanded and renovated several times over the centuries. The mosque 
        is renowned for its architectural beauty and historical significance."
        />
        <ImageCard 
        image="\Tun_App\images\Tunisia\djerbahood.jpg"
        title="Djerbahood"
        Height="48vh"
        description="Djerbahood is a street art project that took place in the town of Erriadh on the island of Djerba. 
        More than 150 street artists from around the world were invited to paint the walls of the town, turning it into 
        an open-air art gallery. The project aimed to promote cultural diversity and creativity."
        />
        <ImageCard 
        image="\Tun_App\images\Tunisia\troglodyte_habitation.jpg"
        title="troglodyte habitation of tataouine"
        Height="40vh"
        description="The troglodyte habitations of Tataouine are a series of underground houses that were carved into 
        the rock by the Berber people centuries ago. The houses are built in a way that keeps them cool in the hot desert 
        climate and they have become a popular tourist attraction in southern Tunisia."
        />
    </div>
    

    <h1 className='title'> Religion, Literature and language: </h1>
    <SlidePR 
      
      subtitle='"Tunisian Heritage: From Ancient Times to the Present Day"'
      description="Tunisia is a country with a rich and diverse cultural heritage that reflects its long history of interactions with different civilizations and peoples.
      The official language of Tunisia is Arabic, which is also the language of Quraan, islam is the dominant religion in the country. 
      According to the 2014 constitution, Tunisia is a free and democratic republic that recognizes Islam as its state religion, but also guarantees freedom of conscience and belief for all citizens.
      Tunisia also has a distinguished literary tradition that spans from ancient times to the present day, producing renowned poets, writers, scholars and thinkers who have influenced Arabic literature and culture as well as world literature."
      image="\Tun_App\images\Tunisia\Ez_Zitouna-mosque.jpg"
      link="https://en.wikipedia.org/wiki/Culture_of_Tunisia#Religion"
      />

    <SlidePL
        
        subtitle='"Tunisian Literature: A Reflection of the Country’s Past and Present or A Rich and Diverse Legacy"' 
        description="Tunisia has a rich literary tradition that spans centuries.
         The country has produced many notable writers and poets who have contributed to the Arabic literary canon.
         Tunisian literature often reflects the country’s history and cultural heritage, with themes such as identity, nationalism, and social justice being common. 
         In addition to Arabic, French is also widely used in Tunisian literature due to the country’s history as a French protectorate."
        image="\Tun_App\images\Tunisia\CuktureBab.jpg"
        link="https://en.wikipedia.org/wiki/Tunisian_literature"
        />

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

    <h1 className='title'>sports and celebrities: </h1>
    <Personality
        title='Ons jabeur' 
        description="Ons Jabeur is a Tunisian professional tennis player who has achieved a career-high ranking of No. 2 in the Women's Tennis Association (WTA). 
        She is the first Arab woman to reach a Grand Slam quarterfinal and the first and only muslim and Arab player, male or female, to reach a Grand Slam final in singles. 
        Jabeur has won three singles titles on the WTA Tour and has also had success on the ITF Women's Circuit. 
        In 2021, she became the first Arab woman to win a WTA Tour title and in 2022, she won her biggest title to date at the Madrid Open and reached her first major final at Wimbledon."
        image="\Tun_App\images\Tunisia\Ons_jabeur.jpg" 
        num="01"/>
    <Personality
        title='Hammadi Agrebi' 
        description='Hamadi Al-Agrebi (March 20, 1951 - August 21, 2020) whose real name is Mohamed Ben Rehaiem, is one of the best players in the history of the Sfaxien club and the Tunisian national team. 
        He won the Tunisian championship with the Sfaxien club in 1978, 1981 and 1983. He is known as the "magician of the generations". 
        He played with the Sfaxien club in the 1970s and contributed to winning many championships and then played with Al-Nassr in Saudi Arabia after the 1978 World Cup finals. He retired from football in 1989 '
        image="\Tun_App\images\Tunisia\hammadi.png" 
        num="02"/>
    <Personality
        title='Osema mallouli' 
        description='Oussama Mellouli is a Tunisian swimmer and Olympic medalist who has won a total of three Olympic medals (2008, 2012(2)), 
        including two gold medals. He is the first person from Africa to win an Olympic medal in swimming, 
        and he is also the first person to win medals in both the pool and open water at the same Olympic Games. 
        Mellouli has also won numerous medals at the World Championships and other international competitions.'
        image="\Tun_App\images\Tunisia\Mellouli.jpg" 
        num="03"/>

</div>  

);
}

export default Culture;

