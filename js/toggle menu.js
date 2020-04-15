$(".toggleMenu").click(function (e) {
    e.preventDefault();
    $(".nav").toggle();
});

if (ww < 800) {
    $(".toggleMenu").css("display", "inline-block");
    $(".nav").hide();
} else {
}