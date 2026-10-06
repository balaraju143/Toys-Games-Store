/* =========================================================
   STACKLY MOBILE NAVBAR
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("stacklyMenuToggle");
    const mobileMenu = document.getElementById("stacklyMobileMenu");

    if (!menuToggle || !mobileMenu) return;

    /* OPEN / CLOSE MENU */
    menuToggle.addEventListener("click", function () {

        const isOpen = mobileMenu.classList.contains("show");

        if (isOpen) {
            mobileMenu.classList.remove("show");
            menuToggle.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        } else {
            mobileMenu.classList.add("show");
            menuToggle.classList.add("active");
            menuToggle.setAttribute("aria-expanded", "true");
        }

    });


    /* CLOSE MENU AFTER CLICKING PAGE LINK */
    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.classList.remove("show");
            menuToggle.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");

        });

    });


    /* CLOSE WHEN CLICKING OUTSIDE */
    document.addEventListener("click", function (event) {

        if (
            !mobileMenu.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            mobileMenu.classList.remove("show");
            menuToggle.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");

        }

    });

});




/* =========================================================
   STACKLY FOOTER JS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       FOOTER REVEAL ANIMATIONS
    ===================================================== */

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }


    /* =====================================================
       SET INITIAL STATES
    ===================================================== */

    gsap.set(".stackly-footer-brand", {
        x: -80,
        opacity: 0
    });

    gsap.set(".stackly-footer-column", {
        y: 60,
        opacity: 0
    });

    gsap.set(".stackly-footer-contact", {
        x: 80,
        opacity: 0
    });

    gsap.set(".stackly-footer-bottom-inner", {
        y: 30,
        opacity: 0
    });


    /* =====================================================
       FOOTER MAIN ANIMATION
    ===================================================== */

    const footerTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".stackly-footer",
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });


    footerTimeline
        .to(".stackly-footer-brand", {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
        })

        .to(".stackly-footer-column:not(.stackly-footer-contact)", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out"
        }, "-=0.65")

        .to(".stackly-footer-contact", {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out"
        }, "-=0.65")

        .to(".stackly-footer-bottom-inner", {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out"
        }, "-=0.35");


    /* =====================================================
       SOCIAL ICON HOVER ANIMATION
    ===================================================== */

    const socialIcons = document.querySelectorAll(
        ".stackly-footer-social a"
    );

    socialIcons.forEach(function (icon) {

        icon.addEventListener("mouseenter", function () {

            if (typeof gsap !== "undefined") {
                gsap.to(icon, {
                    y: -5,
                    scale: 1.08,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }

        });

        icon.addEventListener("mouseleave", function () {

            if (typeof gsap !== "undefined") {
                gsap.to(icon, {
                    y: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }

        });

    });


    /* =====================================================
       CONTACT ICON HOVER
    ===================================================== */

    const contactItems = document.querySelectorAll(
        ".stackly-contact-item"
    );

    contactItems.forEach(function (item) {

        const icon = item.querySelector(".material-icons");

        if (!icon) return;

        item.addEventListener("mouseenter", function () {

            gsap.to(icon, {
                scale: 1.12,
                rotation: 5,
                duration: 0.3,
                ease: "power2.out"
            });

        });

        item.addEventListener("mouseleave", function () {

            gsap.to(icon, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: "power2.out"
            });

        });

    });


    /* =====================================================
       FOOTER LINK HOVER
    ===================================================== */

    const footerLinks = document.querySelectorAll(
        ".stackly-footer-column ul li a"
    );

    footerLinks.forEach(function (link) {

        link.addEventListener("mouseenter", function () {

            gsap.to(link, {
                x: 5,
                duration: 0.25,
                ease: "power2.out"
            });

        });

        link.addEventListener("mouseleave", function () {

            gsap.to(link, {
                x: 0,
                duration: 0.25,
                ease: "power2.out"
            });

        });

    });

});