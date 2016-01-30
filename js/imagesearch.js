//Searchbox

var $search = $("#imgsearch");

function isBlank() {
    return $search.val() === "";
}


//When clicking on search box
$search.focus(function() {

    if (isBlank()) {
        //Add .hidden class to all thumbnail links
        $(".thumbnail").animate({"margin-left": 0, opacity: 0}, 200, "linear", function () {
            $(".thumbnail").addClass("hidden");
        })
    }
})
//When finishing keystroke in searchbox
.keyup(function() {
    //Check if each .caption element contains search value from search box
    $(".caption").each(function() {
        if ($(this).text().toLowerCase().indexOf($search.val().toLowerCase()) > -1 && !isBlank()) {
            //Remove .hidden class
            $(this).prev().animate({"margin-left": 15, opacity: 1}, {
                duration: 200,
                start: function() {
                    $(this).removeClass("hidden")
                }
            })
        } else {
            $(this).prev().animate({"margin-left": 0, opacity: 0}, 200, "linear", function () {
                $(this).addClass("hidden");
            })
            }
        })
    })

//When clicking out of the search box
.blur(function() {
    //If search box value is ''
    if (isBlank()) {
        //Remove .hidden class from all thumbnail links
        $(".thumbnail").removeClass("hidden").removeClass("hidden").animate({"margin-left": 15, opacity: 1}, 200, "linear");
    }

    })
;


