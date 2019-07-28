import React, { useState, useEffect } from 'react';
import './App.style.scss';

import hotelResultService from '../../services/hotel-result/hotel-result.service';

import Utils from '../../utils/Utils';

import HotelCard from '../HotelCard';
import HotelFilters from '../HotelFilters';
import CouldntFetchListings from '../CouldntFetchListings';

const App = () => {
  const [error, setError] = useState(false);
  const [hotels, setHotels] = useState([]);
  const [presentationalHotelList, setPresentationalHotelList] = useState([]);

  useEffect(() => {
    hotelResultService
      .get()
      .then(({ results: { hotels: hotelData } }) => {
        setHotels(hotelData);
        setPresentationalHotelList(hotelData);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  const filterByName = ({ target: { value: textTyped } }) => {
    const results = hotels.filter(hotel => {
      const {
        hotelStaticContent: { name }
      } = hotel;

      return name.toLowerCase().startsWith(textTyped);
    });

    setPresentationalHotelList(results);
  };

  const sortByOption = ({ target: { value: optionSelected } }) => {
    const cloned = Utils.clone(presentationalHotelList);

    switch (optionSelected) {
      case 'recommended':
        cloned.sort(
          (
            { hotelStaticContent: { rating: ratingA } },
            { hotelStaticContent: { rating: ratingB } }
          ) => Utils.compare(ratingB, ratingA)
        );
        break;
      case 'price-asc':
        cloned.sort(
          (
            { lowestAveragePrice: { amount: priceA } },
            { lowestAveragePrice: { amount: priceB } }
          ) => Utils.compare(priceA, priceB)
        );
        break;
      case 'price-desc':
        cloned.sort(
          (
            { lowestAveragePrice: { amount: priceA } },
            { lowestAveragePrice: { amount: priceB } }
          ) => Utils.compare(priceB, priceA)
        );
        break;
      default:
        break;
    }

    setPresentationalHotelList(cloned);
  };

  const HotelList = ({ list }) => (
    <aside>
      <section className="hotel-list">
        {list.length ? (
          list.map(hotel =>
            error ? Error(error) : <HotelCard key={hotel.id} hotel={hotel} />
          )
        ) : (
          <h1>No results. Please try expanding your search.</h1>
        )}
      </section>
    </aside>
  );

  return (
    <div className="app-container">
      <header>
        <h1 className="app-heading">Welcome to RocketMiles</h1>
      </header>
      <main className="content">
        <HotelFilters filters={[filterByName, sortByOption]} />

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
