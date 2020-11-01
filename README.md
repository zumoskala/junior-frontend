
## Doubts and problems 

# Task 1
At one point – at the end of a current series of slides – the transition is not smooth. I wonder if there exist any method to make the return to the beginning of a cycle of a slider go without a noticeable break. 
My attempt: 
 - to reduce the visibility of images scrolling backwards to the regular direction of slides sliding, I reduced transition duration to 0s
 - to make the transition between last and first element more smooth, I tried to use the setTimeout() method on a whole sequence responsible for the return to the initial position of slider. Unfortunately it did not cause any noticeable improvement, so I decided not to use it. 

What could be done to improve the transition between last and first slide of two cycles? 

_ 

I had to move assets file into src folder to import images into slider. I read that another way to do it is to eject and remove ModuleScopePlugin from webpack configuration file, but doing it would result in a loss of some features and its updates. Is there another, safe way to import assets from the outside of a src file?

# Task 3
During working on task 3 I noticed that some of the files were not pushed into repository in initial commit, so I pushed all of them to github.

# Final

I had a problem with deploying my app to github pages. While it was built correctly, after running 'npm run deploy' command I got an error saying:

`git-upload-pack '.': git-upload-pack: command not found
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.

npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! junior-frontend@0.1.0 deploy: `gh-pages -d build`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the junior-frontend@0.1.0 deploy script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
`

Even though I tried various solutions mentioned on stackoverflow (e.g. regenerating an SSH key or adding informations to environmental path variable) it didn't work. I am wondering how this problem can be solved?

## 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instalation

Simply run `npm i` in the project directory.

## Development mode - run `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
