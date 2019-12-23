$(document).ready(function () {
    $(".ham").click(function () {
        $('.main-container').hide();
        $(".fas").hide();
        if ($("nav").first().is(":hidden")) {
            $("nav").show();

        } else {
            $("nav").slideUp();
            $(".fas").show();
            $('.main-container').show();
        }
    });
});