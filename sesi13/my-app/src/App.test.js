import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders header', () => {
  render(<App />);
  const headerText = screen.getByText(/Edit/);
  expect(headerText).toBeInTheDocument();
});

test('counter rendered correctly', () => {
  render(<App />);
  const counterText = screen.getByTestId('counter-text');
  const incrementButton = screen.getByTestId(
    'increment-button'
  );
  const decrementButton = screen.getByTestId(
    'decrement-button'
  );
  expect(counterText).toBeInTheDocument();
  expect(counterText).toHaveTextContent('0');
  expect(incrementButton).toBeInTheDocument();
  expect(incrementButton).toHaveTextContent('+');
  expect(decrementButton).toBeInTheDocument();
  expect(decrementButton).toHaveTextContent('-');
});

test('counter increment working properly', () => {
  render(<App />);
  const counterText = screen.getByTestId('counter-text');
  const incrementButton = screen.getByTestId(
    'increment-button'
  );
  expect(counterText).toHaveTextContent('0');
  fireEvent.click(incrementButton);
  expect(counterText).toHaveTextContent('1');
  fireEvent.click(incrementButton);
  expect(counterText).toHaveTextContent('2');
  fireEvent.click(incrementButton);
  expect(counterText).toHaveTextContent('3');
  fireEvent.click(incrementButton);
  expect(counterText).toHaveTextContent('3');
});

test('counter decrement working properly', () => {
  render(<App />);
  const counterText = screen.getByTestId('counter-text');
  const decrementButton = screen.getByTestId(
    'decrement-button'
  );
  expect(counterText).toHaveTextContent('0');
  fireEvent.click(decrementButton);
  expect(counterText).toHaveTextContent('0');
});

test('pokemons rendered correctly', async () => {
  render(<App />);
  const bulbasaur = await waitFor(
    () => {
      return screen.findByText('bulbasaur');
    },
    { timeout: 5000 }
  );
  expect(bulbasaur).toBeInTheDocument();
});
