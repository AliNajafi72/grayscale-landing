var state = {
    isScrolledDown: false,
    isScrolledUp: false,
}
$(document).on('scroll', function () {
    if ($(this).scrollTop() > 200 && !(state.isScrolledDown)) {
        state.isScrolledDown = true;
        state.isScrolledUp = false;
        $('#top-navigation').animate({
            backgroundColor: 'white',
        }, 500)
    }
    if ($(this).scrollTop() < 200 && !(state.isScrolledUp)) {
        state.isScrolledDown = false;
        state.isScrolledUp = true;
        $('#top-navigation').animate({
            backgroundColor: 'transparent',
        }, 500)
    }
})