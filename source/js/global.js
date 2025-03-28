// From app.scss
const projectBorderWidth = 0.1; // in vh
const projectEdgeBlur = 1 / (1 + projectBorderWidth / 2); // in vh

// Distance before snapping to the nearest project page
const scrollSnapDistance = 0.25;
// How long since scroll stopped to wait before snapping scroll, in ms
const stopScrollSnapTime = 300;
var scrollStopPosition = -100000;
var disableScrollCallback = false;
var lastSnapElement = null;
var scrollStopTimeoutId = null;

// On page load
$(function()
{
    console.log("TESTSETESTSET");
});

function DoScrollStop() 
{
    const projects = $(".project-container");
    const snapPixels = window.screen.availHeight * scrollSnapDistance;
    console.log("scroll top: " + $(this).scrollTop());
    for (proj of projects)
    {
        const elementTop = $(proj).offset().top - (projectEdgeBlur - 1) * window.screen.availHeight;
        if (Math.abs($(this).scrollTop() - elementTop) < snapPixels)
        {
            if (proj === lastSnapElement)
            {
                return;
            }

            lastSnapElement = proj;
            console.log("Snap to: " + elementTop + " " + proj);
            disableScrollCallback = true;
            $("html").animate({
                scrollTop: elementTop
            }, 100, function() {
                // Animation complete
                disableScrollCallback = false;
            });
        }
    }
}

$(window).scroll(function()
{
    if (disableScrollCallback)
    {
        return;
    }

    if (scrollStopTimeoutId)
    {
        clearTimeout(scrollStopTimeoutId);
    }

    scrollStopPosition = $(window).scrollTop();
    scrollStopTimeoutId = setTimeout(DoScrollStop, stopScrollSnapTime);
});