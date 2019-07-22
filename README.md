# REDDIT IMAGES

This is a ReactNative example project.
It shows a list of posts from the "pics" subreddit.
Supports both iOS and Android.

The initial boilerplate project has been generated using [EXPO](https://expo.io/).

## Run the project

1. Start the `metro` bundler:

- npm run start

2. then you can run the app using

- npm run ios
- npm run android

## Architecture

The App.js (src/App) file provides the main entry point for the app,

UI components are in a separete folder called `components`

The app is not complex, it could have had the http request to fetch the data just in the main `List` component,
but is a good practice to separate concerns, for this reason Redux, and Redux-Sagas are in place to make use of actions, reducers and side effects.

## UX

The app loads with a list of posts complete with author name, date, title, vote count, comments count.
Tapping a post triggers a WebView that opens in place, it can be closed with the `close` button at the bottom.

A point of improvement could be to use `Screens` to load the `WebView` in a different screen that makes possible to use transitions between the screens.
