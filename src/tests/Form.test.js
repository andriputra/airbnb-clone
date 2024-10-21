import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

test('submits the form with property name', () => {
  render(<Form />);
  const input = screen.getByPlaceholderText(/Property Name/i);
  fireEvent.change(input, { target: { value: 'My Property' } });
  fireEvent.submit(screen.getByRole('button'));
  expect(input.value).toBe('My Property');
});
