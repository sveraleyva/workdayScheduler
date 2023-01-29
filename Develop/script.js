$(function () {
  // get buttons + event listner
  let buttons = $(".saveBtn");
  buttons.on("click", function (event) {
    let parent = $(this).parent().attr("id"); // button
    let description = $(this).siblings(".description").val();
    localStorage.setItem(parent, description);
  });

  // get date
  let date = dayjs().format("MMM D, YYYY");
  $("#currentDay").text(date);

  // get hour + compare it to the hours of the time blocks + edit classes
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

  // getting the description of each hour + saving it to local storage
  $("#hour-9").children(".description").val(localStorage.getItem("hour-9"));
  $("#hour-10").children(".description").val(localStorage.getItem("hour-10"));
  $("#hour-11").children(".description").val(localStorage.getItem("hour-11"));
  $("#hour-12").children(".description").val(localStorage.getItem("hour-12"));
  $("#hour-13").children(".description").val(localStorage.getItem("hour-13"));
  $("#hour-14").children(".description").val(localStorage.getItem("hour-14"));
  $("#hour-15").children(".description").val(localStorage.getItem("hour-15"));
  $("#hour-16").children(".description").val(localStorage.getItem("hour-16"));
  $("#hour-17").children(".description").val(localStorage.getItem("hour-17"));
});
