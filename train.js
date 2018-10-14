
//PROBLEMS:
//-Nothing can be deleted after submit is clicked

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


// $("table").append("<tr id ='train" + i + "'></tr>");

$("table").append("<tr id ='train" + i + "'>");



 $("#train" + i).append("<td>" + trains[i].name + "</td>");

$("#train" + i).append("<td>" + trains[i].dest + "</td>");

 var tFrequency = trains[i].freq;
 $("#train" + i).append("<td>" + tFrequency + "mins" + "</td>");
 

    
    var firstTime = trains[i].first;
   

    
    var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
 

    // Current Time
    var currentTime = moment();
   

    
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    

    
    var tRemainder = diffTime % tFrequency;
    

    
    var tMinutesTillTrain = tFrequency - tRemainder;
    $("#train" + i).append("<td>" + tMinutesTillTrain + "</td>");
    

    
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    $("#train" + i).append("<td>" + moment(nextTrain).format("hh:mm") + "</td>");
    
    $("#train" + i).append("<td><button class = 'remove' id = '" + i + "'>x</button></td></tr>")
    addRemove();
}
}

printTrains();

addRemove();
function addRemove(){
    $(".remove").click(function(event){
        $("#train" + this.id).remove();  
        //code for removing from array:
        trains.splice(this.id, 1);
        //ef yeah!  It worked!!  
        console.log("Removing train");
    })
}

// $(".remove").click(function(event){

// $("#train" + this.id).remove();

// //code for removing from array:
// trains.splice(this.id, 1);
// //ef yeah!  It worked!!

// console.log("Removing train");
// })


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





if (parseFloat(newFreq) * 0 == 0 && moment(newFirst, 'hh:mm', true).isValid())
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

//TRAIN SOUND
 var trainSound = new Audio("train.wav");
  trainSound.volume = 0.2;

   trainSound.play();

  console.log("Playing train");

//*******
}
else if (moment(newFirst, "hh:mm", true).isValid() == false)
{
  alert("Must enter First Train Time in correct format");
}
else
{
  alert("Must enter number for frequency")
}

printTrains();


})
