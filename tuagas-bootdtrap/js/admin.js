/* =========================================================
   ADMIN LOGIN
   ========================================================= */


/* =========================================================
   ADMIN ACCOUNT
   ========================================================= */

const ADMIN_EMAIL = "admin@portfolio.com";

const ADMIN_PASSWORD = "admin123";


/* =========================================================
   LOGIN FORM
   ========================================================= */

const loginForm =
    document.getElementById("adminLoginForm");

const loginMessage =
    document.getElementById("loginMessage");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const email =
                document.getElementById(
                    "adminEmail"
                ).value.trim();


            const password =
                document.getElementById(
                    "adminPassword"
                ).value;


            if (
                email === ADMIN_EMAIL &&
                password === ADMIN_PASSWORD
            ) {

                localStorage.setItem(
                    "portfolioAdmin",
                    "true"
                );


                window.location.href =
                    "dashboard.html";

            } else {

                loginMessage.textContent =
                    "Email atau password salah.";

                loginMessage.style.color =
                    "#dc2626";

            }

        }
    );

}