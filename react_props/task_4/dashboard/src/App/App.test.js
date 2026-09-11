import React from 'react';
import TestRenderer from 'react-test-renderer';
import App from './index';
import Header from '../Header';
import Footer from '../Footer';
import Login from '../Login';
import Notifications from '../Notifications';
import CourseList from '../CourseList';

describe('<App />', () => {
  it('renders an <App /> component', () => {
    const testRenderer = TestRenderer.create(<App />);
    expect(testRenderer.toJSON()).not.toBeNull();
  });

  it('renders Notifications, Header, Login and Footer by default', () => {
    const testRenderer = TestRenderer.create(<App />);
    expect(testRenderer.root.findAllByType(Notifications)).toHaveLength(1);
    expect(testRenderer.root.findAllByType(Header)).toHaveLength(1);
    expect(testRenderer.root.findAllByType(Login)).toHaveLength(1);
    expect(testRenderer.root.findAllByType(Footer)).toHaveLength(1);
  });

  it('does not display CourseList when not logged in', () => {
    const testRenderer = TestRenderer.create(<App />);
    expect(testRenderer.root.findAllByType(CourseList)).toHaveLength(0);
  });

  it('hides Login and shows CourseList when isLoggedIn is true', () => {
    const testRenderer = TestRenderer.create(<App isLoggedIn={true} />);
    expect(testRenderer.root.findAllByType(Login)).toHaveLength(0);
    expect(testRenderer.root.findAllByType(CourseList)).toHaveLength(1);
  });
});