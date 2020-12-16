$('#send').on('click', function(){
    var text = $('textarea').val();

    if ( text != '') {
        $('.chatbox').append('<div class="bubble my-bubble">' + text + '</div>');
    }

    $('textarea').val('');
});