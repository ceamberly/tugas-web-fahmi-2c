/* =========================================================
   PORTFOLIO WEBSITE
   SCRIPT.JS
   ========================================================= */


/* =========================================================
   1. SCROLL ANIMATION
   ========================================================= */

const animatedElements = document.querySelectorAll(
    "[data-animation]"
);

const animationObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                animationObserver.unobserve(
                    entry.target
                );

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach((element) => {

    animationObserver.observe(element);

});


/* =========================================================
   2. NAVBAR SCROLL EFFECT
   ========================================================= */

const navbar = document.getElementById(
    "mainNavbar"
);


function updateNavbar() {

    if (!navbar) {
        return;
    }

    if (window.scrollY > 50) {

        navbar.style.padding = "10px 0";

        navbar.style.boxShadow =
            "0 10px 30px rgba(0, 59, 115, 0.08)";

    } else {

        navbar.style.padding = "";

        navbar.style.boxShadow = "";

    }

}


window.addEventListener(
    "scroll",
    updateNavbar
);


/* =========================================================
   3. ACTIVE NAVIGATION
   ========================================================= */

const sections = document.querySelectorAll(
    "main section[id]"
);

const navLinks = document.querySelectorAll(
    ".navbar-nav .nav-link"
);


function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.id;

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        const target =
            link.getAttribute("href");

        if (
            target === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/* =========================================================
   4. MOBILE NAVBAR
   ========================================================= */

const navbarMenu =
    document.getElementById("navbarMenu");


const mobileNavLinks =
    document.querySelectorAll(
        ".navbar-nav .nav-link"
    );


mobileNavLinks.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            if (!navbarMenu) {
                return;
            }

            if (
                navbarMenu.classList.contains(
                    "show"
                )
            ) {

                const navbarCollapse =
                    bootstrap.Collapse.getInstance(
                        navbarMenu
                    );

                if (navbarCollapse) {

                    navbarCollapse.hide();

                }

            }

        }
    );

});


/* =========================================================
   5. SMOOTH SCROLL
   ========================================================= */

const internalLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


internalLinks.forEach((link) => {

    link.addEventListener(
        "click",
        (event) => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {

                return;

            }


            const target =
                document.querySelector(
                    targetId
                );

            if (!target) {
                return;
            }


            event.preventDefault();


            const navbarHeight =
                navbar
                    ? navbar.offsetHeight
                    : 0;


            const targetPosition =
                target.offsetTop -
                navbarHeight;


            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        }
    );

});


/* =========================================================
   6. IMAGE LOAD EFFECT
   ========================================================= */

const images =
    document.querySelectorAll(
        "img"
    );


images.forEach((image) => {

    image.addEventListener(
        "load",
        () => {

            image.classList.add(
                "image-loaded"
            );

        }
    );

});


/* =========================================================
   7. INITIAL UPDATE
   ========================================================= */

updateNavbar();

updateActiveNavigation();


/* =========================================================
   8. CONSOLE MESSAGE
   ========================================================= */

console.log(
    "Portfolio website berhasil dimuat."
);