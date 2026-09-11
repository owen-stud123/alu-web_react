import React from 'react';
import TestRenderer from 'react-test-renderer';
import CourseList from './index';
import CourseListRow from '../CourseListRow';

describe('<CourseList />', () => {
  it('renders a table with id CourseList', () => {
    const testRenderer = TestRenderer.create(<CourseList />);
    expect(testRenderer.root.findAllByProps({ id: 'CourseList' })).toHaveLength(1);
  });

  it('renders five CourseListRow rows', () => {
    const testRenderer = TestRenderer.create(<CourseList />);
    expect(testRenderer.root.findAllByType(CourseListRow)).toHaveLength(5);
  });
});