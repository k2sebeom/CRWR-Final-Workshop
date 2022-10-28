import React, { useState } from 'react';
import './App.css';
import mapImage from './assets/map.png';
import image1 from './assets/1.jpeg';
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
              Hello World
            </p>
          )}
          image={(
            <img alt='asd' src={image1} />
          )}
          setPoint={setPoint}
          destination={[1, 2]}
          directions={['Left', 'Right']}
        />
        )
  }
}

function App() {
  const [point, setPoint] = useState<number>(0);

  return (
    <div className="container">
      {PageSwitch(point, setPoint)}
    </div>
  );
}

export default App;
