import React, { useState } from 'react';
import IconSwitch from './IconSwitch';

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
      <p>{layout === 'view_module' ? 'CardsView' : 'ListView'}</p>
      {products.map((product, index) => (
        <div key={index}>{product.name}</div>
      ))}
    </div>
  );
};

export default Store;
