import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';

describe('App Component', () => {
  test('renders HomePage at the root route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getByText(/Your questions, answered/i)).toBeInTheDocument();
  });
});
