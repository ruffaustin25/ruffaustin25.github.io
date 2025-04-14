// Duplicated from app.scss
const projectBorderWidth = 0.1; // in vh
const projectEdgeBlur = 1 / (1 + projectBorderWidth / 2); // in vh

// Distance before snapping to the nearest project page
const scrollSnapDistance = 0.4;
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
const carouselProgressTime = 200; // in ms
var currentCarouselTimeoutId = null;
var currentCarouselProjectIdAttr = null;
var currentCarouselIndex = -1; // -1 is the cover image
var isCarouselPaused = false;
var isAnimatingCarousel = false;
var carouselTargetImage = null;

// Finds a project in the projects.json that gets injected into the final app.js
function GetProjectById(id)
{
    if (id.startsWith('#'))
    {
        id = id.substring(1);
    }
    
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
    return $(proj).offset().top - (projectEdgeBlur - 1) * window.screen.availHeight;
}

function ScrollToProject(proj)
{
    let elementTop = GetProjectTop(proj);

    disableScrollCallback = true;
    currentCarouselIndex = -1;
    ResetCarousel();
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
            ResetCarousel();

            let projectData = GetProjectById(idStr);
            document.title = 'Austin Ruff\'s Portfolio | ' + projectData.name;
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

// Carousel-related functions
function UpdateTextColors(selectedIndex)
{
    let projectHeading = $(currentCarouselProjectIdAttr).find('h2');
    let projectPoints = $(currentCarouselProjectIdAttr).find('.project-point');
    let projectData = GetProjectById(currentCarouselProjectIdAttr);

    // Finding all possible selections
    let unselectedElements = [projectHeading];
    for (let point of projectPoints)
    {
        unselectedElements.push(point);
    }
    
    // Finding as well as all others
    let selectedElement = projectHeading;
    if (selectedIndex >= 0)
    {
        selectedElement = projectPoints.get(selectedIndex);
    }

    // Remove the selected element from the unselected array, animate all unselected back to normal
    let indexToRemove = unselectedElements.indexOf(selectedElement);
    unselectedElements.splice(indexToRemove, 1);
    for (let elem of unselectedElements)
    {
        $(elem).css('color', projectData.textNormalColor);
        $(elem).css('transition', 'color ' + carouselProgressTime + 'ms ease');
    }

    $(selectedElement).css('color', projectData.textSelectedColor);
    $(selectedElement).css('transition', 'color ' + carouselProgressTime + 'ms ease');
}

function ScrollCarousel(callback, toIndex)
{
    let firstCarouselElement = $(currentCarouselProjectIdAttr).find('.project-image');
    let secondCarouselElement = $(currentCarouselProjectIdAttr).find('.project-image-next');
    let projectData = GetProjectById(currentCarouselProjectIdAttr);

    // Getting the next index to go to
    if (toIndex === null || toIndex === undefined)
    {
        toIndex = (currentCarouselIndex + 1) % projectData.points.length;
    }

    let nextImage = projectData.points[toIndex].image;
    if (carouselTargetImage === nextImage)
    {
        return;
    }

    carouselTargetImage = nextImage;
    currentCarouselIndex = toIndex;

    // Set images and animate the transition
    secondCarouselElement.attr('src', carouselTargetImage);
    
    UpdateTextColors(toIndex);

    if (isAnimatingCarousel)
    {
        return;
    }
    isAnimatingCarousel = true;

    firstCarouselElement.animate({
        left: '-100%'
    }, carouselProgressTime, function() {
        // Animation complete
        firstCarouselElement.css('left', '0%');
        firstCarouselElement.attr('src', carouselTargetImage);
    });
    
    secondCarouselElement.animate({
        left: '0%'
    }, carouselProgressTime, function() {
        secondCarouselElement.css('left', '100%');
        isAnimatingCarousel = false;
        if (callback && !isCarouselPaused)
        {
            callback();
        }
    });
}

function CarouselTick()
{
    if (isCarouselPaused)
    {
        return;
    }
    ScrollCarousel(callback = ResetCarousel);
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
    isCarouselPaused = false;
    currentCarouselTimeoutId = setTimeout(CarouselTick, carouselHoldTime);
}

function AddCarouselLinks()
{
    let projectPoints = $('html').find('.project-point');

    for (let point of projectPoints)
    {
        let pointIndex = $(point).index();
        $(point).on("click", function(){
            isCarouselPaused = true;
            ScrollCarousel(callback = null, toIndex = pointIndex);
        });
    }
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
    AddCarouselLinks();
    ResetCarousel();
}

$(function() 
{
    Initialize();
});