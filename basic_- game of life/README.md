# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

// the rules of game ->
//                      1. before clicking run -> you can toggle over the board (white means cell is living) 
//                      2. after selecting your initial state(any number of random cells over board)  // can also choose random initial state
//                      3. after pressing "Run" button -> the game will play according to the rules:
//                                                                        (i.)  Any live cell with fewer than two live neighbors dies, as if caused by under population.
//                                                                        (ii.) Any live cell with two or three live neighbors lives on to the next generation.
//                                                                        (iii.) Any live cell with more than three live neighbors dies, as if by overpopulation.
//                                                                        (iv.)  Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
//                      4. the transitions will happen according to the time , which can be changed 
//                      5. once clicking stop -> the baord will stop at the current configuration ; on clicking clear -> the board go emtpy(all black cells)

// thanks -abhinav
