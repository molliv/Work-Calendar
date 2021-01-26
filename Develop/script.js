$(document).ready(function() {

// Initial variables
var eventText;
var eventTime;

//Displaying current date and time
    $("#currentDay").text(moment().format('MMMM Do YYYY'));

//Save button functionality and to local storage
    $(".saveBtn").click(function(){
        eventText = $(this).siblings(".textarea").val();
        eventTime = $(this).siblings(".textarea").val();
        localStorage.setItem(eventTime, JSON.stringify(eventText));
    })

});

