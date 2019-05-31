import React from "react";

import "./StarWars.scss";

class Character extends React.Component {
  render() {
    return (
      <div className="character-card">
        <ul>
          <li>
            <h2>{this.props.characterOnProps.name}</h2>
          </li>
          <li>
            <p>Born: {this.props.characterOnProps.birth_year}</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Character;
