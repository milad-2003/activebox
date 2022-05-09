$(document).ready(function() {
    $(".work").mouseenter(function() {
        $(".work").addClass("hovered--work");
    });

    $(".work").mouseleave(function() {
        $(".work").removeClass("hovered--work");
    });
});