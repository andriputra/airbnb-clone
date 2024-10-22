import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Form from '../components/Form';

describe('Form Component', () => {
  test('renders input and button', () => {
    render(<Form />);
    const inputElement = screen.getByPlaceholderText(/property name/i);
    const buttonElement = screen.getByRole('button', { name: /update your estimate/i });

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test('allows user to type in the input field', () => {
    render(<Form />);
    const inputElement = screen.getByPlaceholderText(/property name/i);
    
    fireEvent.change(inputElement, { target: { value: 'My Property' } });
    expect(inputElement.value).toBe('My Property');
  });

  test('calls console.log on submit', () => {
    console.log = jest.fn(); // Mock console.log
    render(<Form />);
    const inputElement = screen.getByPlaceholderText(/property name/i);
    const buttonElement = screen.getByRole('button', { name: /update your estimate/i });

    fireEvent.change(inputElement, { target: { value: 'My Property' } });
    fireEvent.click(buttonElement);

    expect(console.log).toHaveBeenCalledWith("Property Name: ", "My Property");
  });
});
