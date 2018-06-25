






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


$("table").append("<tr id ='" + i + "'></tr>");



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

 

  $($("td").parent()).remove();



console.log("you clicked me");


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



console.log("WHY DOES VALIDATION FOR FIRST TRAIN TIME NOT WORK!?")

if (parseFloat(newFreq) * 0 == 0 && moment(newFirst, 'hh:mm').isValid())
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
else if (moment(newFirst, "hh:mm").isValid() == false)
{
  alert("Must enter First Train Time in correct format");
}
else
{
  alert("Must enter number for frequency")
}

printTrains();


})
