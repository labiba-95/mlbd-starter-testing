# Jest

Because it’s made by Facebook, a lot of people think that it’s a react testing library. And what jest actually is, is a javascript testing library. It’ll test any kind of javascript. People often ask what is this like, is this like mocha? which is a test runner. Is this like chai? which is an assertion library. Does this do the job of enzyme, rendering react components? Well it’s more like a combination of mocha along with other tool. Jest will run your test, but it’s also going to be your assertion library to check your things are equal to other things. Addition to that you can have some excellent extra features, like snapshot testing, where it's centrally taking a snapshot of your component as it is right now and if it changes you need to re-write your tests. It’s also extremely fast. There’s also code coverage stuff, that will show you report of which files are not covered in your code with your test. This can be extremely handy when you are writing your tests, so you can make sure that everything is totally covered. There is also mocking library, that let you mock stuffs. It works with typescript. Their documentation is really good. 

We need to install jest first. 
`npm i - -save-dev jest`

Here we’ve a file named sum, if you want to test this file, the test file should have the same name as the file, just dot test and jest will automatically pick that up. What we are going to do here is make sure sum func works. In order to test with jest we use this func called test. The very first parameter of this function is a string where to describe what this test does. It’ll show inside of the console when we run this test, the second thing is going to be a function.

To run the test cases we need to run `npm test` .

But it’s kind of hard to tell which part of our code got tested. Right now it just says this tests passed/ this tests failed. But how do we know which functions got tested, which lines got tested. For that we need to run `jest --coverage` .

# React-testing-library

In it’s name it’s pretty obvious what it does. It’s a simple and complete react Dom testing utility that encourages good testing practises. It is basically a way to test your react code. Does this replace jest? No. React testing library gives you the stuff to work with Dom node specifically. It is more likely attached to dom, what is the output in the dom like, what does the dom looks like now. You can use individual actual dom node and interact with them like javascript. If the question is how do I test this.state in react testing library? The ans is test what’s changing in the dom. Let’s say a modal opens and closes depending on the state. You won’t check the state is set to open or not, user wouldn’t see that. What you’ll test here is if the modal is open or not in the dom, what the user sees. Check the dom nodes to see if the things are in correct places or not.

## Jest & React-testing-library working together

Jest and react testing library work together. To test our application we need to reach our dom element first. To reach the dom elements we are using react testing library by using queries. And also we can interact with our dom elements like clicking a button/ hover over a label, basically any javascript event. Jest is a javascript testing library. It allows us to run our tests and it determines whether our tests passed or failed. It takes our expectation and compares with the actual result and it’s called an assertion. 

For more check out the documentations of [Jest](https://jestjs.io/docs/getting-started) & [React-testing-library](https://testing-library.com/docs/react-testing-library/intro/).

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
