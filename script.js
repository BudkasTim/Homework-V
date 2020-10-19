$(document).ready(

    function () {
  


//my array of all the timeBlockCols
var timeArr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]


//create a counter where to add from
var startTime = 9;

//add format HH in the data set and convert it into an integer
var HH = parseInt(moment().format("HH"))


//use moment method to place current time into the "currentDay" element
$("#currentDay").text(moment().format("dddd h:mm A"));

//create a for loop that will generate the rows, text area and buttons
for (var i = 0; i < timeArr.length; i++) {
    //create elements    
    var row = $("<div>").attr("class","row");
    var timeBlockCol = $("<div>").attr("class","hour");
    
    var noteText = $("<textarea>").attr("class","description");
    noteText.attr("hour-now",[i]);
    noteText.attr("id",`textarea${[i]}`);
    noteText.attr("value",[i]);
    
    var saveBtn = $("<button>").attr("class","far fa-save fa-2x");
    var hour = $("<div>");
    

    //append element from parent element
    $(".container").append(row);
    row.append(timeBlockCol);
    timeBlockCol.append(hour)
    row.append(noteText);
    row.append(saveBtn);
   
    //set class attributes
    saveBtn.attr("class", "saveBtn");
    row.attr("class", "row");
    hour.attr("class", "hour");
    hour.text(timeArr[i]);
    timeBlockCol.attr("class", "time-block");

   

    //apply data set to all the rows with startTime
    noteText.attr("data-hour", startTime);
    //The next time the code loops it adds startTime with 1
    startTime++

    //adding saved info from storage to th page
    
    if(localStorage.getItem(timeArr[i]) !== null) {
        noteText.text(localStorage.getItem(timeArr[i]))
    }
}
//save button image attribute
$(".saveBtn").append(('<i class="far fa-save fa-2x"></i>'))

//when user clicks button pull the text in that row
$(".saveBtn").on("click", function (event) {
   var text=$(this).siblings('textarea').val().trim();
   var text=$(this).siblings('textarea').attr('id');
   localStorage.setItem(id,JSON.stringify(text));
 
});

var input;

//changes time according to time is it: passed , present or past

$.each($("textarea"), function () {
    let currentTime=moment().hours
    
    if (HH === $(this).data("hour")) {
        $(this).attr("class", "present")
    }

    if (HH > $(this).data("hour")) {
        $(this).attr("class", "past")
    }

    if (HH < $(this).data("hour")) {
        $(this).attr("class", "future")
    }
})


}
);