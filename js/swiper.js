var swiper = new Swiper('.swiper-container-classhome1', {
    pagination: '.swiper-pagination-classhome1',
    paginationClickable: true,
    spaceBetween: 30,
});

var swiper = new Swiper('.swiper-container-classhome2', {
    pagination: '.swiper-pagination-classhome2',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    }
});

var swiper = new Swiper('.swiper-container-classhome3', {
    pagination: '.swiper-pagination-classhome3',
    effect: 'flip',
    grabCursor: true,
    nextButton: '.swiper-button-next-classhome3',
    prevButton: '.swiper-button-prev-classhome3'
});