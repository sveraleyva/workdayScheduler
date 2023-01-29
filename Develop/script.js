// fuctions
$(function () {
  let buttons = $(".saveBtn");

  buttons.on("click", function (event) {
    let parent = $(this).parent().attr("id"); // button
    let description = $(this).siblings(".description").val();
    localStorage.setItem(parent, description);
  });

  let date = dayjs().format("MMM D, YYYY");
  $("#currentDay").text(date);
  $(".time-block").each(function () {
    let hour = parseInt($(this).attr("id").split("-")[1]);
    if (hour < dayjs().hour()) {
      $(this).addClass("past");
    } else if (hour === dayjs().hour()) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  $("#hour-9").children(".description").val(localStorage.getItem("hour-9"));
});

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.

// event listeners
