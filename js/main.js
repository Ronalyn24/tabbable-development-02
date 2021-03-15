tabFuntion = function() {

    $ = jQuery.noConflict();

    $('.tab-item').click(function() {
        var tab_id = $(this).attr('data-tab-item');

        $('.tab-item').removeClass('current'); 
        $('.tab-content-wrapper').removeClass('current');

        $(this).addClass('current');
        $("#tab-inner-content-"+tab_id).addClass('current');
    });
}

jQuery(document).ready(tabFuntion);
