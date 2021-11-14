$(window).on('scroll', scrollHandler);

function scrollHandler() {
    var headerHeight = $('.header').height();

    if ( $(window).scrollTop() >= $('.about').position().top ){
        $('.menu-right button').css('color', '#4a4a4a');

        $('.skill').each( function(){
            var skill = $(this);
            var percentage = skill.find('.percentage').text();

            skill.find('.inner-bar').animate({width: percentage}, 1000);
        });
    }
    else {
        $('.menu-right button').css('color', 'white');
    }

    $('section').each( function() {
        if ( $(window).scrollTop() >= $(this).position().top ){
            $(this).find('.vertical-center').animate({top: '0', opacity: '1'}, 800);
        }
    });
};



$('.menu-right button').on('click', function() {
    var id = $(this).attr('id');
    if ( id == "about-btn") {
        $('html, body').animate({scrollTop: $('.about').position().top}, 500);
    }
    else if ( id == "contact-btn" ) {
        $('html, body').animate({scrollTop: $('.contact').position().top}, 500);
    }
});



scrollHandler();