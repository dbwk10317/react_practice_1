import React from 'react';
import * as Data from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>
        {Data.randomName()}, {Data.randomJobTitle()}, {Data.makeRandomDayMonthYear()}
      </p>
      <img src={Data.randomAvatar()} height="50" alt="avatar" />
      <img src={Data.randomImage()} height="300" alt="img" />
    </div>
  );
}

export default App;
