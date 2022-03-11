import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ExchangeList } from './ExchangeList';

const model = {
    name: 'Name',
    image: '3x3.svg',
    url: '/stake.fish',
    description: 'description',
    country: 'USA',
    year_established: '2000',
    trust_score_rank: 1,
    id: 1,
};

test('ExchangeList renders correctly', () => {
    const { asFragment } = render(
        <ExchangeList items={[model]} pageCount={1} currentPage={1} />
    );

    expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
          <div
            class="exchange-list"
          >
            <table
              class="table"
            >
              <thead>
                <tr>
                  <th
                    scope="col"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                  >
                    Country
                  </th>
                  <th
                    scope="col"
                  >
                    Trust rank
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th
                    scope="row"
                  >
                    <div
                      class="card"
                    >
                      <div
                        class="card-body"
                      >
                        <img
                          alt="Name"
                          src="3x3.svg"
                        />
                        <a
                          href="/stake.fish"
                        >
                          Name
                        </a>
                      </div>
                    </div>
                  </th>
                  <td>
                    USA
                  </td>
                  <td>
                    1
                  </td>
                </tr>
              </tbody>
            </table>
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
                  class="page-item disabled"
                >
                  <button
                    class="page-link"
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </DocumentFragment>
    `);
});

test('ExchangeList to setExchangeDetail', () => {
    const fn = jest.fn();
    render(
        <ExchangeList
            items={[model]}
            pageCount={1}
            currentPage={1}
            setExchangeDetail={fn}
        />
    );
    const img = screen.getByRole('img');
    userEvent.click(img);
    expect(fn).toBeCalledWith(model);
});
