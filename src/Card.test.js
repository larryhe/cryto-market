import { render } from '@testing-library/react';
import { Card } from './Card';

test('Card renders correctly', () => {
    const { asFragment } = render(
        <Card name="Name" image="3x3.svg" url="/stake.fish" />
    );
    expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
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
        </DocumentFragment>
    `);
});
