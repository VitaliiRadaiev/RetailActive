{
    let testimonialsSlider = document.querySelector('[datta-slider="testimonials-slider"]');
    if (testimonialsSlider) {
        let sliderData = new Swiper(testimonialsSlider, {
            speed: 600,
            watchSlidesProgress: true,
            pagination: {
                el: testimonialsSlider.querySelector('.swiper-pagination'),
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    autoHeight: true,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 16,
                }
            },

        });
    }
}