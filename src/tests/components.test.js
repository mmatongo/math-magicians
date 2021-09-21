import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Calculator from '../components/Calculator';
import Nav from '../components/Nav';
import CalcButton from '../components/CalcButton';
import CalculatorPage from '../pages/CalculatorPage';
import Home from '../pages/Home';
import Quote from '../pages/Quote';

describe('Test that all components are rendering just fine.', () => {
  it('Render the Calculator', () => {
    const tree = renderer
      .create(<Calculator />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Render the Nav', () => {
    const tree = renderer
      .create(<Router><Nav /></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Render the CalcButton.', () => {
    const text = 'test';
    const onClick = jest.fn(() => {});
    const calcObj = { string: 'test' };
    const tree = renderer
      .create(<CalcButton text={text} onClick={onClick} mathObj={calcObj} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Render the CalculatorPage.', () => {
    const tree = renderer
      .create(<CalculatorPage />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Render the Home page.', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Quote page renders correctly', () => {
    const tree = renderer
      .create(<Quote />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
