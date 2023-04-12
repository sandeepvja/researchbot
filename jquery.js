$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".navbar").addClass("nav-header-light");
            $(".navbar").removeClass("nav-header-dark");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(".navbar").removeClass("nav-header-light");
            $(".navbar").addClass("nav-header-dark");
        }
    });
});
