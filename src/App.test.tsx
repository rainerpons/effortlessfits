import { render, screen } from '@testing-library/react';
import App from './App';

test('renders component', () => {
  render(<App />);
  const appTitle = screen.getByTestId('appTitle');
  expect(appTitle).toBeInTheDocument();
});
