$('#menu-show').click(function () {
    if($('#mobile-menu').is(':visible'))
        $('#mobile-menu').hide();
    else
        $('#mobile-menu').show();

});
window.onresize= function (event) {
    $('#mobile-menu').hide();
};
$(document).scroll(function(){

    if($(document).scrollTop() > $('header').height()+10)
        $('nav').addClass('fixed');
    else
        $('nav').removeClass('fixed');
});