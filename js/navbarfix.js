$(".nav li a").each(function () {
    if ($(this).next().length > 0) {
        $(this).addClass("parent");
    };
})
if (ww < 800) {
    $(".toggleMenu").css("display", "inline-block");
    $(".nav li a.parent").click(function (e) {
        e.preventDefault();
        $(this).parent("li").toggleClass('hover');
    });
} else {
}