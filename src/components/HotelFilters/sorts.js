import Utils from '../../utils/Utils';

const sortByOption = (
  { target: { value: optionSelected } },
  hotels,
  listHandler
) => {
  const cloned = Utils.clone(hotels);

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

  listHandler(cloned);
};

export default sortByOption;
