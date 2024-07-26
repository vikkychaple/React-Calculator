import React from 'react';
import '../App.css';

const Button = ({ children, clickHandler, className }) => (
  <button className={`btn btn-secondary m-1 ${className}`} onClick={() => clickHandler(children)}>
    {children}
  </button>
);

export default Button;
