import React from "react";

import Character from "./Character";

import "./StarWars.scss";

class CharacterList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h2>Characters:</h2>
        <Character />
      </div>
    );
  }
}

export default CharacterList;
