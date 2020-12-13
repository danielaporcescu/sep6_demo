import React from 'react';

import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import PlanesPage from './planes-page';

Enzyme.configure({ adapter: new Adapter() })

it('Renders correctly FlightsPage', () => {
    const wrapper = shallow(<PlanesPage />)
  
    expect(toJson(wrapper)).toMatchSnapshot();
  });