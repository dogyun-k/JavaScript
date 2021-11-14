$(document).ready( function(){

    $('#hello').on('click', function(){
        alert( $('#hello').text() );
        $('#hello').css('background', '#7f8ff4');
    });

});