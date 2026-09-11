import React from 'react';
import TestRenderer from 'react-test-renderer';
import App from './index';

describe('<App />', () => {
  it('renders an <App /> component', () => {
    const testRenderer = TestRenderer.create(<App />);
    expect(testRenderer.toJSON()).not.toBeNull();
  });
});