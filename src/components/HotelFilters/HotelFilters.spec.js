import React from 'react';
import { shallow } from 'enzyme';
import HotelFilters from './HotelFilters';

describe('HotelFilters', () => {
  const wrapper = shallow(
    <HotelFilters
      hotels={[]}
      listHandler={() => {}}
      resetHotelList={() => {}}
    />
  );

  it('renders the component', () => {
    expect(wrapper.find('.filters').exists()).toBe(true);
  });
});
