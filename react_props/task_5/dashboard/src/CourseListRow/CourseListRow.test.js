import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './index';

describe('<CourseListRow />', () => {
  it('renders an <CourseListRow /> component', () => {
    const wrapper = shallow(<CourseListRow />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders a single <th> spanning two columns when isHeader is true and textSecondCell is null', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} />);
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').get(0).props.colSpan).toEqual(2);
  });

  it('renders two <th> cells when isHeader is true and textSecondCell is present', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textSecondCell="Holberton Second" />);
    expect(wrapper.find('th')).toHaveLength(2);
  });

  it('renders two <td> elements inside a <tr> when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} />);
    expect(wrapper.find('tr td')).toHaveLength(2);
  });
});