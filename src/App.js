import React from 'react';
import './App.css';
import Details from './Details';

import image from './images/image.png';

function App() {
  return (
    <div className="App">
      <img src={image} alt="COVID-19" />
      <Details />
    </div>
  );
}

export default App;
