// Projects json
projectsJson = [
    {
        "name": "Aquifer",
        "dateRange": "(Feb 2022 - Present)",
        "id": "aquifer",
        "hbsPath": "./source/projectPages/aquifer.hbs",
        "linkUrl": "https://www.aquifermotion.com/",
        "coverImage": "/static/img/aquifer/cover.jpg",
        "coverGradient": [
            "#0e373d",
            "#ebf9f7"
        ],
        "points": [
            {
                "image": "",
                "text": "Live service 3D animation software product from Aquifer Inventions"
            },
            {
                "image": "",
                "text": "Created an masked screen space outline system"
            },
            {
                "image": "",
                "text": "Worked on a server side system for fulfilling orders that allowed for creating app readable files from form inputs"
            },
            {
                "image": "",
                "text": "\"Forked\" <a href=\"https://github.com/Unity-Technologies/com.unity.demoteam.hair\">Unity Demoteam Hair</a> and <a href=\"https://github.com/Unity-Technologies/com.unity.demoteam.digital-human\">Demoteam Digital Human</a> packages to our internal bitbucket",
                "subPoints": [
                    "Created a URP hair shader that works with the Demoteam hair package",
                    "Added an approximate transmission/rimlight effect to the hair shader that works with URP without path tracing",
                    "Option to remove unnecessary physics for performance reasons",
                    "Added build-time and realtime alpha sorting to the Demoteam Hair package"
                ]
            },
            {
                "image": "",
                "text": "Created a pose-based procedural animation system with blending, overshoot, step adjustment, and IK-based hand position adjustment"
            }
        ]
    },
    {
        "name": "Kingdom Boss",
        "dateRange": "(Dec 2021 - Feb 2022)",
        "id": "kingdomBoss",
        "hbsPath": "./source/projectPages/kingdomBoss.hbs",
        "linkUrl": "https://x.com/kingdombossgame",
        "coverImage": "/static/img/kingdomBoss/cover.jpg",
        "coverGradient": [
            "#dcf0e5",
            "#7088aa"
        ],
        "points": [
            {
                "image": "",
                "text": "Soft-launched in 2021 by Bossfight Entertainment"
            },
            {
                "image": "",
                "text": "Worked in a client-server architecture while ensuring sim data is the same on both"
            },
            {
                "image": "",
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
                "image": "",
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
        "hbsPath": "./source/projectPages/otherBossfight.hbs",
        "linkUrl": "https://www.playstudios.com/myvegas-bingo/",
        "coverImage": "/static/img/bossfight/cover.jpg",
        "coverGradient": [
            "#160c48",
            "#170d49"
        ],
        "points": [
            {
                "image": "",
                "text": "Added scripting language features to MyVEGAS Bingo from Kingdom Boss"
            },
            {
                "image": "",
                "text": "Worked on an unanounced project converting DirectX rendering code and shaders to Vulkan"
            },
            {
                "image": "",
                "text": "Worked on an unanounced project in Unity"
            }
        ]
    },
    {
        "name": "Lucky's Tale",
        "dateRange": "(Nov 2019)",
        "id": "lucky",
        "hbsPath": "./source/projectPages/lucky.hbs",
        "linkUrl": "https://playfulstudios.com/new-super-luckys-tale/",
        "coverImage": "/static/img/lucky/cover.jpg",
        "coverGradient": [
            "#e9bfe5",
            "#ffffff"
        ],
        "points": [
            {
                "image": "",
                "text": "Worked in C++ on a Unity native plugin for platform specific functionality on Nintendo Switch"
            },
            {
                "image": "",
                "text": "Implemented features and made fixes to ensure that the game would pass Nintendo's guidelines"
            },
            {
                "image": "",
                "text": "Made optimizations for the game (orginally released on the Xbox One) to bring it up to 30 fps and under 3.2 GB memory usage"
            },
            {
                "image": "",
                "text": "Created a tool to convert all world space speech bubbles into a new screen space dialogue system, avoiding weeks of data re-entry"
            }
        ]
    },
    {
        "name": "Arté: Hemut",
        "dateRange": "(Aug 2018)",
        "id": "hemut",
        "hbsPath": "./source/projectPages/hemut.hbs",
        "linkUrl": "https://triseum.com/arte-hemut/",
        "coverImage": "/static/img/hemut/cover.jpg",
        "coverGradient": [
            "#19120c",
            "#513b23"
        ],
        "points": [
            {
                "image": "",
                "text": "Optimized serialized size and modified dialogue system from \"Arté: Lumiere\""
            },
            {
                "image": "",
                "text": "Added a global blackboard system that could be manipulated and read by the dialogue system for branching options"
            },
            {
                "image": "",
                "text": "Worked on the \"overworld\" of the game where the player could collect an inventory of cards"
            }
        ]
    },
    {
        "name": "Arté: Lumiere",
        "dateRange": "(Aug 2018)",
        "id": "lumiere",
        "hbsPath": "./source/projectPages/lumiere.hbs",
        "linkUrl": "https://triseum.com/arte-lumiere/",
        "coverImage": "/static/img/lumiere/cover.jpg",
        "coverGradient": [
            "#726c60",
            "#545454"
        ],
        "points": [
            {
                "image": "",
                "text": "Created a node-based graphical dialogue editor that allowed for rapid implementation of dialogue trees",
                "subPoints": [
                    "Used reflection to populate fields in the Editor and to serialize the tree structure",
                    "Adjacency list to store the tree",
                    "Supported triggering actions from dialogue nodes"
                ]
            },
            {
                "image": "",
                "text": "Worked on a card-base minigame",
                "subPoints": [
                    "Rendering of flippable cards",
                    "Scoring of cards",
                    "Card snapping to zones"
                ]
            },
            {
                "image": "",
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
