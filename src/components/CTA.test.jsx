import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CTA from './CTA';

vi.mock('./MagneticButton', () => ({
  default: ({ children }) => <button>{children}</button>
}));

describe('CTA Component', () => {
  it('renders the main call to action text', () => {
    render(<CTA />);
    expect(screen.getByText(/Your Growth Is Overdue/i)).toBeInTheDocument();
  });

  it('renders the call to action button', () => {
    render(<CTA />);
    expect(screen.getByText(/Get Your Free Consultation/i)).toBeInTheDocument();
  });
});
