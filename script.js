/* =========================================================
   FIREBASE
========================================================= */

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";


const firebaseConfig = {

    apiKey:
        "AIzaSyBB5C-70by1XSU6pYuoEIFGtsGwnPdwpK8",

    authDomain:
        "janovatechnolog.firebaseapp.com",

    projectId:
        "janovatechnolog",

    storageBucket:
        "janovatechnolog.firebasestorage.app",

    messagingSenderId:
        "846490168137",

    appId:
        "1:846490168137:web:0962882e78d6a201fec898"
};


const app =
    initializeApp(firebaseConfig);

const db =
    getFirestore(app);


/* =========================================================
   LOGIN
========================================================= */

window.openLogin = function () {

    const modal =
        document.getElementById("loginModal");

    modal.classList.add("active");

};


window.closeLogin = function () {

    const modal =
        document.getElementById("loginModal");

    modal.classList.remove("active");

};


window.demoLogin = function () {

    const email =
        document.getElementById("loginEmail").value;

    const password =
        document.getElementById("loginPassword").value;


    if (!email || !password) {

        alert(
            "Please enter your email and password."
        );

        return;
    }


    alert(
        "Client Login UI is ready!\n\n" +
        "Firebase Authentication can be connected here."
    );

};


/* =========================================================
   CLOSE LOGIN WHEN CLICK OUTSIDE
========================================================= */

const loginModal =
    document.getElementById("loginModal");


if (loginModal) {

    loginModal.addEventListener(
        "click",
        function (event) {

            if (event.target === this) {

                window.closeLogin();

            }

        }
    );

}


/* =========================================================
   ENQUIRY
========================================================= */

window.openEnquiry = function () {

    const contact =
        document.getElementById("contact");

    contact.scrollIntoView({

        behavior: "smooth"

    });

};


/* =========================================================
   SUBMIT ENQUIRY
========================================================= */

window.submitEnquiry =
    async function (event) {

        event.preventDefault();


        const nameInput =
            document.getElementById("name");

        const emailInput =
            document.getElementById("email");

        const phoneInput =
            document.getElementById("phone");

        const serviceInput =
            document.getElementById("service");

        const messageInput =
            document.getElementById("message");


        const name =
            nameInput.value.trim();

        const email =
            emailInput.value.trim();

        const phone =
            phoneInput.value.trim();

        const service =
            serviceInput.value;

        const message =
            messageInput.value.trim();


        if (
            !name ||
            !email ||
            !phone ||
            !service ||
            !message
        ) {

            alert(
                "Please fill all details."
            );

            return;
        }


        /* =========================================
           WHATSAPP
        ========================================= */

        const whatsappNumber =
            "919360248958";


        const whatsappMessage =

            "New Enquiry from Janova Technologies\n\n" +

            "Name: " +
            name +

            "\nEmail: " +
            email +

            "\nPhone: " +
            phone +

            "\nService: " +
            service +

            "\nMessage: " +
            message;


        const whatsappURL =

            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(
                whatsappMessage
            );


        /* =========================================
           FIREBASE DATA
        ========================================= */

        const enquiryData = {

            name: name,

            email: email,

            phone: phone,

            service: service,

            message: message,

            createdAt:
                new Date().toISOString()

        };


        try {

            await addDoc(

                collection(
                    db,
                    "enquiries"
                ),

                enquiryData

            );


            document
                .getElementById(
                    "enquiryForm"
                )
                .reset();


            alert(
                "Enquiry submitted successfully!\n\nOpening WhatsApp..."
            );


        }

        catch (error) {

            console.error(
                "Firebase Error:",
                error
            );


            alert(
                "Your WhatsApp enquiry will open now."
            );

        }


        /* =========================================
           OPEN WHATSAPP
        ========================================= */

        window.open(
            whatsappURL,
            "_blank"
        );

    };


/* =========================================================
   MOUSE PARALLAX
========================================================= */

const backgroundRobot =
    document.querySelector(
        ".background-robot"
    );


if (
    backgroundRobot &&
    window.innerWidth > 900
) {

    document.addEventListener(
        "mousemove",
        function (event) {

            const x =
                (event.clientX /
                    window.innerWidth -
                    0.5) * 12;


            const y =
                (event.clientY /
                    window.innerHeight -
                    0.5) * 8;


            backgroundRobot.style.transform =

                `translate3d(${x}px, ${y}px, 0)
                 perspective(1000px)
                 rotateY(${-10 + x / 3}deg)`;

        }
    );

}


/* =========================================================
   CARD 3D EFFECT
========================================================= */

const cards =
    document.querySelectorAll(
        ".service-card"
    );


cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        function (event) {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                (y - centerY) /
                18;


            const rotateY =
                (centerX - x) /
                18;


            card.style.transform =

                `perspective(700px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        function () {

            card.style.transform =
                "translateY(0)";

        }
    );

});


/* =========================================================
   ESC KEY CLOSE LOGIN
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            window.closeLogin();

        }

    }
);
