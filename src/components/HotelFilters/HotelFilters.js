import React from 'react';

import './HotelFilters.style.scss';

import filterByName from './filters';
import sortByOption from './sorts';

const HotelFilters = ({ hotels, displayedHotels, listHandler }) => (
  <aside>
    <div className="filters">
      Hotel name
      <input
        type="text"
        className="input"
        onChange={e => filterByName(e, hotels, listHandler)}
      />
      Price
      <select
        name="sort-hotels-select"
        className="select"
        onChange={e => sortByOption(e, displayedHotels, listHandler)}
      >
        <option value="recommended">Recommended</option>
        <option value="price-asc">Price low-to-high</option>
        <option value="price-desc">Price high-to-low</option>
      </select>
      <button className="button" type="button">
        Reset
      </button>
    </div>
  </aside>
);

export default HotelFilters;
