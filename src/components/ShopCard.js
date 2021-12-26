import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

const ShopCard = ({ name, price, color, img }) => {
  return (
    <div className="card">
      <img className="card__img" src={img} alt="{name}" />
      <div className="card__name">{name}</div>
      <div className="card__color">{color}</div>
      <div className="card__price">${price}</div>
      <button className="card__addtocart">Add to cart</button>
    </div>
  );
};

ShopCard.propTypes = propTypes;

export default ShopCard;
