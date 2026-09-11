import React from 'react';
import TestRenderer from 'react-test-renderer';
import Notifications from './index';

describe('<Notifications />', () => {
  it('renders the menu item', () => {
    const testRenderer = TestRenderer.create(<Notifications />);
    expect(testRenderer.root.findAllByProps({ className: 'menuItem' })).toHaveLength(1);
  });

  it('does not render the panel when displayDrawer is false', () => {
    const testRenderer = TestRenderer.create(<Notifications />);
    expect(testRenderer.root.findAllByProps({ className: 'Notifications' })).toHaveLength(0);
  });

  it('renders the panel when displayDrawer is true', () => {
    const testRenderer = TestRenderer.create(<Notifications displayDrawer={true} />);
    expect(testRenderer.root.findAllByProps({ className: 'Notifications' })).toHaveLength(1);
  });
});