import React from 'react';
import { render } from '@testing-library/react';
import Instructions from '.';

describe('pages/instructions', () => {
  it('should render the instructions', () => {
    const { container } = render(<Instructions />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <main>
          <h1>
            Instructions
          </h1>
          <p>
            The idea of this test is to give you something which is as close as possible to a real situation where you have to implement some user stories in a codebase. We believe this is the best way to evaluate a candidate because this is what you will do if you get the job. Hopefully, you will find this test challenging and fun. We do appreciate any feedback, good or bad you might have. Do not hesitate to let us know what you think! Help us improve!
          </p>
          <p>
            Let's begin...
          </p>
          <p>
            This codebase is a mono-repo. At the moment you will find:
          </p>
          <ul>
            <li>
              A FE application in Next.js (apps/fe-wtc-tech-test)
            </li>
            <li>
              A React library of components (libs/ui)
            </li>
            <li>
              An Express API (apps/api)
            </li>
            <li>
              E2E tests (apps/fe-wtc-tech-test-e2e)
            </li>
          </ul>
          <p>
            The FE application is already connected to the API (swagger below), so you don't need to worry about that. But there is also a shared library of components which you might want to use. Imagine this a real situation, so when you create a new component, you need to think where to put it. Does it belong to a share component library or in the application?
          </p>
          <p>
            Remember, the API is not persistent, so every time you make a change with PUT etc. it will be saved until you restart.
          </p>
          <h2>
            User Stories
          </h2>
          <ol>
            <li>
              <details>
                <summary>
                  Fetch all movies
                </summary>
                <pre>
                  <h3>
                    Tasks
                  </h3>
                  <ol>
                    <li>
                      <p>
                        As a user, I want to see the list of all movies, so I can see what is available. At the top of the page, I want to see the total number of movies fetched.
                      </p>
                    </li>
                    <li>
                      <p>
                        As a user, I want to be able to see a movie represented as a card which has the movie's poster in the center and its rating at the bottom.
                      </p>
                      <p>
                        The rating is calculated as the average of the 3 values present in the "Ratings" property (from the API).
                      </p>
                      <p>
                        At the top of the card, I want 2 icons that will allow me to save a movie in my watch list and keep track of which movie I have already seen. Additionally, upon clicking, the background's color of the movie's card will change, so I can use colors to easily identify their states.
                      </p>
                      <h4>
                        There are 4 different states:
                      </h4>
                      <ol>
                        <li>
                          <ul>
                            <li>
                              Watched: false
                            </li>
                            <li>
                              Saved: false
                            </li>
                            <li>
                              Background color: #FFF
                            </li>
                          </ul>
                        </li>
                        <li>
                          <ul>
                            <li>
                              Watched: false
                            </li>
                            <li>
                              Saved:true
                            </li>
                            <li>
                              Background color: #ED6606
                            </li>
                          </ul>
                        </li>
                        <li>
                          <ul>
                            <li>
                              Watched: true
                            </li>
                            <li>
                              Saved: false
                            </li>
                            <li>
                              Background color: #EEC907
                            </li>
                          </ul>
                        </li>
                        <li>
                          <ul>
                            <li>
                              Watched: true
                            </li>
                            <li>
                              Saved: true
                            </li>
                            <li>
                              Background color: #049452
                            </li>
                          </ul>
                        </li>
                      </ol>
                    </li>
                  </ol>
                  <h3>
                    Notes & useful links:
                  </h3>
                  <ul>
                    <li>
                      <a
                        href="/assets/design/fe_movies_tech_test.pdf"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Design
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://localhost:3333/swagger-doc"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        API swagger doc
                      </a>
                    </li>
                  </ul>
                </pre>
              </details>
            </li>
            <li>
              <details>
                <summary>
                  Filter Menu component
                </summary>
                <pre>
                  <p>
                    As a user, I want to filter the list of all movies available, so I can better decide based on my preference. I want a menu on the left. I want to use these filters:
                  </p>
                  <p>
                    Sometimes the list of some facets can be too long, so as a user, I want these lists to be shorten. I want to be able to click on a "See more" button to see the rest.
                  </p>
                  <ul>
                    <li>
                      Type
                    </li>
                    <li>
                      Year of release
                    </li>
                    <li>
                      Metascore range
                    </li>
                    <li>
                      Genre
                    </li>
                    <li>
                      Watched already
                    </li>
                    <li>
                      Saved in watched list
                    </li>
                    <li>
                      Name of actor
                    </li>
                    <li>
                      Name of director
                    </li>
                  </ul>
                  <h3>
                    Tasks
                  </h3>
                  <ol>
                    <li>
                      Build the DESKTOP view
                    </li>
                    <li>
                      Build the MOBILE view
                    </li>
                    <li>
                      Connect the views to the API (facets)
                    </li>
                    <li>
                      Add the "See more" feature
                    </li>
                  </ol>
                  <h3>
                    Notes & useful links:
                  </h3>
                  <ul>
                    <li>
                      <a
                        href="/assets/design/fe_movies_tech_test.pdf"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Design
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://localhost:3333/swagger-doc"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        API swagger doc
                      </a>
                    </li>
                    <li>
                      This needs to be a reusable component, so it needs to be flexible. Filters can change with time
                    </li>
                  </ul>
                </pre>
              </details>
            </li>
          </ol>
          <hr />
          <h3>
            The git bit
          </h3>
          <p>
            When you commit your code, you need to follow this patter:
          </p>
          <p>
            user story userStoryNumber.taskNumber. For instance:
          </p>
          <p>
            user story 1.1 
            =&gt;
             if you are working on user story 1 task 1
          </p>
          <p>
            user story 1.2 
            =&gt;
             if you are working on user story 1 task 2
          </p>
          <p>
            When you think you are ready for us to review your work, just push your code up and send an email to your recruiter. You can push even if you are not ready yet, we won't review it until you say it is.
          </p>
          <hr />
          <h3>
            Requirements
          </h3>
          <ul>
            <li>
              Your solution should be responsive
            </li>
            <li>
              Your solution should work on all the latest 2 versions of modern browsers:
              <ul>
                <li>
                  Chrome
                </li>
                <li>
                  Safari
                </li>
                <li>
                  Firefox
                </li>
                <li>
                  Edge
                </li>
              </ul>
              <p>
                <b>
                  What about Explorer 11? If your solution supports it, great! Let us know and we will give you extra points, but it is not required.
                </b>
              </p>
            </li>
            <li>
              Your solution should handle application errors (No data from API, no images, etc.)
            </li>
            <li>
              You can add other things if you require to (lodash modules, ramda, Redux etc.). If you do, we want to know why.
            </li>
            <li>
              Your solution should include MEANINGFUL tests which test some or all the application's logic (you can also add E2E tests with Cypress if you like and if you want to impress us. fe-wtc-tech-test-e2e is there for this reason, but it is not required). Snapshots tests are fine for presentational components, but they might not be enough in other scenarios. We want to see how you test application logic, we give for granted that you know how to write snapshots tests. Do not write unit tests and/or integration tests with Cypress. In this case, Cypress can only be used for e2e but it is not an alternative to unit and integration tests.
            </li>
            <li>
              if you diverge from the default behavior of this repo, you should add at the top or the readme file the new instructions. Please be clear.
            </li>
            <li>
              <p>
                In order to speed up development, if you'd like, you can use, change or extend components already present in the ui library. Those we have included, are just a wrapper around the Material UI one, nothing more. You can import them in this way:
              </p>
              <p>
                <code>
                  import { Button, Progress } from '@mono-nx-test-with-nextjs/ui';
                </code>
              </p>
              <p>
                Same thing for icons. They can be imported directly as a normal component from the library as:
              </p>
              <p>
                <code>
                  import {VisibilityIcon} from '@mono-nx-test-with-nextjs/ui';
                </code>
              </p>
              <p>
                This is the list of the original Material UI components we wrapped:
              </p>
              <ul>
                <li>
                  <a
                    href="https://material-ui.com/components/Grid/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Grid component
                  </a>
                </li>
                <li>
                  <a
                    href="https://material-ui.com/components/Progress/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Progress component
                  </a>
                </li>
                <li>
                  <a
                    href="https://material-ui.com/components/Buttons/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Buttons component
                  </a>
                </li>
                <li>
                  <a
                    href="https://material-ui.com/components/material-icons/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    material-icons component
                  </a>
                </li>
              </ul>
              <b>
                <p>
                  <b>
                    Nothing else is allowed from Material UI or extra UI framework (i.e. Bootstrap). We want you to create new components.
                  </b>
                </p>
              </b>
            </li>
          </ul>
          <details>
            <summary>
              What we check when grading your solution
            </summary>
            <pre>
              <ul>
                <li>
                  If your solution meets accessibility standards (at least level A)
                </li>
                <li>
                  If your solution meets security standards
                </li>
                <li>
                  If your solution produces any errors or messages in the console
                </li>
                <li>
                  How your solution handles application errors
                </li>
                <li>
                  How much your solution follows our instructions
                </li>
                <li>
                  If you use any third-parties and why
                </li>
                <li>
                  How you structure your code
                </li>
                <li>
                  How clean your code is
                </li>
                <li>
                  Your attention to details
                </li>
                <li>
                  How close to the design your solution is
                </li>
                <li>
                  How you write typescript
                </li>
                <li>
                  If your solution runs on our machine after following your instructions (if you change anything and diverge from the default behavior)
                </li>
              </ul>
            </pre>
          </details>
          <details>
            <summary>
              What we DON'T check when grading your solution:
            </summary>
            <pre>
              <ul>
                <li>
                  What you choose as CSS methods (BEM, SMACSS, OOCSS, etc.)
                </li>
                <li>
                  What you choose as CSS "tools" (less, sass, CSS-in-JS)
                </li>
                <li>
                  If you add extra functionalities but you don't do 100% of what requested. If you want to impress us, follow our instructions and do things properly (add all the required tests!), that is enough.
                </li>
                <li>
                  The time you spend on it
                </li>
              </ul>
            </pre>
          </details>
          <hr />
          <h3>
            Notes:
          </h3>
          <ul>
            <li>
              <p>
                Where you are now is where the instructions 
                <span
                  style="font-size: 30px;"
                >
                   ⚙
                </span>
                 
                page is:
                 
                <a
                  href="http://localhost:4200/instructions"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  http://localhost:4200/instructions
                </a>
                . 
                You can always come back here anytime, just click on the button in the footer. 
                <span
                  style="font-size: 30px;"
                >
                  👇
                </span>
              </p>
              <p>
                The FE application home is exposed at:
                 
                <a
                  href="http://localhost:4200"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  http://localhost:4200
                </a>
              </p>
              <p>
                The FE application home is where you need to put your code!
              </p>
            </li>
            <li>
              The API is exposed at http://localhost:3333.
              <p>
                API's endpoint example (movies):
                 
                <a
                  href="http://localhost:3333/api/movies"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  http://localhost:3333/api/movies
                </a>
              </p>
              <p>
                <a
                  href="http://localhost:3333/swagger-doc"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  API swagger doc
                </a>
              </p>
              <p>
                <b>
                  Remember, you can actually hit the endpoints from the swagger doc to see the data. Click on "Try it out" and then execute. You can also play around with params.
                </b>
              </p>
            </li>
            <li>
              <p>
                <a
                  href="/assets/design/fe_movies_tech_test.pdf"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Design
                </a>
              </p>
            </li>
          </ul>
          <p>
            That's it!! Now you can start. We hope you will enjoy this challenge and good luck!
          </p>
          <p>
            <b>
              01001000 01100001 01110000 01110000 01111001 00100000 01100011 01101111 01100100 01101001 01101110 01100111 00100001
            </b>
          </p>
        </main>
      </div>
    `);
  });
});
