



     var Thomas = {
  name: "Thomas",
  dest: "New York",
  first: "05:00",
  freq: 30,
}
var trains = [Thomas];

//now make this a function?

function printTrains(){
for (i = 0; i < trains.length; i++)
{

  $("#trainNames").append(trains[i].name + "<br>");

  $("#destinations").append(trains[i].dest + "<br>");

 var tFrequency = trains[i].freq;
 $("#frequency").append(tFrequency + "mins" + "<br>");
 console.log (tFrequency);

    
    var firstTime = trains[i].first;
    console.log (firstTime);

    
    var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    
    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    
    var tMinutesTillTrain = tFrequency - tRemainder;
    $("#minutesAway").append(tMinutesTillTrain + "<br>");
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    $("#nextArrival").append(moment(nextTrain).format("hh:mm") + "<br>");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
}
}

printTrains();

$("#submit").click(function(event){
  event.preventDefault();

  $("#trainNames").empty();
  $("#destinations").empty();
  $("#frequency").empty();
  $("#nextArrival").empty();
  $("#minutesAway").empty();



console.log("you clicked me");
//this shows up very briefly than goes away

var newName = $("#name").val();
var newDest = $("#dest").val();
var newFirst = $("#firstTT").val();
var newFreq = $("#freq").val();
var newFirstConverted = moment(newFirst, "hh:mm").subtract(1, "years");
var newDiffTime = moment().diff(moment(newFirstConverted), "minutes");
var newRemainder = newDiffTime % newFreq;
var newMinAway = newFreq - newRemainder;
var newNextArr = moment().add(newMinAway, "minutes");

var newTrain =
{
  name: newName,
  dest: newDest,
  first: newFirst,
  freq: newFreq,
  nextArr: newNextArr,
  minAway: newMinAway
}
trains.push(newTrain);

console.log(trains);

printTrains();
})
