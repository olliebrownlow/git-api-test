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

-  In the `setStateVariables` method in `UserForm`, when any of `language`, `frequency` or `totalRepos` are returned with falsey values (for example if someone's account contains only one repo with a document written in MD - the api returns `languages` as empty in this case), the variables are populated with the phrase 'insufficient data'.

- If the Github username does not exist, the user `UnrecognisedUsername` component is rendered and the user has the chance to try again.

### Unresolved edge case

- I have not dealt with cases where more than one language is the most popular in the Github user's account. In this case only one language will be displayed.
