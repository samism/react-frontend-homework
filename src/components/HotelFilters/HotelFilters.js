import React from 'react';

import './HotelFilters.style.scss';

const HotelFilters = ({ filters: [filterByName, sortByOption] }) => (
  <div className="filters">
    Hotel name
    <input type="text" className="input" onChange={filterByName.bind(this)} />
    Price
    <select
      name="sort-hotels-select"
      className="select"
      onChange={sortByOption.bind(this)}
    >
      <option value="recommended">Recommended</option>
      <option value="price-asc">Price low-to-high</option>
      <option value="price-desc">Price high-to-low</option>
    </select>
    <button className="button" type="button">
      Reset
    </button>
  </div>
);

export default HotelFilters;
