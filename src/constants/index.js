import {
    mobile,
    nextjs,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    next,
    redux,
    tailwind,
    git,
    figma,
    threejs,
    creator,
    bct,
    nerdwelten,
    codeacademy,
    se,
    resume_v1,
    netflix_clone,
    news_site,
    metaverse,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work Experience",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "feedback",
        title: "Testimonials",
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
        title: "React Developer",
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
    {
        name: "nextjs",
        icon: next,
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
            "Povilas Gedminas has consistently impressed us with his ability to learn quickly and adapt to new technologies. He was always eager to take on new challenges and consistently delivered high-quality work.",
        name: "Lukas Jackson",
        designation: "CEO",
        company: "nerdwelten GbR",
        icon: nerdwelten,
    },
];

const projects = [
    {
        name: "Resume V1",
        description:
            "Resume website showcasing education, work experience and skills, made using reactjs and material UI.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "material UI",
                color: "green-text-gradient",
            },

        ],
        image: resume_v1,
        source_code_link: "https://github.com/PovilasGe/resume",
        live_page_link: "https://povilasge.github.io./",
    },
    {
        name: "Netflix clone",
        description:
            "The website is a replica of Netflix, data is retrieved from the TMDB database. The backend of the site is created using Google Firebase",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
            {
                name: "redux",
                color: "pink-text-gradient",
            },

        ],
        image: netflix_clone,
        source_code_link: "https://github.com/PovilasGe/netflix-clone",
        live_page_link: "https://notnetfl.povilasgedminas.com/",
    },
    {
        name: "News site",
        description:
            "Real time news website built using nextjs 13 typescript and tailwind.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },
            {
                name: "graphQl",
                color: "pink-text-gradient",
            },
        ],
        image: news_site,
        source_code_link: "https://github.com/PovilasGe/news-app",
        live_page_link: "https://news-app-povilasge.vercel.app/",
    },
    {
        name: "Metaverse",
        description:
            "Figma design project made using nextjs 13 and tailwind css",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },

        ],
        image: metaverse,
        source_code_link: "https://metaverse.povilasgedminas.com/",
        live_page_link: "https://github.com/PovilasGe/metaverse",
    },
];

export { services, technologies, experiences, testimonials, projects };
