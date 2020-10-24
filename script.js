$(document).ready(function() {
    // moment variable
    var hr = moment().hours();

    // current date
    function currentDate() {
        $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    };

    // color Event Rows
    function colorMeJack() {
        
        $("input").each(function() {
            console.log(this)
            console.log(hr)
            var rHour = $(this).attr("id");
            var rNum = parseInt(rHour);
            console.log("thisisrHour" + rHour)
            console.log("this is rnum "+ rNum)
            if (rNum === hr) {
                console.log("if")
            
                $(this).addClass("present");
            } else if (rNum > hr) {
                console.log("else if")
                $(this).addClass("future");
            } else {
                console.log("else")
                $(this).addClass("past");
            };
        });
    };

    // save events to local storage via button
    $(".saveBtn").click(function() {
        var imputs = $(this).siblings(".event").val();
        var imputLoc = $(this).siblings(".event").attr("id");
        localStorage.setItem(imputs,imputLoc);
    })

    // retrieving stored imputs for later use
    function retrieveSchedule() {
        $(".event").each(function() {
            var eventId = $(this).attr("id");
            $(this).val(localStorage.getItem(eventId))
        });
    };

    setInterval(currentDate,1000);
    colorMeJack();
    setInterval(colorMeJack,1000);
    retrieveSchedule();

})

