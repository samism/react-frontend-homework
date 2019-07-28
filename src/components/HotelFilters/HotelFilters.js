import React from 'react';

import './HotelFilters.style.scss';

const HotelFilters = () => (
  <div className="filters">
    Hotel name
    <input type="text" className="input" maxLength={1} />
    Price
    <select name="" className="select">
      <option value="">Recommended</option>
      <option value="">Price low-to-high</option>
      <option value="">Price high-to-low</option>
    </select>
    <button className="button" type="button">
      Reset
    </button>
  </div>
);

export default HotelFilters;
