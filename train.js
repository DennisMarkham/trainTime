//Okay, now it seems to work...except it still doesn't recognize am from pm.  Hmmm.

     var Thomas = {
  name: "Thomas",
  dest: "New York",
  first: "05:00 am",
  freq: 30,
}
     
 var Duncan = {
  name: "Duncan",
  dest: "Boston",
  first: "06:00 am",
  freq: 45,
}
 
var trains = [Thomas, Duncan];



function printTrains(){
for (i = 0; i < trains.length; i++)
{
//so this gives the train row an id based on its index, so the first train has
//an id of "train0"
$("table").append("<tr id ='train" + i + "'>");

//appends on the row with id created above, adding a td for the train name
 $("#train" + i).append("<td>" + trains[i].name + "</td>");

//same thing, with the destination
$("#train" + i).append("<td>" + trains[i].dest + "</td>");

//etc. 
 $("#train" + i).append("<td>" + trains[i].freq + "mins" + "</td>");
 
  //creating a bunch of variables
    var tFrequency = trains[i].freq;
    var firstTime = trains[i].first;

    //not totally cure what the point of this is.
    // var firstTimeConverted = moment(firstTime, "hh:mm a").subtract(1, "years");
    
    //this is never used, removing
    // var currentTime = moment();
    

    // var diffTime = moment().diff(moment(firstTimeConverted), "minutes");

    //is this the differenct between now and the first time, in minutes?
    // var diffTime = moment.diff(moment(firstTime), "minutes")
    //I think a better way to write it would:
    var diffTime = moment().diff(moment(firstTime, "HH:mm a"), "minutes");
    console.log("This is the value for the time difference between now and the first arrival: " + diffTime)
    //it came back with a negative value
    //OH WAIT, I THINK I HAVE IT.  If the value is negative, the next train is...hold on...
    
    if (diffTime >= 0)
    {
    //tRemainder is the modulus of minuts that have passed since the first train and the 
    //frequency
    var tRemainder = diffTime % tFrequency;
    

    //self explanatory
    var tMinutesTillTrain = tFrequency - tRemainder;
    $("#train" + i).append("<td>" + tMinutesTillTrain + "</td>");
    

    //this produces a new time, by adding tMinutesTillTrain to the current time 
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    $("#train" + i).append("<td>" + moment(nextTrain).format("hh:mm a") + "</td>");
    
    
  }
  else
  {
    //THIS IS WHAT YOU ARE WORKING ON TO TRY TO SCHEDULE TRAINS THAT START LATER, IE SOME TIME
    //AFTER THE RECORD IS ENTERED
    $("#train" + i).append("<td>" + Math.abs(diffTime) + "</td>");

      $("#train" + i).append("<td>" + firstTime + "</td>");

      //HAHAHAHA!  YES, I DID IT.  SO SIMPLE!
    
  }
  $("#train" + i).append("<td><button class = 'remove' data-toggle='tooltip' data-placement='left' title='delete train' id = '" + i + "'>x</button></td></tr>")
     
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


//this alone is what clears the table.  Effing amazing
  $($("td").parent()).remove();



console.log("you clicked me");


var newName = $("#name").val();
var newDest = $("#dest").val();
var newFirst = $("#firstTT").val();
var newFreq = $("#freq").val();
// var newFirstConverted = moment(newFirst, "hh:mm").subtract(1, "years");
var newDiffTime = moment().diff(moment(newFirst, "hh mm a"), "minutes");
var newRemainder = newDiffTime % newFreq;
var newMinAway = newFreq - newRemainder;
var newNextArr = moment().add(newMinAway, "minutes");


// console.log("New first converted:" + newFirstConverted);




//some form of validation, not sure what the hell I meant by this.  Maybe just a way to
//no freq is a number?  Then the second part checks the formula
if (parseFloat(newFreq) * 0 == 0 && moment(newFirst, 'hh:mm a', true).isValid())
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
else if (moment(newFirst, "hh:mm a", true).isValid() == false)
{
  alert("Must enter First Train Time in correct format");
}
else
{
  alert("Must enter number for frequency")
}

printTrains();


})


//NEW CODE FOR SEARCH

// function recordChange(){
//   console.log('Changing');



//   var firstSearchChar = $("search").val()[0];
//   var newNames;

//   if (firstSearchChar)
//   {

//   if (firstSearchChar.match(/[a-z]/i))
//   {
    
//     firstSearchChar = firstSearchChar.toUpperCase();

//     //gotta translate this into clearing the train chart.  But where does this happen?
//     //is there no such part of the code?
//     $($("td").parent()).remove();

//     newNames = trains.filter(train => train.name[0] === firstSearchChar);

//       for(i = 0; i < newNames.length; i++)
//     {
//       printTrains();
//     }

//   }
//   else
//   {
//     //this is needed, though I don't fully comprehend why ATM 
//     printTrains();
//   }
// }
// else
// { 
//   //this is needed to reset things if you get rid of the letter
// printTrains();
// }
  
// }