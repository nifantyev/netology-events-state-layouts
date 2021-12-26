import React from 'react';
import ShopItem from './ShopItem';

const ListView = ({ items }) => {
  return (
    <div className="items">
      {items.map((item, index) => (
        <ShopItem
          key={index}
          name={item.name}
          color={item.color}
          price={item.price}
          img={item.img}
        />
      ))}
    </div>
  );
};

export default ListView;
