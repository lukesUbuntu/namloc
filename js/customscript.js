/**
 * Created by Luke Hardiman 25/06/14.
 */



/**
 * runs on navigation clicked
 */
$('#top-nav-bar a').click(function(element){

    //small hack for mobile device collapsing menu [need to add check for mobile device before forcing menu collapse]
    if (deviceType.match(/ExtraSmall|Small/i)){
        console.log("running mobil nav close")

        //make sure we are not already collapsed
        if ($(".navbar-toggle").hasClass("collapsed") != true)
        $(".navbar-toggle").click();
    }


    //menu nav bar clicked
    var thisElement = $(this).attr('id');

    //remove current active class & dropdown class
    $('#top-nav-bar li').removeClass("active");
    $('#top-nav-bar li').removeClass("open");


    //add active class to clicked element
    $(this).parent().addClass("active");

        //slow scroll to element | added trycatch as annoying error when uptop @todo add typeof element check
        try{
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
        }catch(e){}


    //don't return events as we are still listening maybe
    //return false;
});

/**
 * runs on members clicked
 */


$(".member").click(function(){

    //grab current div clicked
    var thisMember = $(this);

    //fade out image to top
    $(".member_photo",thisMember).slideUp(1000);

    //fade in about us div
    var about_me = $(".about-staff",thisMember).slideDown("slow")

    //copy the members photo image and prepend to the about us div
    var staff_photo = $(".member_photo img",thisMember).clone(true);
    staff_photo
        .css({
            'width' : 100,
            'height' : 100
        })

        .prependTo(about_me)

    //unbind click even @todo move this to prevent default but also when clicking another member remove back to image
    thisMember.unbind('click');
    //$(this).find("img").fadeOut();
})



//fake login username = admin password = admin
 $("#login_success").click(function(){
    //if (/admin/i.test($("#username").val()) && /admin/i.test($("#password").val()))
     window.location.href = "editor/index.html";
 })


//Function to find which display we are running
function deviceScale() {
    //predfined scales
    var envMode = ["ExtraSmall", "Small", "Medium", "Large"];
    //css scale mode
    var envValues = ["xs", "sm", "md", "lg"];

    //create element and append to body
    var $el = $('<div>');
    $el.appendTo($('body'));
    //loop enviroment append hidden div
    for (var i = envValues.length - 1; i >= 0; i--) {
        var envVal = envValues[i];

        $el.addClass('hidden-'+envVal);
        if ($el.is(':hidden')) {
            $el.remove();
            return envMode[i]
        }
    };
}

//pre define our device viewing.
var deviceType = deviceScale();
console.log("deviceScale",deviceScale());
