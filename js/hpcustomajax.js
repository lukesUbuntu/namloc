/**
 * Created by 21104216 on 29/07/14.
 */


$(".accordion-heading").click(function(){
    //hide all toolbars
    $(".main-mid").hide();
    $(".top").hide();
    //grab clicked class toolbar to show
    try{
        var tab_click = $.trim($(this).attr("class").replace("accordion-heading",""));
        console.log("class grabbed",tab_click)
        $(".right-"+tab_click).show();
        var tab_click = $.trim($(this).attr("class").replace("accordion-heading",""));
        console.log("class grabbed",tab_click)
        $(".tab-"+tab_click).show();
        console.log(tab_click);

    }catch(e){
        console.log("right_click error",e)
        console.log("tab_click error",e)
    }
})

$(".top-domain").click(function(){
    var class_show = $(this).attr('action')
    //check to make sure we are not disabled button
    if ($(this).hasClass("disabled")) return;
    console.log("class_show",class_show);

    //hide all toolbars
    $(".setting").hide();

    //show the action toolbar
    $(class_show).removeClass('hide').show();
    //.removeClass('hide');
        //.toggleClass("hide");

    //remove all disabled class from top bar
    $(".top-domain").css({
        'background-color': ''
    })
        .removeClass('disabled')

    //add disabled class to clicked button
    $(this).css({
        'background-color' : 'rgb(24,180,244)'
    })
        .addClass('disabled')

})