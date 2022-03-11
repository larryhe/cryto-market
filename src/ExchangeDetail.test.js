import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ExchangeDetail } from './ExchangeDetail';

const model = {
    name: 'Name',
    image: '3x3.svg',
    url: '/stake.fish',
    description: 'description',
    country: 'USA',
    year_established: '2000',
    trust_score_rank: 1,
};

test('ExchangeDetail renders correctly', () => {
    render(<ExchangeDetail model={model} />);
    const linkElement = screen.getByText(/stake.fish/i);
    expect(linkElement).toBeInTheDocument();
    expect(screen.getByText('Go back')).toBeInTheDocument();
});

test('ExchangeDetail go back button', () => {
    const fn = jest.fn();
    render(<ExchangeDetail model={model} setExchangeDetail={fn} />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(fn).toBeCalledWith(null);
});
