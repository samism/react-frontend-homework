import React from 'react';
import { shallow } from 'enzyme';
import CouldntFetchListings from './CouldntFetchListings';

describe('App', () => {
  const wrapper = shallow(<CouldntFetchListings />);

  it('renders the component', () => {
    expect(wrapper.find('.couldnt-fetch').exists()).toBe(true);
  });
});
