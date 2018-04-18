import * as functions from 'firebase-functions';

const { dialogflow: any } = require('actions-on-google');

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const app: any = dialogflow({debug: true});
