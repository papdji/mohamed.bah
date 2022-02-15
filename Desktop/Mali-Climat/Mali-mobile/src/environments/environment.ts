// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'https://api.weatherapi.com/v1/',
  API_KEY: '6e4fdb97cfc54e6d968201248221002',
  DEFAULT_CITY: 'Mali',

  firebaseConfig : {
    apiKey: "AIzaSyCuJu7sBCI8vw1fIrBaDCn8NvFRg6jqxNI",
    authDomain: "changement-climatique-3e1a1.firebaseapp.com",
    databaseURL: "https://changement-climatique-3e1a1-default-rtdb.firebaseio.com",
    projectId: "changement-climatique-3e1a1",
    storageBucket: "changement-climatique-3e1a1.appspot.com",
    messagingSenderId: "560493908001",

  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
