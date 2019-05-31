import React from "react";

import "./StarWars.scss";

class Character extends React.Component {
  render() {
    const { name, birth } = this.props;
    return (
      <div className="character-card">
        <ul>
          <li>
            <h2>{name}</h2>
          </li>
          <li>
            <p>Born: {birth}</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Character;
