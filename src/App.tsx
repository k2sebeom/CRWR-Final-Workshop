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
import pond from './assets/coi.jpeg';
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
          destination={[3, 7]}
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
          destination={[5, 8]}
          directions={['Front', 'Right']}
        />
        )
    case 3:
      return (
        <Page 
          content={(
            <p>
              Mary was preparing for her trip to Los Angeles. The way to the airport from her home was about an hour ride, so she decided to call an Uber about two hours before the boarding time. When she finished packing and decided to call an Uber, she was surprised to see that there was no drivers nearby her location. She decided to wait, but even after an hour, she could not find a driver who would take her to the airport. She decided to call every friends she knew who had a car. One of her friends said that he was out of town. The other friend said that she was visiting her husband's parents. She decided to walk all the way up to the bus station and take a bus to the airport. By the time she arrived at the airport, the plane she originally booked had already taken off. She had to take a cheaper and smaller plane that the airline booked for her as an alternative. When she arrived at Los Angeles, she found a surprising news that the plane that she was supposed to take had an engine issue so that it had to make an emergency landing in the middle of the desert. 
            </p>
          )}
          image={(
            <img alt='asd' src={image3} />
          )}
          setPoint={setPoint}
          destination={[8, 6]}
          directions={['Left', 'Right']}
        />
        )
    case 4:
      return (
        <Page 
          content={(
            <p>
              Kevin was a boy who was a big fan of robotics. He spent most of his time building strange robots in a garage, and for many of his science fair projects were the robots he built. His college essay, of course, was filled with stories of his passion about robotics and engineering. When he went to college, he took several courses related to engineering, and a large number of those courses were about mathematics. One day, he was in the advanced calculs class, and suddenly, he could come up with a brand new idea of solving a very old problem of finding a fastest way from one point to another. He wrote down the solutions, tested it out using his computer, and showed it to his professor. The math professor and Kevin decided to bring it to undergraduate research fair. Inspired by this experience, Kevin decided to change his major to mathematics, and now he's studying mathematics in a graduate school.  
            </p>
          )}
          image={(
            <img alt='asd' src={image3} />
          )}
          setPoint={setPoint}
          destination={[9, 2]}
          directions={['Left', 'Front']}
        />
        )
    case 5:
      return (
        <Page 
          content={(
            <p>
              Kim had just finished her Ph.D in biochemistry when she was offered a job as a teacher. She wanted to get a job in the field of cosmetics and pursue her career in the field of research, but the job market was overcrowded, so she decided to take few years off and prepare for the next recruting season, and meanwhile, she decided to take the job as a teacher at this new highschool. She did not plan to stay at this school for long, but she found herself enjoying the job of teaching so much. She put so much effort in teaching, and students respected her for her talent and teaching skills. She soon became the most popular teacher of the school. She decided to continue her job as a teacher, and today, she is retiring after 24 years of service as a teacher.  
            </p>
          )}
          image={(
            <img alt='asd' src={image3} />
          )}
          setPoint={setPoint}
          destination={[4, 3]}
          directions={['Left', 'Right']}
        />
        )
    case 6:
      return (
        <Page 
          content={(
            <p>
              Ellen would identify himself as a very risk averse person. He has never done any investment whatsoever, and he thought that the best way to achieve wealth is by saving. He did not spend money on unnecessary purchases and only spent money when he went to the grocery once a month. One day, one of his friends called him that she was starting a new business and asked Ellen if he could buy some of the stock in a form of investment. He first rejected as he did not like the idea of spending money on something with an uncertain future, but the freind was quite relentless. Finally, Ellen decided to buy 5000 dollars worth of stock, and after than, he completely forgot about the money since he did not belive in fortune. After several years, the freind called him again asking what he has done with the stock, and Ellen answered that he was holding all of the stock he had bought. The friend was surprised and told him that it is at least 100 times more worth than the time he purchased it as the friend's company is getting bigger and bigger.
            </p>
          )}
          image={(
            <img alt='asd' src={image3} />
          )}
          setPoint={setPoint}
          destination={[9, 2]}
          directions={['Front', 'Right']}
        />
        )
    case 7:
      return (
        <Page 
          content={(
            <p>
            </p>
          )}
          image={(
            <img alt='asd' src={image3} />
          )}
          setPoint={setPoint}
          destination={[5, 4]}
          directions={['Left', 'Right']}
        />
        )
    case 8:
      return (
        <Page 
          content={(
            <p>
            </p>
          )}
          image={(
            <img alt='asd' src={image3} />
          )}
          setPoint={setPoint}
          destination={[6, 3]}
          directions={['Left', 'Right']}
        />
        )
    case 9:
      return (
        <Page 
          content={(
            <div>
              <h1>Congratulations!</h1>
              <p>
                You made it! Well, you did not make it to the Tappan Square, but on the way to the forest, you found yourself standing next to a beautiful pond. Mesmerized by the beauty of the pond, you forgot everything about the forest and walked straight to savor the scenary. Your journey did not turn out to be as intended, but you reached something worthwhile to find.
              </p>
            </div>
          )}
          image={(
            <img alt='asd' src={pond} />
          )}
          setPoint={setPoint}
          destination={[]}
          directions={[]}
        />
        )
            
  }
}

function App() {
  const [point, setPoint] = useState<number>(3);

  return (
    <div className="container">
      {PageSwitch(point, setPoint)}
    </div>
  );
}

export default App;
