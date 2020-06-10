# 2359 Calculator Project
### How to use this readme
In the first section, I've detailed the approach I took to this project. You can find the project specifications derived below and the points that have been completed.

#### Running tests
Enter the command `yarn test --coverage` in the terminal to run tests with coverage. 

### My approach
- Observe that it's a scientific calculator with arithmetic rules
- Note that there's no requirement to show statement before evaluation, but show it anyway.
- Due to size of the feature, not much to do. To demonstrate my understanding of Gitflow workflow, I have broken the feature down by individual tasks. Beginning from UI, then tackle business logic.
- Assume the test includes creating a function for evaluating expressions, not using `eval`.

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
