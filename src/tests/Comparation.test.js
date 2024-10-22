import React from 'react';
import { render, screen } from '@testing-library/react';
import Comparation from '../components/Comparation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

describe('Comparation Component', () => {
  beforeEach(() => {
    render(<Comparation />);
  });

  test('renders the logo', () => {
    const logo = screen.getByAltText(/placeholder/i);
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/assets/img/logo-img.webp');
  });

  test('renders the title', () => {
    const title = screen.getByText(/airbnb it with top‑to‑bottom protection/i);
    expect(title).toBeInTheDocument();
  });

  test('renders the comparison table', () => {
    const tableRows = screen.getAllByRole('row');
    expect(tableRows).toHaveLength(data.length + 1); // +1 for the header row

    data.forEach((item) => {
      const title = screen.getByText(item.title);
      expect(title).toBeInTheDocument();

      const airbnbIcon = screen.getByText((content, element) => {
        return element.tagName.toLowerCase() === 'svg' && content === '';
      });
      expect(airbnbIcon).toHaveClass(item.airbnbStatus === faCheck ? 'text-green-500' : 'text-red-500');

      const competitorsIcon = screen.getByText((content, element) => {
        return element.tagName.toLowerCase() === 'svg' && content === '';
      });
      expect(competitorsIcon).toHaveClass(item.competitorsStatus === faCheck ? 'text-green-500' : 'text-red-500');
    });
  });
});
