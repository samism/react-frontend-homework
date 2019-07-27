import React, { useState, useEffect } from 'react';
import './App.style.scss';

import HotelCard from '../HotelCard';
import hotelResultService from '../../services/hotel-result/hotel-result.service';

const App = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    hotelResultService.get().then(response => {
      setHotels(response.results.hotels);
    });
  }, []);

  return (
    <div className="app-container">
      <header>
        <h1 className="app-heading">Welcome to RocketMiles</h1>
      </header>
      <main className="content">
        <aside>
          <div className="filters">
            Hotel name
            <input type="text" className="input" maxLength={1} />
            Price
            <select name="" className="select">
              <option value="">Recommended</option>
              <option value="">Price low-to-high</option>
              <option value="">Price high-to-low</option>
            </select>
            <button className="button">Reset</button>
          </div>
        </aside>

        <section className="hotel-list">
          {hotels.map(hotel => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default App;
