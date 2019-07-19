import React from 'react';

const Character = props => {
  const { name, birth_year, eye_color, gender, height } = props.props;
  return (
    <>
      <h2>{name}</h2>
      <p>{height}</p>
      <p>{eye_color}</p>
      <p>{birth_year}</p>
      <p>{gender}</p>
    </>
  )
}

export default Character;