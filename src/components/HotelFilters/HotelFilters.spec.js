import React from 'react';
import { mount } from 'enzyme';

import sampleData from './sampleData';
import HotelFilters from './HotelFilters';

describe('HotelFilters', () => {
  const resultingList = [];

  const wrapper = mount(
    <HotelFilters
      originalData={sampleData}
      hotels={sampleData}
      listHandler={results => resultingList.push(...results)}
      resetHotelList={() => {}}
    />
  );

  afterEach(() => {
    resultingList.splice(0, resultingList.length);
  });

  it('renders the component', () => {
    expect(wrapper.find('.filters').exists()).toBe(true);
  });

  it('returns filtered data given some capitalized input', () => {
    wrapper.find('.input').simulate('change', { target: { value: 'H' } });

    expect(
      resultingList
        .map(({ hotelStaticContent: { name } }) => name)
        .every(hotelName =>
          [
            'Hampton Inn Chicago-Naperville',
            'Homewood Suites by Hilton Chicago-Lincolnshire'
          ].includes(hotelName)
        )
    );
  });

  it('returns filtered data given some lowercased input', () => {
    wrapper.find('.input').simulate('change', { target: { value: 'h' } });

    expect(
      resultingList
        .map(({ hotelStaticContent: { name } }) => name)
        .every(hotelName =>
          [
            'Hampton Inn Chicago-Naperville',
            'Homewood Suites by Hilton Chicago-Lincolnshire'
          ].includes(hotelName)
        )
    );
  });

  it('returns sorted data by price (ascending)', () => {
    wrapper
      .find('.select')
      .simulate('change', { target: { value: 'price-asc' } });

    expect(
      resultingList.map(({ lowestAveragePrice: { amount } }) => amount)
    ).toEqual([123, 987, 947, 234].sort((a, b) => a - b));
  });

  it('returns sorted data by price (descending)', () => {
    wrapper
      .find('.select')
      .simulate('change', { target: { value: 'price-desc' } });

    expect(
      resultingList.map(({ lowestAveragePrice: { amount } }) => amount)
    ).toEqual([123, 987, 947, 234].sort((a, b) => b - a));
  });

  it('returns sorted data by recommended (rating, desc)', () => {
    wrapper
      .find('.select')
      .simulate('change', { target: { value: 'recommended' } });

    expect(
      resultingList.map(({ hotelStaticContent: { rating } }) => rating)
    ).toEqual([8.5, 9.1, 9.2, 8.8].sort((a, b) => b - a));
  });
});
