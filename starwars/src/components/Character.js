import React from "react";

import "./StarWars.scss";

class Character extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h3>Character 1</h3>
        <h3>Character 2</h3>
        <h3>Character 3</h3>
      </div>
    );
  }
}

export default Character;
