import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Nav from '../components/Nav';

it('Navbar renders the UI as expected', () => {
  const tree = renderer.create(
    <Router>
      <Nav />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
