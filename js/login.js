/* =========================================================
   STACKLY LOGIN
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("stacklyLoginForm");

    if (!loginForm) return;


    /* =====================================================
       ROLE SWITCH
    ===================================================== */

    const roleButtons =
        document.querySelectorAll(".stackly-role-btn");

    let selectedRole = "client";

    roleButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            roleButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            selectedRole =
                button.getAttribute("data-role");

        });

    });


    /* =====================================================
       PASSWORD SHOW / HIDE
    ===================================================== */

    const passwordInput =
        document.getElementById("stacklyPassword");

    const passwordToggle =
        document.getElementById("stacklyPasswordToggle");

    if (passwordToggle && passwordInput) {

        passwordToggle.addEventListener("click", function () {

            const icon =
                passwordToggle.querySelector(".material-icons");

            if (passwordInput.type === "password") {

                passwordInput.type = "text";

                icon.textContent = "visibility";

                passwordToggle.setAttribute(
                    "aria-label",
                    "Hide password"
                );

            } else {

                passwordInput.type = "password";

                icon.textContent = "visibility_off";

                passwordToggle.setAttribute(
                    "aria-label",
                    "Show password"
                );

            }

        });

    }


    /* =====================================================
       ERROR MESSAGE
    ===================================================== */

    function showError(input, errorElement, message) {

        const inputBox =
            input.closest(".stackly-input-box");

        errorElement.textContent = message;

        errorElement.classList.add("show");

        inputBox.classList.add("input-error");

        clearTimeout(errorElement.hideTimer);

        errorElement.hideTimer = setTimeout(function () {

            errorElement.textContent = "";

            errorElement.classList.remove("show");

            inputBox.classList.remove("input-error");

        }, 3000);
    }


    function clearError(input, errorElement) {

        const inputBox =
            input.closest(".stackly-input-box");

        clearTimeout(errorElement.hideTimer);

        errorElement.textContent = "";

        errorElement.classList.remove("show");

        inputBox.classList.remove("input-error");

    }


    /* =====================================================
       EMAIL VALIDATION
    ===================================================== */

    function validateEmail() {

        const email =
            document.getElementById("stacklyEmail");

        const error =
            document.getElementById("stacklyEmailError");

        const value =
            email.value.trim();

        if (value === "") {

            showError(
                email,
                error,
                "Please enter your email address."
            );

            return false;
        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(value)) {

            showError(
                email,
                error,
                "Please enter a valid email address."
            );

            return false;
        }

        clearError(email, error);

        return true;
    }


    /* =====================================================
       PASSWORD VALIDATION
    ===================================================== */

    function validatePassword() {

        const password =
            document.getElementById("stacklyPassword");

        const error =
            document.getElementById("stacklyPasswordError");

        const value =
            password.value;

        if (value === "") {

            showError(
                password,
                error,
                "Please enter your password."
            );

            return false;
        }

        if (value.length < 6) {

            showError(
                password,
                error,
                "Password must contain at least 6 characters."
            );

            return false;
        }

        clearError(password, error);

        return true;
    }


    /* =====================================================
       LIVE VALIDATION
    ===================================================== */

    document
        .getElementById("stacklyEmail")
        .addEventListener("input", function () {

            const error =
                document.getElementById("stacklyEmailError");

            if (this.value.trim() !== "") {
                clearError(this, error);
            }

        });


    document
        .getElementById("stacklyPassword")
        .addEventListener("input", function () {

            const error =
                document.getElementById("stacklyPasswordError");

            if (this.value !== "") {
                clearError(this, error);
            }

        });


    /* =====================================================
       LOGIN
    ===================================================== */

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const emailValid =
            validateEmail();

        const passwordValid =
            validatePassword();

        if (!emailValid || !passwordValid) {
            return;
        }

           const emailInput =
        document.getElementById("stacklyEmail");

    if (emailInput) {
        localStorage.setItem(
            "stacklyUserEmail",
            emailInput.value.trim()
        );
    }


        /* ROLE BASED REDIRECT */

        if (selectedRole === "admin") {

            window.location.href =
                "admin-dashboard.html";

        } else {

            window.location.href =
                "client-dashboard.html";

        }

    });


    /* =====================================================
       RESET FORM WHEN RETURNING TO LOGIN PAGE
    ===================================================== */

    function resetStacklyLogin() {

        loginForm.reset();

        selectedRole = "client";

        roleButtons.forEach(function (button) {

            button.classList.remove("active");

            if (
                button.getAttribute("data-role") === "client"
            ) {
                button.classList.add("active");
            }

        });


        if (passwordInput) {

            passwordInput.type = "password";

            const icon =
                passwordToggle.querySelector(".material-icons");

            icon.textContent = "visibility_off";

        }


        document
            .querySelectorAll(".stackly-field-error")
            .forEach(function (error) {

                error.textContent = "";

                error.classList.remove("show");

            });


        document
            .querySelectorAll(".stackly-input-box")
            .forEach(function (box) {

                box.classList.remove("input-error");

            });


        const generalError =
            document.getElementById("stacklyGeneralError");

        if (generalError) {
            generalError.textContent = "";
        }

    }


    window.addEventListener("pageshow", function () {

        resetStacklyLogin();

    });


    /* =====================================================
       GSAP REVEAL
    ===================================================== */

    if (typeof gsap !== "undefined") {

        gsap.set(".stackly-login-visual", {
            x: -70,
            opacity: 0
        });

        gsap.set(".stackly-login-form-panel", {
            x: 70,
            opacity: 0
        });

        gsap.set(".stackly-login-visual-content > *", {
            y: 25,
            opacity: 0
        });

        gsap.set(
            ".stackly-login-heading, .stackly-role-title, .stackly-role-switch, .stackly-login-field, .stackly-login-options, .stackly-login-submit, .stackly-login-divider, .stackly-login-social, .stackly-login-register",
            {
                y: 25,
                opacity: 0
            }
        );


        const loginTimeline =
            gsap.timeline({
                defaults: {
                    ease: "power3.out"
                }
            });


        loginTimeline

            .to(".stackly-login-visual", {
                x: 0,
                opacity: 1,
                duration: 1
            })

            .to(".stackly-login-form-panel", {
                x: 0,
                opacity: 1,
                duration: 1
            }, "-=0.75")

            .to(".stackly-login-visual-content > *", {
                y: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.12
            }, "-=0.65")

            .to(
                ".stackly-login-heading, .stackly-role-title, .stackly-role-switch, .stackly-login-field, .stackly-login-options, .stackly-login-submit, .stackly-login-divider, .stackly-login-social, .stackly-login-register",
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.55,
                    stagger: 0.07
                },
                "-=0.55"
            );

    }

});