import React from 'react';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import JotaiCounter from './JotaiCounter';

describe('JotaiCounter', () => {
  test('should render JotaiCounter component', () => {
    render(<JotaiCounter />);
    expect(screen.getByText('Jotai Counter')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('should increment counter', async  () => {
    render(<JotaiCounter />);
    const incrementButton = screen.getByText('+');
    await userEvent.click(incrementButton);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('should decrement counter', async () => {
    render(<JotaiCounter />);
    const decrementButton = screen.getByText('-');
    await userEvent.click(decrementButton);
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
