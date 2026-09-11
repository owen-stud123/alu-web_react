import React from 'react';
import TestRenderer from 'react-test-renderer';
import Header from './index';

describe('<Header />', () => {
  it('renders a <div> with class App-header', () => {
    const testRenderer = TestRenderer.create(<Header />);
    const tree = testRenderer.toJSON();
    expect(tree.type).toEqual('div');
    expect(tree.props.className).toEqual('App-header');
  });

  it('renders the school dashboard heading', () => {
    const testRenderer = TestRenderer.create(<Header />);
    expect(testRenderer.root.findAllByType('h1')).toHaveLength(1);
  });
});