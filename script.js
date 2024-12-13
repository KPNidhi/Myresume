$(document).ready(function() {
    // Highlight the active navigation link
    $(".nav-link").each(function() {
        if (this.href === window.location.href) {
            $(this).addClass("active");
        }
    });

    // Smooth scrolling for navigation links
    $(".nav-link").on("click", function(event) {
        event.preventDefault();
        const target = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });

    console.log("Website loaded successfully.");
});
