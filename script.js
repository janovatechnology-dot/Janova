/* =====================================================
JANOVA TECHNOLOGIES
MAIN JAVASCRIPT
===================================================== */


/* =====================================================
FIREBASE
===================================================== */

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


/* =====================================================
WHATSAPP
===================================================== */

const WHATSAPP_NUMBER =
    "919360248958";


function sendWhatsApp(message) {

    const encoded =
        encodeURIComponent(message);

    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;

    window.open(url, "_blank");

}


/* =====================================================
SERVICE DATA
===================================================== */

const services = {

    billing: {

        icon: "🧾",

        category: "BUSINESS SOFTWARE",

        title: "Billing Software",

        description:
            "Smart and simple billing software designed for shops, stores and growing businesses.",

        detail:
            "Janova Technologies can build customized billing systems that help businesses manage products, customers, invoices, sales and daily transactions from one digital platform.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Firebase",
            "Supabase",
            "MySQL"
        ],

        features: [
            "Invoice Generation",
            "Product Management",
            "Customer Management",
            "Sales Tracking",
            "Stock Management",
            "Daily Reports",
            "Dashboard",
            "Digital Records"
        ]

    },


    attendance: {

        icon: "📊",

        category: "MANAGEMENT SOFTWARE",

        title: "Attendance Software",

        description:
            "Digital attendance management systems for colleges, schools, companies and organizations.",

        detail:
            "Create an attendance platform that allows administrators, staff and students to manage attendance digitally with records, dashboards and reports.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Firebase",
            "Supabase",
            "Python"
        ],

        features: [
            "Student Attendance",
            "Staff Attendance",
            "Daily Records",
            "Monthly Reports",
            "Admin Dashboard",
            "User Login",
            "Cloud Database",
            "Attendance Analytics"
        ]

    },


    website: {

        icon: "🌐",

        category: "WEB DEVELOPMENT",

        title: "Website Development",

        description:
            "Modern responsive websites for businesses, stores, startups and organizations.",

        detail:
            "We create responsive websites with modern UI, animations, contact systems and business-focused features. Websites can be customized according to your brand and requirements.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "Firebase",
            "Supabase"
        ],

        features: [
            "Business Website",
            "Company Website",
            "Portfolio Website",
            "Store Website",
            "Landing Page",
            "Contact Forms",
            "WhatsApp Integration",
            "Responsive Design"
        ]

    },


    app: {

        icon: "📱",

        category: "APPLICATION DEVELOPMENT",

        title: "App Development",

        description:
            "Custom mobile and web applications designed around your business requirements.",

        detail:
            "Turn your idea into a working application. We can design custom applications for businesses, educational institutions, stores and startups.",

        technologies: [
            "JavaScript",
            "React",
            "Node.js",
            "Firebase",
            "Supabase",
            "Python"
        ],

        features: [
            "Custom UI",
            "User Login",
            "Database Integration",
            "Admin Panel",
            "Notifications",
            "Cloud Storage",
            "API Integration",
            "Responsive Applications"
        ]

    },


    internship: {

        icon: "🎓",

        category: "STUDENT PROGRAM",

        title: "Technology Internships",

        description:
            "Practical internships designed to help college students gain real-world technology experience.",

        detail:
            "Students can learn through practical projects, assignments and guided development. Internship areas can include web development, Python, data analytics, AI and software development.",

        technologies: [
            "Python",
            "HTML & CSS",
            "JavaScript",
            "SQL",
            "Data Analytics",
            "Artificial Intelligence"
        ],

        features: [
            "Practical Projects",
            "Project Guidance",
            "Technical Sessions",
            "Assignments",
            "Project Certificate",
            "Resume Support",
            "Industry Exposure",
            "Mentorship"
        ]

    },


    workshop: {

        icon: "💻",

        category: "TECHNICAL TRAINING",

        title: "Technical Workshops",

        description:
            "Hands-on workshops designed around current technology and practical skills.",

        detail:
            "Our workshops focus on practical learning instead of only theory. Sessions can be customized for colleges and student communities.",

        technologies: [
            "Python",
            "Artificial Intelligence",
            "Data Analytics",
            "Cyber Security",
            "Web Development",
            "Cloud Technologies"
        ],

        features: [
            "Live Sessions",
            "Hands-on Activities",
            "Real Examples",
            "Technical Demonstrations",
            "Q&A Sessions",
            "Certificates",
            "College Programs",
            "Customized Topics"
        ]

    },


    course: {

        icon: "📚",

        category: "LEARNING PROGRAM",

        title: "Technology Courses",

        description:
            "Beginner-friendly technology courses focused on practical development and career skills.",

        detail:
            "Courses can be designed for students who want to learn programming, web development, analytics, AI and other technology skills through structured learning.",

        technologies: [
            "Python",
            "JavaScript",
            "HTML",
            "CSS",
            "SQL",
            "Artificial Intelligence",
            "Data Analytics"
        ],

        features: [
            "Structured Classes",
            "Practical Exercises",
            "Mini Projects",
            "Assignments",
            "Doubt Sessions",
            "Learning Materials",
            "Certificates",
            "Project Guidance"
        ]

    },


    webinar: {

        icon: "🎥",

        category: "LIVE LEARNING",

        title: "Live Webinars",

        description:
            "Industry-oriented webinars covering technology, analytics and emerging digital skills.",

        detail:
            "Janova Technologies conducts online learning sessions where students can explore technology topics, career opportunities and practical industry concepts.",

        technologies: [
            "Business Analytics",
            "Artificial Intelligence",
            "Cyber Security",
            "Data Science",
            "Web Development",
            "Digital Technology"
        ],

        features: [
            "Live Online Sessions",
            "Industry Topics",
            "Interactive Q&A",
            "Career Guidance",
            "Learning Resources",
            "Certificates",
            "Student Community",
            "Expert Sessions"
        ]

    }

};


/* =====================================================
LOAD SERVICE PAGE
===================================================== */

function loadServicePage() {

    const title =
        document.getElementById("serviceTitle");

    if (!title) return;


    const params =
        new URLSearchParams(
            window.location.search
        );


    const serviceKey =
        params.get("service") || "website";


    const service =
        services[serviceKey];


    if (!service) return;


    document.title =
        `Janova Technologies | ${service.title}`;


    document.getElementById(
        "serviceIcon"
    ).textContent =
        service.icon;


    document.getElementById(
        "serviceCategory"
    ).textContent =
        service.category;


    document.getElementById(
        "serviceTitle"
    ).textContent =
        service.title;


    document.getElementById(
        "serviceDescription"
    ).textContent =
        service.description;


    document.getElementById(
        "detailTitle"
    ).textContent =
        service.title;


    document.getElementById(
        "detailDescription"
    ).textContent =
        service.detail;


    const techGrid =
        document.getElementById(
            "technologyGrid"
        );


    techGrid.innerHTML = "";


    service.technologies.forEach(
        tech => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "technology-card";


            item.innerHTML =
                `<span>◆</span> ${tech}`;


            techGrid.appendChild(item);

        }
    );


    const featureGrid =
        document.getElementById(
            "featureGrid"
        );


    featureGrid.innerHTML = "";


    service.features.forEach(
        feature => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "feature-card";


            item.innerHTML =
                `<span>✓</span> ${feature}`;


            featureGrid.appendChild(item);

        }
    );


    window.currentService =
        service.title;

}


/* =====================================================
SERVICE WHATSAPP ENQUIRY
===================================================== */

window.openWhatsAppEnquiry =
    function () {

        const service =
            window.currentService ||
            "Janova Technologies Service";


        const message =

`Hello Janova Technologies 👋

I am interested in:

Service: ${service}

I would like to know more about the pricing, features and development process.

Please contact me.

Thank you.`;


        sendWhatsApp(message);

    };


/* =====================================================
MAIN ENQUIRY FORM
===================================================== */

const enquiryForm =
    document.getElementById(
        "enquiryForm"
    );


if (enquiryForm) {

    enquiryForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "name"
                ).value.trim();


            const email =
                document.getElementById(
                    "email"
                ).value.trim();


            const phone =
                document.getElementById(
                    "phone"
                ).value.trim();


            const service =
                document.getElementById(
                    "service"
                ).value;


            const message =
                document.getElementById(
                    "message"
                ).value.trim();


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


            const enquiryData = {

                name,
                email,
                phone,
                service,
                message,

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

            } catch (error) {

                console.error(
                    "Firebase Error:",
                    error
                );

            }


            const whatsappMessage =

`Hello Janova Technologies 👋

NEW WEBSITE ENQUIRY

Name: ${name}

Email: ${email}

Phone: ${phone}

Service: ${service}

Requirement:
${message}

Sent from Janova Technologies Website.`;


            sendWhatsApp(
                whatsappMessage
            );


            enquiryForm.reset();

        }
    );

}


/* =====================================================
LOGIN
===================================================== */

const loginForm =
    document.getElementById(
        "loginForm"
    );


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const email =
                document.getElementById(
                    "loginEmail"
                ).value.trim();


            const password =
                document.getElementById(
                    "loginPassword"
                ).value.trim();


            if (!email || !password) {

                alert(
                    "Please enter your login details."
                );

                return;

            }


            alert(
                "Client dashboard authentication will be connected here."
            );

        }
    );

}


/* =====================================================
MOUSE PARALLAX
===================================================== */

const world =
    document.querySelector(
        ".moving-world"
    );


if (world) {

    document.addEventListener(
        "mousemove",
        function (event) {

            const x =
                (
                    event.clientX /
                    window.innerWidth -
                    0.5
                ) * 8;


            const y =
                (
                    event.clientY /
                    window.innerHeight -
                    0.5
                ) * 5;


            world.style.transform =

                `scale(1.12)
                 translate3d(${x}px,${y}px,0)`;

        }
    );

}


/* =====================================================
INITIALIZE
===================================================== */

loadServicePage();
/* =====================================================
   JANOVA AI ASSISTANT
===================================================== */

const janovaAssistantReplies = {

    services: `
        🚀 <b>Janova Technologies</b> provides practical digital solutions
        for businesses, stores, institutions and students.

        <br><br>

        We build:
        <br>• Billing Software
        <br>• Attendance Systems
        <br>• Business Websites
        <br>• Mobile & Web Apps
        <br>• Internships
        <br>• Workshops
        <br>• Courses
        <br>• Webinars

        <br><br>
        Tell me what you need and I'll guide you.
    `,


    website: `
        🌐 <b>Website Development</b>

        <br><br>

        We can create a professional business website
        with responsive design, animations, enquiry forms,
        WhatsApp integration, dashboards and custom features.

        <br><br>

        Your website can be designed around your
        company's brand, services and requirements.
    `,


    company: `
        🏢 <b>About Janova Technologies</b>

        <br><br>

        Janova Technologies focuses on practical,
        affordable and modern digital solutions.

        <br><br>

        We help businesses, stores, institutions and
        students move towards a smarter digital future.

        <br><br>

        💡 Idea → Design → Development → Digital Solution
    `,


    pricing: `
        💰 <b>Janova Pricing</b>

        <br><br>

        We focus on keeping development affordable
        and competitive.

        <br><br>

        🔹 Selected solutions can be offered
        <b>up to 20% lower</b> than typical market pricing.

        <br><br>

        🔹 For selected student/business packages,
        special offers may reach <b>up to 50% lower</b>
        depending on the project scope.

        <br><br>

        Final pricing depends on the features,
        technology and development requirements.
    `,


    internship: `
        🎓 <b>Janova Internships</b>

        <br><br>

        Students can work on practical projects and
        learn areas such as Python, Web Development,
        Data Analytics, AI and Software Development.

        <br><br>

        The goal is simple:
        <b>Learn → Build → Get Experience.</b>
    `,


    app: `
        📱 <b>App Development</b>

        <br><br>

        We can build custom mobile or web applications
        based on your business or project idea.

        <br><br>

        Features may include login, database,
        admin panel, notifications, APIs and
        custom dashboards.
    `

};


/* =====================================================
   ASK JANOVA
===================================================== */

window.askJanova = function(type) {

    const reply =
        janovaAssistantReplies[type];

    if (!reply) return;

    addAssistantMessage(
        type,
        "user"
    );

    setTimeout(() => {

        addAssistantMessage(
            reply,
            "bot"
        );

    }, 450);

};


/* =====================================================
   SEND USER MESSAGE
===================================================== */

window.sendAssistantMessage = function() {

    const input =
        document.getElementById(
            "assistantInput"
        );

    if (!input) return;

    const question =
        input.value.trim();

    if (!question) return;


    addAssistantMessage(
        question,
        "user"
    );


    input.value = "";


    setTimeout(() => {

        const reply =
            getJanovaReply(question);

        addAssistantMessage(
            reply,
            "bot"
        );

    }, 450);

};


/* =====================================================
   ENTER KEY
===================================================== */

window.assistantEnter = function(event) {

    if (event.key === "Enter") {

        sendAssistantMessage();

    }

};


/* =====================================================
   MESSAGE DISPLAY
===================================================== */

function addAssistantMessage(
    message,
    type
) {

    const container =
        document.getElementById(
            "assistantMessages"
        );

    if (!container) return;


    const div =
        document.createElement(
            "div"
        );


    div.className =
        `assistant-message ${type}`;


    if (
        type === "user" &&
        janovaAssistantReplies[message]
    ) {

        const names = {

            services: "What services do you provide?",

            website: "What about website development?",

            company: "Tell me about Janova.",

            pricing: "How is your pricing?",

            internship: "Tell me about internships.",

            app: "Can you build applications?"

        };

        div.textContent =
            names[message] || message;

    }
    else {

        div.innerHTML =
            message;

    }


    container.appendChild(div);


    container.scrollTop =
        container.scrollHeight;

}


/* =====================================================
   BASIC AI-STYLE RESPONSE ENGINE
===================================================== */

function getJanovaReply(question) {

    const q =
        question.toLowerCase();


    if (
        q.includes("service") ||
        q.includes("what do you do") ||
        q.includes("what can you build") ||
        q.includes("offer")
    ) {

        return janovaAssistantReplies.services;

    }


    if (
        q.includes("website") ||
        q.includes("web site") ||
        q.includes("web development")
    ) {

        return janovaAssistantReplies.website;

    }


    if (
        q.includes("price") ||
        q.includes("pricing") ||
        q.includes("cost") ||
        q.includes("cheap") ||
        q.includes("discount")
    ) {

        return janovaAssistantReplies.pricing;

    }


    if (
        q.includes("intern") ||
        q.includes("internship")
    ) {

        return janovaAssistantReplies.internship;

    }


    if (
        q.includes("app") ||
        q.includes("application")
    ) {

        return janovaAssistantReplies.app;

    }


    if (
        q.includes("company") ||
        q.includes("janova") ||
        q.includes("about")
    ) {

        return janovaAssistantReplies.company;

    }


    if (
        q.includes("hello") ||
        q.includes("hi") ||
        q.includes("hey")
    ) {

        return `
            👋 Hello!

            <br><br>

            I'm <b>Janova Assistant</b> 🤖

            <br><br>

            I can tell you about our services,
            websites, apps, internships,
            company and pricing approach.

            <br><br>

            What would you like to know?
        `;

    }


    return `
        🤖 I'm Janova Assistant.

        <br><br>

        I can help you understand our
        <b>digital services, website development,
        applications, internships and pricing.</b>

        <br><br>

        Try asking:
        <br>
        “What services do you provide?”
        <br>
        “Can you build a website?”
        <br>
        “How much cheaper is Janova?”
    `;

}
