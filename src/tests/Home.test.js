import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders the header with the Airbnb logo', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Airbnb/i);
  expect(linkElement).toBeInTheDocument();
});
