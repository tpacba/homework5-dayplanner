$( document.body ).ready(function() {
    var date = new Date();
    $("#currentDay").html(date);
    var now = date.getHours();
    console.log(now);

    // var now = 0;
    // setInterval(function() {
    //     now++;
    //     console.log(now);
    //     $(".description").each(function(i) {
    //         console.log(this);
    //         var val = $(this).attr("value");
    //         console.log("the value is: " + parseInt(val));
    
    //         if (val < now) {
    //             $(this).removeClass("present future").addClass("past");
    //             console.log("Past");
    //         } else if (val == now) {
    //             $(this).removeClass("past future").addClass("present");
    //             console.log("Present");
    //         } else if (val > now) {
    //             $(this).removeClass("past present").addClass("future");
    //             console.log("Future");
    //         }
    //     })
    // }, 2000);

    $(".description").each(function() {
        var val = $(this).attr("value");

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
});