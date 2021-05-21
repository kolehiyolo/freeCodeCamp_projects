// < Determining the Project - 
// This fetches the innerHTML from the <title> element of the page
var projectTitle = $("title").text();
console.log("The project is " + projectTitle);

// These variables are for the links for the rules and sample of each project
var rules
var sample

switch (projectTitle) {
    // This determines the links for the rules and samples of each project depending on the <title> of the page
    case "freeCodeCamp [C01P01] - Build a Tribute Page":
        rules = "https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-tribute-page";
        sample = "https://codepen.io/freeCodeCamp/full/zNqgVx";
        break;
    case "freeCodeCamp [C01P02] - Build a Survey Form":
        rules = "https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-survey-form";
        sample = "https://codepen.io/freeCodeCamp/full/VPaoNP";
        break;
    case "freeCodeCamp [C01P03] - Build a Product Landing Page":
        rules = "https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-product-landing-page";
        sample = "https://codepen.io/freeCodeCamp/full/RKRbwL";
        break;
    case "freeCodeCamp [C01P04] - Build a Technical Documentation Page":
        rules = "https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-technical-documentation-page";
        sample = "https://codepen.io/freeCodeCamp/full/NdrKKL";
        break;
    case "freeCodeCamp [C01P05] - Build a Personal Portfolio Webpage":
        rules = "https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-personal-portfolio-webpage";
        sample = "https://codepen.io/freeCodeCamp/full/zNBOYG";
        break;
    
}

// This simply makes turns the rules and sample links into anchor HTML for later use in the next section
rules = '<a href="' + rules + '" target="_blank">rules</a>' ;
sample = '<a href="' + sample + '" target="_blank">sample</a>' ;
// - Determining the Project ! 

// < Adding the #project-macros-div - 
var projectMacrosHtml = '<!-- < #project-macros-div - -->'
+ '\n' + '<div id="project-macros-hover"></div>'
+ '\n' + '<div id="project-macros-div">'
+ '\n' + '    <!-- This button is used to toggle the test colors for the elements to better highlight the layout-->'
+ '\n' + '    <button id="test-colors-btn" class="project-macros-btn">'
+ '\n' + '        <p>colors</p>'
+ '\n' + '    </button>'
+ '\n' + '    <!-- This button links to the rules for the current project you are viewing/working on -->'
+ '\n' + '    <button id="fcc-rules-btn" class="project-macros-btn">'
+ '\n' + '    ' + rules
+ '\n' + '    </button>'
+ '\n' + '    <!-- This button links to the sample CodePen project that you can base the project on -->'
+ '\n' + '    <button id="fcc-sample-btn" class="project-macros-btn">'
+ '\n' + '    ' + sample
+ '\n' + '    </button>'
+ '\n' + '    <!-- This button activates the script for the freeCodeCamp test module -->'
+ '\n' + '    <button id="test-suite-btn" class="project-macros-btn">'
+ '\n' + '        <p>test</p>'
+ '\n' + '    </button>'
+ '\n' + '    <!-- This button sends you to the parent page -->'
+ '\n' + '    <button id="go-home-btn" class="project-macros-btn">'
+ '\n' + '        <a href="../../index.html">home</a>'
+ '\n' + '    </button>'
+ '\n' + '</div>'
+ '\n' + '<!-- - #project-macros-div ! -->';

// This simply appends the above HTML into the body before the end tag
$(document.body).append(projectMacrosHtml);

// This verifies whether or not the append was successful by identifying if a #project-macros-div element exists
var appendChecker = $("#project-macros-div").length;
if (appendChecker === 1) {
    console.log("#project-macros-div has been successfully appended!");
}
else {
    console.log("#project-macros-div has not been appended!");
}
// - Adding the #project-macros-div ! 

// < Adding the #project-macros-css - 
var projectMacrosStylesheets = "<link id='project-macros-css' rel='stylesheet' href='../../../../assets/project-macros/project-macros.css'>";

// This adds the above CSS link to the page, specifically right after the #test-colors-css link
$("#test-colors-css").after(projectMacrosStylesheets);

// This verifies whether or not the append was successful by identifying if a #project-macros-css element exists
var cssChecker = $("#project-macros-css").length;
if (cssChecker === 1) {
    console.log("#project-macros-css has been successfully installed!");
}
else {
    console.log("#project-macros-css has not been installed!");
}
// - Adding the #project-macros-css ! 

// < freeCodeCamp Test Suite Button - 
var fccTestToggle = false;
$("#test-suite-btn").click(function () {
    if (fccTestToggle === false) {
        $(document.body).append('<script id="fcc-test-script" src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>');
        console.log("The test suite has been added"); 
        fccTestToggle = true;
    }
    else {
        console.log("The test suite is already up");
    }
});
// - freeCodeCamp Test Suite Button ! 

// < Test Colors Button - 
var testColorToggle = false;
$("#test-colors-btn").click(function () {
    if (testColorToggle === false) {
        $("#test-colors-css").attr("href", "assets/stylesheets/test-colors.css");
        console.log("Test Colors ON");
        testColorToggle = true;
    }
    else {
        $("#test-colors-css").attr("href", "");
        console.log("Test Colors OFF");
        testColorToggle = false;
    }
});
// - Test Colors Button ! 