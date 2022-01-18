(function($) {
    $(document).ready(function() {
        //mobile menu click
        $("header .navbar-toggler").click(function() {
            $(this).toggleClass("current");
            $("body").toggleClass("openMenu");
        });

        //fixed-header on scroll
        $(window).scroll(function() {
            if ($(this).scrollTop() > 70) {
                $(".main-header").addClass("fixed");
            } else {
                $(".main-header").removeClass("fixed");
            }
        });
        //mobile menu click
        $(".member-row .navbar-toggler").click(function() {
            $(this).toggleClass("expanded");
            $(".member-right-col").toggleClass("expanded");
        });

        //aos
        AOS.init({
            once: true, // this one if you want to load animation once else you can remove it,
            disable: "mobile",
        });

        //swiper banner
        var swiper = new Swiper(".hero-banner", {
            cssMode: true,
            pagination: {
                el: ".swiper-pagination",
            },
            mousewheel: true,
            keyboard: true,
            // autoplay: {
            //     delay: 2500,
            //     disableOnInteraction: false,
            // },
        });

        //client-logos
        var swiper = new Swiper(".client-logos", {
            freeMode: true,
            spaceBetween: 30,
            breakpoints: {
                640: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 5,
                },
            },
        });

        //product-ref
        var swiper = new Swiper(".product-ref", {
            freeMode: true,
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                640: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 5,
                },
            },
        });

        //typewriter js
        var typed = new Typed(".input", {
            strings: ["Friends", "Mama", "Dad", "Sister", "Brother"],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
        });
    });
})(jQuery);