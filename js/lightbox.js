//Lightbox

//Create overlay
var $overlay = $('<div id="overlay"></div>');
var $polaroid = $('<div id="polaroid"></div>');
var $image = $('<img id="largeimg">');
var $thumbnail = $(".thumbnail");

//Navigation arrows
var $rightarrow = $('<a id="rightarrow"><span>></span></a>');
var $leftarrow = $('<a id="leftarrow"><span><</span></a>');

//Append image to polaroid div

$polaroid.append($image);
$overlay.append($polaroid);

//Append overlay and arrows to body
$('body').append($leftarrow).append($overlay).append($rightarrow);


//When the thumbnail is clicked on
$(".thumbnail").click(function(event){
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    // Update overlay with image linked in the link
    $image.attr("src", imageLocation);
    //Get invisible caption paragraph underneath thumbnail and append to overlay
    $(this).next().clone().appendTo($polaroid).show();
    //Show the overlay and arrows.
    $leftarrow.fadeIn(200);
    $rightarrow.fadeIn(200);
    $overlay.fadeIn(200);
});

//When overlay is clicked
$overlay.click(function() {
    //Remove caption
    $('#overlay p.caption').remove();
    //Hide overlay and arrows
    $leftarrow.fadeOut(200);
    $rightarrow.fadeOut(200);
    $overlay.fadeOut(200);
});

//Navigation arrows
//When clicked, we want the next/previous pictures and captions to replace current picture and caption

$('#leftarrow').click(function() {
    $polaroid.animate({"margin-left": "-=100", opacity: 0}, 200, "linear", function () {
        $('#polaroid p.caption').remove();
        $polaroid.css("margin-left", "+=200");
        if ($image.attr("src") === $thumbnail.not(".hidden").first().attr("href")) {
            $thumbnail.not(".hidden").last().next().clone().appendTo($polaroid).show();
            $image.attr("src", $thumbnail.not(".hidden").last().attr("href"));
        } else {
            $("a[href='" + $image.attr('src') + "']").prevAll(".thumbnail:not(.hidden)").eq(0).next().clone().appendTo($polaroid).show();
            $image.attr("src", $("a[href='" + $image.attr('src') + "']").prevAll(".thumbnail:not(.hidden)").eq(0).attr("href"));
        }
    }).animate({"margin-left": "-=100", opacity: 1}, 700, "linear", function() {
        $polaroid.css({"margin-right": "auto","margin-left": "auto"});
    });
});

$('#rightarrow').click(function() {
    $polaroid.animate({"margin-right": "-=100", opacity: 0}, 200, "linear", function () {
        $('#polaroid p.caption').remove();
        $polaroid.css("margin-right", "+=200");
        if ($image.attr("src") === $thumbnail.not(".hidden").last().attr("href")) {
            $thumbnail.not(".hidden").first().next().clone().appendTo($polaroid).show();
            $image.attr("src", $thumbnail.not(".hidden").first().attr("href"));
        } else {
            $("a[href='" + $image.attr('src') + "']").nextAll(".thumbnail:not(.hidden)").eq(0).next().clone().appendTo($polaroid).show();
            $image.attr("src", $("a[href='" + $image.attr('src') + "']").nextAll(".thumbnail:not(.hidden)").eq(0).attr("href"));
        }
    }).animate({"margin-right": "-=100", opacity: 1}, 700, "linear", function() {
        $polaroid.css({"margin-right": "auto","margin-left": "auto"});
    });
});


