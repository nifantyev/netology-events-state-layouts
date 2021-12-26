import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

const ShopItem = ({ name, price, color, img }) => {
  return (
    <div className="item">
      <div className="item__img">
        <img className="item__img-pic" src={img} alt="{name}" />
      </div>
      <div className="item__name">{name}</div>
      <div className="item__color">{color}</div>
      <div className="item__price">${price}</div>
      <button className="item__addtocart">Add to cart</button>
    </div>
  );
};

ShopItem.propTypes = propTypes;

export default ShopItem;
