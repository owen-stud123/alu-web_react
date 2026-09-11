import React from 'react';
import TestRenderer from 'react-test-renderer';
import Login from './index';

describe('<Login />', () => {
  it('renders a <div> with class App-body', () => {
    const testRenderer = TestRenderer.create(<Login />);
    expect(testRenderer.root.findAllByProps({ className: 'App-body' })).toHaveLength(1);
  });

  it('renders two input elements', () => {
    const testRenderer = TestRenderer.create(<Login />);
    expect(testRenderer.root.findAllByType('input')).toHaveLength(2);
  });

  it('renders two label elements', () => {
    const testRenderer = TestRenderer.create(<Login />);
    expect(testRenderer.root.findAllByType('label')).toHaveLength(2);
  });
});