






     var Thomas = {
  name: "Thomas",
  dest: "New York",
  first: "05:00",
  freq: 30,
}
     
 var Duncan = {
  name: "Duncan",
  dest: "Boston",
  first: "06:00",
  freq: 45,
}
 
var trains = [Thomas, Duncan];

//now make this a function?

function printTrains(){
for (i = 0; i < trains.length; i++)
{
//every time this goes off, I want to create a <tr></tr>.  Append it as a child of the table?

$("table").append("<tr id ='" + i + "'></tr>");

//YOU'VE GOT IT WORKING INITIALLY, BUT ADDING A NEW TRAIN MESSES THINGS UP!!!

 $("#" + i).append("<td>" + trains[i].name + "</td>");

$("#" + i).append("<td>" + trains[i].dest + "</td>");

 var tFrequency = trains[i].freq;
 $("#" + i).append("<td>" + tFrequency + "mins" + "</td>");
 

    
    var firstTime = trains[i].first;
   

    
    var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
 

    // Current Time
    var currentTime = moment();
   

    
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    

    
    var tRemainder = diffTime % tFrequency;
    

    
    var tMinutesTillTrain = tFrequency - tRemainder;
    $("#" + i).append("<td>" + tMinutesTillTrain + "</td>");
    

    
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    $("#" + i).append("<td>" + moment(nextTrain).format("hh:mm") + "</td>");
    
}
}

printTrains();

$("#submit").click(function(event){
  event.preventDefault();

  // $("#trainNames").empty();
  // $("#destinations").empty();
  // $("#frequency").empty();
  // $("#nextArrival").empty();
  // $("#minutesAway").empty();

  $($("td").parent()).remove();

//YES!  IT WORKED!

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


console.log("New first converted:" + newFirstConverted);

//VALIDATION FOR FIRST TRAIN NOT WORKING!!  WHY!?

console.log("WHY DOES VALIDATION FOR FIRST TRAIN TIME NOT WORK!?")

if (parseFloat(newFreq) * 0 == 0 && newFirstConverted !== NaN)
{
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
}
else if (newFirstConverted === NaN)
{
  alert("Must enter First Train Time in correct format");
}
else
{
  alert("Must enter number for frequency")
}

printTrains();


})
