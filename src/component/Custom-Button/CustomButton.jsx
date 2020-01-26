import React from 'react';

import './Custom-Button.scss';

const CustomButton = ({ children, ...otherProps }) => (
  <button className="btn-primary" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
