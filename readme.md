# 2359 Calculator Project
![https://github.com/leelinde92/2359calculator/](https://github.com/leelinde92/2359calculator/raw/master/coverage/badge.svg)

### How to use this readme
In the first section, I've detailed the approach I took to this project. You can find the project specifications derived below, and the points that have been completed.

#### Running tests
Enter the command `yarn test --coverage` in the terminal to run tests with coverage. 

### My approach
The first thing I observed is the test case resolves based on arithmetic rules. Some basic calculators do not resolve as such, and thus evaluates every new number entered with the previous arithmetic operation, and displays to the user on the screen. I've chosen to show the current math expression created so that the user can check easily. 

Due to size of the feature, there isn't much to do. In order to demonstrate my understanding of Agile workflow, I've broken the individual tasks into "features".
 
As for my understanding of Gitflow workflow, I've created a release branch `release/1.0.0` to make a new release from `develop` to `master`. I've also created a number of branches (which you can find in this project) to build the features required.

Since this is a test to evaluate my abilities, I avoided using the built-in `eval` function and chose to build my own function to resolve arithmetic equations.

Personally, I like to isolate business logic with [Redux Saga](https://redux-saga.js.org/). Sagas can access reducer values, hence relegating actions to take inputs and reducers to storing values. Moreover, the ability to mock certain calls within Sagas and the ability to trigger side effects makes a great case for testing and re-usability.

### Project specifications
##### Requirements
- [x] Use the latest expo to create the project
- [x] Use Redux
- [x] `src` should only contain the following files. `constants.js, actions.js, reducer.js, Button.js, Screen.js, styles.js`
- [x] Write styles.js without width / height key
- [x] Write Button.js as React.memo without equal function and make sure it’s not re-rendering
- [x] Pass given test case `1 + 2 - 3 * 4 = -9`

##### Bonus points
- [ ] Each file is less than 60 lines
- [x] Use regex
- [x] More than 80% test coverage

##### Foot note
- Reducer is larger than 60 lines, due to the calculations needed.
- Button has reduced coverage due to platform specific executions.
- `jest-expo` can cover more platforms, but it does not allow for inflating like `enzyme`. `App.test.js` integration test is deemed as important to keep application integrity and hence I've decided to go with `enzyme` instead.
- In `setUp.js`, lines starting with `Warning: ` are suppressed due to a lack of support for React Native on Enzyme. The checks are for HTML elements and is too noisy in the console.
