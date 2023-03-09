import {
    mobile,
    nextjs,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    creator,
    bct,
    nerdwelten,
    codeacademy,
    se,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Next.js Developer",
        icon: nextjs,
    },
    {
        title: "WEB3 creator",
        icon: nextjs,
    },

];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: creator,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },


    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },

];

const experiences = [
    {
        title: "CNC programmer",
        company_name: "Baltec CNC Technologies",
        icon: bct,
        iconBg: "#E6DEDD",
        date: "2019 - 2020",
        points: [
            "Designing and programming CNC machines using computer-aided design (CAD) and computer-aided manufacturing (CAM) software.",
            "Setting up and operating CNC machines, calibrating and then operate it to produce the desired parts.",
            "Troubleshooting and maintaining CNC machines.",
            "Working with other departments closely, such as production, quality control, and design, to ensure that the parts produced meet the required specifications and standards.",
        ],
    },
    {
        title: `Internship in "nerdwelten GbR"`,
        company_name: "nerdwelten GbR",
        icon: nerdwelten,
        iconBg: "#383E56",
        date: "March 2022 - May 2022",
        points: [
            "Working with designers to create the layout and visual design of the game interface, including the placement of buttons, menus, and other interactive elements.",
            "Testing and ensuring that the game works correctly and is free of bugs and glitches.",
            "Working closely with the backend team to integrate the game with the server-side components, databases, and APIs.",
        ],
    },
    {
        title: "Frontend Serverless",
        company_name: "CodeAcademy",
        icon: codeacademy,
        iconBg: "#E6DEDD",
        date: "Aug 2022 - Dec 2022",
        points: [
            "Learning how to build the user interface and interactive elements of a web application using HTML, CSS, and JavaScript",
            "Learning how to use popular frontend framework React and libraries, to build the user interface of the web application.",
        ],
    },
    {
        title: "Self-employement",
        company_name: "",
        icon: se,
        iconBg: "#383E56",
        date: "2018 - Present",
        points: [
            "Dropshipping - managing the online store, marketing and sales, order processing and fulfillment, customer service, and financial management.",
            "Providing guidance on the game design and marketing aspects of a Web3 project",
            "Improving my programming skills by gaining more experience with ReactJS, picking up new technologies such as NextJS and ThreeJS.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };