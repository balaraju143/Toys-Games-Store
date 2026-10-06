/* =========================================================
   STACKLY TOYS & GAMES HERO GSAP
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* Make sure GSAP is available */
    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }

    /* Register ScrollTrigger */
    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }


    /* =====================================================
       INITIAL STATES
    ===================================================== */

    gsap.set(".hero-eyebrow", {
        x: -80,
        opacity: 0
    });

    gsap.set(".toys-hero-content h1", {
        x: -100,
        opacity: 0
    });

    gsap.set(".hero-description", {
        x: -80,
        opacity: 0
    });

    gsap.set(".hero-buttons", {
        x: -70,
        opacity: 0
    });

    gsap.set(".hero-features", {
        x: -60,
        opacity: 0
    });


    /* =====================================================
       IMAGE INITIAL STATE

       IMAGE WILL REVEAL
       BOTTOM → TOP
    ===================================================== */

    gsap.set(".hero-main-image", {
        clipPath: "inset(100% 0% 0% 0%)",
        scale: 1.08
    });


    /* Image wrapper */
    gsap.set(".hero-image-wrapper", {
        y: 50,
        opacity: 0
    });


    /* Floating icons */
    gsap.set(".hero-floating-icon", {
        scale: 0.5,
        opacity: 0
    });


    gsap.set(".hero-product-badge", {
        x: 40,
        opacity: 0
    });


    /* =====================================================
       HERO MASTER TIMELINE
    ===================================================== */

    const heroTimeline = gsap.timeline({
        defaults: {
            ease: "power3.out"
        }
    });


    /* =====================================================
       LEFT CONTENT
    ===================================================== */

    heroTimeline
        .to(".hero-eyebrow", {
            x: 0,
            opacity: 1,
            duration: 0.8
        })

        .to(".toys-hero-content h1", {
            x: 0,
            opacity: 1,
            duration: 1
        }, "-=0.45")

        .to(".hero-description", {
            x: 0,
            opacity: 1,
            duration: 0.85
        }, "-=0.55")

        .to(".hero-buttons", {
            x: 0,
            opacity: 1,
            duration: 0.75
        }, "-=0.45")

        .to(".hero-features", {
            x: 0,
            opacity: 1,
            duration: 0.7
        }, "-=0.35");


    /* =====================================================
       IMAGE WRAPPER
    ===================================================== */

    heroTimeline.to(".hero-image-wrapper", {
        y: 0,
        opacity: 1,
        duration: 0.8
    }, "-=1.15");


    /* =====================================================
       IMAGE REVEAL
       BOTTOM → TOP
    ===================================================== */

    heroTimeline.to(".hero-main-image", {

        clipPath: "inset(0% 0% 0% 0%)",

        scale: 1,

        duration: 2.1,

        ease: "power2.inOut"

    }, "-=0.65");


    /* =====================================================
       FLOATING ICONS
    ===================================================== */

    heroTimeline.to(".hero-icon-one", {

        scale: 1,
        opacity: 1,

        duration: 0.7,

        ease: "back.out(1.7)"

    }, "-=1.1");


    heroTimeline.to(".hero-icon-two", {

        scale: 1,
        opacity: 1,

        duration: 0.7,

        ease: "back.out(1.7)"

    }, "-=0.55");


    /* =====================================================
       BADGE
    ===================================================== */

    heroTimeline.to(".hero-product-badge", {

        x: 0,
        opacity: 1,

        duration: 0.7

    }, "-=0.5");


    /* =====================================================
       FLOATING ANIMATION
    ===================================================== */

    heroTimeline.call(function () {

        gsap.to(".hero-icon-one", {

            y: -10,

            duration: 2.2,

            repeat: -1,

            yoyo: true,

            ease: "sine.inOut"

        });


        gsap.to(".hero-icon-two", {

            y: 10,

            duration: 2.6,

            repeat: -1,

            yoyo: true,

            ease: "sine.inOut"

        });


        gsap.to(".hero-product-badge", {

            y: -6,

            duration: 2,

            repeat: -1,

            yoyo: true,

            ease: "sine.inOut"

        });

    });


});



/* =========================================================
   STACKLY INTRO GSAP ANIMATIONS
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }


    /* =====================================================
       INITIAL STATES
       ===================================================== */

    gsap.set(".stackly-intro-main-image", {
        x: -140,
        opacity: 0,
        clipPath: "inset(0 100% 0 0)"
    });


    gsap.set(".stackly-intro-content", {
        x: 120,
        opacity: 0
    });


    gsap.set(".stackly-intro-second-image", {
        x: 140,
        opacity: 0,
        clipPath: "inset(0 0 0 100%)"
    });


    gsap.set(".stackly-intro-badge", {
        scale: 0.5,
        opacity: 0,
        rotation: -90
    });


    /* =====================================================
       SCROLL ANIMATION
       ===================================================== */

    const introTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".stackly-intro-section",

            start: "top 78%",

            toggleActions: "play none none none"
        }
    });


    introTimeline

        /* LEFT IMAGE */
        .to(".stackly-intro-main-image", {
            x: 0,
            opacity: 1,
            clipPath: "inset(0 0% 0 0)",
            duration: 1.5,
            ease: "power3.out"
        })


        /* RIGHT CONTENT */
        .to(".stackly-intro-content", {
            x: 0,
            opacity: 1,
            duration: 1.15,
            ease: "power3.out"
        }, "-=0.9")


        /* BADGE */
        .to(".stackly-intro-badge", {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 0.9,
            ease: "back.out(1.6)"
        }, "-=0.7")


        /* SECOND IMAGE */
        .to(".stackly-intro-second-image", {
            x: 0,
            opacity: 1,
            clipPath: "inset(0 0% 0 0)",
            duration: 1.3,
            ease: "power3.out"
        }, "-=0.45");

});


/* =========================================================
   STACKLY PRODUCTS GSAP ANIMATIONS
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }


    /* =====================================================
       HEADING INITIAL STATE
       ===================================================== */

    gsap.set(".stackly-products-eyebrow", {
        y: 35,
        opacity: 0
    });

    gsap.set(".stackly-products-heading-line", {
        scaleX: 0,
        transformOrigin: "center"
    });

    gsap.set(".stackly-products-heading h2", {
        y: 45,
        opacity: 0
    });

    gsap.set(".stackly-products-heading p", {
        y: 30,
        opacity: 0
    });


    /* =====================================================
       PRODUCT INITIAL STATES
       ALTERNATE LEFT / RIGHT
       ===================================================== */

    const productCards = document.querySelectorAll(
        ".stackly-product-card"
    );

    productCards.forEach(function (card, index) {

        const image = card.querySelector(
            ".stackly-product-image"
        );

        const info = card.querySelector(
            ".stackly-product-info"
        );

        const fromLeft = index % 2 === 0;

        gsap.set(image, {
            x: fromLeft ? -100 : 100,
            opacity: 0,
            clipPath: fromLeft
                ? "inset(0 100% 0 0)"
                : "inset(0 0 0 100%)"
        });

        gsap.set(info, {
            y: 35,
            opacity: 0
        });

    });


    /* =====================================================
       VIEW BUTTON
       ===================================================== */

    gsap.set(".stackly-products-button", {
        y: 35,
        opacity: 0
    });


    /* =====================================================
       MAIN SECTION TIMELINE
       ===================================================== */

    const productsTimeline = gsap.timeline({

        scrollTrigger: {
            trigger: ".stackly-products-section",

            start: "top 78%",

            toggleActions: "play none none none"
        }

    });


    /* =====================================================
       HEADING ANIMATION
       ===================================================== */

    productsTimeline

        .to(".stackly-products-eyebrow", {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out"
        })

        .to(".stackly-products-heading-line", {
            scaleX: 1,
            duration: 0.55,
            ease: "power2.out"
        }, "-=0.35")

        .to(".stackly-products-heading h2", {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out"
        }, "-=0.25")

        .to(".stackly-products-heading p", {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out"
        }, "-=0.5");


    /* =====================================================
       PRODUCT IMAGES
       ===================================================== */

    productCards.forEach(function (card, index) {

        const image = card.querySelector(
            ".stackly-product-image"
        );

        const info = card.querySelector(
            ".stackly-product-info"
        );

        const fromLeft = index % 2 === 0;

        productsTimeline.to(image, {
            x: 0,
            opacity: 1,

            clipPath: "inset(0 0% 0 0)",

            duration: 1.05,

            ease: "power3.out"
        }, index < 4 ? "-=0.65" : "-=0.55");


        productsTimeline.to(info, {
            y: 0,
            opacity: 1,

            duration: 0.65,

            ease: "power3.out"
        }, "-=0.65");

    });


    /* =====================================================
       VIEW ALL
       ===================================================== */

    productsTimeline.to(".stackly-products-button", {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out"
    }, "-=0.3");


});


/* =========================================================
   STACKLY PLAY SECTION GSAP
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }


    /* =====================================================
       INITIAL STATE
       ===================================================== */

    gsap.set(".stackly-play-background", {
        opacity: 0
    });


    gsap.set(".stackly-play-background img", {
        scale: 1.12
    });


    gsap.set(".stackly-play-overlay", {
        opacity: 0
    });


    gsap.set(".stackly-play-button", {
        scale: 0.65,
        opacity: 0
    });


    /* =====================================================
       SCROLL ANIMATION
       ===================================================== */

    const playTimeline = gsap.timeline({

        scrollTrigger: {
            trigger: ".stackly-play-section",

            start: "top 82%",

            toggleActions: "play none none none"
        }

    });


    playTimeline

        /* BACKGROUND */
        .to(".stackly-play-background", {
            opacity: 1,

            duration: 1.1,

            ease: "power2.out"
        })


        /* IMAGE ZOOM */
        .to(".stackly-play-background img", {
            scale: 1,

            duration: 1.8,

            ease: "power2.out"
        }, "-=1")


        /* OVERLAY */
        .to(".stackly-play-overlay", {
            opacity: 1,

            duration: 0.8,

            ease: "power2.out"
        }, "-=1.2")


        /* PLAY BUTTON */
        .to(".stackly-play-button", {
            scale: 1,

            opacity: 1,

            duration: 1,

            ease: "back.out(1.7)"
        }, "-=0.5");


    /* =====================================================
       CONTINUOUS PLAY BUTTON PULSE
       ===================================================== */

    gsap.to(".stackly-play-button", {

        scale: 1.04,

        duration: 1.8,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut",

        delay: 2.5

    });

});


/* =========================================================
   STACKLY ABOUT SECTION GSAP
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }


    /* =====================================================
       INITIAL STATES
       ===================================================== */

    gsap.set(".stackly-about-main-image", {
        y: 130,
        opacity: 0,
        clipPath: "inset(100% 0 0 0)"
    });


    gsap.set(".stackly-about-small-image", {
        y: 100,
        opacity: 0,
        clipPath: "inset(100% 0 0 0)"
    });


    gsap.set(".stackly-years-card", {
        y: -35,
        opacity: 0
    });


    gsap.set(".stackly-about-content", {
        x: 120,
        opacity: 0
    });


    /* =====================================================
       SCROLL TIMELINE
       ===================================================== */

    const aboutTimeline = gsap.timeline({

        scrollTrigger: {
            trigger: ".stackly-about-section",

            start: "top 78%",

            toggleActions: "play none none none"
        }

    });


    aboutTimeline

        /* MAIN IMAGE FROM BOTTOM */
        .to(".stackly-about-main-image", {
            y: 0,
            opacity: 1,

            clipPath: "inset(0% 0 0 0)",

            duration: 1.4,

            ease: "power3.out"
        })


        /* YEARS CARD */
        .to(".stackly-years-card", {
            y: 0,
            opacity: 1,

            duration: 0.8,

            ease: "back.out(1.5)"
        }, "-=0.8")


        /* SMALL IMAGE FROM BOTTOM */
        .to(".stackly-about-small-image", {
            y: 0,
            opacity: 1,

            clipPath: "inset(0% 0 0 0)",

            duration: 1.1,

            ease: "power3.out"
        }, "-=0.55")


        /* RIGHT CONTENT FROM RIGHT */
        .to(".stackly-about-content", {
            x: 0,
            opacity: 1,

            duration: 1.25,

            ease: "power3.out"
        }, "-=1.0");


});

/* =========================================
   STACKLY TOYS & GAMES - COUNTER ANIMATION
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const counters = document.querySelectorAll(".stackly-stat-number");

    if (!counters.length) return;

    let counterStarted = false;

    function animateCounter(counter) {

        const target = Number(counter.getAttribute("data-target"));
        const suffix = counter.getAttribute("data-suffix") || "";

        if (isNaN(target)) return;

        const duration = 2200;
        const startTime = performance.now();

        function updateCounter(currentTime) {

            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            /*
             * Smooth ease-out:
             * Starts fast and finishes slowly.
             */
            const easedProgress =
                1 - Math.pow(1 - progress, 4);

            const currentValue =
                Math.floor(easedProgress * target);

            counter.textContent =
                currentValue.toLocaleString("en-IN") + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent =
                    target.toLocaleString("en-IN") + suffix;
            }
        }

        requestAnimationFrame(updateCounter);
    }


    /* =========================================
       START ONLY WHEN SECTION IS VISIBLE
    ========================================= */

    const statsSection =
        document.querySelector(".stackly-stats-section");

    if (!statsSection) return;


    const observer = new IntersectionObserver(
        function (entries, observerInstance) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting && !counterStarted) {

                    counterStarted = true;

                    counters.forEach(function (counter, index) {

                        setTimeout(function () {
                            animateCounter(counter);
                        }, index * 180);

                    });

                    observerInstance.unobserve(statsSection);
                }

            });

        },
        {
            threshold: 0.35
        }
    );

    observer.observe(statsSection);

});


/* =========================================
   STACKLY GALLERY - GSAP ANIMATIONS
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }


    const section = document.querySelector(
        ".stackly-gallery-section"
    );

    if (!section) return;


    const headingLabel =
        document.querySelector(".stackly-gallery-label");

    const headingTitle =
        document.querySelector(".stackly-gallery-heading h2");

    const headingText =
        document.querySelector(".stackly-gallery-heading p");

    const cards =
        document.querySelectorAll(".stackly-gallery-card");

    const bottomCTA =
        document.querySelector(".stackly-gallery-bottom");


    /* =========================================
       INITIAL STATES
    ========================================= */

    gsap.set(headingLabel, {
        y: 35,
        opacity: 0
    });

    gsap.set(headingTitle, {
        y: 55,
        opacity: 0
    });

    gsap.set(headingText, {
        y: 35,
        opacity: 0
    });


    /* Different direction for every card */

    cards.forEach(function (card, index) {

        if (index === 0) {

            gsap.set(card, {
                x: -100,
                y: 40,
                opacity: 0,
                scale: .96
            });

        } else if (index === 1) {

            gsap.set(card, {
                x: 100,
                y: 30,
                opacity: 0,
                scale: .96
            });

        } else if (index === 2) {

            gsap.set(card, {
                x: 100,
                y: 70,
                opacity: 0,
                scale: .96
            });

        } else if (index === 3) {

            gsap.set(card, {
                x: -90,
                y: 70,
                opacity: 0,
                scale: .96
            });

        } else {

            gsap.set(card, {
                x: 90,
                y: 50,
                opacity: 0,
                scale: .96
            });

        }

    });


    if (bottomCTA) {

        gsap.set(bottomCTA, {
            y: 45,
            opacity: 0
        });

    }


    /* =========================================
       MAIN SCROLL ANIMATION
    ========================================= */

    const galleryTimeline = gsap.timeline({

        scrollTrigger: {
            trigger: section,
            start: "top 72%",
            toggleActions: "play none none none"
        }

    });


    galleryTimeline

        /* Label */
        .to(headingLabel, {
            y: 0,
            opacity: 1,
            duration: .7,
            ease: "power3.out"
        })

        /* Heading */
        .to(headingTitle, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
        }, "-=.4")

        /* Description */
        .to(headingText, {
            y: 0,
            opacity: 1,
            duration: .75,
            ease: "power3.out"
        }, "-=.55");


    /* =========================================
       CARD REVEALS
    ========================================= */

    cards.forEach(function (card, index) {

        galleryTimeline.to(card, {

            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,

            duration: 1.05,

            ease: "power3.out"

        }, index === 0 ? "-=.25" : "-=.72");

    });


    /* =========================================
       BOTTOM CTA
    ========================================= */

    if (bottomCTA) {

        galleryTimeline.to(bottomCTA, {

            y: 0,
            opacity: 1,

            duration: .8,

            ease: "power3.out"

        }, "-=.55");

    }


    /* =========================================
       IMAGE PARALLAX ON SCROLL
    ========================================= */

    cards.forEach(function (card) {

        const image = card.querySelector("img");

        if (!image) return;

        gsap.to(image, {

            yPercent: -5,

            ease: "none",

            scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }

        });

    });


    /* =========================================
       MOBILE REFRESH
    ========================================= */

    window.addEventListener("resize", function () {

        if (typeof ScrollTrigger !== "undefined") {
            ScrollTrigger.refresh();
        }

    });

});

/* =========================================
   STACKLY TESTIMONIALS
   GSAP REVEAL + AUTO SLIDER
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }


    const section =
        document.querySelector(".stackly-testimonials");

    const heading =
        document.querySelector(".stackly-testimonials-heading");

    const label =
        document.querySelector(".stackly-testimonial-label");

    const title =
        document.querySelector(".stackly-testimonials-heading h2");

    const description =
        document.querySelector(".stackly-testimonials-heading p");

    const slider =
        document.querySelector(".stackly-testimonial-slider");

    const track =
        document.querySelector(".stackly-testimonial-track");

    const cards =
        document.querySelectorAll(".stackly-testimonial-card");

    const dots =
        document.querySelectorAll(".testimonial-dot");


    if (
        !section ||
        !track ||
        !cards.length
    ) {
        return;
    }


    /* =========================================
       INITIAL HEADING STATE
    ========================================= */

    gsap.set(label, {
        y: 30,
        opacity: 0
    });

    gsap.set(title, {
        y: 45,
        opacity: 0
    });

    gsap.set(description, {
        y: 30,
        opacity: 0
    });


    /* =========================================
       INITIAL CARD STATE
    ========================================= */

    gsap.set(cards, {
        y: 60,
        opacity: 0
    });


    /* =========================================
       SCROLL REVEAL
    ========================================= */

    const revealTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none none"
        }
    });


    revealTimeline

        .to(label, {
            y: 0,
            opacity: 1,
            duration: .7,
            ease: "power3.out"
        })

        .to(title, {
            y: 0,
            opacity: 1,
            duration: .9,
            ease: "power3.out"
        }, "-=.35")

        .to(description, {
            y: 0,
            opacity: 1,
            duration: .7,
            ease: "power3.out"
        }, "-=.5")

        .to(cards, {
            y: 0,
            opacity: 1,
            duration: .9,
            stagger: .14,
            ease: "power3.out"
        }, "-=.35");


    /* =========================================
       RESPONSIVE SLIDER
    ========================================= */

    let currentSlide = 0;
    let visibleCards = 3;
    let maxSlide = 2;

    let autoSlide;


    function getVisibleCards() {

        const width = window.innerWidth;

        if (width <= 600) {
            return 1;
        }

        if (width <= 950) {
            return 2;
        }

        return 3;
    }


    function updateSliderSettings() {

        visibleCards = getVisibleCards();

        maxSlide =
            Math.max(0, cards.length - visibleCards);

        if (currentSlide > maxSlide) {
            currentSlide = 0;
        }

        moveSlider(false);
    }


    function moveSlider(animated = true) {

        if (!cards.length) return;

        const firstCard = cards[0];

        const cardWidth =
            firstCard.getBoundingClientRect().width;

        const gap =
            parseFloat(
                window.getComputedStyle(track).gap
            ) || 0;

        const moveAmount =
            currentSlide * (cardWidth + gap);


        if (animated) {

            gsap.to(track, {
                x: -moveAmount,
                duration: 1.05,
                ease: "power3.inOut",
                overwrite: true
            });

        } else {

            gsap.set(track, {
                x: -moveAmount
            });

        }


        /* dots */

        dots.forEach(function (dot, index) {

            dot.classList.toggle(
                "active",
                index === currentSlide
            );

        });

    }


    /* =========================================
       NEXT SLIDE
    ========================================= */

    function nextSlide() {

        currentSlide++;

        if (currentSlide > maxSlide) {
            currentSlide = 0;
        }

        moveSlider(true);

    }


    /* =========================================
       AUTO PLAY
       ONE CARD EVERY 3 SECONDS
    ========================================= */

    function startAutoSlide() {

        stopAutoSlide();

        autoSlide = setInterval(function () {
            nextSlide();
        }, 3000);

    }


    function stopAutoSlide() {

        if (autoSlide) {
            clearInterval(autoSlide);
            autoSlide = null;
        }

    }


    /* =========================================
       DOT CLICK
    ========================================= */

    dots.forEach(function (dot) {

        dot.addEventListener("click", function () {

            const selected =
                Number(
                    dot.getAttribute("data-slide")
                );

            if (
                selected >= 0 &&
                selected <= maxSlide
            ) {

                currentSlide = selected;

                moveSlider(true);

                startAutoSlide();
            }

        });

    });


    /* =========================================
       PAUSE WHILE HOVERING
    ========================================= */

    slider.addEventListener(
        "mouseenter",
        stopAutoSlide
    );

    slider.addEventListener(
        "mouseleave",
        startAutoSlide
    );


    /* =========================================
       TOUCH / SWIPE MOBILE
    ========================================= */

    let touchStartX = 0;
    let touchEndX = 0;


    slider.addEventListener(
        "touchstart",
        function (event) {

            touchStartX =
                event.touches[0].clientX;

            stopAutoSlide();

        },
        { passive: true }
    );


    slider.addEventListener(
        "touchend",
        function (event) {

            touchEndX =
                event.changedTouches[0].clientX;

            const difference =
                touchStartX - touchEndX;


            if (Math.abs(difference) > 50) {

                if (difference > 0) {

                    /* swipe left */

                    if (currentSlide < maxSlide) {
                        currentSlide++;
                    } else {
                        currentSlide = 0;
                    }

                } else {

                    /* swipe right */

                    if (currentSlide > 0) {
                        currentSlide--;
                    } else {
                        currentSlide = maxSlide;
                    }

                }

                moveSlider(true);
            }


            startAutoSlide();

        },
        { passive: true }
    );


    /* =========================================
       RESIZE
    ========================================= */

    let resizeTimer;

    window.addEventListener(
        "resize",
        function () {

            clearTimeout(resizeTimer);

            resizeTimer = setTimeout(function () {

                updateSliderSettings();

            }, 150);

        }
    );


    /* =========================================
       START
    ========================================= */

    updateSliderSettings();

    startAutoSlide();

});