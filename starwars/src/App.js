import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Character from './components/Chracter';

import './App.css';

const App = () => {
  const [swapiData, setSwapiData] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
      .then(response => {
        let swapiPeople = response.data.results;
        setSwapiData(swapiPeople);
      })
      .catch(err => {
        console.log("There was an error: ", err);
      })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {swapiData.map((person, index) => {
        return <Character key={index} props={person} />
      })}
    </div>
  );
}

export default App;
