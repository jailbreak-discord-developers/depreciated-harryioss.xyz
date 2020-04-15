$(document).ready(function () {
    $(".toggleMenu").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(".nav").toggle();
    });
});
if (ww < 800) {
    $(".toggleMenu").css("display", "inline-block");
    if (!$(".toggleMenu").hasClass("active")) {
        $(".nav").hide();
    } else {
        $(".nav").show();
    }
    $(".nav li a.parent").click(function (e) {
        e.preventDefault();
        $(this).parent("li").toggleClass('hover');
    });
}