const filterByName = (
  { target: { value: textTyped } },
  hotels,
  listHandler
) => {
  const results = hotels.filter(hotel => {
    const {
      hotelStaticContent: { name }
    } = hotel;

    return name.toLowerCase().startsWith(textTyped.toLowerCase());
  });

  listHandler(results);
};

export default filterByName;
