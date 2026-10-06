/* =========================================================
   STACKLY 404 GSAP ANIMATION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") return;


    /* Initial states */

    gsap.set(".stackly-404-logo", {
        y: -35,
        opacity: 0
    });

    gsap.set(".stackly-404-number", {
        y: 60,
        opacity: 0
    });

    gsap.set(".stackly-404-toy", {
        scale: 0.5,
        opacity: 0,
        rotation: -20
    });

    gsap.set(".stackly-404-label", {
        y: 25,
        opacity: 0
    });

    gsap.set(".stackly-404-content h1", {
        y: 35,
        opacity: 0
    });

    gsap.set(".stackly-404-content p", {
        y: 25,
        opacity: 0
    });

    gsap.set(".stackly-404-buttons", {
        y: 30,
        opacity: 0
    });

    gsap.set(".stackly-404-bottom", {
        y: 20,
        opacity: 0
    });


    /* Main timeline */

    const timeline = gsap.timeline({
        defaults: {
            ease: "power3.out"
        }
    });


    timeline
        .to(".stackly-404-logo", {
            y: 0,
            opacity: 1,
            duration: 0.8
        })

        .to(".stackly-404-number", {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12
        }, "-=0.35")

        .to(".stackly-404-toy", {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 0.9,
            ease: "back.out(1.7)"
        }, "-=0.7")

        .to(".stackly-404-label", {
            y: 0,
            opacity: 1,
            duration: 0.6
        }, "-=0.4")

        .to(".stackly-404-content h1", {
            y: 0,
            opacity: 1,
            duration: 0.75
        }, "-=0.3")

        .to(".stackly-404-content p", {
            y: 0,
            opacity: 1,
            duration: 0.7
        }, "-=0.4")

        .to(".stackly-404-buttons", {
            y: 0,
            opacity: 1,
            duration: 0.7
        }, "-=0.3")

        .to(".stackly-404-bottom", {
            y: 0,
            opacity: 1,
            duration: 0.6
        }, "-=0.25");


    /* Floating toy */

    gsap.to(".stackly-404-toy", {
        y: -8,
        rotation: 4,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });


    /* Glow animation */

    gsap.to(".stackly-glow-one", {
        scale: 1.2,
        opacity: 0.7,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".stackly-glow-two", {
        scale: 1.15,
        opacity: 0.6,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

});