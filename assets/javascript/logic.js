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
var firstTrain = "";

/* ---------- Processes ---------- */
$('#add-train').on('click', function(event) {
    event.preventDefault();

    train = $('#add-name').val().trim();
    destination = $('#add-destination').val().trim();
    frequency = $('#add-frequency').val().trim();
    firstTrain = $('#add-time').val().trim();

    database.ref("/trains").push({
        train: train,
        destination: destination,
        frequency: frequency,
        firstTrain: firstTrain
    });
});

database.ref("/trains").on("child_added", function(snapshot) {
    console.log(snapshot.val());
    console.log(snapshot.val().train);
    console.log(snapshot.val().destination);
    console.log(snapshot.val().frequency);
    console.log(snapshot.val().firstTrain);

    train = snapshot.val().train;
    destination = snapshot.val().destination;
    frequency = snapshot.val().frequency;
    firstTrain = snapshot.val().firstTrain;

    $('#trains').append("<tr><td>" + train + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + firstTrain + "</td><td>" + "Minutes Away" + "</td>");
}, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
});
