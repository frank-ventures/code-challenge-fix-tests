# Test a Data Structure Code Challenge

## Overview

In the world of software development, unit testing is a vital practice that ensures our code behaves as expected. It's the safety net that catches bugs before they sneak into the final product. But understanding the theory is one thing, applying it is another.

Your project lead has just realised that the team has been REALLY slack on testing the integrity of our application, and now the pressure is on to strengthen the code base.

It's fallen to you to implement **Vitest** to write some bug-catching code!

---

We will be looking for you to make a suite of tests which pass, and that you've written clean, understandable code.

Instructions are below.

## The Task

Fix the provided code so that all tests pass!

### Resources

Vitest things to know:

- [VS Code extension for Vitest](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)
- [describe](https://vitest.dev/api/#describe)
- [test AKA it](https://vitest.dev/api/#test)
- [expect - which includes 'toBe' below](https://vitest.dev/api/expect.html#expect)
- [expect.any](https://vitest.dev/api/expect.html#expect-any)
- [toBe](https://vitest.dev/api/expect.html#tobe)
- [toEqual](https://vitest.dev/api/expect.html#toequal)
- [beforeALL](https://vitest.dev/api/#beforeall)
- [assert](https://vitest.dev/api/assert.html#assert-1)
- [isArray](https://vitest.dev/api/assert.html#isarray)

To create a report, run this code in the terminal: `npx vitest app.test.js --reporter=json --outputFile=./test-output.json`

## Instructions

To help out your Project Lead, we're providing you the code you need to look at.

Focus on the `app.test.js` file as these are the tests you need to fix, and where to write new ones! Some code comments start with `TODO:`, focus on these!

To clarify you should create a fork of this repo: https://github.com/frank-ventures/code-challenge-fix-tests

**Or:**

1. Setup a new project:

`npm init -y`

`npm i vitest`

In the package.json, change the `"test"` script to: `"test" : "vitest"`
And add: `"type": "module"`

Then make these files:
`app.js`
`app.test.js`
`mockData.js`

2. Copy the `app.js` code from the demo, which contains the _functions_ you'll need.
3. Copy the `mockData.js` code from the demo, which contains the _data_ your code will test.
4. Focus on writing code in your `app.test.js` file.

And write code which:

1. Tests the structure of the data,
2. Tests the output of the functions,
3. Fixes broken tests, and
4. Makes sure tests pass!

You do not need to edit the `app.js` _(unless you decide to write more functions, to be tested)_.

### Requirements

- 🎯 Import your functions from your `app.js` to be tested in `app.test.js`
- 🎯 Fix any provided tests which have a `FAIL` output.
- 🎯 Ensure that all tests `PASS`.
- 🎯 Give thought to your `describe()` and your `test()` function names, so that they read like a sentence when output.
- 🎯 Submit a full screenshot of the console showing all tests have passed.
- 🎯 To create a report to submit with your repo, use this command in the terminal: `npx vitest app.test.js --reporter=json --outputFile=./test-output.json`.

### Stretch Requirements

- 🏹 Write new tests in the existing test suite.
- 🏹 Write a new suite of tests for a new mocked data set, from another API.
- 🏹 Write a new suite of tests for a new API which makes a live call.
- 🏹 Build a web page which loops through the results in the `test-output.json` and displays them.

If you go as far as to try building a web page, displaying your results, you'll need this piece of code in your app.js:

```js
import results from "./test-output.json" with { type: "json"};
```

## Submission Instructions

Please submit the following:

1. A link to your GitHub repository. This should look something like `https://github.com/[username]/[repository-name]`.
2. Screenshots of your console showing all tests have passed.
3. A `test-output.json` file in your repository so we can see your test results.
4. Your reflection on the challenge (alternatively, this can be in your README.md file).
