// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB5C-70by1XSU6pYuoEIFGtsGwnPdwpK8",
  authDomain: "janovatechnolog.firebaseapp.com",
  projectId: "janovatechnolog",
  storageBucket: "janovatechnolog.firebasestorage.app",
  messagingSenderId: "846490168137",
  appId: "1:846490168137:web:0962882e78d6a201fec898"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/* ================= LOGIN ================= */

function openLogin() {
    document.getElementById("loginModal").classList.add("active");
}

function closeLogin() {
    document.getElementById("loginModal").classList.remove("active");
}

function demoLogin() {
    alert("Client login UI is ready! For real login, connect this form to your backend/database.");
}

/* ================= ENQUIRY ================= */

function openEnquiry() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

/* ================= STUDENT ================= */

function openStudentForm() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
        document.getElementById("service").value = "Internship";
    }, 700);
}

/* ================= ENQUIRY SUBMIT ================= */

async function submitEnquiry(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !phone || !service || !message) {
        alert("Please fill all details.");
        return;
    }

    const enquiryData = {
        name: name,
        email: email,
        phone: phone,
        service: service,
        message: message,
        createdAt: new Date().toISOString()
    };

    try {
        // Save to Firestore
        await addDoc(collection(db, "enquiries"), enquiryData);
        
        // WhatsApp Notification
        const myWhatsAppNumber = "919360248958"; 
        const whatsappText = `New Enquiry from Janova Website!%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Service:* ${encodeURIComponent(service)}%0A*Message:* ${encodeURIComponent(message)}`;
        const whatsappURL = `https://api.whatsapp.com/send?phone=${myWhatsAppNumber}&text=${whatsappText}`;

        alert("Thank you " + name + "! Your enquiry has been received.");
        
        document.getElementById("enquiryForm").reset();
        window.open(whatsappURL, '_blank');

    } catch (e) {
        console.error("Error adding document: ", e);
        alert("Error sending enquiry. Please try again.");
    }
}

/* ================= MODAL CLICK OUTSIDE ================= */

document.getElementById("loginModal").addEventListener("click", function(event) {
    if (event.target === this) {
        closeLogin();
    }
});

/* ================= MOUSE PARALLAX ================= */

const world = document.querySelector(".moving-world");

document.addEventListener("mousemove", function(event) {
    const x = (event.clientX / window.innerWidth - .5) * 12;
    const y = (event.clientY / window.innerHeight - .5) * 8;
    world.style.transform = `scale(1.12) translate3d(${x}px, ${y}px, 0)`;
});
