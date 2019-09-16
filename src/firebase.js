import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDa85uiICqElslRv6XYDHprn_cCKPf7ryg",
    authDomain: "ktu-kys-6a95b.firebaseapp.com",
    databaseURL: "https://ktu-kys-6a95b.firebaseio.com",
    projectId: "ktu-kys-6a95b",
    storageBucket: "",
    messagingSenderId: "890262547817",
    appId: "1:890262547817:web:1a6f3efdc6c04a0c"
};

export const firebaseApp = firebase.initializeApp(config);

