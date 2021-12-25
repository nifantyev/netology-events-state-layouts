import React from 'react';

const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <button className="material-icons icon-switch" onClick={onSwitch}>
      {icon}
    </button>
  );
};

export default IconSwitch;
