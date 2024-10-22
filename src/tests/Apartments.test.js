import React from 'react';
import { render, screen } from '@testing-library/react';
import Apartments from '../components/Apartments';

describe('Apartments Component', () => {
  beforeEach(() => {
    render(<Apartments />);
  });

  test('renders the main heading', () => {
    const heading = screen.getByText(/need a place where you can host\? try airbnb-friendly apartments/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders the apartment images and descriptions', () => {
    const apartments = [
      {
        imgSrc: '/assets/img/apartment1.webp',
        description: 'Nani Resident & Host Dallas, TX',
      },
      {
        imgSrc: '/assets/img/apartment2.webp',
        description: 'Jeff and Amador Residents & Hosts San Diego, CA',
      },
      {
        imgSrc: '/assets/img/apartment3.webp',
        description: 'Buddy Resident & Host Denver, CO',
      },
    ];

    apartments.forEach(({ imgSrc, description }) => {
      const image = screen.getByAltText(new RegExp(description.split('\n')[0], 'i'));
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', imgSrc);

      const textElement = screen.getByText(description, { exact: false });
      expect(textElement).toBeInTheDocument();
    });
  });

  test('renders the additional information', () => {
    const additionalInfo = screen.getByText(/weve partnered with apartment buildings across the us so you can rent a place to live and host on airbnb part-time/i);
    expect(additionalInfo).toBeInTheDocument();

    const earningsInfo = screen.getByText(/\$3650\/year/i);
    expect(earningsInfo).toBeInTheDocument();
  });

  test('renders the explore cities button', () => {
    const button = screen.getByRole('button', { name: /explore cities/i });
    expect(button).toBeInTheDocument();
  });
});
