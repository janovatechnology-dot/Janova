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

window.openLogin = function() {
    document.getElementById("loginModal").classList.add("active");
}

window.closeLogin = function() {
    document.getElementById("loginModal").classList.remove("active");
}

window.demoLogin = function() {
    alert("Client login UI is ready! For real login, connect this form to your backend/database.");
}

/* ================= ENQUIRY ================= */

window.openEnquiry = function() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

/* ================= STUDENT ================= */

window.openStudentForm = function() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
        document.getElementById("service").value = "Business Analytics (Webinar)";
    }, 700);
}

/* ================= ENQUIRY SUBMIT ================= */

window.submitEnquiry = async function(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const serviceInput = document.getElementById("service");
    const messageInput = document.getElementById("message");

    if (!nameInput || !emailInput || !phoneInput || !serviceInput || !messageInput) {
        alert("Form elements not found!");
        return;
    }

    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const service = serviceInput.value;
    const message = messageInput.value;

    if (!name || !email || !phone || !service || !message) {
        alert("Please fill all details.");
        return;
    }

    
    const myWhatsAppNumber = "919360248958"; 
    const whatsappText = `New Enquiry from Janova Website!%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Service:* ${encodeURIComponent(service)}%0A*Message:* ${encodeURIComponent(message)}`;
    const whatsappURL = `https://wa.me/${myWhatsAppNumber}?text=${whatsappText}`;

    const enquiryData = {
        name: name,
        email: email,
        phone: phone,
        service: service,
        message: message,
        createdAt: new Date().toISOString()
    };

    try {
        
        await addDoc(collection(db, "enquiries"), enquiryData);
        document.getElementById("enquiryForm").reset();
    } catch (e) {
        console.error("Error adding document: ", e);
    }

    
    window.location.href = whatsappURL;
}

/* ================= MODAL CLICK OUTSIDE ================= */

document.getElementById("loginModal").addEventListener("click", function(event) {
    if (event.target === this) {
        window.closeLogin();
    }
});

/* ================= MOUSE PARALLAX ================= */

const world = document.querySelector(".moving-world");

if (world) {
    document.addEventListener("mousemove", function(event) {
        const x = (event.clientX / window.innerWidth - .5) * 12;
        const y = (event.clientY / window.innerHeight - .5) * 8;
        world.style.transform = `scale(1.12) translate3d(${x}px, ${y}px, 0)`;
    });
}
