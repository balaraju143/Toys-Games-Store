document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       GET LOGGED-IN USER EMAIL
    ===================================================== */

    let userEmail =
        localStorage.getItem("stacklyUserEmail");

    if (!userEmail || userEmail.trim() === "") {
        userEmail = "admin@stackly.com";
    }

    userEmail = userEmail.trim();


    /* =====================================================
       FIRST LETTER FROM EMAIL
    ===================================================== */

    const firstLetter =
        userEmail.charAt(0).toUpperCase();


    /* =====================================================
       CREATE DISPLAY NAME FROM EMAIL
    ===================================================== */

    let userName =
        userEmail.split("@")[0];

    userName =
        userName.replace(/[._-]+/g, " ");

    userName =
        userName.replace(
            /\b\w/g,
            function (letter) {
                return letter.toUpperCase();
            }
        );


    /* =====================================================
       SIDEBAR USER
    ===================================================== */

    const sidebarAvatar =
        document.getElementById(
            "sidebarAdminAvatar"
        );

    const sidebarName =
        document.getElementById(
            "sidebarAdminName"
        );

    const sidebarEmail =
        document.getElementById(
            "sidebarAdminEmail"
        );


    /* =====================================================
       HEADER USER
    ===================================================== */

    const headerAvatar =
        document.getElementById(
            "headerAdminAvatar"
        );

    const headerName =
        document.getElementById(
            "headerAdminName"
        );

    const headerEmail =
        document.getElementById(
            "headerAdminEmail"
        );


    /* =====================================================
       WELCOME USER
    ===================================================== */

    const welcomeName =
        document.getElementById(
            "welcomeAdminName"
        );


    /* =====================================================
       SET DYNAMIC DATA
    ===================================================== */

    if (sidebarAvatar) {
        sidebarAvatar.textContent =
            firstLetter;
    }

    if (headerAvatar) {
        headerAvatar.textContent =
            firstLetter;
    }

    if (sidebarName) {
        sidebarName.textContent =
            userName;
    }

    if (headerName) {
        headerName.textContent =
            userName;
    }

    if (sidebarEmail) {
        sidebarEmail.textContent =
            userEmail;
    }

    if (headerEmail) {
        headerEmail.textContent =
            userEmail;
    }

    if (welcomeName) {
        welcomeName.textContent =
            userName;
    }


    /* =====================================================
       SIDEBAR
    ===================================================== */

    const sidebar =
        document.getElementById(
            "adminSidebar"
        );

    const toggle =
        document.getElementById(
            "adminDashboardToggle"
        );

    const overlay =
        document.getElementById(
            "adminSidebarOverlay"
        );


    function openSidebar() {

        if (!sidebar) return;

        sidebar.classList.add(
            "sidebar-open"
        );

        if (overlay) {
            overlay.classList.add("show");
        }

        if (toggle) {

            const icon =
                toggle.querySelector(
                    ".material-icons"
                );

            if (icon) {
                icon.textContent = "close";
            }

        }

    }


    function closeSidebar() {

        if (!sidebar) return;

        sidebar.classList.remove(
            "sidebar-open"
        );

        if (overlay) {
            overlay.classList.remove("show");
        }

        if (toggle) {

            const icon =
                toggle.querySelector(
                    ".material-icons"
                );

            if (icon) {
                icon.textContent = "menu";
            }

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
       ADMIN PAGE DATA
    ===================================================== */

    const pageData = {

        overview: {
            title: "Overview",
            subtitle:
                "Manage your Stackly Toys & Games store."
        },

        products: {
            title: "Products",
            subtitle:
                "Manage your toys, games and product catalog."
        },

        orders: {
            title: "Orders",
            subtitle:
                "Review purchases and manage order status."
        },

        customers: {
            title: "Customers",
            subtitle:
                "Understand your Stackly shopping community."
        },

        inventory: {
            title: "Inventory",
            subtitle:
                "Monitor stock and restocking requirements."
        },

        promotions: {
            title: "Promotions",
            subtitle:
                "Manage offers and marketing campaigns."
        },

        analytics: {
            title: "Analytics",
            subtitle:
                "Understand your Stackly store performance."
        },

        support: {
            title: "Support Center",
            subtitle:
                "Manage customer questions and assistance."
        }

    };


    /* =====================================================
       PAGE ELEMENTS
    ===================================================== */

    const pages =
        document.querySelectorAll(
            ".admin-page"
        );

    const menuLinks =
        document.querySelectorAll(
            ".admin-menu-link"
        );

    const title =
        document.getElementById(
            "adminPageTitle"
        );

    const subtitle =
        document.getElementById(
            "adminPageSubtitle"
        );


    /* =====================================================
       OPEN ADMIN PAGE
    ===================================================== */

    function openAdminPage(
        pageName,
        updateHash
    ) {

        if (!pageData[pageName]) {
            pageName = "overview";
        }


        /* HIDE ALL */

        pages.forEach(function (page) {

            page.classList.remove(
                "active-admin-page"
            );

        });


        /* SHOW SELECTED */

        const selectedPage =
            document.getElementById(
                pageName
            );

        if (selectedPage) {

            selectedPage.classList.add(
                "active-admin-page"
            );

        }


        /* ACTIVE SIDEBAR */

        menuLinks.forEach(function (link) {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute("href") ===
                "#" + pageName
            ) {

                link.classList.add(
                    "active"
                );

            }

        });


        /* HEADER TITLE */

        if (title) {

            title.textContent =
                pageData[pageName].title;

        }


        if (subtitle) {

            subtitle.textContent =
                pageData[pageName].subtitle;

        }


        /* HASH */

        if (updateHash) {

            history.replaceState(
                null,
                "",
                "#" + pageName
            );

        }


        /* CLOSE MOBILE SIDEBAR */

        closeSidebar();


        /* TOP */

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    /* =====================================================
       MENU CLICK
    ===================================================== */

    menuLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                const pageName =
                    link
                    .getAttribute("href")
                    .replace("#", "");

                openAdminPage(
                    pageName,
                    true
                );

            }
        );

    });


    /* =====================================================
       INITIAL PAGE
    ===================================================== */

    let initialPage =
        window.location.hash
        .replace("#", "")
        .trim();


    if (!pageData[initialPage]) {

        initialPage = "overview";

    }


    openAdminPage(
        initialPage,
        false
    );


    /* =====================================================
       HASH CHANGE
    ===================================================== */

    window.addEventListener(
        "hashchange",
        function () {

            const pageName =
                window.location.hash
                .replace("#", "")
                .trim();


            if (pageData[pageName]) {

                openAdminPage(
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
            "adminDashboardSearch"
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
       BUTTONS THAT USE HASH LINKS
    ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const hash =
                        link.getAttribute(
                            "href"
                        );

                    const pageName =
                        hash.replace("#", "");


                    if (
                        pageData[pageName]
                    ) {

                        event.preventDefault();

                        openAdminPage(
                            pageName,
                            true
                        );

                    }

                }
            );

        });

});