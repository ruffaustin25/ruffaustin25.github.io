// Global site script
// On page load
$(function()
{
    console.log("TESTSETESTSET");
});

// Project page ajax loads
$(function()
{
    $('#aquifer').on("click", function(){
        console.log('Tried to load: Aquifer');
        $.ajax({
            type: "GET",
            url: "",
            data: { },
            success: function(data){
                $('#maincont').html(data);
            }
        });
    });
});
$(function()
{
    $('#kingdomBoss').on("click", function(){
        console.log('Tried to load: Kingdom Boss');
        $.ajax({
            type: "GET",
            url: "",
            data: { },
            success: function(data){
                $('#maincont').html(data);
            }
        });
    });
});
$(function()
{
    $('#otherBossfight').on("click", function(){
        console.log('Tried to load: Other Work At Bossfight');
        $.ajax({
            type: "GET",
            url: "",
            data: { },
            success: function(data){
                $('#maincont').html(data);
            }
        });
    });
});
$(function()
{
    $('#lucky').on("click", function(){
        console.log('Tried to load: Lucky&#x27;s Tale');
        $.ajax({
            type: "GET",
            url: "",
            data: { },
            success: function(data){
                $('#maincont').html(data);
            }
        });
    });
});
$(function()
{
    $('#hemut').on("click", function(){
        console.log('Tried to load: Arté: Hemut');
        $.ajax({
            type: "GET",
            url: "",
            data: { },
            success: function(data){
                $('#maincont').html(data);
            }
        });
    });
});
$(function()
{
    $('#lumiere').on("click", function(){
        console.log('Tried to load: Arté: Lumiere');
        $.ajax({
            type: "GET",
            url: "",
            data: { },
            success: function(data){
                $('#maincont').html(data);
            }
        });
    });
});
