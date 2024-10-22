import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header Component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  test('renders the logo', () => {
    const logo = screen.getByAltText(/airbnb logo/i);
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/assets/img/logo-airbnb.png');
  });

  test('renders the title text', () => {
    const titleText = screen.getByText(/ready to airbnb it\?/i);
    expect(titleText).toBeInTheDocument();
  });

  test('renders the setup button', () => {
    const setupButton = screen.getByRole('button', { name: /airbnb setup/i });
    expect(setupButton).toBeInTheDocument();
    expect(setupButton).toHaveClass('bg-gradient-to-r from-red-500 via-red-600 to-purple-500');
  });
});
