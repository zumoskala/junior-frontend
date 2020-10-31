
## Doubts and problems 

# Task 1
At one point – at the end of a current series of slides – the transition is not smooth. I wonder if there exist any method to make the return to the beginning of a cycle of a slider go without a noticeable break. 
My attempt: 
 - to reduce the visibility of images scrolling backwards to the regular direction of slides sliding, I reduced transition duration to 0s
 - to make the transition between last and first element more smooth, I tried to use the setTimeout() method on a whole sequence responsible for the return to the initial position of slider. Unfortunately it did not cause any noticeable improvement, so I decided not to use it. 

What could be done to improve the transition between last and first slide of two cycles? 

_ 

I had to move assets file into src folder to import images into slider. I read that another way to do it is to eject and remove ModuleScopePlugin from webpack configuration file, but doing it would result in a loss of some features and its updates. Is there another, safe way to import assets from the outside of a src file?


## 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instalation

Simply run `npm i` in the project directory.

## Development mode - run `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
