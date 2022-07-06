//creating variable for moment.js
var currentTime = moment().format("[Today is...] dddd, MMMM D YYYY, h:mm:ss a");
$("#currentDay").text(currentTime);

//variable for capturing task data
var taskDescription = $(".description").val();

//variables for determining color of row
var currentHour = moment().format("k");
var taskHour = $(".hour");
// function for determining color or row
var urgentTask = function () {
  if (currentHour == taskHour) {
    $(description).addClass("present");
  } else if (currentHour < taskHour) {
    $(description).addClass("future");
  } else currentHour > taskHour;
  $(description).addClass("past");
};
//save function
$(".saveBtn").on("click", function () {
  var taskDescription = $(this).siblings(".description").val();
  console.log(taskDescription);
  if (taskDescription === !null) {
    localStorage.setItem("hour", taskHour);
    localStorage.setItem("description", taskDescription);
  }
});

//load function
