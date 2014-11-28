/**
 * Created by OEM on 7/07/14.
 */

/**
 * CMS Basic Editor
 */

//on document loaded
$(document).ready(function(){

    //build edit button
    var $edit_button = $("<span>").addClass("btn btn-default glyphicon glyphicon-pencil");

    //all editable classes content add the pencil icon
    $(".allowed_edit").prepend($edit_button);

    //int the toolbar and load prettyprint for html code


})


//we have clicked a edit button now parse data to edit region
$(document).on("click",".allowed_edit",function(){

//$(".allowed_edit").click(function(){

    $thisEditArea = $(this).parent();
    console.log("clicked");

    //small back to get outside the first parent edit
    if ($(".edit_area:first",$thisEditArea).length < 1)
        $thisEditArea = $thisEditArea.parent();


    //clean editor
    $("#editor").empty();

    //grab html code from div just the first .edit_area
   var $html_code = $(".edit_area:first",$thisEditArea);
    $html_code.addClass("live_edit");

    //pass to edit
    $("#editor").html($html_code.html());

    //rebind save button
    $("#editor_save").click(function(){
        var updated_html = $("#editor").html()
        $html_code.html(updated_html)
        $html_code.removeClass("live_edit");
        $(this).unbind();
    })
    //show editor
    $('#full_editor').modal('show');

})

$(document).on("click",".close-editor",function(){
    //show editor
    $('#full_editor').modal('hide');
})
