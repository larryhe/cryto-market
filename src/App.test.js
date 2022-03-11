import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

beforeEach(() => {
    jest.spyOn(global, 'fetch').mockImplementation(() =>
        Promise.resolve({
            headers: { get: () => 1 },
            json: () =>
                Promise.resolve([
                    {
                        name: 'Name',
                        image: '3x3.svg',
                        url: '/stake.fish',
                        description: 'description',
                        country: 'USA',
                        year_established: '2000',
                        trust_score_rank: 1,
                        id: 1,
                    },
                ]),
        })
    );
});
afterEach(() => {
    global.fetch.mockRestore();
});

test('ExchangeList renders with fetched data', async () => {
    render(<App />);
    await waitFor(() => screen.findByText('Previous'));
    expect(screen.getByText(/Previous/)).toBeInTheDocument();
});

test('view ExchangeDetail page', async () => {
    render(<App />);
    await waitFor(() => screen.findByText('Previous'));
    expect(screen.getByText(/Previous/)).toBeInTheDocument();
    const img = screen.getByRole('img', { name: 'Name' });
    userEvent.click(img);
    expect(screen.getByText(/Go back/)).toBeInTheDocument();
});
