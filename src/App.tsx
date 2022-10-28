import React from 'react';
import './App.css';
// import mapImage from './assets/map.png';
import image1 from './assets/1.jpeg';
import Page from './components/page';

function App() {
  return (
    <div className="container">
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
    </div>
  );
}

export default App;
