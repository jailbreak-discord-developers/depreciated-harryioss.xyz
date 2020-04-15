var ww = document.body.clientWidth;
$(document).ready(function () {
    $(".toggleMenu").click(function (e) {
        e.preventDefault();
        $(".nav").toggle();
    });
    $(".nav li a").each(function () {
        if ($(this).next().length > 0) {
            $(this).addClass("parent");
        };
    })
    adjustMenu();
});

function adjustMenu() {
    if (ww < 800) {
        $(".toggleMenu").css("display", "inline-block");
        $(".nav").hide();
        $(".nav li a.parent").click(function (e) {
            e.preventDefault();
            $(this).parent("li").toggleClass('hover');
        });
    } else {
        $(".toggleMenu").css("display", "none");
        $(".nav li").hover(function () {
            $(this).addClass('hover');
        }, function () {
            $(this).removeClass('hover');
        });
    }
}