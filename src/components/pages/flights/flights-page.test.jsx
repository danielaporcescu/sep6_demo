import React from 'react';
import ReactDOM from 'react-dom';

import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import FlightsPage from './flights-page';

Enzyme.configure({ adapter: new Adapter() })

it('Renders correctly FlightsPage', () => {
    const wrapper = shallow(<FlightsPage />)
  
    expect(toJson(wrapper)).toMatchSnapshot();
  });