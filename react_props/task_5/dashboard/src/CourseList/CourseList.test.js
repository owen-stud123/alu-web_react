import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './index';
import CourseListRow from '../CourseListRow';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

describe('<CourseList />', () => {
  it('renders an <CourseList /> component with an empty list', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper).toHaveLength(1);
    const wrapperTwo = shallow(<CourseList listCourses={[]} />);
    expect(wrapperTwo).toHaveLength(1);
  });

  it('renders five CourseListRow rows with the right props', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
    expect(wrapper.find(CourseListRow).get(0).props.textFirstCell).toEqual('Available courses');
    expect(wrapper.find(CourseListRow).get(0).props.isHeader).toBe(true);
    expect(wrapper.find(CourseListRow).get(1).props.textFirstCell).toEqual('Course name');
    expect(wrapper.find(CourseListRow).get(1).props.textSecondCell).toEqual('Credit');
    expect(wrapper.find(CourseListRow).get(1).props.isHeader).toBe(true);
    expect(wrapper.find(CourseListRow).get(2).props.textFirstCell).toEqual('ES6');
    expect(wrapper.find(CourseListRow).get(2).props.textSecondCell).toEqual(60);
    expect(wrapper.find(CourseListRow).get(3).props.textFirstCell).toEqual('Webpack');
    expect(wrapper.find(CourseListRow).get(3).props.textSecondCell).toEqual(20);
    expect(wrapper.find(CourseListRow).get(4).props.textFirstCell).toEqual('React');
    expect(wrapper.find(CourseListRow).get(4).props.textSecondCell).toEqual(40);
  });
});