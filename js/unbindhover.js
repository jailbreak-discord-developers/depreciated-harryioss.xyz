$(".nav li").unbind('mouseenter mouseleave');
if (ww < 800) {
    $(".toggleMenu").css("display", "inline-block");
    if (!$(".toggleMenu").hasClass("active")) {
        $(".nav").hide();
    } else {
        $(".nav").show();
    }
    $(".nav li").unbind('mouseenter mouseleave');
    $(".nav li a.parent").unbind("click").bind("click", function (e) {
        e.preventDefault();
        $(this).parent("li").toggleClass('hover');
    });
} else {
    $(".toggleMenu").css("display", "none");
    $(".nav").show();
    $(".nav li").removeClass("hover");
    $(".nav li a").unbind("click");
    $(".nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function () {
        $(this).toggleClass('hover');
    });
}