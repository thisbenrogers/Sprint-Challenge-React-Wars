import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [swapiData, setSwapiData] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

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

  console.log("swapiData: ", swapiData);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {swapiData.map(person => {
        return <p>{person.name}</p>
      })}
    </div>
  );
}

export default App;
