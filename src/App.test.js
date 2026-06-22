import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the mobile emissions homepage', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /emissions due/i })
  ).toBeInTheDocument();
});
