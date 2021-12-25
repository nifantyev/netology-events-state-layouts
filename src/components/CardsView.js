import React from 'react';
import ShopCard from './ShopCard';

const CardsView = ({ cards }) => {
  return (
    <div className="cards">
      {cards.map((card, index) => (
        <ShopCard
          key={index}
          name={card.name}
          color={card.color}
          price={card.price}
          img={card.img}
        />
      ))}
    </div>
  );
};

export default CardsView;
