# Simple Chat Web Demo frontend

## Prerequisites 

* [NodeJS](https://nodejs.org/)
* Npm is installed with Node.js
* Amazon IVS Simple Chat demo backend (see README.md in the `serverless` folder for details on the configuration) 

## Running the demo

To get the web demo running, follow these instructions:

1. [Install NodeJS](https://nodejs.org/). Download latest LTS version ("Recommended for Most Users") 
2. Navigate to the web-ui project directory on your local computer
3. Run: npm install
4. Run: npm start
5. Open your web-browser and enter the URL: http://localhost:3000/

## Configuration

The following entries in `src/config.js` (inside the web-ui project directory) are used to configure the video stream and chat websocket

* `PLAYBACK_URL`
  - Default video stream to play inside the video player

* `CHAT_WEBSOCKET`
  - Default WebSocket server URL

## Limitations

* No user authentication
* No name validation
* Name cannot be changed once set
* Name is not saved/persistent(ie. reloading the page would go back to initial state)

--------------------------------------------------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory,you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


## Docker

[Dockerfile](./Dockerfile) has been provided for this project.
If you don't have docker installed on your machine please look at the installation guides here :

- Ubuntu : [Install Docker for Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
- Mac : [Install Docker for Mac](https://docs.docker.com/docker-for-mac/install/)

### Build Docker Image

run `docker build -t web-app:latest -f Dockerfile .` from the project directory. to create the docker image.

### Run Application Container

run `docker run -itd -p 3000:3000 web-app:latest` after building the docker image to run the application container.
After that open [http://localhost:3000](http://localhost:3000) to view it in the browser.