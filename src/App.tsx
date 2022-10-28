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
                Hello World
              </p>
              <button onClick={() => {
                setPoint(1);
              }}>asd</button>
            </div>
            
          )}
          image={(
            <img alt='asd' src={mapImage} />
          )}
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
