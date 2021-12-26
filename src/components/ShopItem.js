import React from 'react';

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

export default ShopItem;
