{
    let header = document.querySelector('[data-header]');
    if (header) {
        let mobileMenu = document.querySelector('[data-mobile-menu]');
        let btnMobileMenuClose = document.querySelector('[data-action="close-mobile-menu"]');
        let burger = document.querySelector('[data-action="open-mobile-menu"]');


        burger.addEventListener('click', () => {
            mobileMenu.classList.add('mobile-menu--open');
            document.documentElement.classList.add('overflow-hidden');
        })
        btnMobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('mobile-menu--open');
            document.documentElement.classList.remove('overflow-hidden');
        })

        window.addEventListener('scroll', () => {
            header.classList.toggle('is-scroll', window.pageYOffset > 50);
        })


        let slideItems = document.querySelectorAll('.mobile-menu .menu-item-has-children');
        if (slideItems.length) {
            slideItems.forEach(item => {
                
                let title = item.querySelector('.menu__link');
                let subMenu = item.querySelector('.sub-menu');

                title.addEventListener('click', (e) => {
                    console.log(this.utils);
                    e.preventDefault();
                    title.classList.toggle('open');
                    this.utils.slideToggle(subMenu);

                    slideItems.forEach(i => {
                        if (i === item) return;

                        let title = i.querySelector('.menu__link');
                        let subMenu = i.querySelector('.sub-menu');

                        title.classList.remove('open');
                        this.utils.slideUp(subMenu);
                    })

                })
            })
        }
    }
}


