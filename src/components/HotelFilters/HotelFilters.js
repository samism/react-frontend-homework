import React from 'react';

import './HotelFilters.style.scss';

import filterByName from './filters';
import sortByOption from './sorts';

const HotelFilters = ({
  originalData,
  hotels,
  listHandler,
  resetHotelList
}) => (
  <aside className={!originalData.length ? 'input-disabled' : undefined}>
    <div className="filters">
      Hotel name
      <input
        type="text"
        className="input"
        onChange={e => filterByName(e, hotels, listHandler)}
        disabled={!originalData.length}
      />
      Price
      <select
        name="sort-hotels-select"
        className="select"
        onChange={e => sortByOption(e, hotels, listHandler)}
        disabled={!originalData.length}
      >
        <option value="recommended">Recommended</option>
        <option value="price-asc">Price low-to-high</option>
        <option value="price-desc">Price high-to-low</option>
      </select>
      <button
        className="button"
        type="button"
        onClick={resetHotelList}
        disabled={!originalData.length}
      >
        Reset
      </button>
    </div>
  </aside>
);

export default HotelFilters;
