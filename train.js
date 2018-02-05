     //0300
//1912

//16 hours + 12 minutes

//960 + 12.  972 minutes

//972 minutes/17

//Remainder is amount of time until train arrives

//or is it whatever 17 in minus the remainder?

// var modulus = 972%17;
// console.log (modulus);
//remainder logged as '3' for me twice 
//14 minutes

//so basic formula is find difference between start time and current time, 
//modulus the difference and the interval time,
//subtract remainder (modulus result) from interval time

// So 16%3 = 1.  3-1 is 2.

//the real challenge will be converting military time.  So before the colon
//gets multiplied by 60, then added to what's after the colon. 


//so create array of train objects?  Button makes new object?  Can a button create an object


//create a train array.

//on submit button, variables are filled in in function
//new object is created by function, with variables filling in properties
//



     var Thomas = {
  name: "Thomas",
  dest: "Boston",
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
//for some bizarre reason this doesn't add a new item to the array
printTrains();
})
