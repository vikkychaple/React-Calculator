import React from 'react';
import '../App.css';

const Display = ({ value }) => (
  <div className="display bg-white p-3 mb-3 rounded shadow-sm">
    {value}
  </div>
);

export default Display;
