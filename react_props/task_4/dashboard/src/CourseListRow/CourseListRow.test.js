import React from 'react';
import TestRenderer from 'react-test-renderer';
import CourseListRow from './index';

describe('<CourseListRow />', () => {
  it('renders a single <th> spanning two columns when isHeader is true and textSecondCell is null', () => {
    const testRenderer = TestRenderer.create(<CourseListRow isHeader={true} />);
    const cells = testRenderer.root.findAllByType('th');
    expect(cells).toHaveLength(1);
    expect(cells[0].props.colSpan).toEqual(2);
  });

  it('renders two <th> cells when isHeader is true and textSecondCell is present', () => {
    const testRenderer = TestRenderer.create(
      <CourseListRow isHeader={true} textSecondCell="Holberton Second" />
    );
    expect(testRenderer.root.findAllByType('th')).toHaveLength(2);
  });

  it('renders two <td> cells inside a <tr> when isHeader is false', () => {
    const testRenderer = TestRenderer.create(<CourseListRow isHeader={false} />);
    expect(testRenderer.root.findAllByType('td')).toHaveLength(2);
  });
});