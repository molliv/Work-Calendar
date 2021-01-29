$(document).ready(function() {

    // variables
 var userText;
 var eventTime;
 var currentTime = moment().hour();

    //Displaying current date and time
 $("#currentDay").text(moment().format('MMMM Do YYYY'));

    //function to change color of planner based on current time
 $(".input").each(function() {
    var scheduledTime = parseInt($(this).attr("id"));

    if (scheduledTime < currentTime) {
        $(this).addClass("past");
    } else if (scheduledTime == currentTime) {
        $(this).addClass("present");
    } else if (scheduledTime > currentTime) {
        $(this).addClass("future");
    }
 });

    //Save button functionality and to local storage
 $(".saveBtn").click(function(){
    userText = $(this).siblings(".input").val();
    eventTime = $(this).siblings(".hour").text();        localStorage.setItem(eventTime, JSON.stringify(userText));
    console.log(eventTime);
    console.log(userText);
 });

 // delete button function
 $(".deleteBtn").click(function(){
    $("textarea").val("");
    localStorage.clear();
 });

});

