import * as firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyAykrsak0dwN0h03GnhUPQp75u7ca35h5E",
    authDomain: "global-notification.firebaseapp.com",
    databaseURL: "https://global-notification.firebaseio.com",
    projectId: "global-notification",
    storageBucket: "global-notification.appspot.com",
    messagingSenderId: "599861779199",
    appId: "1:599861779199:web:2dfdffc9a0941043f14aca"

});
const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey(
// Project Settings => Cloud Messaging => Web Push certificates
  "BDrzCFfP_ieDwFWBOZciyPK6jiZGyiU5pLmTlZWtrbqpWeoGXeVqbNsR3pwPnydsi_Fa881IvA7SCzrkrQLZhdI"
);
export { messaging };