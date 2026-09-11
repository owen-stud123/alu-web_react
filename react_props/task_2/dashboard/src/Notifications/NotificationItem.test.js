import React from 'react';
import TestRenderer from 'react-test-renderer';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  it('renders a <li> element', () => {
    const testRenderer = TestRenderer.create(<NotificationItem type="default" value="test" />);
    testRenderer.root.findByType('li');
  });

  it('renders the value and type correctly', () => {
    const testRenderer = TestRenderer.create(<NotificationItem type="default" value="test" />);
    const li = testRenderer.root.findByType('li');
    expect(li.props['data-notification-type']).toEqual('default');
    expect(li.children.join('')).toEqual('test');
  });

  it('renders valid html when the html prop is set', () => {
    const testRenderer = TestRenderer.create(
      <NotificationItem type="urgent" html={{ __html: '<u>test</u>' }} />
    );
    const li = testRenderer.root.findByType('li');
    expect(li.props.dangerouslySetInnerHTML).toEqual({ __html: '<u>test</u>' });
  });
});