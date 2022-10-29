import React, { useState } from 'react';
import './App.css';
import mapImage from './assets/map.png';
import image1 from './assets/1.jpeg';
import image2 from './assets/2.jpeg';
import image3 from './assets/3.jpeg';
import image4 from './assets/4.jpeg';
import image5 from './assets/5.jpeg';
import image6 from './assets/6.jpeg';
import image7 from './assets/7.jpeg';
import image8 from './assets/8.jpeg';
import image9 from './assets/9.jpeg';
import Page from './components/page';

function PageSwitch(point: number, setPoint: any) {
  switch(point) {
    case 0:
      return (
        <Page 
          content={(
            <div>
              <h1>Journey of Life</h1>
              <p>
                Welcome traveler! You have heard that the forest called Tappan Square is so beautiful and decided to visit the place. What you see now is a map around the Oberlin area. You cannot see the map again, so remember what it looks like and plan ahead. Once you set foot on the way to Tappan Square, there is no second chance and no turning back. Choose wisely when you face a crossroad. Good luck!
              </p>
            </div>
          )}
          image={(
            <img alt='asd' src={mapImage} />
          )}
          setPoint={setPoint}
          destination={[1]}
          directions={["Let's Go"]}
        />
        )
    case 1:
      return (
        <Page 
          content={(
            <p>
              Carlos is a conservatory student playing flute. When he was in highschool, he has always wanted to go the New England Conservatory of Music. On the audition day however, he could not show his best because of the sandwich he had for lunch. It was spoiled because of the warm weather, and he had to stay at the bathroom for the rest of the day. He did not give up. Next year, he skipped lunch to avoid similar situations. He was in his best condition and was ready to show everything he had prepared. However, the school had an administration error, so his name was omitted from the applicants list. He did not know the fact, so he waited until his name was called. At the end of the day, he figured out that his name was not on the list, and had to go back home. He did not give up. He submitted the application every year, but when he goes to audition, something bad happened, and he could not pass the test. On the fifth year, he decided to stop his obsession with this school and apply to different schools. He ended up at Oberlin Conservatory, and Carlos has never been happier. In this small town of Oberlin, he his enjoying his career in Flute performance, and he made so many good friends.
            </p>
          )}
          image={(
            <img alt='asd' src={image1} />
          )}
          setPoint={setPoint}
          destination={[2, 3]}
          directions={['Left', 'Right']}
        />
        )
    case 2:
      return (
        <Page 
          content={(
            <p>
              James is a college graduate from Boston. Before graduation, he applied to many companies to get an internship. He has applied to hundred different companies, but only about five companies replied to his resume. He visited one of the companies for an interview and fell in love with the place. It had a clean and tall building, in which so many talented people were collaborating with each other. Luckily, he passed an interview and received an offer letter. He was so excited, but as soon as he graduated, a pandemic happened. Every office had to make a conversion to a remote working environment, and most of the internship had to be cancelled because James had to return to his hometown. He was so frustrated, but he started submitting his resume to companies near his home. One of the companies responded, and he started working at the company. It was not the dream job he imagined, but it turned out he could work with a fair amount of income, and he could save more money by living near his home.   
            </p>
          )}
          image={(
            <img alt='asd' src={image2} />
          )}
          setPoint={setPoint}
          destination={[1, 2]}
          directions={['Left', 'Right']}
        />
        )
    case 3:
      return (
        <Page 
          content={(
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          )}
          image={(
            <img alt='asd' src={image3} />
          )}
          setPoint={setPoint}
          destination={[1, 2]}
          directions={['Left', 'Right']}
        />
        )
            
  }
}

function App() {
  const [point, setPoint] = useState<number>(2);

  return (
    <div className="container">
      {PageSwitch(point, setPoint)}
    </div>
  );
}

export default App;
