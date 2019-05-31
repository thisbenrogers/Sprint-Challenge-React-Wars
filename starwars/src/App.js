import React, { Component } from "react";

import Character from "./components/Character";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">Characters from Star Wars API</h1>
        <div className="character-list">
          {this.state.starwarsChars.map((characterFromMap, index) => (
            <Character
              key={index}
              name={characterFromMap.name}
              birth={characterFromMap.birth_year}
              // map={characterFromMap}
              // uncomment the above line to see all available state in react dev tools
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
