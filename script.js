$( document.body ).ready(function() {
    
    var date = new Date();
    $("#currentDay").html(date);
    var now = date.getHours();
    console.log(now);

    $(".description").each(function() {
        var val = $(this).attr("data-index");

        console.log(this);
        console.log("the value is: " + parseInt(val));

        if (val < now) {
            $(this).removeClass("present future").addClass("past");
            console.log("Past");
        } else if (val == now) {
            $(this).removeClass("past future").addClass("present");
            console.log("Present");
        } else if (val > now) {
            $(this).removeClass("past present").addClass("future");
            console.log("Future");
        }
    })

    var events = [];

    $(".saveBtn").on("click", function(event) {
        event.preventDefault;
        $(".description").each(function(i, hour) {
            events[i] = hour.value;
        })
        localStorage.setItem("events", JSON.stringify(events));
    })

    $("#clr").on("click", function(event) {
        event.preventDefault;
        $(".description").each(function(i, hour) {
            events[i] = "";
        })
        localStorage.setItem("events", JSON.stringify(events));
        window.location.reload(false); 
    })

    var newevents = JSON.parse(localStorage.getItem("events"));

    if (newevents !== null) {
        $(".description").each(function(i, hour) {
            hour.value = newevents[i];
        })
    }
});