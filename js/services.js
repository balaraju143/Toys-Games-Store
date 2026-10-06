/* =========================================================
   STACKLY SERVICES HERO GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    /* INITIAL STATES */

    gsap.set(".stackly-services-label", {
        y: 35,
        opacity: 0
    });


    gsap.set(".stackly-services-hero-content h1", {
        y: 65,
        opacity: 0
    });


    gsap.set(".stackly-services-hero-content p", {
        y: 45,
        opacity: 0
    });


    gsap.set(".stackly-services-breadcrumb", {
        y: 35,
        opacity: 0
    });


    gsap.set(".stackly-services-dot", {
        scale: 0.5,
        opacity: 0
    });


    /* =====================================================
       HERO TIMELINE
    ===================================================== */

    const servicesHeroTimeline = gsap.timeline({
        defaults: {
            ease: "power3.out"
        }
    });


    servicesHeroTimeline

        .to(".stackly-services-label", {
            y: 0,
            opacity: 1,
            duration: 0.8
        })

        .to(
            ".stackly-services-hero-content h1",
            {
                y: 0,
                opacity: 1,
                duration: 1.1
            },
            "-=0.45"
        )

        .to(
            ".stackly-services-hero-content p",
            {
                y: 0,
                opacity: 1,
                duration: 0.9
            },
            "-=0.55"
        )

        .to(
            ".stackly-services-breadcrumb",
            {
                y: 0,
                opacity: 1,
                duration: 0.75
            },
            "-=0.4"
        )

        .to(
            ".stackly-services-dot",
            {
                scale: 1,
                opacity: 1,
                duration: 0.7,
                ease: "back.out(1.7)"
            },
            "-=0.25"
        );


    /* =====================================================
       DOT FLOAT
    ===================================================== */

    gsap.to(".stackly-services-dot", {
        y: -7,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

});


/* =========================================================
   STACKLY SERVICE HIGHLIGHTS GSAP
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

    gsap.set(".stackly-service-label", {
        y: 30,
        opacity: 0
    });

    gsap.set(".stackly-service-heading h2", {
        y: 50,
        opacity: 0
    });

    gsap.set(".stackly-service-heading p", {
        y: 30,
        opacity: 0
    });


    /* =====================================================
       CARDS
       ALTERNATE LEFT / RIGHT
    ===================================================== */

    const serviceCards =
        document.querySelectorAll(
            ".stackly-service-card"
        );


    serviceCards.forEach(function (card, index) {

        gsap.set(card, {
            x: index % 2 === 0 ? -90 : 90,
            y: 30,
            opacity: 0,
            scale: 0.96
        });

    });


    /* =====================================================
       TIMELINE
    ===================================================== */

    const serviceTimeline = gsap.timeline({

        scrollTrigger: {
            trigger: ".stackly-service-highlights",
            start: "top 78%",
            toggleActions: "play none none none"
        }

    });


    serviceTimeline

        .to(".stackly-service-label", {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out"
        })

        .to(".stackly-service-heading h2", {
            y: 0,
            opacity: 1,
            duration: 0.95,
            ease: "power3.out"
        }, "-=0.4")

        .to(".stackly-service-heading p", {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power3.out"
        }, "-=0.35")

        .to(".stackly-service-card", {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.95,
            stagger: 0.15,
            ease: "power3.out"
        }, "-=0.2");


    /* =====================================================
       CARD HOVER ANIMATION
    ===================================================== */

    serviceCards.forEach(function (card) {

        const icon =
            card.querySelector(
                ".stackly-service-icon"
            );


        card.addEventListener(
            "mouseenter",
            function () {

                gsap.to(icon, {
                    y: -7,
                    scale: 1.08,
                    duration: 0.35,
                    ease: "power2.out"
                });

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                gsap.to(icon, {
                    y: 0,
                    scale: 1,
                    duration: 0.35,
                    ease: "power2.out"
                });

            }
        );

    });

});


/* =========================================================
   STACKLY SERVICES COLLECTION GSAP
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
       HEADER
    ===================================================== */

    gsap.set(
        ".stackly-services-collection-label",
        {
            y: 30,
            opacity: 0
        }
    );

    gsap.set(
        ".stackly-services-collection-header h2",
        {
            y: 55,
            opacity: 0
        }
    );

    gsap.set(
        ".stackly-services-collection-line",
        {
            scaleX: 0,
            opacity: 0
        }
    );

    gsap.set(
        ".stackly-services-collection-header p",
        {
            y: 30,
            opacity: 0
        }
    );


    /* =====================================================
       TOP 3 CARDS
       REVEAL FROM TOP
    ===================================================== */

    gsap.set(
        ".stackly-collection-card:nth-child(-n+3)",
        {
            y: -90,
            opacity: 0,
            scale: 0.96
        }
    );


    /* =====================================================
       BOTTOM 3 CARDS
       REVEAL FROM BOTTOM
    ===================================================== */

    gsap.set(
        ".stackly-collection-card:nth-child(n+4)",
        {
            y: 100,
            opacity: 0,
            scale: 0.96
        }
    );


    /* =====================================================
       TIMELINE
    ===================================================== */

    const collectionTimeline =
        gsap.timeline({

            scrollTrigger: {
                trigger:
                    ".stackly-services-collection",

                start: "top 78%",

                toggleActions:
                    "play none none none"
            }

        });


    collectionTimeline

        /* LABEL */

        .to(
            ".stackly-services-collection-label",
            {
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power3.out"
            }
        )


        /* HEADING */

        .to(
            ".stackly-services-collection-header h2",
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            },
            "-=0.4"
        )


        /* LINE */

        .to(
            ".stackly-services-collection-line",
            {
                scaleX: 1,
                opacity: 1,
                duration: 0.6,
                ease: "power2.out"
            },
            "-=0.45"
        )


        /* DESCRIPTION */

        .to(
            ".stackly-services-collection-header p",
            {
                y: 0,
                opacity: 1,
                duration: 0.75,
                ease: "power3.out"
            },
            "-=0.3"
        )


        /* TOP 3 */

        .to(
            ".stackly-collection-card:nth-child(-n+3)",
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                stagger: 0.16,
                ease: "power3.out"
            },
            "-=0.15"
        )


        /* BOTTOM 3 */

        .to(
            ".stackly-collection-card:nth-child(n+4)",
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                stagger: 0.16,
                ease: "power3.out"
            },
            "-=0.55"
        );


    /* =====================================================
       CARD HOVER IMAGE EFFECT
    ===================================================== */

    document
        .querySelectorAll(
            ".stackly-collection-card"
        )
        .forEach(function (card) {

            const image =
                card.querySelector(
                    ".stackly-collection-image img"
                );

            const icon =
                card.querySelector(
                    ".stackly-collection-icon"
                );


            card.addEventListener(
                "mouseenter",
                function () {

                    gsap.to(image, {
                        scale: 1.06,
                        duration: 0.65,
                        ease: "power2.out"
                    });

                    gsap.to(icon, {
                        y: -5,
                        duration: 0.35,
                        ease: "power2.out"
                    });

                }
            );


            card.addEventListener(
                "mouseleave",
                function () {

                    gsap.to(image, {
                        scale: 1,
                        duration: 0.65,
                        ease: "power2.out"
                    });

                    gsap.to(icon, {
                        y: 0,
                        duration: 0.35,
                        ease: "power2.out"
                    });

                }
            );

        });

});


/* =========================================================
   STACKLY FLIP CARDS GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }


    /* HEADER */

    gsap.set(".stackly-flip-label", {
        y: 30,
        opacity: 0
    });

    gsap.set(".stackly-flip-header h2", {
        y: 50,
        opacity: 0
    });

    gsap.set(".stackly-flip-header p", {
        y: 30,
        opacity: 0
    });


    /* CARDS ALTERNATE */

    document.querySelectorAll(".stackly-flip-card")
        .forEach(function (card, index) {

            gsap.set(card, {
                x: index % 2 === 0 ? -70 : 70,
                y: 60,
                opacity: 0,
                scale: .94
            });

        });


    /* TIMELINE */

    const flipTimeline = gsap.timeline({

        scrollTrigger: {
            trigger: ".stackly-flip-section",
            start: "top 78%",
            toggleActions: "play none none none"
        }

    });


    flipTimeline

        .to(".stackly-flip-label", {
            y: 0,
            opacity: 1,
            duration: .7,
            ease: "power3.out"
        })

        .to(".stackly-flip-header h2", {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
        }, "-=.4")

        .to(".stackly-flip-header p", {
            y: 0,
            opacity: 1,
            duration: .75,
            ease: "power3.out"
        }, "-=.4")

        .to(".stackly-flip-card", {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            duration: .9,
            stagger: .13,
            ease: "power3.out"
        }, "-=.2");


    /* =====================================================
       MOBILE TAP FLIP
    ===================================================== */

    document.querySelectorAll(".stackly-flip-card")
        .forEach(function (card) {

            card.addEventListener("click", function (event) {

                if (window.innerWidth > 650) {
                    return;
                }

                if (event.target.closest("a")) {
                    return;
                }

                document
                    .querySelectorAll(".stackly-flip-card")
                    .forEach(function (otherCard) {

                        if (otherCard !== card) {
                            otherCard.classList.remove(
                                "mobile-flipped"
                            );
                        }

                    });

                card.classList.toggle(
                    "mobile-flipped"
                );

            });

        });

});


/* =========================================================
   STACKLY PRICING GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }


    /* HEADER */

    gsap.set(".stackly-pricing-label", {
        y: 30,
        opacity: 0
    });

    gsap.set(".stackly-pricing-header h2", {
        y: 55,
        opacity: 0
    });

    gsap.set(".stackly-pricing-line", {
        scaleX: 0,
        opacity: 0
    });

    gsap.set(".stackly-pricing-header p", {
        y: 30,
        opacity: 0
    });


    /* CARDS */

    gsap.set(".stackly-price-card", {
        y: 100,
        opacity: 0,
        scale: .95
    });


    /* TIMELINE */

    const pricingTimeline = gsap.timeline({

        scrollTrigger: {
            trigger: ".stackly-pricing-section",
            start: "top 78%",
            toggleActions: "play none none none"
        }

    });


    pricingTimeline

        .to(".stackly-pricing-label", {
            y: 0,
            opacity: 1,
            duration: .7,
            ease: "power3.out"
        })

        .to(".stackly-pricing-header h2", {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
        }, "-=.4")

        .to(".stackly-pricing-line", {
            scaleX: 1,
            opacity: 1,
            duration: .6,
            ease: "power2.out"
        }, "-=.45")

        .to(".stackly-pricing-header p", {
            y: 0,
            opacity: 1,
            duration: .75,
            ease: "power3.out"
        }, "-=.3")

        .to(".stackly-price-card", {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: .18,
            ease: "power3.out"
        }, "-=.15");


    /* CARD HOVER */

    document.querySelectorAll(".stackly-price-card")
        .forEach(function (card) {

            card.addEventListener("mouseenter", function () {

                gsap.to(card, {
                    duration: .35,
                    ease: "power2.out"
                });

            });

        });

});


/* =========================================================
   STACKLY FINAL CTA GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }


    /* INITIAL STATE */

    gsap.set(".stackly-final-cta-label", {
        y: 35,
        opacity: 0
    });

    gsap.set(".stackly-final-cta-content h2", {
        y: 65,
        opacity: 0
    });

    gsap.set(".stackly-final-cta-content p", {
        y: 40,
        opacity: 0
    });

    gsap.set(".stackly-final-cta-buttons", {
        y: 45,
        opacity: 0,
        scale: .96
    });


    /* TIMELINE */

    const finalCtaTimeline = gsap.timeline({

        scrollTrigger: {
            trigger: ".stackly-final-cta",
            start: "top 82%",
            toggleActions: "play none none none"
        }

    });


    finalCtaTimeline

        .to(
            ".stackly-final-cta-label",
            {
                y: 0,
                opacity: 1,
                duration: .7,
                ease: "power3.out"
            }
        )

        .to(
            ".stackly-final-cta-content h2",
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            },
            "-=.35"
        )

        .to(
            ".stackly-final-cta-content p",
            {
                y: 0,
                opacity: 1,
                duration: .8,
                ease: "power3.out"
            },
            "-=.45"
        )

        .to(
            ".stackly-final-cta-buttons",
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: .75,
                ease: "back.out(1.4)"
            },
            "-=.35"
        );


});