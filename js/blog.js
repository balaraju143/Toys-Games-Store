/* =========================================================
   STACKLY BLOG HERO GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    /* INITIAL STATE */

    gsap.set(
        ".stackly-blog-hero-label",
        {
            y: -35,
            opacity: 0
        }
    );

    gsap.set(
        ".stackly-blog-hero-content h1",
        {
            y: 65,
            opacity: 0
        }
    );

    gsap.set(
        ".stackly-blog-hero-content p",
        {
            y: 45,
            opacity: 0
        }
    );

    gsap.set(
        ".stackly-blog-breadcrumb",
        {
            y: 35,
            opacity: 0
        }
    );

    gsap.set(
        ".stackly-blog-hero-dot",
        {
            scale: 0,
            opacity: 0
        }
    );


    /* TIMELINE */

    const blogHeroTimeline = gsap.timeline({
        defaults: {
            ease: "power3.out"
        }
    });


    blogHeroTimeline

        .to(
            ".stackly-blog-hero-label",
            {
                y: 0,
                opacity: 1,
                duration: .75
            }
        )

        .to(
            ".stackly-blog-hero-content h1",
            {
                y: 0,
                opacity: 1,
                duration: 1.1
            },
            "-=.35"
        )

        .to(
            ".stackly-blog-hero-content p",
            {
                y: 0,
                opacity: 1,
                duration: .85
            },
            "-=.5"
        )

        .to(
            ".stackly-blog-breadcrumb",
            {
                y: 0,
                opacity: 1,
                duration: .7
            },
            "-=.35"
        )

        .to(
            ".stackly-blog-hero-dot",
            {
                scale: 1,
                opacity: 1,
                duration: .7,
                ease: "back.out(1.7)"
            },
            "-=.25"
        );


    /* DOT PULSE */

    gsap.to(
        ".stackly-blog-hero-dot span",
        {
            scale: 1.35,
            opacity: .55,
            duration: 1.3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        }
    );

});


/* =========================================================
   STACKLY BLOG FEATURE GSAP
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

    gsap.set(
        ".stackly-blog-feature-main",
        {
            x: -120,
            opacity: 0,
            clipPath: "inset(0 100% 0 0)"
        }
    );

    gsap.set(
        ".stackly-blog-feature-small",
        {
            x: -80,
            y: 80,
            opacity: 0
        }
    );

    gsap.set(
        ".stackly-blog-feature-label",
        {
            x: 80,
            opacity: 0
        }
    );

    gsap.set(
        ".stackly-blog-feature-content h2",
        {
            x: 100,
            opacity: 0
        }
    );

    gsap.set(
        ".stackly-blog-feature-intro",
        {
            x: 80,
            opacity: 0
        }
    );

    gsap.set(
        ".stackly-blog-feature-point",
        {
            x: 70,
            opacity: 0
        }
    );

    gsap.set(
        ".stackly-blog-feature-meta",
        {
            x: 60,
            opacity: 0
        }
    );

    gsap.set(
        ".stackly-blog-feature-button",
        {
            y: 30,
            opacity: 0
        }
    );


    /* =====================================================
       TIMELINE
    ===================================================== */

    const blogFeatureTimeline = gsap.timeline({

        scrollTrigger: {
            trigger: ".stackly-blog-feature",
            start: "top 75%",
            toggleActions: "play none none none"
        }

    });


    blogFeatureTimeline

        /* MAIN IMAGE */

        .to(
            ".stackly-blog-feature-main",
            {
                x: 0,
                opacity: 1,
                clipPath: "inset(0 0% 0 0)",
                duration: 1.4,
                ease: "power3.out"
            }
        )


        /* SMALL IMAGE */

        .to(
            ".stackly-blog-feature-small",
            {
                x: 0,
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "back.out(1.3)"
            },
            "-=.75"
        )


        /* LABEL */

        .to(
            ".stackly-blog-feature-label",
            {
                x: 0,
                opacity: 1,
                duration: .7,
                ease: "power3.out"
            },
            "-=1"
        )


        /* HEADING */

        .to(
            ".stackly-blog-feature-content h2",
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            },
            "-=.4"
        )


        /* INTRO */

        .to(
            ".stackly-blog-feature-intro",
            {
                x: 0,
                opacity: 1,
                duration: .8,
                ease: "power3.out"
            },
            "-=.5"
        )


        /* POINTS */

        .to(
            ".stackly-blog-feature-point",
            {
                x: 0,
                opacity: 1,
                duration: .75,
                stagger: .16,
                ease: "power3.out"
            },
            "-=.35"
        )


        /* META */

        .to(
            ".stackly-blog-feature-meta",
            {
                x: 0,
                opacity: 1,
                duration: .65,
                ease: "power3.out"
            },
            "-=.3"
        )


        /* BUTTON */

        .to(
            ".stackly-blog-feature-button",
            {
                y: 0,
                opacity: 1,
                duration: .7,
                ease: "back.out(1.3)"
            },
            "-=.25"
        );

});


/* =========================================================
   STACKLY LATEST ARTICLES GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }


    /* HEADING */

    gsap.set(".stackly-articles-label", {
        y: -35,
        opacity: 0
    });

    gsap.set(".stackly-articles-heading h2", {
        y: 55,
        opacity: 0
    });

    gsap.set(".stackly-articles-line", {
        scaleX: 0,
        opacity: 0
    });

    gsap.set(".stackly-articles-heading p", {
        y: 30,
        opacity: 0
    });


    /* CARDS */

    gsap.set(".stackly-article-card:nth-child(odd)", {
        x: -100,
        opacity: 0
    });

    gsap.set(".stackly-article-card:nth-child(even)", {
        x: 100,
        opacity: 0
    });


    const articlesTimeline = gsap.timeline({

        scrollTrigger: {
            trigger: ".stackly-articles-section",
            start: "top 78%",
            toggleActions: "play none none none"
        }

    });


    articlesTimeline

        .to(
            ".stackly-articles-label",
            {
                y: 0,
                opacity: 1,
                duration: .7,
                ease: "power3.out"
            }
        )

        .to(
            ".stackly-articles-heading h2",
            {
                y: 0,
                opacity: 1,
                duration: .9,
                ease: "power3.out"
            },
            "-=.35"
        )

        .to(
            ".stackly-articles-line",
            {
                scaleX: 1,
                opacity: 1,
                duration: .6,
                ease: "power2.out"
            },
            "-=.35"
        )

        .to(
            ".stackly-articles-heading p",
            {
                y: 0,
                opacity: 1,
                duration: .7,
                ease: "power3.out"
            },
            "-=.25"
        )

        .to(
            ".stackly-article-card",
            {
                x: 0,
                opacity: 1,
                duration: 1,
                stagger: .15,
                ease: "power3.out"
            },
            "-=.15"
        );

});


/* =========================================================
   STACKLY EXPANDING PLAY STORIES GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }


    const gallery = document.querySelector(
        ".stackly-expand-gallery"
    );

    const items = document.querySelectorAll(
        ".stackly-expand-item"
    );


    if (!gallery || !items.length) return;


    /* =====================================================
       INITIAL GSAP REVEAL
    ===================================================== */

    gsap.set(
        ".stackly-play-stories-label",
        {
            y: -30,
            opacity: 0
        }
    );

    gsap.set(
        ".stackly-play-stories-heading h2",
        {
            y: 50,
            opacity: 0
        }
    );

    gsap.set(
        ".stackly-play-stories-heading p",
        {
            y: 30,
            opacity: 0
        }
    );

    gsap.set(
        ".stackly-expand-item",
        {
            y: 80,
            opacity: 0,
            scale: .96
        }
    );


    const galleryTimeline = gsap.timeline({

        scrollTrigger: {
            trigger: ".stackly-play-stories",
            start: "top 78%",
            toggleActions: "play none none none"
        }

    });


    galleryTimeline

        .to(
            ".stackly-play-stories-label",
            {
                y: 0,
                opacity: 1,
                duration: .7,
                ease: "power3.out"
            }
        )

        .to(
            ".stackly-play-stories-heading h2",
            {
                y: 0,
                opacity: 1,
                duration: .9,
                ease: "power3.out"
            },
            "-=.35"
        )

        .to(
            ".stackly-play-stories-heading p",
            {
                y: 0,
                opacity: 1,
                duration: .7,
                ease: "power3.out"
            },
            "-=.45"
        )

        .to(
            ".stackly-expand-item",
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: .9,
                stagger: .13,
                ease: "power3.out"
            },
            "-=.25"
        );


    /* =====================================================
       DESKTOP HOVER
    ===================================================== */

    items.forEach(function (item) {

        item.addEventListener("mouseenter", function () {

            if (window.innerWidth > 650) {

                items.forEach(function (other) {
                    other.classList.remove("active");
                });

                item.classList.add("active");

            }

        });

    });


    /* =====================================================
       MOBILE CLICK / TAP
    ===================================================== */

    items.forEach(function (item) {

        item.addEventListener("click", function (event) {

            if (window.innerWidth <= 650) {

                if (!item.classList.contains("active")) {

                    event.preventDefault();

                    items.forEach(function (other) {
                        other.classList.remove("active");
                    });

                    item.classList.add("active");

                }

            }

        });

    });


    /* =====================================================
       DEFAULT ACTIVE ITEM
    ===================================================== */

    if (items[0]) {
        items[0].classList.add("active");
    }

});

/* =========================================================
   STACKLY QUESTIONS - GSAP + FAQ
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
       GSAP REVEAL
    ===================================================== */

    gsap.set(".stackly-questions-visual", {
        x: -100,
        opacity: 0
    });

    gsap.set(".stackly-questions-label", {
        x: 80,
        opacity: 0
    });

    gsap.set(".stackly-questions-content h2", {
        x: 90,
        opacity: 0
    });

    gsap.set(".stackly-questions-intro", {
        x: 70,
        opacity: 0
    });

    gsap.set(".stackly-question-item", {
        x: 80,
        opacity: 0
    });

    gsap.set(".stackly-questions-button", {
        y: 25,
        opacity: 0
    });


    const questionsTimeline = gsap.timeline({

        scrollTrigger: {
            trigger: ".stackly-questions-section",
            start: "top 75%",
            toggleActions: "play none none none"
        }

    });


    questionsTimeline

        .to(
            ".stackly-questions-visual",
            {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out"
            }
        )

        .to(
            ".stackly-questions-label",
            {
                x: 0,
                opacity: 1,
                duration: .7,
                ease: "power3.out"
            },
            "-=.75"
        )

        .to(
            ".stackly-questions-content h2",
            {
                x: 0,
                opacity: 1,
                duration: .9,
                ease: "power3.out"
            },
            "-=.45"
        )

        .to(
            ".stackly-questions-intro",
            {
                x: 0,
                opacity: 1,
                duration: .7,
                ease: "power3.out"
            },
            "-=.45"
        )

        .to(
            ".stackly-question-item",
            {
                x: 0,
                opacity: 1,
                duration: .7,
                stagger: .1,
                ease: "power3.out"
            },
            "-=.3"
        )

        .to(
            ".stackly-questions-button",
            {
                y: 0,
                opacity: 1,
                duration: .6,
                ease: "power3.out"
            },
            "-=.2"
        );


    /* =====================================================
       FAQ ACCORDION
    ===================================================== */

    const questionItems = document.querySelectorAll(
        ".stackly-question-item"
    );

    questionItems.forEach(function (item) {

        const button = item.querySelector(
            ".stackly-question-btn"
        );

        button.addEventListener("click", function () {

            const isActive =
                item.classList.contains("active");


            questionItems.forEach(function (other) {

                other.classList.remove("active");

            });


            if (!isActive) {

                item.classList.add("active");

            }

        });

    });

});