
/* ================= LOGIN ================= */

function openLogin() {

    document
        .getElementById("loginModal")
        .classList.add("active");

}


function closeLogin() {

    document
        .getElementById("loginModal")
        .classList.remove("active");

}


function demoLogin() {

    alert(
        "Client login UI is ready! " +
        "For real login, connect this form to your backend/database."
    );

}


/* ================= ENQUIRY ================= */

function openEnquiry() {

    document
        .getElementById("contact")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ================= STUDENT ================= */

function openStudentForm() {

    document
        .getElementById("contact")
        .scrollIntoView({
            behavior: "smooth"
        });

    setTimeout(() => {

        document
            .getElementById("service")
            .value = "Internship";

    }, 700);

}


/* ================= ENQUIRY SUBMIT ================= */

function submitEnquiry(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const phone =
        document.getElementById("phone").value;

    const service =
        document.getElementById("service").value;

    const message =
        document.getElementById("message").value;


    if (!name || !email || !phone || !service || !message) {

        alert("Please fill all details.");

        return;

    }


    /*
        FRONTEND DEMO

        Later connect this to:
        - Firebase
        - Supabase
        - Node.js
        - PHP/MySQL
        - Email API
    */


    const enquiryData = {

        name: name,
        email: email,
        phone: phone,
        service: service,
        message: message,
        createdAt: new Date().toISOString()

    };


    console.log("New Enquiry:", enquiryData);


    alert(
        "Thank you " +
        name +
        "! Your enquiry has been received."
    );


    document
        .getElementById("enquiryForm")
        .reset();

}


/* ================= MODAL CLICK OUTSIDE ================= */

document
    .getElementById("loginModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeLogin();

        }

    });


/* ================= MOUSE PARALLAX ================= */

const world =
    document.querySelector(".moving-world");


document.addEventListener(
    "mousemove",
    function(event) {

        const x =
            (event.clientX /
            window.innerWidth - .5) * 12;

        const y =
            (event.clientY /
            window.innerHeight - .5) * 8;


        world.style.transform =
            `scale(1.12)
             translate3d(${x}px, ${y}px, 0)`;

    }
);
