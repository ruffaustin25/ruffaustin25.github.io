// Register navigation
$(function()
{
    $('#{{{page.id}}}_nav').on("click", function(){
        const elementTop = $('#{{{page.id}}}').offset().top - (projectEdgeBlur - 1) * window.screen.availHeight;
        $('html').animate({
            scrollTop: elementTop
        }, scrollSnapDuration);
    });
});