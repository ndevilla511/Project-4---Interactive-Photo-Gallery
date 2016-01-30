//Searchbox

var $search = $("#imgsearch");

function isBlank() {
    return $search.val() === "";
}

//When clicking on search box
$search.keyup(function() {
    //Check if each .caption element contains search value from search box
    $(".caption").each(function() {
        if (isBlank()) {
            //Remove .hidden class from all thumbnail links
            $(".thumbnail").removeClass("hidden").removeClass("hidden").animate({"margin-left": 15, opacity: 1}, 200, "linear");
        } else if ($(this).text().toLowerCase().indexOf($search.val().toLowerCase()) > -1 && !isBlank()) {
            //Remove .hidden class
            $(this).prev().animate({"margin-left": 15, opacity: 1}, {
                duration: 200,
                start: function() {
                    $(this).removeClass("hidden");
                }
            });
        } else {
            $(this).prev().animate({"margin-left": 0, opacity: 0}, 200, "linear", function () {
                $(this).addClass("hidden");
            });
        }
    });
});



