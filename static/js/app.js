// Projects json
projectsJson = [
    {
        "name": "Aquifer",
        "dateRange": "(Feb 2022 - Present)",
        "id": "aquifer",
        "linkUrl": "https://www.aquifermotion.com/",
        "coverImage": "/static/img/aquifer/cover.jpg",
        "textNormalColor": "#777",
        "textSelectedColor": "#EEE",
        "coverGradient": [
            "#071C1F",
            "#0E373D"
        ],
        "points": [
            {
                "image": "/static/img/aquifer/appInterface.png",
                "text": "Worked on a live service 3D animation software product from Aquifer Inventions"
            },
            {
                "image": "/static/img/aquifer/poser.png",
                "text": "Created a pose-based procedural animation system with blending, overshoot, step adjustment, and IK-based hand position adjustment"
            },
            {
                "image": "/static/img/aquifer/hair.png",
                "text": "\"Forked\" <a class=\"body-link\" href=\"https://github.com/Unity-Technologies/com.unity.demoteam.hair\">Unity Demoteam Hair</a> and <a class=\"body-link\" href=\"https://github.com/Unity-Technologies/com.unity.demoteam.digital-human\">Demoteam Digital Human</a> packages to our internal bitbucket",
                "subPoints": [
                    "Created a URP hair shader that works with the Demoteam hair package",
                    "Added an approximate transmission/rimlight effect to the hair shader that works with URP without path tracing",
                    "Option to remove unnecessary physics for performance reasons",
                    "Added build-time and realtime alpha sorting to the Demoteam Hair package"
                ]
            },
            {
                "image": "/static/img/aquifer/outline.png",
                "text": "Created an masked screen space outline system using URP scriptable render passes and sobel filters"
            },
            {
                "image": "/static/img/aquifer/prosody.png",
                "text": "Worked on a server side system for fulfilling orders from sources like Cameo that allowed for creating app readable files from form inputs"
            }
        ]
    },
    {
        "name": "Kingdom Boss",
        "dateRange": "(Dec 2021 - Feb 2022)",
        "id": "kingdomBoss",
        "linkUrl": "https://x.com/kingdombossgame",
        "coverImage": "/static/img/kingdomBoss/cover.jpg",
        "textNormalColor": "#000",
        "textSelectedColor": "#DDD",
        "coverGradient": [
            "#384455",
            "#7088aa"
        ],
        "points": [
            {
                "image": "/static/img/kingdomBoss/gameplay.png",
                "text": "Soft-launched in 2021 by Bossfight Entertainment"
            },
            {
                "image": "/static/img/kingdomBoss/sim.png",
                "text": "Worked in a client/server dead-reckoning architecture using recorded states with simulation commands"
            },
            {
                "image": "/static/img/kingdomBoss/abilities.png",
                "text": "Worked on an component-based ability system",
                "subPoints": [
                    "Editor tool for automatically documenting components",
                    "Editor tool for adding breakpoints during ability evaluation",
                    "Editor tool for viewing and editing character stats at runtime",
                    "Editor tool for adding, viewing, and deleting components",
                    "Supported design team by adding more gameplay specific features and components to the system"
                ]
            },
            {
                "image": "/static/img/kingdomBoss/scripting.png",
                "text": "Worked on in-house scripting language features",
                "subPoints": [
                    "Added capability for reusable code via macros",
                    "Added capability for changing large amounts of character stats via a compile time constant system, including error reporting on non-constant values"
                ]
            }
        ]
    },
    {
        "name": "Other Work At Bossfight",
        "dateRange": "(Feb 2020 - Feb 2022)",
        "id": "otherBossfight",
        "linkUrl": "https://www.playstudios.com/myvegas-bingo/",
        "coverImage": "/static/img/bossfight/cover.jpg",
        "textNormalColor": "#777",
        "textSelectedColor": "#EEE",
        "coverGradient": [
            "#160c48",
            "#170d49"
        ],
        "points": [
            {
                "image": "/static/img/bossfight/bingo.png",
                "text": "Added scripting language features to MyVEGAS Bingo from Kingdom Boss"
            },
            {
                "image": "/static/img/bossfight/vulkanC.png",
                "text": "Worked on an unanounced project converting DirectX rendering code and shaders to Vulkan"
            },
            {
                "image": "/static/img/bossfight/unity.png",
                "text": "Worked on an unanounced project in Unity"
            }
        ]
    },
    {
        "name": "Lucky's Tale",
        "dateRange": "(Nov 2019)",
        "id": "lucky",
        "linkUrl": "https://playfulstudios.com/new-super-luckys-tale/",
        "coverImage": "/static/img/lucky/cover.jpg",
        "textNormalColor": "#AAA",
        "textSelectedColor": "#FFF",
        "coverGradient": [
            "#756073",
            "#C1ACBF"
        ],
        "points": [
            {
                "image": "/static/img/lucky/hdRumble.jpg",
                "text": "Worked in C++ on a Unity native plugin for HD rumble and video decoding platform specific functionality on Nintendo Switch"
            },
            {
                "image": "/static/img/lucky/luckyCamera.png",
                "text": "Implemented features and made fixes to ensure that the game would pass Nintendo's guidelines"
            },
            {
                "image": "/static/img/lucky/luckyPerf.png",
                "text": "Made optimizations for the game (orginally released on the Xbox One) to bring it up to 30 fps and under 3.2 GB memory usage"
            },
            {
                "image": "/static/img/lucky/luckyDialogue.png",
                "text": "Created a tool to convert all world space speech bubbles into a new screen space dialogue system, avoiding weeks of data re-entry"
            }
        ]
    },
    {
        "name": "Arté: Hemut",
        "dateRange": "(Aug 2018)",
        "id": "hemut",
        "linkUrl": "https://triseum.com/arte-hemut/",
        "coverImage": "/static/img/hemut/cover.jpg",
        "textNormalColor": "#777",
        "textSelectedColor": "#EEE",
        "coverGradient": [
            "#19120c",
            "#513b23"
        ],
        "points": [
            {
                "image": "/static/img/hemut/dialogue.png",
                "text": "Optimized serialized size and modified dialogue system from \"Arté: Lumiere\""
            },
            {
                "image": "/static/img/hemut/cards.png",
                "text": "Added a global blackboard system that could be manipulated and read by the dialogue system for branching options"
            },
            {
                "image": "/static/img/hemut/overworld.png",
                "text": "Worked on the \"overworld\" of the game where the player could progress through learning directed choices"
            }
        ]
    },
    {
        "name": "Arté: Lumiere",
        "dateRange": "(Aug 2018)",
        "id": "lumiere",
        "linkUrl": "https://triseum.com/arte-lumiere/",
        "coverImage": "/static/img/lumiere/cover.jpg",
        "textNormalColor": "#000",
        "textSelectedColor": "#DDD",
        "coverGradient": [
            "#726c60",
            "#545454"
        ],
        "points": [
            {
                "image": "/static/img/lumiere/dialogue.jpg",
                "text": "Created a node-based graphical dialogue editor that allowed for rapid implementation of dialogue trees",
                "subPoints": [
                    "Used reflection to populate fields in the Editor and to serialize the tree structure",
                    "Adjacency list to store the tree",
                    "Supported triggering actions from dialogue nodes"
                ]
            },
            {
                "image": "/static/img/lumiere/connections.png",
                "text": "Worked on a card-base minigame",
                "subPoints": [
                    "Rendering of flippable cards",
                    "Scoring of cards",
                    "Card snapping to zones"
                ]
            },
            {
                "image": "/static/img/lumiere/tagging.jpg",
                "text": "Worked on a grid-based puzzle minigame",
                "subPoints": [
                    "Editor tool for quickly editing a grid of prefabs",
                    "Implementation of A* pathfinding"
                ]
            }
        ]
    }
]

// Global site script
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

// Project specific js
// Register navigation
$(function()
{
    $('#aquifer_nav').on("click", function(){
        const elementTop = $('#aquifer').offset().top - (projectEdgeBlur - 1) * window.screen.availHeight;
        $('html').animate({
            scrollTop: elementTop
        }, scrollSnapDuration);
    });
});
// Register navigation
$(function()
{
    $('#kingdomBoss_nav').on("click", function(){
        const elementTop = $('#kingdomBoss').offset().top - (projectEdgeBlur - 1) * window.screen.availHeight;
        $('html').animate({
            scrollTop: elementTop
        }, scrollSnapDuration);
    });
});
// Register navigation
$(function()
{
    $('#otherBossfight_nav').on("click", function(){
        const elementTop = $('#otherBossfight').offset().top - (projectEdgeBlur - 1) * window.screen.availHeight;
        $('html').animate({
            scrollTop: elementTop
        }, scrollSnapDuration);
    });
});
// Register navigation
$(function()
{
    $('#lucky_nav').on("click", function(){
        const elementTop = $('#lucky').offset().top - (projectEdgeBlur - 1) * window.screen.availHeight;
        $('html').animate({
            scrollTop: elementTop
        }, scrollSnapDuration);
    });
});
// Register navigation
$(function()
{
    $('#hemut_nav').on("click", function(){
        const elementTop = $('#hemut').offset().top - (projectEdgeBlur - 1) * window.screen.availHeight;
        $('html').animate({
            scrollTop: elementTop
        }, scrollSnapDuration);
    });
});
// Register navigation
$(function()
{
    $('#lumiere_nav').on("click", function(){
        const elementTop = $('#lumiere').offset().top - (projectEdgeBlur - 1) * window.screen.availHeight;
        $('html').animate({
            scrollTop: elementTop
        }, scrollSnapDuration);
    });
});
