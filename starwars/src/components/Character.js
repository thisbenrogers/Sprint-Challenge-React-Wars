import React from "react";

import "./StarWars.scss";

class Character extends React.Component {
  render() {
    return (
      <div className="character-card">
        <h2>{this.props.characterOnProps.name}</h2>
      </div>
    );
  }
}

export default Character;
