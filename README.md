# First steps

Open a terminal and type
```
Git clone `https://github.com/shockstate/choice-upc.git
```
1. Install [node.js](https://nodejs.org/en/). Version 14 or 16 it's what I recommend but all should work.
1. Execute `node --version` in console to see if it was succesfull.
1. Execute `npm install --global yarn`
1. Execute `yarn --version` in console to see if it was succesfull.
1. Then, inside the folder `choice-upc` you can execute `yarn` to get all the packages needed.

# How to run the app

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Download [VSCode](https://code.visualstudio.com/) to make your life easy during development. Once open, if you go to the `Extensions` tab you can install `ESLint` and `Prettier` which will help you to make your code look good. 

# Project structure

You will find that `index.tsx` is the base of your application. You can find there that a component `<App />` is being rendered. This means that your app will consist only in what you have inside the app component.

A component is defined in a tsx file and it's a funcion that have a return method with some html inside it.

Usually its good to keep components small so you can reuse them. A component can have inside multiple components.
You can see an example of how to create a component inside a component and pass information from the parent to it in the `ExampleComponent.tsx`, which it's used in `App.tsx`.

A typical SPA will be very dynamically. So when you click on buttons, or checkboxes, or select options, the page will display different information. In order to do that we use `useState` from react.
When creating a state variable, you will define the variable, and a set method (that we will use to change it's value).
Every time the set method is called, the information in the screen will be automatically updated (without the need to refresh).\
You pass as well the initial value when you define this variables. You can find an example in `ComponentWithStateVariable.tsx`.
There are other useful "hooks" like `useEffect`, which will execute code when the value of the variable you define changes.
In the `ComponentWithStateVariable.tsx` you can see that every time that the text changes, a message is send to the console. In order to see the console messages (very useful when things don't work as expected, Press F12 when you are in the browser and go to the tab `Console`).

In order to make your app look good you can use CSS (`App.tsx` has an example using `App.css`) or you can use a framework that makes life easy for you (Bootstrap). You can check the documentation in the official page. I personally use [Material UI](https://mui.com/) but maybe we can talk about that later.

<b>Have fun!!! And don't hesitate on contacting me, especially at the beginning, because simple things could make you waste a lot of time but asking will make you learn faster and obviously much less frustrating.</B>

If you want we can collaborate together. Tell me and I can explain git basics so I can see your progress and drop some tips ;)

# Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
