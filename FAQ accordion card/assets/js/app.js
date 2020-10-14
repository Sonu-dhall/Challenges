$(document).ready( function () {
    $(document).on('click', '.accordion-item', function(){
        $(this).toggleClass('active').siblings().removeClass('active');
    });
});