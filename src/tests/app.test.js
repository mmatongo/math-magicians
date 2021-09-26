import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('Render App.js and verify that pages render correctly', () => {
    render(<App />);
    screen.getByText('Welcome to our page!', { exact: true });
  });

  it('Switch to Calculator page and run check', () => {
    render(<App />);

    fireEvent.click(screen.getByText('Calculator'), { exact: true });

    screen.getByText("Let's do some math!");
  });

  it('Switch to Quote page and run check', () => {
    render(<App />);

    fireEvent.click(screen.getByText('Quote'), { exact: true });

    const quoteText = 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. - William Paul Thurston';
    screen.getByText(quoteText);
  });
});
