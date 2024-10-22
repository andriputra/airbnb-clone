import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer Component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test('renders Support section with correct links', () => {
    const supportSection = screen.getByText(/support/i);
    expect(supportSection).toBeInTheDocument();
    
    const supportLinks = [
      'Help Center',
      'AirCover',
      'Anti-discrimination',
      'Disability support',
      'Cancellation options',
      'Report neighborhood concern'
    ];
    
    supportLinks.forEach(link => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  test('renders Hosting section with correct links', () => {
    const hostingSection = screen.getByText(/hosting/i);
    expect(hostingSection).toBeInTheDocument();
    
    const hostingLinks = [
      'Airbnb your home',
      'AirCover for Hosts',
      'Hosting resources',
      'Community forum',
      'Hosting responsibly',
      'Airbnb-friendly apartments',
      'Join a free Hosting class',
      'Find a co‑host'
    ];
    
    hostingLinks.forEach(link => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  test('renders Airbnb section with correct links', () => {
    const airbnbSection = screen.getByText(/airbnb/i);
    expect(airbnbSection).toBeInTheDocument();
    
    const airbnbLinks = [
      'Newsroom',
      'New features',
      'Careers',
      'Investors',
      'Gift cards',
      'Airbnb.org emergency stays'
    ];
    
    airbnbLinks.forEach(link => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  
});
