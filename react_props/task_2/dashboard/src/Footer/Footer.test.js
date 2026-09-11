import React from 'react';
import TestRenderer from 'react-test-renderer';
import Footer from './index';

describe('<Footer />', () => {
  it('renders a <div> with class App-footer', () => {
    const testRenderer = TestRenderer.create(<Footer />);
    const tree = testRenderer.toJSON();
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toEqual('App-footer');
  });
});