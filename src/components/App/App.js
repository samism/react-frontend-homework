import React, { useState, useEffect } from 'react';
import './App.style.scss';

import hotelResultService from '../../services/hotel-result/hotel-result.service';

import Utils from '../../utils/Utils';

import HotelCard from '../HotelCard';
import HotelFilters from '../HotelFilters';

const App = () => {
  const [hotels, setHotels] = useState([]);
  const [presentationalHotelList, setPresentationalHotelList] = useState([]);

  useEffect(() => {
    hotelResultService.get().then(({ results: { hotels: hotelData } }) => {
      setHotels(hotelData);
      setPresentationalHotelList(hotelData);
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

  return (
    <div className="app-container">
      <header>
        <h1 className="app-heading">Welcome to RocketMiles</h1>
      </header>
      <main className="content">
        <aside>
          <HotelFilters filters={[filterByName, sortByOption]} />
        </aside>

        <section className="hotel-list">
          {presentationalHotelList.map(hotel => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default App;
