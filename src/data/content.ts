export const homeContent = {
    hero: {
        title: "Welcome to My Profile",
        name: "Ilan Farache",
        role: "Front-End Developer",
        description: "Passionate developer with 3.5+ years of experience crafting modern, responsive web applications. Specialized in React, TypeScript, and innovative UI/UX.",
        cta: "View My Resume"
    },
    techStack: {
        title: "Tech Stack & Tools",
        subtitle: "Technologies I work with daily"
    }
};

export const profileContent = {
    hero: {
        title: "My Experiences",
        intro: "Front-end developer with 3.5+ years of experience building modern, responsive web applications using React, TypeScript, Redux, and Tailwind.",
        background: "Strong background in UI/UX collaboration, REST API integration, and agile team environments. Proficient with CI/CD and testing.",
        passion: "Passionate about clean code, teamwork, and continuous learning."
    },
    skills: [
        { name: "React", color: "text-blue-400" },
        { name: "TypeScript", color: "text-blue-600" },
        { name: "Tailwind", color: "text-teal-400" },
        { name: "Next.js", color: "text-gray-200" },
        { name: "MongoDB", color: "text-green-500" }
    ],
    experiences: {
        goodi: {
            title: "Front-End Developer at Goodi",
            subtitle: "3.5 Years of Innovation",
            projects: [
                {
                    title: "Ordering Platform",
                    description: "Built a full-featured ordering platform from scratch with React and Material-UI. Delivered responsive, pixel-perfect UI with animations.",
                    gradient: "from-blue-500 to-cyan-500"
                },
                {
                    title: "Internal CRM",
                    description: "Built and maintained an internal CRM for organization managers. Responsible for layout architecture, API integration, and dynamic UI rendering.",
                    gradient: "from-purple-500 to-pink-500"
                },
                {
                    title: "Development Excellence",
                    description: "Implemented multilingual support with i18next, unit tests with Vitest, and React Developer Tools for optimization.",
                    gradient: "from-green-500 to-teal-500"
                },
                {
                    title: "Agile Collaboration",
                    description: "Worked in fully Agile team (2-week sprints, Jira), collaborating with PMs, QA testers, and back-end developers.",
                    gradient: "from-orange-500 to-red-500"
                }
            ],
            badge: "GitLab CI/CD Environment"
        },
        adoptContractor: {
            title: "Full Stack Developer",
            company: "Adopt a Contractor",
            projects: [
                {
                    title: "Next.js Development",
                    description: "Developed the company's main website from scratch using Next.js and MongoDB for data management.",
                    color: "text-gray-200"
                },
                {
                    title: "Responsive Design",
                    description: "Translated UI/UX designs into fully responsive, pixel-perfect web pages using CSS Modules.",
                    color: "text-blue-400"
                },
                {
                    title: "Business Logic",
                    description: "Collaborated with PM to implement business logic, user flows, and dynamic routing for SEO.",
                    color: "text-purple-400"
                }
            ],
            badge: "Full Stack Solution"
        }
    }
};

export const educationContent = {
    hero: {
        title: "Education",
        subtitle: "Academic foundation and professional development"
    },
    education: [
        {
            type: "university",
            title: "B.Sc. Information System Management",
            institution: "Netanya Academic College",
            period: "2016 – 2019",
            subjects: [
                "Database Management & Design",
                "System Analysis & Programming",
                "Project Management"
            ],
            gradient: "from-blue-500 to-purple-500",
            hoverColor: "blue-400"
        },
        {
            type: "bootcamp",
            title: "React & Node.js Bootcamp",
            institution: "Developers Institute",
            period: "2020",
            description: "Intensive full-stack development program",
            skills: [
                { name: "React", color: "text-blue-400" },
                { name: "Node.js", color: "text-green-400" },
                { name: "JavaScript", color: "text-yellow-400" },
                { name: "MongoDB", color: "text-green-500" }
            ],
            gradient: "from-green-500 to-blue-500",
            hoverColor: "green-400"
        }
    ],
    summary: {
        title: "Educational Foundation",
        description: "My academic background in Information Systems Management provided a solid foundation in database design, system analysis, and project management. The intensive React & Node.js bootcamp equipped me with modern full-stack development skills, bridging theory with practical application in today's tech landscape.",
        highlights: [
            { text: "database design, system analysis, and project management", color: "text-blue-400" },
            { text: "full-stack development skills", color: "text-green-400" }
        ],
        badge: "Ready for continuous learning"
    }
};

export const navigation = {
    buttons: {
        back: "Back",
        backHome: "< Back",
        education: "Education >",
        profile: "Profile"
    }
};

export const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/ilanfarache",
        label: "GitHub"
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ilan-farache/",
        label: "LinkedIn"
    }
]; 