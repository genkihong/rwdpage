$(document).ready(function(){
    $('.showmenu').on('click', function(event) {
        event.preventDefault();
        $('.topmenu').toggleClass('open');
    });
});