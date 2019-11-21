<style>
  button {
    display: block;
    width: 100%;
    max-width: 320px;
    margin: 2em auto;
    background: #26A8ED;
    border: 0;
    border-radius: 0.25em;
    color: #fff;
    outline: 0;
    padding: 1em 1.5em;
    font-size: 16px;
    box-sizing: border-box;
    cursor: pointer;
  }
  .logo {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    display: flex;
  }
</style>
<img src="https://i.imgur.com/XxWABVw.png" class="logo" width="500px" alt="Jest Logo" />

Learn Advanced JavaScript Testing patterns with Jest.


Get testing superpowers by leveraging underused Jest features.

## Who is this for?


You're a JavaScript developer who wants to learn unit testing?

You come from a non-JS background and want to apply your existing unit testing knowledge in JavaScript?

You're proficient at testing in JavaScript and would like to learn Jest best-practices and featureset?

The Jest Handbook is for you.

<button class="cp-button" data-seller="hugo" data-checkout="jest-handbook">Pre-order now</button>


## Learning outcomes

1. Gain a deep understanding of the options available to the Jest CLI and how to use different views to write and debug tests more effectively. 
2. Leverage spying, stubbing and module import interception functionality in tests and create mock JavaScript object instances, stub ES6 classes and mock out global objects.
3. Use and contrast 2 approaches to testing backend applications with Jest as well as illustrate synchronous and asynchronous testing patterns.
4. Employ advanced Jest partial matchers to write tests with high specificity and reduce toil when updating application code.
5. Leverage Jest's built-in coverage tool to set minimum coverage thresholds, find parts of the code that aren't tested and how to disable it in specific cases.

## Table of Contents

1. Jest/Jest CLI expert - Debugging tests
   - run jest tests sequentially why/how
   - run single file/folder
   - run single test
   - interactive watch mode (filtering by file name, failing tests, test filename regex)
   - running in CI mode

2. Spying, stubbing - become a stub/mock function assertion pro
   - mock assertion reference
   - set, clear, reset mocks and spies
   - example: mocking the current date (how to mock a global object/class) -> 4 examples
   - stub ES6 class "extends"
   - master Object.defineProperty to create mock JavaScript application object instances
   - Mocking of CommonJS and ES6 imports

5. Testing synchronous vs asynchronous code
   - `test('a', async () => { await codeUnderTest() })`
   - Testing for asynchronous throws (`return expect().rejects`)
   - mocking output of synchronous and asynchronous functions
   - failing a test programmatically `fail()`, `throw 'foo'`

6. Partial matches
   - objectContaining
   - arrayContaining
   - nested arrayContaining, objectContaining
   - assert over only some of the parameters `expect.anything()`
   - `expect.any(Function)` etc.

5. Philosophies to write unit tests for Express.js
   - mock request/response objects in-memory
   - leverage supertest

6. Coverage in Jest
   - coverage thresholds
   - using Jest coverage reports to find code that's not being exercised
   - exclude a line, file or statement from coverage reports


Interested in upgrading your Jest and testing game?

<button class="cp-button" data-seller="hugo" data-checkout="jest-handbook">Pre-order now</button>


<script type="text/javascript" src="https://checkoutpage.co/js/overlay.js" defer></script>
<script async defer src="https://cdn.simpleanalytics.io/hello.js"></script>
<noscript><img src="https://api.simpleanalytics.io/hello.gif" alt=""></noscript>
