import React, { useState, useEffect } from 'react';
import './App.style.scss';

import hotelResultService from '../../services/hotel-result/hotel-result.service';

import HotelCard from '../HotelCard';
import HotelFilters from '../HotelFilters';
import CouldntFetchListings from '../CouldntFetchListings';

const App = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hotels, setHotels] = useState([]);
  const [presentationalHotelList, setPresentationalHotelList] = useState([]);

  useEffect(() => {
    hotelResultService
      .get()
      .then(({ results: { hotels: hotelData } }) => {
        setHotels(hotelData);
        setPresentationalHotelList(hotelData);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, []);

  const HotelList = ({ list }) => (
    <aside>
      <section className="hotel-list">
        {list.length ? (
          list.map(hotel =>
            error ? Error(error) : <HotelCard key={hotel.id} hotel={hotel} />
          )
        ) : (
          <h1 className="no-results">
            No results. Please try expanding your search.
          </h1>
        )}
      </section>
    </aside>
  );

  if (loading) {
    return null;
  }

  return (
    <div className="app-container">
      <header>
        <h1 className="app-heading">Welcome to RocketMiles</h1>
      </header>
      <main className="content">
        <HotelFilters
          hotels={hotels}
          displayedHotels={presentationalHotelList}
          listHandler={setPresentationalHotelList}
        />

        {error ? (
          <CouldntFetchListings error={error} />
        ) : (
          <HotelList list={presentationalHotelList} />
        )}
      </main>
    </div>
  );
};

export default App;
