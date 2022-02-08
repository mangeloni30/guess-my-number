import { render, screen } from '@testing-library/react';
import App from './App';

test('Should show general l', () => {
  render(<App />);
  expect(screen.getByText("Guess my number!")).toBeVisible();
});
