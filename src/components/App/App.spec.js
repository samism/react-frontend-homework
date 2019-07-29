import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const wrapper = shallow(<App isLoading={false} />);

  it('renders the component', () => {
    expect(wrapper.find('.app-container').exists()).toBe(true);
  });
});
