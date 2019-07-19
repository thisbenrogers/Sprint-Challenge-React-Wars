import React from 'react';
import { Card, Icon } from 'semantic-ui-react'

const Character = props => {
  const { name, birth_year, eye_color, gender, height } = props.props;
  return (
    <Card>
      <Card.Content header={name} />
      <Card.Content extra>
        <Icon name='sort content descending' />
        Height: {height}
      </Card.Content>
      <Card.Content extra>
        <Icon name='eye' />
        Eye Color: {eye_color}
      </Card.Content>
      <Card.Content extra>
        <Icon name='birthday cake' />
        Birth: {birth_year}
      </Card.Content>
      <Card.Content extra>
        <Icon name='transgender alternate' />
        Gender: {gender}
      </Card.Content>
    </Card>
  )
}

export default Character;