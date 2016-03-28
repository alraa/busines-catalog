/*Form styler*/
$('select').styler();
var $= jQuery.noConflict();

$(window).load(function(){

    /*Fancy box*/
    $(".fancybox").fancybox({
            openEffect	: 'none',
            closeEffect	: 'none',
            helpers: {
                overlay: {
                    locked: false
                }
            }
        }
    );

    /*Slow scroll*/
    $('.anchor-link').click(function(){
        var pos = $(this).attr('href').search('#');
        var el = $(this).attr('href').substr(pos);

        $('body').animate({
            scrollTop: $(el).offset().top - 50}, 1200);
        //return false;
    });

    /*Send comment handler*/
    $('#send-comment').click(function(e){
        e.preventDefault();
        var author_el = $('#comments-name');
        var msg_el = $('#comments-msg');
        var rateGood_el = $('#comments-form__rate-good');
        var rateBad_el = $('#comments-form__rate-bad');

        /*If field get '.input-error' class than '.validation-msg' block
          became visible by styles:
          .input-error + .validation-msg_on{
            visibility: visible;
          }
        */
        if(author_el.val().trim().length < 5) {
            author_el.addClass('input-error');
            author_el.next('.validation-msg').text('Имя должно быть не менее 5 символов');
        }
        else{
            author_el.removeClass('input-error');
            author_el.addClass('input-ok');
        }

        if(msg_el.val().trim().length < 20 ){
            msg_el.addClass('input-error');
            msg_el.next('.validation-msg').text('Отзыв должен быть не менее 20 символов');
        }
        else{
            msg_el.removeClass('input-error');
            msg_el.addClass('input-ok');
        }

        if(rateGood_el.prop('checked')===false && rateBad_el.prop('checked') ==false){
            $('.comments-form__rate').addClass('comments-form__rate_unselected');
        }
        else{
            $('.comments-form__rate').removeClass('comments-form__rate_unselected');
        }
    });

    /*Yandex maps*/
    ymaps.ready(init);
    var mainMap, companyMap;

    function init(){


        /*Map on main page*/
        if($('#home-map').get(0)) {
            mainMap = new ymaps.Map("home-map", {
                center: [55.76, 37.64],
                zoom: 6
            });
            mainMap.behaviors.disable('scrollZoom');
        }

        /*Map on company page*/
        if($('#company-address__map').get(0)) {
            companyMap = new ymaps.Map("company-address__map", {
                center: [55.863798, 37.519979],
                zoom: 15,
                controls: []
            });

            placemark = new ymaps.Placemark([55.863798, 37.519979]);

            companyMap.geoObjects.add(placemark);
        }


    }



});

	
	
	
	
	
	
	





