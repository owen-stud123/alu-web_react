import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

describe('<Header />', () => {
  it('renders an <Header /> component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders a <div> with class App-header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('div.App-header')).toHaveLength(1);
  });
});