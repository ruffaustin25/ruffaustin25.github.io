// From app.scss
const projectBorderWidth = 0.1; // in vh
const projectEdgeBlur = 1 / (1 + projectBorderWidth / 2); // in vh

// Distance before snapping to the nearest project page
const scrollSnapDistance = 0.25;
// How long since scroll stopped to wait before snapping scroll, in ms
const stopScrollSnapTime = 300;
// How long to animate the scroll snap for
const scrollSnapDuration = 200;
var scrollStopPosition = -100000;
var disableScrollCallback = false;
var lastSnapElement = null;
var scrollStopTimeoutId = null;

// Carousel variables
const carouselHoldTime = 3000; // in ms
const carouselProgressTime = 250; // in ms
var currentCarouselTimeoutId = null;
var currentCarouselProjectIdAttr = null;
var currentCarouselIndex = 0;

// Finds a project in the projects.json that gets injected into the final app.js
function GetProjectById(id)
{
    for (let proj of projectsJson)
    {
        if (proj.id === id)
        {
            return proj;
        }
    }
}

function GetProjectTop(proj)
{
    if (typeof proj !== "string")
    {
        console.log($(proj).attr('id'));
    }
    return $(proj).offset().top - (projectEdgeBlur - 1) * window.screen.availHeight;
}

function ScrollToProject(proj)
{
    let elementTop = GetProjectTop(proj);

    disableScrollCallback = true;
    $('html').animate({
        scrollTop: elementTop
    }, scrollSnapDuration, function() {
        // Animation complete
        disableScrollCallback = false;
    });
}

function DoScrollStop() 
{
    let projects = $('.project-container');
    let snapPixels = window.screen.availHeight * scrollSnapDistance;
    for (let proj of projects)
    {
        let elementTop = GetProjectTop(proj);
        if (Math.abs($(this).scrollTop() - elementTop) < snapPixels)
        {
            if (proj === lastSnapElement)
            {
                return;
            }

            console.log('Snap to: ' + elementTop + ' ' + proj);
            lastSnapElement = proj;

            let idStr = $(proj).attr('id');
            currentCarouselProjectIdAttr = '#' + idStr;
            currentCarouselIndex = 0;
            ResetCarousel();

            let projectObj = GetProjectById(idStr);
            document.title = 'Austin Ruff\'s Portfolio | ' + projectObj.name;
            history.replaceState({}, '', '/index.html?project=' + idStr);

            ScrollToProject(proj);
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

// Carousel functions
function CarouselTick()
{
    let firstCarouselElement = $(currentCarouselProjectIdAttr).find('.project-image');
    let secondCarouselElement = $(currentCarouselProjectIdAttr).find('.project-image-next');

    firstCarouselElement.animate({
        left: '-100%'
    }, carouselProgressTime, function() {
        // Animation complete
        firstCarouselElement.css('left', '0%');
        ResetCarousel();
    });
    
    secondCarouselElement.animate({
        left: '0%'
    }, carouselProgressTime, function() {
        secondCarouselElement.css('left', '100%');
    });
}

function StopCarousel()
{
    if (currentCarouselTimeoutId)
    {
        clearTimeout(currentCarouselTimeoutId);
    }
}

function ResetCarousel()
{
    StopCarousel();
    currentCarouselTimeoutId = setTimeout(CarouselTick, carouselHoldTime);
}

// Check parameters and initialize
function Initialize()
{
    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('project'))
    {
        currentCarouselProjectIdAttr = '#' + searchParams.get('project');
        ScrollToProject(currentCarouselProjectIdAttr);
    }
    else
    {
        let idStr = $('.project-container').first().attr('id');
        currentCarouselProjectIdAttr = '#' + idStr;
        let proj = GetProjectById(idStr);
        document.title = 'Austin Ruff\'s Portfolio | ' + proj.name;
        history.replaceState({}, '', '/index.html?project=' + idStr);
    }
    ResetCarousel();
}

$(function() 
{
    Initialize();
});