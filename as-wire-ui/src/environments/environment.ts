// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080',
  firebase: {
    apiKey: "AIzaSyAS7rl98_T64B76lz7nP7g3yRW5pw6aOv4",
    authDomain: "my-gaeapp.firebaseapp.com",
    databaseURL: "https://my-gaeapp.firebaseio.com",
    projectId: "my-gaeapp",
    storageBucket: "my-gaeapp.appspot.com",
    messagingSenderId: "403193333632",
    appId: "1:403193333632:web:9363903284ebc445cea365",
    measurementId: "G-LVGW09WD9C"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
