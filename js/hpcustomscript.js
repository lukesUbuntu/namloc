/**
 * Created by Yar on 27/07/14.
 */
function toggleChevron(e) {
    //console.log('test')
    //var li_clicked = $(this).attr('id')
    $(e.target)
        .prev('.accordion-heading')
        .find("p.indicator")
        .toggleClass('glyphicon-chevron-right glyphicon-chevron-down');

  // $("."+li_clicked,this).addClass("active-domain")

}
$('#accordion').on('hidden.bs.collapse', toggleChevron);
$('#accordion').on('shown.bs.collapse', toggleChevron);


$(".control-domain-1").hover(function(){
    console.log('test')
        $("i.glyphicon",this).css("color","white");
        $(this).css("background-color","#18B4F4");
        $("a",this).css("color","white");

},function(){
    $("i.glyphicon",this).css("color","#18B4F4");
    $(this).css("background-color","#cdcdcd");
    $("a",this).css("color","#666666");
});
$(".control-domain-2").hover(function(){
    console.log('test')
    $("i.glyphicon",this).css("color","white");
    $(this).css("background-color","#18B4F4");
    $("a",this).css("color","white");

},function(){
    $("i.glyphicon",this).css("color","#18B4F4");
    $(this).css("background-color","#cdcdcd");
    $("a",this).css("color","#666666");
});
$(".control-domain-3").hover(function(){
    console.log('test')
    $("i.glyphicon",this).css("color","white");
    $(this).css("background-color","#18B4F4");
    $("a",this).css("color","white");

},function(){
    $("i.glyphicon",this).css("color","#18B4F4");
    $(this).css("background-color","#cdcdcd");
    $("a",this).css("color","#666666");
});
$(".control-domain-4").hover(function(){
    console.log('test')
    $("i.glyphicon",this).css("color","white");
    $(this).css("background-color","#18B4F4");
    $("a",this).css("color","white");

},function(){
    $("i.glyphicon",this).css("color","#18B4F4");
    $(this).css("background-color","#cdcdcd");
    $("a",this).css("color","#666666");
});

