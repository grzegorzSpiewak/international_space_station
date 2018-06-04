## Description

Simple web apllication which allows to check currecnt position of Interneational Space Station.
Build on react-create-app(https://github.com/facebook/create-react-app) enchanted with CSS Modules
(https://github.com/css-modules/css-modules)

## Requirements

Make sure you have Node.js installed on your working station (v8.11.1)

## Available Commands

1. `npm install` or `yarn install` to install all dependencies
2. `npm start` or `yarn start`  to start the project in dev mode (https://localhost:3000)
3. `npm run build` or `yarn run build` to build an application in a Build folder
3. `npm run test` or `yarn run test` to run example test
  ``
## Notes
The app is build thanks to http://wheretheiss.at/w/developer and Google Geolocation Api.
The google api is limited to 20 request for a second. To avoid that genereate your own api key
and paste it to src/config/googleApi.js file.
