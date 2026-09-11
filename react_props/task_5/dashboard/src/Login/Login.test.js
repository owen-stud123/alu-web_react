import React from 'react';
import { shallow } from 'enzyme';
import Login from './index';

describe('<Login />', () => {
  it('renders a <div> with class App-body', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('div.App-body')).toHaveLength(1);
  });

  it('renders two input elements', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('div.App-body input')).toHaveLength(2);
  });

  it('renders two label elements', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('div.App-body label')).toHaveLength(2);
  });
});