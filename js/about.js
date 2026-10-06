/* =========================================================
   STACKLY ABOUT HERO GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }

    /* INITIAL STATES */

    gsap.set(".stackly-about-hero-label", {
        y: 35,
        opacity: 0
    });

    gsap.set(".stackly-about-hero-content h1", {
        y: 60,
        opacity: 0
    });

    gsap.set(".stackly-about-hero-content p", {
        y: 45,
        opacity: 0
    });

    gsap.set(".stackly-about-breadcrumb", {
        y: 35,
        opacity: 0
    });

    gsap.set(".stackly-about-hero-dot", {
        scale: 0.5,
        opacity: 0
    });


    /* HERO TIMELINE */

    const aboutHeroTimeline = gsap.timeline({
        defaults: {
            ease: "power3.out"
        }
    });


    aboutHeroTimeline

        .to(".stackly-about-hero-label", {
            y: 0,
            opacity: 1,
            duration: 0.8
        })

        .to(".stackly-about-hero-content h1", {
            y: 0,
            opacity: 1,
            duration: 1.1
        }, "-=0.45")

        .to(".stackly-about-hero-content p", {
            y: 0,
            opacity: 1,
            duration: 0.9
        }, "-=0.55")

        .to(".stackly-about-breadcrumb", {
            y: 0,
            opacity: 1,
            duration: 0.75
        }, "-=0.4")

        .to(".stackly-about-hero-dot", {
            scale: 1,
            opacity: 1,
            duration: 0.7,
            ease: "back.out(1.7)"
        }, "-=0.25");


    /* SMALL DOT FLOAT */

    gsap.to(".stackly-about-hero-dot", {
        y: -7,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

});


/* =========================================================
   STACKLY OUR STORY
   GSAP REVEAL + COUNTERS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       GSAP CHECK
    ===================================================== */

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }


    /* =====================================================
       INITIAL IMAGE STATES
    ===================================================== */

    gsap.set(".stackly-story-main-image", {
        x: -120,
        opacity: 0,
        clipPath: "inset(0 100% 0 0)"
    });


    gsap.set(".stackly-story-small-image", {
        x: -80,
        y: 80,
        opacity: 0,
        clipPath: "inset(100% 0 0 0)"
    });


    gsap.set(".stackly-story-shape", {
        scale: 0.7,
        opacity: 0
    });


    /* =====================================================
       INITIAL CONTENT STATES
    ===================================================== */

    gsap.set(".stackly-story-label", {
        x: 100,
        opacity: 0
    });


    gsap.set(".stackly-story-content h2", {
        x: 120,
        opacity: 0
    });


    gsap.set(".stackly-story-description", {
        x: 100,
        opacity: 0
    });


    gsap.set(".stackly-story-feature", {
        x: 100,
        opacity: 0
    });


    gsap.set(".stackly-story-stats", {
        y: 50,
        opacity: 0
    });


    /* =====================================================
       STORY REVEAL TIMELINE
    ===================================================== */

    const storyTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".stackly-story-section",
            start: "top 78%",
            toggleActions: "play none none none"
        }
    });


    storyTimeline

        /* BACKGROUND SHAPE */

        .to(".stackly-story-shape", {
            scale: 1,
            opacity: 1,
            duration: 1.1,
            ease: "power3.out"
        })

        /* BIG IMAGE */

        .to(".stackly-story-main-image", {
            x: 0,
            opacity: 1,
            clipPath: "inset(0 0% 0 0)",
            duration: 1.5,
            ease: "power3.out"
        }, "-=0.7")

        /* SMALL IMAGE */

        .to(".stackly-story-small-image", {
            x: 0,
            y: 0,
            opacity: 1,
            clipPath: "inset(0% 0 0 0)",
            duration: 1.2,
            ease: "power3.out"
        }, "-=0.75")

        /* LABEL */

        .to(".stackly-story-label", {
            x: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out"
        }, "-=1.0")

        /* HEADING */

        .to(".stackly-story-content h2", {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
        }, "-=0.45")

        /* DESCRIPTION */

        .to(".stackly-story-description", {
            x: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.15,
            ease: "power3.out"
        }, "-=0.55")

        /* FEATURES */

        .to(".stackly-story-feature", {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.18,
            ease: "power3.out"
        }, "-=0.45")

        /* STATS */

        .to(".stackly-story-stats", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.35");


    /* =====================================================
       COUNTER FUNCTION
    ===================================================== */

    const counters =
        document.querySelectorAll(".story-counter");

    let counterStarted = false;


    function startStoryCounters() {

        if (counterStarted) return;

        counterStarted = true;


        counters.forEach(function (counter) {

            const target =
                Number(counter.getAttribute("data-target"));

            const suffix =
                counter.getAttribute("data-suffix") || "";

            const duration = 2200;

            let startTime = null;


            function animateCounter(currentTime) {

                if (!startTime) {
                    startTime = currentTime;
                }


                const elapsed =
                    currentTime - startTime;


                const progress =
                    Math.min(elapsed / duration, 1);


                /* Smooth ease-out */

                const eased =
                    1 - Math.pow(1 - progress, 3);


                const currentValue =
                    Math.floor(target * eased);


                counter.textContent =
                    currentValue.toLocaleString("en-IN")
                    + suffix;


                if (progress < 1) {

                    requestAnimationFrame(
                        animateCounter
                    );

                } else {

                    counter.textContent =
                        target.toLocaleString("en-IN")
                        + suffix;

                }

            }


            requestAnimationFrame(
                animateCounter
            );

        });

    }


    /* =====================================================
       COUNTER OBSERVER
    ===================================================== */

    const stats =
        document.querySelector(".stackly-story-stats");


    if (stats) {

        const counterObserver =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            startStoryCounters();

                            counterObserver.unobserve(
                                stats
                            );

                        }

                    });

                },
                {
                    threshold: 0.35
                }
            );


        counterObserver.observe(stats);

    }

});


/* =========================================================
   STACKLY VALUES GSAP
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
       HEADER INITIAL STATE
    ===================================================== */

    gsap.set(".stackly-values-badge", {
        y: 35,
        opacity: 0
    });

    gsap.set(".stackly-values-header h2", {
        y: 55,
        opacity: 0
    });

    gsap.set(".stackly-values-line", {
        scaleX: 0,
        opacity: 0
    });

    gsap.set(".stackly-values-header p", {
        y: 35,
        opacity: 0
    });


    /* =====================================================
       CARDS INITIAL STATE
       ALTERNATING LEFT / RIGHT
    ===================================================== */

    const valueCards =
        document.querySelectorAll(".stackly-value-card");


    valueCards.forEach(function (card, index) {

        gsap.set(card, {
            x: index % 2 === 0 ? -100 : 100,
            y: 35,
            opacity: 0,
            scale: 0.96
        });

    });


    /* =====================================================
       HEADER ANIMATION
    ===================================================== */

    const valuesTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".stackly-values-section",
            start: "top 78%",
            toggleActions: "play none none none"
        }
    });


    valuesTimeline

        .to(".stackly-values-badge", {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out"
        })

        .to(".stackly-values-header h2", {
            y: 0,
            opacity: 1,
            duration: 0.95,
            ease: "power3.out"
        }, "-=0.4")

        .to(".stackly-values-line", {
            scaleX: 1,
            opacity: 1,
            duration: 0.65,
            ease: "power2.out"
        }, "-=0.45")

        .to(".stackly-values-header p", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.3");


    /* =====================================================
       CARD ANIMATION
    ===================================================== */

    valuesTimeline.to(
        ".stackly-value-card",
        {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.16,
            ease: "power3.out"
        },
        "-=0.25"
    );


    /* =====================================================
       CARD HOVER
    ===================================================== */

    valueCards.forEach(function (card) {

        const icon =
            card.querySelector(".stackly-value-icon");

        const link =
            card.querySelector(".stackly-value-link");


        card.addEventListener("mouseenter", function () {

            gsap.to(icon, {
                y: -6,
                scale: 1.06,
                duration: 0.35,
                ease: "power2.out"
            });

            gsap.to(link, {
                scale: 1.08,
                duration: 0.3,
                ease: "power2.out"
            });

        });


        card.addEventListener("mouseleave", function () {

            gsap.to(icon, {
                y: 0,
                scale: 1,
                duration: 0.35,
                ease: "power2.out"
            });

            gsap.to(link, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });

        });

    });

});


/* =========================================================
   STACKLY STATS COUNTERS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const statsSection =
        document.querySelector(".stackly-stats-section");

    const counters =
        document.querySelectorAll(".stackly-counter");

    if (!statsSection || !counters.length) return;


    let started = false;


    function startCounters() {

        if (started) return;

        started = true;


        counters.forEach(function (counter) {

            const target =
                Number(counter.dataset.target);

            const suffix =
                counter.dataset.suffix || "";

            const duration = 2200;

            let startTime = null;


            function animate(currentTime) {

                if (!startTime) {
                    startTime = currentTime;
                }


                const elapsed =
                    currentTime - startTime;


                const progress =
                    Math.min(elapsed / duration, 1);


                /* Smooth ease-out */

                const easedProgress =
                    1 - Math.pow(1 - progress, 3);


                const value =
                    Math.floor(
                        target * easedProgress
                    );


                counter.textContent =
                    value.toLocaleString("en-IN")
                    + suffix;


                if (progress < 1) {

                    requestAnimationFrame(animate);

                } else {

                    counter.textContent =
                        target.toLocaleString("en-IN")
                        + suffix;

                }

            }


            requestAnimationFrame(animate);

        });

    }


    /* =====================================================
       INTERSECTION OBSERVER
    ===================================================== */

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        startCounters();

                        observer.unobserve(
                            statsSection
                        );

                    }

                });

            },
            {
                threshold: 0.3
            }
        );


    observer.observe(statsSection);

});


/* =========================================================
   STACKLY JOURNEY GSAP
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

    gsap.set(".stackly-journey-image", {
        x: -120,
        opacity: 0,
        clipPath: "inset(0 100% 0 0)"
    });


    gsap.set(".stackly-journey-image-badge", {
        y: 35,
        opacity: 0
    });


    gsap.set(".stackly-journey-label", {
        x: 100,
        opacity: 0
    });


    gsap.set(".stackly-journey-content h2", {
        x: 110,
        opacity: 0
    });


    gsap.set(".stackly-journey-text", {
        x: 90,
        opacity: 0
    });


    gsap.set(".stackly-journey-highlight", {
        x: 90,
        opacity: 0
    });


    gsap.set(".stackly-journey-bottom", {
        x: 80,
        opacity: 0
    });


    /* =====================================================
       TIMELINE
    ===================================================== */

    const journeyTimeline = gsap.timeline({

        scrollTrigger: {
            trigger: ".stackly-journey-section",
            start: "top 78%",
            toggleActions: "play none none none"
        }

    });


    journeyTimeline

        /* IMAGE */

        .to(".stackly-journey-image", {
            x: 0,
            opacity: 1,
            clipPath: "inset(0 0% 0 0)",
            duration: 1.5,
            ease: "power3.out"
        })


        /* BADGE */

        .to(".stackly-journey-image-badge", {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: "back.out(1.5)"
        }, "-=0.7")


        /* LABEL */

        .to(".stackly-journey-label", {
            x: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power3.out"
        }, "-=1.1")


        /* HEADING */

        .to(".stackly-journey-content h2", {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
        }, "-=0.45")


        /* PARAGRAPHS */

        .to(".stackly-journey-text", {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out"
        }, "-=0.5")


        /* HIGHLIGHTS */

        .to(".stackly-journey-highlight", {
            x: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.16,
            ease: "power3.out"
        }, "-=0.35")


        /* BOTTOM */

        .to(".stackly-journey-bottom", {
            x: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power3.out"
        }, "-=0.3");

});


/* =========================================================
   STACKLY TEAM GSAP
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
       HEADER REVEAL
    ===================================================== */

    gsap.set(".stackly-team-label", {
        y: 35,
        opacity: 0
    });

    gsap.set(".stackly-team-header h2", {
        y: 55,
        opacity: 0
    });

    gsap.set(".stackly-team-line", {
        scaleX: 0,
        opacity: 0
    });

    gsap.set(".stackly-team-header p", {
        y: 35,
        opacity: 0
    });


    /* =====================================================
       CARDS FROM BOTTOM
    ===================================================== */

    gsap.set(".stackly-team-card", {
        y: 100,
        opacity: 0,
        scale: 0.96
    });


    /* =====================================================
       MAIN TIMELINE
    ===================================================== */

    const teamTimeline = gsap.timeline({

        scrollTrigger: {
            trigger: ".stackly-team-section",
            start: "top 78%",
            toggleActions: "play none none none"
        }

    });


    teamTimeline

        .to(".stackly-team-label", {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out"
        })

        .to(".stackly-team-header h2", {
            y: 0,
            opacity: 1,
            duration: 0.95,
            ease: "power3.out"
        }, "-=0.4")

        .to(".stackly-team-line", {
            scaleX: 1,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out"
        }, "-=0.4")

        .to(".stackly-team-header p", {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power3.out"
        }, "-=0.3")

        .to(".stackly-team-card", {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.16,
            ease: "power3.out"
        }, "-=0.15");


    /* =====================================================
       MOBILE IMAGE TAP
    ===================================================== */

    const teamCards =
        document.querySelectorAll(".stackly-team-card");


    teamCards.forEach(function (card) {

        const image =
            card.querySelector(".stackly-team-image");

        if (!image) return;


        image.addEventListener("click", function (event) {

            if (window.innerWidth > 700) {
                return;
            }


            /*
             * If the user taps a social icon,
             * allow the link to work normally.
             */

            if (
                event.target.closest(
                    ".stackly-team-socials a"
                )
            ) {
                return;
            }


            /* Close other cards */

            teamCards.forEach(function (otherCard) {

                if (otherCard !== card) {
                    otherCard.classList.remove(
                        "mobile-active"
                    );
                }

            });


            /* Toggle current card */

            card.classList.toggle("mobile-active");

        });

    });


    /* =====================================================
       CLOSE MOBILE OVERLAY WHEN CLICKING OUTSIDE
    ===================================================== */

    document.addEventListener("click", function (event) {

        if (window.innerWidth > 700) return;

        if (
            !event.target.closest(
                ".stackly-team-card"
            )
        ) {

            teamCards.forEach(function (card) {

                card.classList.remove(
                    "mobile-active"
                );

            });

        }

    });

});