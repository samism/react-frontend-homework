import React from 'react';
import { shallow } from 'enzyme';
import HotelCard from './HotelCard';

describe('HotelCard', () => {
  const propFixture = {
    rewards: { miles: 0 },
    lowestAveragePrice: {
      symbol: '$',
      amount: 'xxx'
    },
    hotelStaticContent: {
      name: 'Awesome Hotel',
      neighborhoodName: 'Chicago',
      mainImage: {
        url: 'https://via.placeholder.com/150?text=Awesome+Hotel'
      }
    }
  };

  const wrapper = shallow(<HotelCard hotel={propFixture} />);

  it('renders the component', () => {
    expect(wrapper.find('.hotel-card').exists()).toBe(true);
  });
});
