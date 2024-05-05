// eslint-disable-next-line
import React from 'react';
import './App.css'; // Confirm this file exists and contains global styles
import PriceCardContainer from './PriceCardContainer'; // Make sure PriceCardContainer.jsx is in the same folder as App.jsx

function App() {
  return (
    <div className="App">
      <PriceCardContainer />
    </div>
  );
}

export default App;
