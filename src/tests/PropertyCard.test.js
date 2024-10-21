import { render, screen } from '@testing-library/react';
import PropertyCard from './PropertyCard';

test('renders property card with title and description', () => {
  render(<PropertyCard image="https://via.placeholder.com/500" title="Test Property" description="A test property" />);
  const titleElement = screen.getByText(/Test Property/i);
  expect(titleElement).toBeInTheDocument();
});
