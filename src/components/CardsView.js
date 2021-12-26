import React from 'react';
import PropTypes from 'prop-types';
import ShopCard from './ShopCard';

const propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

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

CardsView.propTypes = propTypes;

export default CardsView;
