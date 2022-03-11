import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pagination } from './Pagination';

test('Pagination renders correctly', () => {
    const { asFragment } = render(
        <Pagination pageCount={2} currentPage={1} limit={2} />
    );

    expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
          <nav
            aria-label="Page navigation example"
          >
            <ul
              class="pagination justify-content-center"
            >
              <li
                class="page-item disabled"
              >
                <button
                  class="page-link"
                >
                  Previous
                </button>
              </li>
              <li
                class="page-item active"
              >
                <button
                  class="page-link"
                >
                  1
                </button>
              </li>
              <li
                class="page-item"
              >
                <button
                  class="page-link"
                >
                  2
                </button>
              </li>
              <li
                class="page-item"
              >
                <button
                  class="page-link"
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </DocumentFragment>
    `);
});

test('Pagination to jump to page 2', () => {
    const fn = jest.fn();
    render(
        <Pagination
            pageCount={2}
            currentPage={1}
            limit={2}
            setCurrentPage={fn}
        />
    );
    const btn = screen.getByText(/^2$/);
    userEvent.click(btn);
    expect(fn).toBeCalledWith(2);
});
