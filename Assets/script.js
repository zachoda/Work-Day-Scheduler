//creating variable for moment.js
var currentTime = moment().format("[Today is...] dddd, MMMM D YYYY, h:mm:ss a");
$("#currentDay").text(currentTime);
var taskHour = $(this).attr("id");
//variable for capturing task data
var taskDescription = $(".description").val();

//variables for determining color of row
var currentHour = moment().format("k");

$(".time-block").each(function(){
  var taskHour = $(this).attr("id");
  for (var i=0; i < currentHour.length; i++);
    if (currentHour === taskHour) {
      $(".description").addClass("present");
    } else if (currentHour < taskHour) {
      $(".description").addClass("future");
    } else (currentHour > taskHour);
    $(".description").addClass("past");
    console.log(taskHour);
});


//save function
$(".saveBtn").on("click", function () {
  var taskDescription = $(this).siblings(".description").val();
  console.log(taskDescription);
  var taskHour = $(this).parent();
  var hourID = taskHour[0].id; 
  if (taskDescription === !null) {
    localStorage.setItem("hour", JSON.stringify(hourID));
    localStorage.setItem("description", JSON.stringify(taskDescription));
    console.log("work");
  }else {
    console.log("error")
  }
  console.log(taskHour);
  console.log(hourID);
});

//load function
var reloadPlanner = function() {
  var reloadHour = localStorage.getItem("hour");
  JSON.parse(reloadHour);
  var reloadTask = localStorage.getItem("description");
  JSON.parse(reloadTask);
}

