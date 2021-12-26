import React from 'react';
import PropTypes from 'prop-types';
import ShopItem from './ShopItem';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

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

ListView.propTypes = propTypes;

export default ListView;
