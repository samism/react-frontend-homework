import React from 'react';
import './HotelCard.style.scss';

/**
 * Credit: https://ourcodeworld.com
 *
 */
const decodeHtmlEntityString = entity => {
  return entity.replace(/&#(\d+);/g, (match, dec) => {
    return String.fromCharCode(dec);
  });
};

const HotelCard = ({ hotel }) => (
  <section className="hotel-card">
    <figure
      className="image"
      style={{
        backgroundImage: `url(${hotel.hotelStaticContent.mainImage.url})`
      }}
    />
    <section className="hotel-details">
      <h5 className="hotel-name">{hotel.hotelStaticContent.name}</h5>
      <p className="location">{hotel.hotelStaticContent.neighborhoodName}</p>
    </section>
    <section className="price-details">
      <span className="price">
        {`${decodeHtmlEntityString(hotel.lowestAveragePrice.symbol)}${
          hotel.lowestAveragePrice.amount
        }`}
      </span>
      <span className="rewards">{hotel.rewards.miles} miles</span>
      <button className="button" type="button">
        Select
      </button>
    </section>
  </section>
);

export default HotelCard;
