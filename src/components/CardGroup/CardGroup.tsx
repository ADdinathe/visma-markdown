import React from 'react';

import Card, { CardProps } from '../Card';
import './CardGroup.scss';

type CardGroupProps = {
  cards: CardProps[];
};

const CardGroup: React.FC<CardGroupProps> = ({ cards }) => {
  return (
    <div className="grid">
      {cards.map((card, index) => (
        // <Card  tag={card.tag} color={card.color} children={card.children}/>
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default React.memo(CardGroup);
