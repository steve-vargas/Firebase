var config = {
    apiKey: "AIzaSyCmqV1pGE2UgThLLSMQJUDtXES_hotqBLo",
    authDomain: "class-8891e.firebaseapp.com",
    databaseURL: "https://class-8891e.firebaseio.com",
    projectId: "class-8891e",
    storageBucket: "class-8891e.appspot.com",
};

firebase.initializeApp(config);

firebase.database().ref().on("value", function(snapshot) {
    console.log(snapshot.val());
})

var trainName = "";
var destination = "";
var firstTrainTime = "";
var frequency = "";

$("#add-train-btn").on("click", function() {
    alert("clicked on");
    trainName = $("#train-name-input").val().trim();
    destination = $("#destination-input").val().trim();
    firstTrainTime = $("#first-train-input").val().trim();
    frequency = $("#frequency-input").val().trim();

    firebase.database().ref().set({
        trainName: trainName,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequency: frequency
    })
})