import React from 'react';

import './Form-input-field.scss';

const Input = ({ handelChange, ...otherProps }) => (
  <input className="form-input" onChange={handelChange} {...otherProps} />
);

export default Input;
