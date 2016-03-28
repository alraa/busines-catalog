$(window).load(function(){

    /*Form styler*/
    $('select').styler();

    /*Yandex maps*/
    ymaps.ready(init);
    var map;

    function init(){
        map = new ymaps.Map("home-map", {
            center: [55.76, 37.64],
            zoom: 6
        });
        map.behaviors.disable('scrollZoom');
    }



});

	
	
	
	
	
	
	





