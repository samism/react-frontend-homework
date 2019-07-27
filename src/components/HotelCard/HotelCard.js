import React from 'react';
import './HotelCard.style.scss';

const HotelCard = ({ hotel }) => {
  return (
    <section className="hotel-card">
      <figure
        className="image"
        style={{
          backgroundImage: `url(${hotel.hotelStaticContent.mainImage.url})`
        }}
      />
      <section className="hotel-details">
        <h5 className="hotel-name">{hotel.hotelStaticContent.name}</h5>
        <p className="location">
          {hotel.hotelStaticContent.neighborhoodName}
        </p>
      </section>
      <section className="price-details">
        <span className="price">
          <span
            dangerouslySetInnerHTML={{
              __html: hotel.lowestAveragePrice.symbol
            }}
          />
          {hotel.lowestAveragePrice.amount}
        </span>
        <span className="rewards">{hotel.rewards.miles} miles</span>
        <button className="button">Select</button>
      </section>
    </section>
  );
};

export default HotelCard;
