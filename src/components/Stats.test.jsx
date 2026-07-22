import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Stats from './Stats';

describe('Stats Component', () => {
  it('renders the stats titles', () => {
    render(<Stats />);
    expect(screen.getByText(/The Scoreboard/i)).toBeInTheDocument();
  });

  it('renders all stat labels', () => {
    render(<Stats />);
    expect(screen.getByText('Projects Completed')).toBeInTheDocument();
    expect(screen.getByText('Client Satisfaction')).toBeInTheDocument();
    expect(screen.getByText('Average ROI Growth')).toBeInTheDocument();
    expect(screen.getByText('Industries Served')).toBeInTheDocument();
  });
});
