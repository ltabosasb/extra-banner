$(document).ready(function() {
    $('.card__button').click(function() {
        // Toggle between green and red classes
        $(this).toggleClass('card__button--green card__button--red');
    });
});