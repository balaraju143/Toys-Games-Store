/* =========================================================
   STACKLY CONTACT HERO GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    gsap.set(".stackly-contact-hero-label", {
        y: -35,
        opacity: 0
    });

    gsap.set(".stackly-contact-hero-content h1", {
        y: 70,
        opacity: 0
    });

    gsap.set(".stackly-contact-hero-content p", {
        y: 45,
        opacity: 0
    });

    gsap.set(".stackly-contact-breadcrumb", {
        y: 35,
        opacity: 0
    });

    gsap.set(".stackly-contact-hero-dot", {
        scale: .4,
        opacity: 0
    });


    const contactHeroTimeline = gsap.timeline({
        defaults: {
            ease: "power3.out"
        }
    });


    contactHeroTimeline

        .to(
            ".stackly-contact-hero-label",
            {
                y: 0,
                opacity: 1,
                duration: .8
            }
        )

        .to(
            ".stackly-contact-hero-content h1",
            {
                y: 0,
                opacity: 1,
                duration: 1.1
            },
            "-=.45"
        )

        .to(
            ".stackly-contact-hero-content p",
            {
                y: 0,
                opacity: 1,
                duration: .85
            },
            "-=.55"
        )

        .to(
            ".stackly-contact-breadcrumb",
            {
                y: 0,
                opacity: 1,
                duration: .7
            },
            "-=.4"
        )

        .to(
            ".stackly-contact-hero-dot",
            {
                scale: 1,
                opacity: 1,
                duration: .7,
                ease: "back.out(1.7)"
            },
            "-=.25"
        );


    /* SMALL CONTINUOUS DOT ANIMATION */

    gsap.to(".stackly-contact-hero-dot", {
        y: -7,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

});


/* =========================================================
   STACKLY CONTACT SECTION GSAP + FORM
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
       GSAP INITIAL STATES
    ===================================================== */

    gsap.set(".stackly-contact-main-image", {
        x: -120,
        opacity: 0,
        clipPath: "inset(0 100% 0 0)"
    });

    gsap.set(".stackly-contact-info-card", {
        y: 100,
        opacity: 0
    });

    gsap.set(".stackly-contact-form-label", {
        x: 90,
        opacity: 0
    });

    gsap.set(".stackly-contact-form-area h2", {
        x: 100,
        opacity: 0
    });

    gsap.set(".stackly-contact-form-intro", {
        x: 80,
        opacity: 0
    });

    gsap.set(".stackly-form-group", {
        x: 70,
        opacity: 0
    });

    gsap.set(".stackly-contact-submit", {
        y: 30,
        opacity: 0
    });


    /* =====================================================
       GSAP TIMELINE
    ===================================================== */

    const contactTimeline = gsap.timeline({

        scrollTrigger: {
            trigger: ".stackly-contact-section",
            start: "top 75%",
            toggleActions: "play none none none"
        }

    });


    contactTimeline

        .to(".stackly-contact-main-image", {
            x: 0,
            opacity: 1,
            clipPath: "inset(0 0% 0 0)",
            duration: 1.3,
            ease: "power3.out"
        })

        .to(".stackly-contact-info-card", {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
        }, "-=.65")

        .to(".stackly-contact-form-label", {
            x: 0,
            opacity: 1,
            duration: .7,
            ease: "power3.out"
        }, "-=.75")

        .to(".stackly-contact-form-area h2", {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
        }, "-=.45")

        .to(".stackly-contact-form-intro", {
            x: 0,
            opacity: 1,
            duration: .7,
            ease: "power3.out"
        }, "-=.45")

        .to(".stackly-form-group", {
            x: 0,
            opacity: 1,
            duration: .65,
            stagger: .12,
            ease: "power3.out"
        }, "-=.25")

        .to(".stackly-contact-submit", {
            y: 0,
            opacity: 1,
            duration: .6,
            ease: "power3.out"
        }, "-=.15");


    /* =====================================================
       FORM
    ===================================================== */

    const form = document.getElementById(
        "stacklyContactForm"
    );

    const nameInput = document.getElementById(
        "contactName"
    );

    const emailInput = document.getElementById(
        "contactEmail"
    );

    const phoneInput = document.getElementById(
        "contactPhone"
    );

    const messageInput = document.getElementById(
        "contactMessage"
    );


    /* NAME - LETTERS ONLY */

    nameInput.addEventListener("input", function () {

        this.value = this.value.replace(
            /[^a-zA-Z\s]/g,
            ""
        );

    });


    /* PHONE - NUMBERS ONLY */

    phoneInput.addEventListener("input", function () {

        this.value = this.value.replace(
            /[^0-9]/g,
            ""
        );

    });


    function showError(input, errorElement, message) {

        const group = input.closest(
            ".stackly-form-group"
        );

        errorElement.textContent = message;

        errorElement.classList.add("show");

        group.classList.add("error");

    }


    function clearError(input, errorElement) {

        const group = input.closest(
            ".stackly-form-group"
        );

        errorElement.textContent = "";

        errorElement.classList.remove("show");

        group.classList.remove("error");

    }


    function clearAllErrors() {

        document
            .querySelectorAll(".stackly-form-error")
            .forEach(function (error) {

                error.textContent = "";

                error.classList.remove("show");

            });

        document
            .querySelectorAll(".stackly-form-group")
            .forEach(function (group) {

                group.classList.remove("error");

            });

    }


    function validateForm() {

        let valid = true;

        clearAllErrors();


        /* NAME */

        const name = nameInput.value.trim();

        if (name === "") {

            showError(
                nameInput,
                document.getElementById("nameError"),
                "Please enter your name."
            );

            valid = false;

        } else if (name.length < 2) {

            showError(
                nameInput,
                document.getElementById("nameError"),
                "Name must contain at least 2 letters."
            );

            valid = false;

        }


        /* EMAIL */

        const email = emailInput.value.trim();

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {

            showError(
                emailInput,
                document.getElementById("emailError"),
                "Please enter your email."
            );

            valid = false;

        } else if (!emailPattern.test(email)) {

            showError(
                emailInput,
                document.getElementById("emailError"),
                "Please enter a valid email address."
            );

            valid = false;

        }


        /* PHONE */

        const phone = phoneInput.value.trim();

        if (phone === "") {

            showError(
                phoneInput,
                document.getElementById("phoneError"),
                "Please enter your phone number."
            );

            valid = false;

        } else if (phone.length !== 10) {

            showError(
                phoneInput,
                document.getElementById("phoneError"),
                "Phone number must contain 10 digits."
            );

            valid = false;

        }


        /* MESSAGE */

        const message = messageInput.value.trim();

        if (message === "") {

            showError(
                messageInput,
                document.getElementById("messageError"),
                "Please enter your message."
            );

            valid = false;

        } else if (message.length < 10) {

            showError(
                messageInput,
                document.getElementById("messageError"),
                "Message must contain at least 10 characters."
            );

            valid = false;

        }


        return valid;

    }


    /* =====================================================
       SUBMIT
    ===================================================== */

    form.addEventListener("submit", function (event) {

        event.preventDefault();


        const isValid = validateForm();


        if (!isValid) {

            /* ERROR MESSAGES DISAPPEAR AFTER 3 SECONDS */

            setTimeout(function () {

                clearAllErrors();

            }, 3000);

            return;
        }


        /*
         * Valid form:
         * Go to 404 page.
         * Form is reset before leaving so when the user
         * returns to this page it starts empty.
         */

        form.reset();

        clearAllErrors();

        window.location.href = "404.html";

    });

});


/* =========================================================
   STACKLY CONTACT QUICK INFO GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") return;

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }

    gsap.set(".stackly-quick-card", {
        y: 80,
        opacity: 0
    });

    gsap.set(".stackly-quick-icon", {
        scale: .5,
        opacity: 0
    });

    gsap.set(".stackly-quick-card h3, .stackly-quick-card p, .stackly-quick-btn", {
        y: 25,
        opacity: 0
    });


    const quickTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".stackly-contact-quick",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });


    quickTimeline

        .to(".stackly-quick-card", {
            y: 0,
            opacity: 1,
            duration: .9,
            stagger: .18,
            ease: "power3.out"
        })

        .to(".stackly-quick-icon", {
            scale: 1,
            opacity: 1,
            duration: .65,
            stagger: .15,
            ease: "back.out(1.7)"
        }, "-=.65")

        .to(
            ".stackly-quick-card h3, .stackly-quick-card p, .stackly-quick-btn",
            {
                y: 0,
                opacity: 1,
                duration: .65,
                stagger: .08,
                ease: "power3.out"
            },
            "-=.5"
        );

});


/* =========================================================
   STACKLY TAMIL NADU MAP GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") return;

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }

    gsap.fromTo(
        ".stackly-map-label",
        {
            y: -30,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: .7,
            scrollTrigger: {
                trigger: ".stackly-tamilnadu-map",
                start: "top 80%",
                toggleActions: "play none none none"
            }
        }
    );

    gsap.fromTo(
        ".stackly-map-heading h2",
        {
            y: 50,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".stackly-tamilnadu-map",
                start: "top 78%",
                toggleActions: "play none none none"
            }
        }
    );

    gsap.fromTo(
        ".stackly-map-heading p",
        {
            y: 35,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: .8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".stackly-map-heading",
                start: "top 80%",
                toggleActions: "play none none none"
            }
        }
    );


    gsap.to(
        ".stackly-tamilnadu-map-image",
        {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".stackly-map-wrapper",
                start: "top 82%",
                toggleActions: "play none none none"
            }
        }
    );


    gsap.to(
        ".stackly-map-location",
        {
            opacity: 1,
            scale: 1,
            duration: .8,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: ".stackly-map-wrapper",
                start: "top 70%",
                toggleActions: "play none none none"
            }
        }
    );

});


/* ================= STACKLY FAQ ================= */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") return;

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }


    /* ================= FAQ INITIAL STATE ================= */

    const faqItems = document.querySelectorAll(".stackly-faq-item");

    faqItems.forEach(function (item) {

        const answer = item.querySelector(".stackly-faq-answer");

        if (item.classList.contains("active")) {

            gsap.set(answer, {
                height: "auto"
            });

        } else {

            gsap.set(answer, {
                height: 0
            });

        }

    });


    /* ================= FAQ CLICK ================= */

    faqItems.forEach(function (item) {

        const question = item.querySelector(".stackly-faq-question");
        const answer = item.querySelector(".stackly-faq-answer");
        const icon = question.querySelector(".material-icons");

        question.addEventListener("click", function () {

            const isActive = item.classList.contains("active");


            /* CLOSE ALL */

            faqItems.forEach(function (otherItem) {

                const otherAnswer =
                    otherItem.querySelector(".stackly-faq-answer");

                const otherIcon =
                    otherItem.querySelector(".material-icons");

                if (otherItem !== item) {

                    otherItem.classList.remove("active");

                    gsap.to(otherAnswer, {
                        height: 0,
                        duration: 0.45,
                        ease: "power2.inOut"
                    });

                    otherIcon.textContent = "add";
                }

            });


            /* OPEN CURRENT */

            if (!isActive) {

                item.classList.add("active");

                icon.textContent = "remove";

                gsap.fromTo(
                    answer,
                    {
                        height: 0
                    },
                    {
                        height: answer.scrollHeight,
                        duration: 0.55,
                        ease: "power3.out",
                        onComplete: function () {
                            gsap.set(answer, {
                                height: "auto"
                            });
                        }
                    }
                );

            } else {

                item.classList.remove("active");

                icon.textContent = "add";

                gsap.to(answer, {
                    height: 0,
                    duration: 0.45,
                    ease: "power2.inOut"
                });

            }

        });

    });


    /* ================= GSAP REVEAL ================= */

    gsap.set(".stackly-faq-intro", {
        x: -90,
        opacity: 0
    });

    gsap.set(".stackly-faq-list", {
        x: 90,
        opacity: 0
    });

    gsap.set(".stackly-faq-item", {
        y: 35,
        opacity: 0
    });


    const faqTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".stackly-faq-section",
            start: "top 78%",
            toggleActions: "play none none none"
        }
    });


    faqTimeline
        .to(".stackly-faq-intro", {
            x: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power3.out"
        })
        .to(".stackly-faq-list", {
            x: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power3.out"
        }, "-=0.8")
        .to(".stackly-faq-item", {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out"
        }, "-=0.65");

});