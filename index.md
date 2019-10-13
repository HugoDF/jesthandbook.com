<style>
  input[type="submit"] {
    display: block;
    width: 100%;
    background: #26A8ED;
    border: 0;
    border-radius: 0.25em;
    color: #fff;
    outline: 0;
    padding: 0.75em 1em;
    width: 100%;
    font-size: 16px;
    box-sizing: border-box;
    cursor: pointer;
    margin-bottom: 0.5em;
  }
  label {
    color: #7e8a9a;
    margin-bottom: 0.25em;
    display: inline-block;
  }
  input[type="email"] {
    background-color: 0 0;
    border: 1px solid #ced3d9;
    border-radius: 4px;
    display: block;
    padding: 0.75em 1em;
    width: 100%;
    margin-bottom: 1em;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1.4em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }
  .logo {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    display: flex;
  }
</style>

> 🚧 _Coming soon_

<img src="./jest.png" class="logo" width="100px" alt="Jest Logo" />

Learn Advanced JavaScript Testing patterns with Jest.


Get testing superpowers by leveraging underused Jest features.

<form
  action="https://buttondown.email/api/emails/embed-subscribe/hugo"
  method="post"
  target="popupwindow"
  onsubmit="window.open('https://buttondown.email/hugo', 'popupwindow')"
  class="embeddable-buttondown-form"
>
  <label for="bd-email">Subscribe for free resources on Jest's best features and a discount on the final handbook</label>
  <input type="email" name="email" id="bd-email">
  <input type="hidden" value="1" name="embed"></input>
  <input type="submit" value="Subscribe"></input>
</form>


## Learning outcomes

> 🚧 Work in progress
> 
> [(https://buttondown.email/hugo)

1. Gain a deep understanding of the options available to the Jest CLI and how to use different views to write and debug tests more effectively. 
2. Leverage spying, stubbing and module import interception functionality in tests and create mock JavaScript object instances, stub ES6 classes and mock out global objects.
3. Be able to use and contrast 2 approaches to testing backend applications with Jest as well as illustrate asynchronous testing patterns.
4. Employ advanced Jest partial matchers to write tests with high specificity and reduce toil when updating application code.
5. Leverage Jest's built-in coverage tool to set minimum coverage thresholds, find parts of the code that aren't tested and how to disable it in specific cases.

## Table of Contents

> 🚧 Work in progress
> 
> [Subscribe for free resources on Jest's best features and a discount on the final handbook](https://buttondown.email/hugo)

1. Jest/Jest CLI expert - Debugging tests
    - run jest tests sequentially why/how
    - run single file/folder
    - run single test
    - interactive watch mode (filtering by file name, failing tests, test filename regex)
    - running in CI mode
2. Spying, stubbing - become a stub/mock function assertion pro
    - todo assertion reference -> X scenarios
    - 4 scenarios for mocking the current date (how to mock a global object)
    - stub ES6 class "extends"
    - master Object.defineProperty to create mock JavaScript application object instances
    - 3 approaches to mocking of CommonJS and ES6 imports
    - **Activity**: TDD of a recursive tree traversal/update algorithm with Jest
3. Testing asynchronous code
    - `test('a', async () => { await codeUnderTest() })`
    - Testing for asynchronous throws (`return expect().rejects`)
    - failing a test programmatically `fail()`, `throw 'foo'`
4. Partial matches
    - objectContaining
    - arrayContaining
    - nested arrayContaining, objectContaining
    - assert over only some of the parameters `expect.anything()`
    - `expect.any(Function)` etc.
5. Write unit tests for Express.js/Connect-based server applications
    - mock request/response objects in-memory
    - leverage supertest
6. Coverage in Jest
    - coverage thresholds
    - using Jest coverage reports to find code that's not being exercised
    - 6 ways to exclude a line, file or statement from coverage reports

<form
  action="https://buttondown.email/api/emails/embed-subscribe/hugo"
  method="post"
  target="popupwindow"
  onsubmit="window.open('https://buttondown.email/hugo', 'popupwindow')"
  class="embeddable-buttondown-form"
>
  <label for="bd-email">Subscribe for free resources on Jest's best features and a discount on the final handbook</label>
  <input type="email" name="email" id="bd-email">
  <input type="hidden" value="1" name="embed"></input>
  <input type="submit" value="Subscribe"></input>
</form>


<script async defer src="https://cdn.simpleanalytics.io/hello.js"></script>
<noscript><img src="https://api.simpleanalytics.io/hello.gif" alt=""></noscript>
