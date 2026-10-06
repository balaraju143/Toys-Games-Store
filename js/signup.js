/* =========================================================
   STACKLY SIGNUP
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const signupForm =
        document.getElementById("stacklySignupForm");

    if (!signupForm) return;


    /* =====================================================
       ROLE
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
       ELEMENTS
    ===================================================== */

    const nameInput =
        document.getElementById("stacklySignupName");

    const emailInput =
        document.getElementById("stacklySignupEmail");

    const passwordInput =
        document.getElementById("stacklySignupPassword");

    const confirmPasswordInput =
        document.getElementById("stacklySignupConfirmPassword");

    const termsInput =
        document.getElementById("stacklySignupTerms");


    /* =====================================================
       NAME - LETTERS ONLY
    ===================================================== */

    nameInput.addEventListener("input", function () {

        this.value = this.value.replace(
            /[^a-zA-Z\s]/g,
            ""
        );

        this.value = this.value.replace(
            /\s{2,}/g,
            " "
        );

        clearFieldError(
            this,
            document.getElementById(
                "stacklySignupNameError"
            )
        );

    });


    /* =====================================================
       PASSWORD SHOW / HIDE
    ===================================================== */

    document
        .querySelectorAll(".stackly-password-toggle")
        .forEach(function (toggle) {

            toggle.addEventListener("click", function () {

                const targetId =
                    this.getAttribute("data-target");

                const input =
                    document.getElementById(targetId);

                const icon =
                    this.querySelector(".material-icons");

                if (input.type === "password") {

                    input.type = "text";

                    icon.textContent = "visibility";

                    this.setAttribute(
                        "aria-label",
                        "Hide password"
                    );

                } else {

                    input.type = "password";

                    icon.textContent = "visibility_off";

                    this.setAttribute(
                        "aria-label",
                        "Show password"
                    );

                }

            });

        });


    /* =====================================================
       SHOW ERROR
    ===================================================== */

    function showFieldError(
        input,
        errorElement,
        message
    ) {

        const inputBox =
            input.closest(".stackly-input-box");

        errorElement.textContent = message;

        errorElement.classList.add("show");

        inputBox.classList.add("input-error");

        clearTimeout(errorElement.errorTimer);

        errorElement.errorTimer =
            setTimeout(function () {

                errorElement.textContent = "";

                errorElement.classList.remove("show");

                inputBox.classList.remove("input-error");

            }, 3000);

    }


    /* =====================================================
       CLEAR ERROR
    ===================================================== */

    function clearFieldError(
        input,
        errorElement
    ) {

        if (!errorElement) return;

        const inputBox =
            input.closest(".stackly-input-box");

        clearTimeout(errorElement.errorTimer);

        errorElement.textContent = "";

        errorElement.classList.remove("show");

        if (inputBox) {
            inputBox.classList.remove("input-error");
        }

    }


    /* =====================================================
       NAME VALIDATION
    ===================================================== */

    function validateName() {

        const error =
            document.getElementById(
                "stacklySignupNameError"
            );

        const value =
            nameInput.value.trim();

        if (value === "") {

            showFieldError(
                nameInput,
                error,
                "Please enter your full name."
            );

            return false;
        }

        if (!/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(value)) {

            showFieldError(
                nameInput,
                error,
                "Name must contain letters only."
            );

            return false;
        }

        if (value.length < 2) {

            showFieldError(
                nameInput,
                error,
                "Please enter a valid name."
            );

            return false;
        }

        clearFieldError(nameInput, error);

        return true;
    }


    /* =====================================================
       EMAIL VALIDATION
    ===================================================== */

    function validateEmail() {

        const error =
            document.getElementById(
                "stacklySignupEmailError"
            );

        const value =
            emailInput.value.trim();

        if (value === "") {

            showFieldError(
                emailInput,
                error,
                "Please enter your email address."
            );

            return false;
        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(value)) {

            showFieldError(
                emailInput,
                error,
                "Please enter a valid email address."
            );

            return false;
        }

        clearFieldError(emailInput, error);

        return true;
    }


    /* =====================================================
       PASSWORD VALIDATION
    ===================================================== */

    function validatePassword() {

        const error =
            document.getElementById(
                "stacklySignupPasswordError"
            );

        const value =
            passwordInput.value;

        if (value === "") {

            showFieldError(
                passwordInput,
                error,
                "Please create a password."
            );

            return false;
        }

        if (value.length < 6) {

            showFieldError(
                passwordInput,
                error,
                "Password must contain at least 6 characters."
            );

            return false;
        }

        clearFieldError(passwordInput, error);

        return true;
    }


    /* =====================================================
       CONFIRM PASSWORD
    ===================================================== */

    function validateConfirmPassword() {

        const error =
            document.getElementById(
                "stacklySignupConfirmPasswordError"
            );

        const value =
            confirmPasswordInput.value;

        if (value === "") {

            showFieldError(
                confirmPasswordInput,
                error,
                "Please confirm your password."
            );

            return false;
        }

        if (value !== passwordInput.value) {

            showFieldError(
                confirmPasswordInput,
                error,
                "Passwords do not match."
            );

            return false;
        }

        clearFieldError(
            confirmPasswordInput,
            error
        );

        return true;
    }


    /* =====================================================
       TERMS
    ===================================================== */

    function validateTerms() {

        const error =
            document.getElementById(
                "stacklySignupTermsError"
            );

        if (!termsInput.checked) {

            error.textContent =
                "Please accept the terms and conditions.";

            error.classList.add("show");

            clearTimeout(error.errorTimer);

            error.errorTimer =
                setTimeout(function () {

                    error.textContent = "";

                    error.classList.remove("show");

                }, 3000);

            return false;
        }

        error.textContent = "";

        error.classList.remove("show");

        return true;
    }


    /* =====================================================
       LIVE VALIDATION
    ===================================================== */

    emailInput.addEventListener(
        "input",
        function () {

            clearFieldError(
                this,
                document.getElementById(
                    "stacklySignupEmailError"
                )
            );

        }
    );


    passwordInput.addEventListener(
        "input",
        function () {

            clearFieldError(
                this,
                document.getElementById(
                    "stacklySignupPasswordError"
                )
            );

            if (
                confirmPasswordInput.value !== ""
            ) {

                clearFieldError(
                    confirmPasswordInput,
                    document.getElementById(
                        "stacklySignupConfirmPasswordError"
                    )
                );

            }

        }
    );


    confirmPasswordInput.addEventListener(
        "input",
        function () {

            clearFieldError(
                this,
                document.getElementById(
                    "stacklySignupConfirmPasswordError"
                )
            );

        }
    );


    /* =====================================================
       SUBMIT
    ===================================================== */

    signupForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const nameValid =
                validateName();

            const emailValid =
                validateEmail();

            const passwordValid =
                validatePassword();

            const confirmValid =
                validateConfirmPassword();

            const termsValid =
                validateTerms();


            if (
                !nameValid ||
                !emailValid ||
                !passwordValid ||
                !confirmValid ||
                !termsValid
            ) {
                return;
            }


            /*
             * ACCOUNT CREATED
             * Go to Login page
             */

            window.location.href = "login.html";

        }
    );


    /* =====================================================
       RESET WHEN PAGE RETURNS
    ===================================================== */

    function resetSignupForm() {

        signupForm.reset();

        selectedRole = "client";


        roleButtons.forEach(function (button) {

            button.classList.remove("active");

            if (
                button.getAttribute("data-role") ===
                "client"
            ) {
                button.classList.add("active");
            }

        });


        document
            .querySelectorAll(
                ".stackly-field-error"
            )
            .forEach(function (error) {

                clearTimeout(error.errorTimer);

                error.textContent = "";

                error.classList.remove("show");

            });


        document
            .querySelectorAll(
                ".stackly-input-box"
            )
            .forEach(function (box) {

                box.classList.remove(
                    "input-error"
                );

            });


        document
            .querySelectorAll(
                ".stackly-password-toggle"
            )
            .forEach(function (toggle) {

                const targetId =
                    toggle.getAttribute(
                        "data-target"
                    );

                const input =
                    document.getElementById(
                        targetId
                    );

                const icon =
                    toggle.querySelector(
                        ".material-icons"
                    );

                if (input) {
                    input.type = "password";
                }

                if (icon) {
                    icon.textContent =
                        "visibility_off";
                }

            });

    }


    window.addEventListener(
        "pageshow",
        function () {
            resetSignupForm();
        }
    );


    /* =====================================================
       GSAP REVEAL
    ===================================================== */

    if (typeof gsap !== "undefined") {

        gsap.set(
            ".stackly-signup-card .stackly-login-visual",
            {
                x: -70,
                opacity: 0
            }
        );

        gsap.set(
            ".stackly-signup-card .stackly-login-form-panel",
            {
                x: 70,
                opacity: 0
            }
        );

        gsap.set(
            ".stackly-signup-card .stackly-login-visual-content > *",
            {
                y: 25,
                opacity: 0
            }
        );

        gsap.set(
            ".stackly-signup-form-wrap > *, .stackly-signup-form-wrap .stackly-login-field, .stackly-signup-form-wrap .stackly-signup-terms",
            {
                y: 20,
                opacity: 0
            }
        );


        const signupTimeline =
            gsap.timeline({
                defaults: {
                    ease: "power3.out"
                }
            });


        signupTimeline

            .to(
                ".stackly-signup-card .stackly-login-visual",
                {
                    x: 0,
                    opacity: 1,
                    duration: 1
                }
            )

            .to(
                ".stackly-signup-card .stackly-login-form-panel",
                {
                    x: 0,
                    opacity: 1,
                    duration: 1
                },
                "-=0.75"
            )

            .to(
                ".stackly-signup-card .stackly-login-visual-content > *",
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.65,
                    stagger: 0.1
                },
                "-=0.7"
            )

            .to(
                ".stackly-signup-form-wrap > *, .stackly-signup-form-wrap .stackly-login-field, .stackly-signup-form-wrap .stackly-signup-terms",
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.055
                },
                "-=0.5"
            );

    }

});