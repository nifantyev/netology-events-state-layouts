import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};

const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <button className="material-icons icon-switch" onClick={onSwitch}>
      {icon}
    </button>
  );
};

IconSwitch.propTypes = propTypes;

export default IconSwitch;
