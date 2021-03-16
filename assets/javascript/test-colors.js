var testColorToggle = false;
$("#test-colors-btn").click(function () {
    if (testColorToggle === false) {
        $("#test-colors-css").attr("href", "assets/stylesheets/test-colors.css");
        testColorToggle = true;
    }
    else {
        $("#test-colors-css").attr("href", "");
        testColorToggle = false;
    }
});