import $ from 'jquery';
window.jQuery = $;
window.$ = $;

const path = require('path');

// import scrollmagic for scroll fx
import ScrollMagic from 'scrollmagic';


function trace_portraits() {
    window.controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            duration: 700
        }
    });


    $(".portrait-image").each(function(index) {

        var this_div = $(this);
        var parentname = this_div[0].id;
        var imgSrc = this_div.attr('imgsrc');

        // console.log(imgSrc);
        import (path.resolve('jekyll/images/people/', imgSrc))
        import ("../jekyll/images/people/" + imgSrc)


        .then((imgmodule) => {
            var parentdiv = $('<div>', {
                class: 'image-wrapper'
            });

            var trace_overlay = $("<svg " + decodeURIComponent(imgmodule.trace));
            trace_overlay.addClass("portrait-trace");
            trace_overlay.addClass("portrait-image");
            var width = $(trace_overlay).attr('width');
            var height = $(trace_overlay).attr('height');

            $(trace_overlay).attr('height', "100%");
            $(trace_overlay).attr('width', "100%");
            $(trace_overlay).attr('viewBox', "0 0 " + width + " " + height);
            $(trace_overlay).attr('preserveAspectRatio', "xMidYMid slice");
            // add class and id to path itself for morphing
            trace_overlay.children()[0].id = parentname + "_tracepath";
            trace_overlay.children()[0].classList.add('trace-path');
            // scale to fit
            // trace_overlay.

            var image_overlay = $("<img />", {
                class: "image-overlay portrait-image",
                src: imgmodule.src,
                id: parentname + "_image"
            });


            parentdiv.append(trace_overlay);
            parentdiv.append(image_overlay);
            this_div.append(parentdiv);

            new ScrollMagic.Scene({
                    triggerElement: "#" + parentname + "_container",
                    triggerHook: 'onCenter',
                    duration: 1000,
                    offset: -200
                })
                .on("enter", function(){
                    $("#" + parentname + "_image").addClass('visible');
                })
                .on("leave", function(){
                    $("#" + parentname + "_image").removeClass('visible');
                })
                // .on("enter leave", function() {
                //     $("#" + parentname + "_image").toggleClass('visible');
                // })
                .addTo(controller);
        });

    });


};
trace_portraits();