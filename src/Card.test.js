import { render, screen } from '@testing-library/react';
import { Card } from './Card';

test('Card renders correctly', () => {
    render(<Card name="Name" image="3x3.svg" url="/stake.fish" />);
    const linkElement = screen.getByText(/name/i);
    expect(linkElement).toBeInTheDocument();
});
