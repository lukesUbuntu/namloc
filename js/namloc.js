/**
 * Created by Yar on 7/09/14.
 */

$(document).ready(function () {

    //apply mouseover to modify nail icon to rotate
    $('.hhome , .top_logo_name').hover(function () {
        $(".icon-nail").addClass('fa-rotate-90');
    }, function () {
        $(".icon-nail").removeClass('fa-rotate-90');
    });

    //rezise image height based on image width
});

//pre cache images just add to array
(function($) {
    var cache = [];
    // Arguments are image paths relative to the current page.
    $.preLoadImages = function() {
        var args_len = arguments.length;
        for (var i = args_len; i--;) {
            var cacheImage = document.createElement('img');
            cacheImage.src = "images/"+arguments[i];
            cache.push(cacheImage);
        }
    }
})(jQuery)

//jQuery.preLoadImages("header_image_2.png", "kitchen_1.png","tape_measure_1.png","fence_2.png");


//console.log("namloc.js loaded");