import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Notifications } from './index';

describe('<Notifications />', () => {
  it('renders a <div> with class Notifications', () => {
    const testRenderer = TestRenderer.create(<Notifications />);
    expect(testRenderer.root.findAllByProps({ className: 'Notifications' })).toHaveLength(1);
  });

  it('renders the three default notification items', () => {
    const testRenderer = TestRenderer.create(<Notifications />);
    expect(testRenderer.root.findAllByType('li')).toHaveLength(3);
  });
});