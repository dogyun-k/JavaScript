function scrollHandler() {
    var bottom = $(window).scrollTop() + $(window).height();

    $('.playlist').each(function(){
        var playlistHalf = $(this).position().top + $(this).height()/2;
        if ( playlistHalf < bottom ){
            $(this).animate({'opacity': '1'}, 1500);
        }
        $(this)
    });

    if ( bottom == $(document).height() ) {
        $('.to-top-btn').fadeIn(1000);
    }
    else{
        $('.to-top-btn').fadeOut(500);
    }
}

$(window).on('scroll', scrollHandler);

scrollHandler();

$('.to-top-btn').on('click', function() {
    $(window).scrollTop(0);
});