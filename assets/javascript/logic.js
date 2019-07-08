/* ---------- Variables ---------- */
var config = {
    apiKey: "AIzaSyCrQ_3vnc46TwsGV18MUcEWrtN0G3rfUC0",
    authDomain: "train-scheduler-2cf7f.firebaseapp.com",
    databaseURL: "https://train-scheduler-2cf7f.firebaseio.com",
    projectId: "train-scheduler-2cf7f",
    storageBucket: "train-scheduler-2cf7f.appspot.com",
    messagingSenderId: "97008141091",
    appId: "1:97008141091:web:1a5491a37cc56b08"
};

firebase.initializeApp(config);

var database = firebase.database();

var train = "";
var destination = "";
var frequency = 0;

/* ---------- Functions ----------*/

/* ---------- Processes ---------- */
