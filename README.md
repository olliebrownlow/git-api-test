# Github Programming Language Preference

Simple, single-page web app created using React.js. The app takes a Github username as an input and returns what that user's most likely favourite programming language is.

### Getting started

Clone the repo, navigate to the root directory and run `npm install` to install the dependencies. Run `npm start` to start it in development mode (localhost:3000).

To use the program, follow the links and enter a valid Github username into the relevant field.

### Page design

### Code design

The interactive components are accessed through a wrapper component ("UserForm.js") which has a `step` counter which renders the correct 'page' depending on user input and button clicks.

Requests to the [Github API](https://developer.github.com/v3/) are made using axios GET requests.

### Edge cases
