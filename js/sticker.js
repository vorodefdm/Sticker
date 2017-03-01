(function ( $ ) {

	var scrollTop,offsetTop,offsetLeft,elemHeight,windowWidth,elem;

	$.fn.sticker = function( options ) {


        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            //offsetTop: 0,
            zIndex: 1000,
        }, options);

        //offsetTop=settings.offsetTop;
        zIndex=settings.zIndex;
        elem = this;

        adjustElementPos();

        $(window).scroll(function () {
        	scrollTop = $(window).scrollTop();

        	if (scrollTop>=offsetTop)
        		elem.css({
        			'position': 'fixed',
        			'top': 0,
        			'left': offsetLeft,
        			'z-index': zIndex
        		});
        	else
        		elem.css({
        			'position': 'static'
        		});
        });


        $(window).resize(function () {
        	adjustElementPos();
        });

        function adjustElementPos() {
        	windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

        	elem.css({
        		'position': 'static'
        	});

        	offsetLeft = elem.offset().left;
        	offsetTop = elem.offset().top;
        }

        return elem;
    }

}(jQuery));