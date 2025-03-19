$(function()
{
    $('#{{page.id}}').on("click", function(){
        console.log('Tried to load: {{page.name}}');
        $.ajax({
            type: "GET",
            url: "{{page.outputPath}}",
            data: { },
            success: function(data){
                $('#maincont').html(data);
            }
        });
    });
});
