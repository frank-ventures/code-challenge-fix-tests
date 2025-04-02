// I need some things from vitest to be able to run tests:
import { describe, expect, it, test, beforeAll, assert } from "vitest";

// I need to import my data from my other files:
import { posts } from "./mockData.js";
import { getUserNameByID, toTitleCase } from "./app.js";

// console.log(posts); // Just here to check I've got the posts correctly!

// A suite of tests:
describe("JSON Placeholder posts", function () {
  // An individual test:
  test("should return an array.", () => {
    assert.isArray(posts, "postsBody should be an array"); // if this fails, we'll get an assertion message saying the second parameter
  });

  // I want to test the individual items in the array.
  // First I have to describe what the structure of that item should be:
  const bodyObject = {
    userId: expect.any(Number),
    id: expect.any(Number),
    title: expect.any(String),
    body: expect.any(String),
  };

  test("Each item in the Array should be an object.", () => {
    expect(posts).toContainEqual(bodyObject);
  });

  // TODO: Write a test which checks that "Each item in the array should be an object, but using a for loop":
  test("Each item in the Array should be an object, through a for loop.", () => {
    // Your code here!
  });

  // Test the function toTitleCase:
  test("put through toTitleCase function should return a title case title.", () => {
    const result = toTitleCase("hello. i am a title.");
    const expected = "Hello. I Am A Title.";
    expect(result).toBe(expected);
    // TODO: Change this test so that it uses a title from our mocked data!
  });
  // TODO: Write another test with a different post title:

  // These tests will fail.
  // TODO: Part of your assignment is to figure out why they will fail, and fix them:
  test("individual item should not be an array.", () => {
    assert.isNotArray(
      posts,
      "We expected the value to NOT be an array, so check what it is."
    );
  });

  // TODO: These tests also fail, and should be put into a different suite!!
  test("tests that each userID, in each item, should be a number.", () => {
    let idType = expect.any(String);

    posts.forEach((post) => {
      expect(post).toStrictEqual(idtype);
    });
  });

  test("returns the correct username matched from the userID in an array", () => {
    const result = getUserNameByID(2);
    const expected = "Jez";
    expect(result).toBe(expected);
  });

  test("returns the correct username matched from the userID in an array", () => {
    const result = getTheUserID();
    const expected = "4";
    expect(result).toBe(expected);
  });

  // TODO: You can also make some new tests:
});

// TODO: You can also make some new test suites:

// TODO: You could also, if you're feeling very funky, test a different, live API. Bear in mind this is a super stretch goal.
// You will need: beforeAll(), which uses a timeout.

// A separate suite, to test a different function,
describe("The getUserNameByID function", function () {
  // These tests will fail. Part of your assignment is to figure out why and fix them:
  test("tests that each userID, in each item, should be a number.", () => {
    let idType = expect.any(String);

    posts.forEach((post) => {
      expect(post).toStrictEqual(idtype);
    });
  });

  test("returns the correct username matched from the userID in an array", () => {
    const result = getUserNameByID(2);
    const expected = "Jez";
    expect(result).toBe(expected);
  });

  test("returns the correct username matched from the userID in an array", () => {
    const result = getTheUserID();
    const expected = "4";
    expect(result).toBe(expected);
  });
});
// You can also make some new test suites:

// ---------------------------------
// ---------------------------------
// ---------------------------------
// Below is how a student might test a live API.
// We possibly don't want to be doing this in the assignment, because what if an API goes down? Then the student can't proceed.
// We're also not testing their ability to test for an API being live or not.

//const BEFORE_ALL_TIMEOUT = 30000; // 30 sec

// describe("JSON Placeholder tests", function () {
//   let todoResponse;
//   let todoBody;

//   let postsResponse;
//   let postsBody;

//   beforeAll(async () => {
//     todoResponse = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     todoBody = await todoResponse.json();

//     postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
//     postsBody = await postsResponse.json();
//   }, BEFORE_ALL_TIMEOUT);

//   const bodyObject = {
//     userId: expect.any(Number),
//     id: expect.any(Number),
//     title: expect.any(String),
//     body: expect.any(String),
//   };

//   test("Should have response status 200", () => {
//     expect(todoResponse.status).toBe(200);
//   });

//   test("Test the structure of ToDos", function () {
//     expect(todoBody).toEqual(bodyObject);
//   });

//   test("Should return an array", () => {
//     assert.isArray(postsBody, "postsBody is array");

//     // or this:
//     // expect(Array.isArray(postsBody)).toBe(true);
//   });

//   test("Each item in the Array should be an object", () => {
//     postsBody.forEach((post) => {
//       expect(post).toEqual(expect.objectContaining(bodyObject));
//     });
//   });
// });
