//creating variable for moment.js
var currentTime = moment().format("[Today is...] dddd, MMMM D YYYY, h:mm:ss a");
$("#currentDay").text(currentTime);
var taskHour = $(this).attr("id");

//variables for determining color of row
var currentHour = moment().format("k");

$(".time-block").each(function(){
  var taskHour = $(this).attr("id");
  for (var i=0; i < currentHour.length; i++);
    if (currentHour === taskHour) {
      $(".description").addClass("present");
    } else if (currentHour > taskHour) {
      $(".description").addClass("future");
    } else (currentHour < taskHour);
    $(".description").addClass("past");
});


//save function
$(".saveBtn").on("click", function () {
  var taskDescription = $(this).siblings(".description").val();
  var taskHour = $(this).parent();
  var hourID = taskHour[0].id; 
  if (taskDescription !== null) {
  localStorage.setItem("hour" + hourID, JSON.stringify(hourID));
    localStorage.setItem("description" + hourID, taskDescription);
  }
});

//load function
var reloadPlanner = function() {
  for (let i= 9; i<18; i++) {
    var reloadHour = localStorage.getItem("hour" + i);
    console.log(reloadHour);
    var reloadTask = localStorage.getItem("description" + i);
    document.getElementById("d-" + i).textContent = JSON.parse(reloadTask);
  }
  
  
  
}
reloadPlanner();

