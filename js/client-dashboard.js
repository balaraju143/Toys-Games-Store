/* =========================================================
   STACKLY TOYS & GAMES
   CLIENT DASHBOARD JS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       USER EMAIL
    ===================================================== */

    let userEmail =
        localStorage.getItem("stacklyUserEmail");


    /*
     * Fallback only when no email exists.
     * Your login page should save the entered email.
     */

    if (!userEmail) {
        userEmail = "user@stackly.com";
    }


    const firstLetter =
        userEmail
            .trim()
            .charAt(0)
            .toUpperCase();


    /*
     * Name shown from email.
     * Example:
     * balaraju@gmail.com
     * -> balaraju
     */

    let userName =
        userEmail
            .split("@")[0]
            .replace(/[._-]+/g, " ");


    userName =
        userName
            .replace(/\b\w/g, function (letter) {
                return letter.toUpperCase();
            });


    /* SIDEBAR */

    const sidebarAvatar =
        document.getElementById(
            "sidebarUserAvatar"
        );

    const sidebarUserName =
        document.getElementById(
            "sidebarUserName"
        );

    const sidebarUserEmail =
        document.getElementById(
            "sidebarUserEmail"
        );


    /* HEADER */

    const headerAvatar =
        document.getElementById(
            "headerUserAvatar"
        );

    const headerUserName =
        document.getElementById(
            "headerUserName"
        );

    const headerUserEmail =
        document.getElementById(
            "headerUserEmail"
        );


    /* WELCOME */

    const welcomeUserName =
        document.getElementById(
            "welcomeUserName"
        );


    if (sidebarAvatar) {
        sidebarAvatar.textContent =
            firstLetter;
    }

    if (headerAvatar) {
        headerAvatar.textContent =
            firstLetter;
    }

    if (sidebarUserName) {
        sidebarUserName.textContent =
            userName;
    }

    if (headerUserName) {
        headerUserName.textContent =
            userName;
    }

    if (sidebarUserEmail) {
        sidebarUserEmail.textContent =
            userEmail;
    }

    if (headerUserEmail) {
        headerUserEmail.textContent =
            userEmail;
    }

    if (welcomeUserName) {
        welcomeUserName.textContent =
            userName;
    }


    /* =====================================================
       MOBILE SIDEBAR
    ===================================================== */

    const sidebar =
        document.getElementById(
            "stacklySidebar"
        );

    const toggle =
        document.getElementById(
            "dashboardToggle"
        );

    const overlay =
        document.getElementById(
            "sidebarOverlay"
        );


    function openSidebar() {

        sidebar.classList.add(
            "sidebar-open"
        );

        overlay.classList.add(
            "show"
        );

        if (toggle) {

            const icon =
                toggle.querySelector(
                    ".material-icons"
                );

            icon.textContent =
                "close";

        }

    }


    function closeSidebar() {

        sidebar.classList.remove(
            "sidebar-open"
        );

        overlay.classList.remove(
            "show"
        );

        if (toggle) {

            const icon =
                toggle.querySelector(
                    ".material-icons"
                );

            icon.textContent =
                "menu";

        }

    }


    if (toggle) {

        toggle.addEventListener(
            "click",
            function () {

                if (
                    sidebar.classList.contains(
                        "sidebar-open"
                    )
                ) {

                    closeSidebar();

                } else {

                    openSidebar();

                }

            }
        );

    }


    if (overlay) {

        overlay.addEventListener(
            "click",
            closeSidebar
        );

    }


    /* =====================================================
       PAGE TITLES
    ===================================================== */

    const pageTitles = {

        overview: {
            title: "Overview",
            subtitle:
                "Your Stackly shopping journey at a glance."
        },

        collections: {
            title: "My Collections",
            subtitle:
                "Your saved toys and games collection."
        },

        orders: {
            title: "My Orders",
            subtitle:
                "Track your Stackly Toys & Games purchases."
        },

        wishlist: {
            title: "Wishlist",
            subtitle:
                "Your favorite Stackly products."
        },

        rewards: {
            title: "Play Points",
            subtitle:
                "Your Stackly rewards and points."
        },

        support: {
            title: "Support Center",
            subtitle:
                "We're here to help with your Stackly experience."
        }

    };


    const titleElement =
        document.getElementById(
            "dashboardPageTitle"
        );

    const subtitleElement =
        document.getElementById(
            "dashboardPageSubtitle"
        );


    /* =====================================================
       HASH PAGE SYSTEM
    ===================================================== */

    const dashboardPages =
        document.querySelectorAll(
            ".dashboard-page"
        );

    const menuLinks =
        document.querySelectorAll(
            ".dashboard-menu-link"
        );


    function openDashboardPage(
        pageName,
        updateHash = true
    ) {

        if (!pageTitles[pageName]) {
            pageName = "overview";
        }


        /*
         * Hide every page
         */

        dashboardPages.forEach(
            function (page) {

                page.classList.remove(
                    "active-page"
                );

            }
        );


        /*
         * Show selected page
         */

        const selectedPage =
            document.getElementById(
                pageName
            );

        if (selectedPage) {

            selectedPage.classList.add(
                "active-page"
            );

        }


        /*
         * Active sidebar
         */

        menuLinks.forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );

                const href =
                    link.getAttribute(
                        "href"
                    );

                if (
                    href === "#" + pageName
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );


        /*
         * Header title
         */

        if (titleElement) {

            titleElement.textContent =
                pageTitles[pageName].title;

        }

        if (subtitleElement) {

            subtitleElement.textContent =
                pageTitles[pageName].subtitle;

        }


        /*
         * Update browser hash
         */

        if (updateHash) {

            history.replaceState(
                null,
                "",
                "#" + pageName
            );

        }


        /*
         * Close mobile sidebar
         */

        closeSidebar();


        /*
         * Scroll dashboard content to top
         */

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    menuLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    const pageName =
                        link
                            .getAttribute("href")
                            .replace("#", "");

                    openDashboardPage(
                        pageName
                    );

                }
            );

        }
    );


    /* =====================================================
       INITIAL PAGE
    ===================================================== */

    let initialPage =
        window.location.hash
            .replace("#", "")
            .trim();


    if (!pageTitles[initialPage]) {
        initialPage = "overview";
    }


    openDashboardPage(
        initialPage,
        false
    );


    /* =====================================================
       BROWSER HASH CHANGE
    ===================================================== */

    window.addEventListener(
        "hashchange",
        function () {

            const pageName =
                window.location.hash
                    .replace("#", "")
                    .trim();

            if (pageTitles[pageName]) {

                openDashboardPage(
                    pageName,
                    false
                );

            }

        }
    );


    /* =====================================================
       SEARCH -> 404
    ===================================================== */

    const searchButton =
        document.getElementById(
            "dashboardSearch"
        );


    if (searchButton) {

        searchButton.addEventListener(
            "click",
            function () {

                window.location.href =
                    "404.html";

            }
        );

    }


    /* =====================================================
       WISHLIST HEART
    ===================================================== */

    document
        .querySelectorAll(".wishlist-heart")
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const icon =
                            button.querySelector(
                                ".material-icons"
                            );

                        if (
                            icon.textContent.trim()
                            === "favorite"
                        ) {

                            icon.textContent =
                                "favorite_border";

                        } else {

                            icon.textContent =
                                "favorite";

                        }

                    }
                );

            }
        );


    /* =====================================================
       SAVE EMAIL
       Use this line in your LOGIN JS too:
       
       localStorage.setItem(
           "stacklyUserEmail",
           emailValue
       );
    ===================================================== */

});