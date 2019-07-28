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

const HotelCard = ({
  hotel: {
    rewards: { miles },
    lowestAveragePrice: { symbol, amount },
    hotelStaticContent: {
      name,
      neighborhoodName,
      stars,
      mainImage: { url }
    }
  }
}) => {
  const fallBackBg = `https://via.placeholder.com/360.jpg/6dba4a/ffffff?text=“${'⋆'.repeat(
    stars
  )}”`;

  const backgroundImageStyle = {
    backgroundImage: `url('${url}'), url('${fallBackBg}')`
  };

  return (
    <section className="hotel-card">
      <figure className="image" style={backgroundImageStyle} />
      <section className="hotel-details">
        <h5 className="hotel-name">{name}</h5>
        <p className="location">{neighborhoodName}</p>
      </section>
      <section className="price-details">
        <span className="price">
          {`${decodeHtmlEntityString(symbol)}${amount}`}
        </span>
        <span className="rewards">{miles} miles</span>
        <button className="button" type="button">
          Select
        </button>
      </section>
    </section>
  );
};

export default HotelCard;
