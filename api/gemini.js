import { createPartFromUri, createUserContent, GoogleGenAI } from "@google/genai";
export default async function handler(req, res) {

    const { query } = req.body;

    const ai = new GoogleGenAI({});

    const data = `
    {
  "personalInfo": {
    "fullName": "Ali Amir",
    "firstName": "Ali",
    "lastName": "Amir",
    "contactNumber": "+923094957856",
    "email": "muhammadaliamir24@gmail.com",
    "countryOfResidence": "Pakistan",
    "hobbies": ["Books Reading", "Teaching", "Coding", "Problem Solving"],
    "programmingSince": 2020,
    "expertise": [
      "Programming",
      "Web Development",
      "Web Apps",
      "API Development",
      "API Integration"
    ],
    "skills": [
      "JavaScript",
      "Node.js",
      "ExpressJS",
      "Electron.js",
      "HTML",
      "CSS",
      "React.js",
      "Material UI"
    ]
  },
  "education": [
    {
      "institute": "University of Engineering and Technology, Lahore.",
      "degree": "Bachelor of Science in Computer Science",
      "major": "Computer Science",
      "level": "Bachelors",
      "completionYear": "2029",
      "currentlyStudying": true
    },
    {
      "institute": "Government College of Technology, Kamalia, Pakistan..",
      "degree": "Diploma in Computer Information Technology",
      "major": "Information Technology",
      "level": "O-Level",
      "completionYear": "2025",
      "currentlyStudying": false
    }
  ],
  "experience": [
    {
      "role": "Backend Developer (intern)",
      "companyDetails": {
        "companyName": "High Tech Software House",
        "companyType": "Software House",
        "companyLocation": "Nawabshah, Pakistan",
        "companyWebsite": "https://www.hightechsba.com/",
        "companyEmail": "hightechsba@gmail.com",
        "companyContact": "+923098038363"
      },
      "startDate": "2025-06-01",
      "endDate": "2025-08-31",
      "duration": "2 months",
      "responsibilities": [
        "Implemented user authentication and authorization using JWT tokens.",
        "Developed RESTful APIs for user registration, login, and profile management.",
        "Implemented RESTful API for book managment and review system",
        "Implemented RESTful API for blog managment and comment system",
        "Implemented RESTful API for Role Based Access Control (RBAC)"
      ],
      "summary": "During internship at High Tech, I learned a lot of things like RESTful API, JWT tokens, RBAC, OAuth, and more. I also implemented a blog managment system with comments and reviews system. I also learned many language specific backend concepts like 'middlewares in ExpressJS', 'JsonWebToken', 'Password Hashing using Bcrypt' etc."
    }
  ],
  "projects": [
    {
      "title": "Web Chat",
      "description": "A lightweight, real-time chat application built with Node.js, ExpressJS and React.",
      "year": "2025",
      "technologies": [
        "React",
        "Node.js",
        "ExpressJS",
        "Material UI",
        "Socket.io"
      ],
      "role": "Solo",
      "liveUrl": "https://webchat-zvhy.onrender.com/",
      "codeUrl": "https://github.com/ali-amir-code/webchat",
      "details": "WebChat is a lightweight, real-time chat application built with JavaScript. The project aims to provide a straightforward, easy-to-use platform for users to communicate instantly via a web interface. It serves as a foundational example for learning about web sockets, real-time communication, and front-end/back-end integration in web applications. WebChat is an ideal choice for those seeking a simple and efficient way to connect with others in real-time."
    },
    {
      "title": "3D Portfolio Website",
      "description": "Interactive 3D portfolio showcasing creative development skills with Three.js and advanced WebGL animations.",
      "year": "2025",
      "technologies": [
        "Three.js",
        "GSAP",
        "WebGL",
        "JavaScript",
        "CSS3",
        "HTML5",
        "Replit AI"
      ],
      "role": "Solo",
      "liveUrl": "https://ali-amir-code.rf.gd",
      "codeUrl": "https://github.com/ali-amir-code/3d-portfolio",
      "details": "An immersive 3D portfolio website featuring interactive animations, floating geometric elements, parallax effects, and smooth scroll-triggered animations. Built with Three.js for 3D rendering and GSAP for scroll animations. The site includes accessibility features, mobile optimization, and graceful degradation for devices without WebGL support. Features custom 3D project showcases and an interactive hero section."
    },
    {
      "title": "Fee Management App",
      "description": "A simple web page that can be used to manage the record of student's fee at low level. It uses pure JavaScript computational power as well as it's local storage API to manage record..",
      "year": "2022",
      "technologies": ["Vanilla JavaScript", "LocalStorage API", "HTML", "CSS"],
      "role": "Solo",
      "result": "Increases the efficiency and reliability of local tution center by helping them to manage their student's fees.",
      "liveUrl": "https://ali-amir-code.github.io/Fee-Managment-System/",
      "codeUrl": "https://github.com/Ali-Amir-code/Fee-Managment-System",
      "details": "Fee Management App was my very first real-world application which helps tution centers to keep track of their student's fees. They used to store the record on paper and that was tedious and time consuming. I made this app to help them manage their student's fees in a more efficient and reliable way."
    },
    {
      "title": "Flappy Bird Game",
      "description": "One page Flappy Bird game written in HTML, CSS and JavaScript using Canvas API, no image or external file required.",
      "year": "2023",
      "technologies": ["Canvas API", "JavaScript", "HTML", "CSS"],
      "role": "Solo",
      "liveUrl": "https://ali-amir-code.github.io/Flappy-Bird-Game/",
      "codeUrl": "https://github.com/Ali-Amir-code/Flappy-Bird-Game",
      "details": "A single page Flappy Bird game written in HTML, CSS and JavaScript using Canvas API, no image or external file required. It was one of my first project where I used Canvas API to create a game. It was a fun project to learn how to use Canvas API and other physics controls like acceleration and gravity to create a game."
    },
    {
      "title": "Snake Game (Java)",
      "description": "A classic implementation of the Snake game using Java. It provides a simple, interactive, and fun way to play Snake directly in your Java environment.",
      "year": "2022",
      "technologies": ["Java", "Swing API", "Java Event API"],
      "role": "Solo",
      "codeUrl": "https://github.com/Ali-Amir-code/Java-Snake-Game/",
      "details": "This project is a classic implementation of the Snake game using Java. It provides a simple, interactive, and fun way to play Snake directly in your Java environment. Whether you're a beginner looking to understand Java GUI programming or a retro gaming enthusiast, this project is for you."
    },
    {
      "title": "Chatly",
      "description": "Analytics dashboard for social media management with comprehensive insights, scheduling, and performance tracking.",
      "year": "2022",
      "technologies": [
        "Node.js",
        "Electron.js",
        "HTML",
        "ExpressJS",
        "Socket.io"
      ],
      "role": "Solo",
      "codeUrl": "https://github.com/Ali-Amir-code/Chatly",
      "details": "Chatly is a desktop chat application built using Electron JS, providing a seamless real-time messaging experience in a lightweight and user-friendly environment. Designed to run cross-platform (Windows, macOS, Linux), Chatly demonstrates how to combine web technologies (JavaScript, HTML, CSS) with native desktop features."
    },
    {
      "title": "TODO List App",
      "description": "Simple page that manage your TODO tasks.",
      "year": "2023",
      "technologies": ["JavaScript", "LocalStorage API", "HTML", "CSS"],
      "role": "Solo",
      "liveUrl": "https://ali-amir-code.github.io/Sticky-Notes/",
      "codeUrl": "https://github.com/Ali-Amir-code/Sticky-Notes",
      "details": "TODO List App is a simple page that manage your TODO tasks. It uses LocalStorage API to store your tasks and it's very simple to use. It's a good way to keep track of your tasks and to stay organized."
    }
  ],
  "contactLinks": {
    "email": "muhammadaliamir24@gmail.com",
    "emailLink": "mailto://muhammadaliamir24@gmail.com",
    "linkedIn": "https://linkedin.com/in/ali-amir-code/",
    "whatsapp": "https://wa.me/923094957856",
    "whatsappNumber": "+923094957856",
    "github": "https://github.com/ali-amir-code/",
    "personalWebsite": "https://ali-amir-code.rf.gd/"
  },
  "faqs": [
    {
      "question": "Who are you / what's your role?",
      "answer": "I’m Ali Amir, a web developer specializing in Node.js, React, and desktop apps with Electron."
    },
    {
      "question": "What services do you offer?",
      "answer": "I build responsive websites, single-page apps, REST APIs, and desktop apps — plus maintenance and performance tuning."
    },
    {
      "question": "Can I see your projects or portfolio?",
      "answer": "Sure — here’s my portfolio: 'https://ali-amir-code.rf.gd'. Contact me if you want a project demo or code link?"
    },
    {
      "question": "Do you have GitHub or source code I can review?",
      "answer": "Yes — check my repos at https://github.com/ali-amir-code."
    },
    {
      "question": "Are you available for hire / what is your availability?",
      "answer": "Yeah! I am available. Contact me with project details and let's start building."
    },
    {
      "question": "What’s your typical development process?",
      "answer": "Discovery → scope → prototype → implementation → QA → deployment. I share progress weekly and use Git for version control."
    },
    {
      "question": "How long will my project take?",
      "answer": "Rough estimate depends on scope; small sites: ~1–2 weeks, mid-size apps: ~4–8 weeks. Send brief requirements and I’ll give a timeline."
    },
    {
      "question": "What are your rates?",
      "answer": "Send me your requirements and I can provide a detailed quote after reviewing the spec."
    },
    {
      "question": "Can you work with my existing team or stack?",
      "answer": "Absolutely — I can integrate with most stacks and follow your code standards and tooling. Tell me what you’re using."
    },
    {
      "question": "Do you provide maintenance after launch?",
      "answer": "Yes — I offer support and maintenance packages (bug fixes, updates, small features). Ask for options and pricing."
    },
    {
      "question": "Can you build a demo / proof-of-concept?",
      "answer": "Yes — I can deliver a focused POC to validate features and UX. Let me know the must-have features."
    },
    {
      "question": "Do you write tests and documentation?",
      "answer": "Yes — I include unit/integration tests where appropriate and deliver basic README docs and deployment notes."
    },
    {
      "question": "Can I get your resume / CV?",
      "answer": "Absolutely! you can download my resume from site: https://ali-amir-code.rf.gd."
    },
    {
      "question": "I didn’t get an answer — how can I contact you?",
      "answer": "Sorry about that — you can reach me at 'muhammadaliamir24@gmail.com or use the contact form on my site. I’ll reply as soon as possible."
    }
  ]
}
 `;


    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `
        Query: ${query}
        Return: A single concise, natural, accurate answer (1–3 short paragraphs). If the draft lacks necessary info, return exactly: Sorry! I am unable to understand your question. Please contact Ali Amir directly at muhammadaliamir24@gmail.com.
        `,
        config: {
            thinkingConfig: {
                thinkingBudget: 0, // Disables thinking
            },
            temperature: 0.2,
            systemInstruction: `You are a personal ai assistant of Ali Amir and is hosted on his website. Your primary task is to assist website visitors by answering their queries on Ali Amir\'s behalf. Here is all the data about Ali Amir. DATA: ${data}\nUse ONLY given information. Do NOT invent facts. Output ONLY the final answer text — no JSON, no commentary, nothing else.`
        }
    });

    res.status(200).json({ message: response.text, "reqest.header": req.header });
}