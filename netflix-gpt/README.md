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

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)









#Netflix GPT
- Create React App
- Configured Tailwind
- routing
- Header
- sign up Form
- form validation
- useRef Hook
- Firebase Setup
- Deploying our app to Production server
    - sudo npm install -g firebase-tools
    - firebase login
    - firebase init
    - firebase deploy
- create sign up account in firebase 
- implement sign in user api
- setup redux store with user slice
- update store once sign in/up
- implemented sign out 
- update profile firebase api call
- unsubscribed to onAuthChanged callback
- Add hardcoded value to constant files
- Register TMDB and create an app & get access token
- get data from TMDB now playing movies list api
- custom hooks for nowplayingmovies
- create movie slice
- update store with movie data 
- planning for main and secondary container
- fetch data for trailer video
- update store with trailer video data
- embedded the youtube video & make it autoplay and mute
- added tailwind class to make main container look good
- secondary contaniner with movie list
- build movie card
- found tmdb image cdn
- make UI look more like netlfix with tailwind css
- fetch and displayed popular, trending, upcoming by creating hooks for each 
- GPT search Suggestion Page and bar
- (*) add multi language feature in our app
- mocked open ai gpt search
- memoization for all fetch calls
- fetched gpt movie (movie) suggestion from tmdb 
- created gpt slice and added data
- reused movie list component to make movie recc. container
- for keeping secret keys you need to create .env file. and add the .env file to gitignore so it is not pushed to the git
- made site responsive





# Bug Fix
- sign up user displayname
- if user not logged in re-direct to browse to login page and vice versa




# Feature
- Login/Sign up page
    - Sign in/up form
    - redirect to browse page
- Browser Page (After authentication)
    - Header
    - Main Movie 
        - Trailer in Background
        - Movie title and description and play btn
    - Movie Suggestion 
        - MOvieLists * n
- Netflix GPT
    - search bar
    - Movie suggestion

