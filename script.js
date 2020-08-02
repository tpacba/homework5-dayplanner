$(document.body).ready(function () {
  // Display current time, use setInterval to display each second
  setInterval(function () {
    var seconds = new Date();
    $("#currentDay").html(seconds);
  }, 1000);

  // Determine current hour
  var date = new Date();
  var now = date.getHours();

  $(".description").each(function () {
    // Grab data-index to specify which time-block is being changed
    var val = $(this).attr("data-index");

    // Add or remove past, present, future classes depending on current hour
    if (val < now) {
      $(this).removeClass("present future").addClass("past");
    } else if (val == now) {
      $(this).removeClass("past future").addClass("present");
    } else if (val > now) {
      $(this).removeClass("past present").addClass("future");
    }
  });

  var events = [];
  // Store each input value into empty array events then set items to local storage
  $(".saveBtn").on("click", function (event) {
    event.preventDefault;
    $(".description").each(function (i, hour) {
      events[i] = hour.value;
    });
    localStorage.setItem("events", JSON.stringify(events));
  });

  // Reset events back into empty array then set items to local storage, finally refresh the page
  $("#clr").on("click", function (event) {
    event.preventDefault;
    $(".description").each(function (i, hour) {
      events[i] = "";
    });
    localStorage.setItem("events", JSON.stringify(events));
    window.location.reload(false);
  });

  // Get saved items from local storage, bypass if empty
  var newevents = JSON.parse(localStorage.getItem("events"));
  if (newevents !== null) {
    $(".description").each(function (i, hour) {
      hour.value = newevents[i];
    });
  }
});
