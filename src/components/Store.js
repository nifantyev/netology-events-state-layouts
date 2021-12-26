import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

const propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

const Store = ({ products }) => {
  const [layout, setLayout] = useState('view_module');

  const switchLayout = () => {
    if (layout === 'view_module') {
      setLayout('view_list');
    } else {
      setLayout('view_module');
    }
  };

  return (
    <div className="products">
      <div className="icon-switch-container">
        <IconSwitch
          icon={layout === 'view_module' ? 'view_list' : 'view_module'}
          onSwitch={switchLayout}
        />
      </div>
      {layout === 'view_module' ? (
        <CardsView cards={products} />
      ) : (
        <ListView items={products} />
      )}
    </div>
  );
};

Store.propTypes = propTypes;

export default Store;
