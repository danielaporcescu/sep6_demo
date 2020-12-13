import React from 'react';

import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import WeatherPage from './/weather-page';

Enzyme.configure({ adapter: new Adapter() })

it('Renders correctly FlightsPage', () => {
    const wrapper = shallow(<WeatherPage />)
  
    expect(toJson(wrapper)).toMatchSnapshot();
  });