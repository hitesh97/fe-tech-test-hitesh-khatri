import React from 'react';
import { render } from '@testing-library/react';

import { Footer } from '.';

describe('<Footer />', () => {
  it('should render the footer', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <footer
          class="makeStyles-footer-1"
        >
          <a
            aria-disabled="false"
            class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSecondary"
            href="/instructions"
            tabindex="0"
          >
            <span
              class="MuiButton-label"
            >
              Instructions
            </span>
            <span
              class="MuiTouchRipple-root"
            />
          </a>
          <a
            aria-disabled="false"
            class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSecondary"
            href="/assets/design/fe_movies_tech_test.pdf"
            tabindex="0"
          >
            <span
              class="MuiButton-label"
            >
              Design
            </span>
            <span
              class="MuiTouchRipple-root"
            />
          </a>
          <a
            aria-disabled="false"
            class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSecondary"
            href="http://localhost:3333/swagger-doc"
            tabindex="0"
          >
            <span
              class="MuiButton-label"
            >
              Swagger
            </span>
            <span
              class="MuiTouchRipple-root"
            />
          </a>
          <a
            aria-disabled="false"
            class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSecondary"
            href="http://localhost:4400/"
            tabindex="0"
          >
            <span
              class="MuiButton-label"
            >
              Storybook
            </span>
            <span
              class="MuiTouchRipple-root"
            />
          </a>
        </footer>
      </div>
    `);
  });
});
