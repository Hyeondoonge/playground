import { render, screen } from '@testing-library/react';
import App from './App';

const p1 = { age: Number, address: { city: 'daegu', lroad: 'Jang-san' } };

test('2 두 개를 더하기', () => {
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();

  expect(2 + 2).toBe(4);
});

test('객체 비교하기', () => {
  expect(p1).toBe({ age: Number, address: { city: 'daegu', lroad: 'Jang-san' } });
  expect(p1).toEqual({ age: Number, address: { city: 'daegu', lroad: 'Jang-san' } });
});
