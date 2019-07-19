import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card } from 'semantic-ui-react';

import Character from './components/Chracter';

import './App.css';
import './components/StarWars.css';


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
    <Container className="App" fluid>
      <h1 className="Header">React Wars</h1>
      <Card.Group>
        {swapiData.map((person, index) => {
          return <Character key={index} props={person} />
        })}
      </Card.Group>
    </Container>
  );
}

export default App;
