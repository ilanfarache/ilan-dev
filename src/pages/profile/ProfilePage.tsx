import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';


const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: delay * 0.3, duration: 0.6 },
    }),
};


const ProfilePage = () => {
    const navigate = useNavigate();
    return (
        <>
            <button
                onClick={() => navigate(-1)}
                className="mt-8 px-6 py-3 bg-blue-300 text-blue-900 font-bold rounded-full hover:bg-blue-400 transition absolute top-10 left-10 z-100 cursor-pointer"
            >
                {`< Back`}
            </button>
            <button
                onClick={() => navigate('/education')}
                className="mt-8 px-6 py-3 bg-blue-300 text-blue-900 font-bold rounded-full hover:bg-blue-400 transition absolute top-10 right-10 z-100 cursor-pointer"
            >
                {`Education >`}
            </button>
            <div className="h-screen  overflow-y-scroll snap-y snap-mandatory scrollbar-hide relative">

                <motion.section
                    className="h-screen snap-start flex flex-col items-center justify-center min-h-screen bg-black text-white font-mono text-center px-4 relative "
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.2,
                                delayChildren: 0.5,
                            },
                        },
                    }}

                >
                    <motion.h1
                        variants={fadeInUp}
                        custom={0}
                        className="text-2xl md:text-4xl font-bold text-blue-400 uppercase"
                    >
                        Profile
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        custom={1}
                        className="mt-4 text-xl text-gray-300 md:px-40"
                    >
                        Front-end developer with 3.5+ years of experience building modern,
                        responsive web applications using React, TypeScript, Redux, and
                        Tailwind. Strong background in UI/UX collaboration, REST API
                        integration, and agile team environments. Proficient with CI/CD,
                        testing.
                    </motion.p>

                    <motion.p
                        variants={fadeInUp}
                        custom={2}
                        className="mt-4 text-xl text-blue-400"
                    >
                        Passionate about clean code, teamwork, and continuous learning.
                    </motion.p>
                </motion.section>

                <motion.section
                    id="experience-1"
                    className="h-screen snap-start flex flex-col items-center justify-center min-h-screen bg-black text-white font-mono text-center px-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.4 }}
                >
                    <motion.h2
                        variants={fadeInUp}
                        custom={0}
                        className="text-2xl md:text-4xl font-bold uppercase text-blue-400"
                    >
                        Front-End Developer Goodi (3.5 years)
                    </motion.h2>

                    <ul className="list-item mt-4 text-lg text-gray-300 md:px-40  space-y-4">
                        {[
                            "Stack: React, Vite.js, Redux Toolkit, Material-UI, CSS Modules, Vitest, Git, Figma, Jira, Agile.",
                            "Built from scratch a responsive and animated ordering platform using React, Material-UI, and CSS Modules...",
                            "Developed a full-featured CRM for organization managers...",
                            "Worked in Agile (2-week sprints, Jira, daily standups)...",
                            "Added i18next for multi-language support and tested components with Vitest.",
                        ].map((text, i) => (
                            <motion.li
                                key={i}
                                variants={fadeInUp}
                                custom={i + 1}
                                className="opacity-0"
                            >
                                {text}
                            </motion.li>
                        ))}
                    </ul>
                </motion.section>


                <motion.section
                    id="experience-2"
                    className="h-screen snap-start flex flex-col items-center justify-center min-h-screen bg-black text-white font-mono text-center px-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.4 }}
                >
                    <motion.h2
                        variants={fadeInUp}
                        custom={0}
                        className="text-2xl md:text-4xl font-bold uppercase text-blue-400"
                    >
                        Full Stack Developer - Adopt a Contractor
                    </motion.h2>

                    <ul className="list-item mt-4 text-lg text-gray-300 md:px-40  space-y-4">
                        {[
                            "Stack: React, Next.js, Redux, MongoDB, CSS Modules, Git.",
                            "Developed the company's main website from scratch using Next.js for the front-end and MongoDB for data management.",
                            "Translated UI/UX designs into fully responsive, pixel-perfect web pages using CSS Modules and media queries.",
                            "Collaborated with the Product Manager to implement business logic, user flows, and dynamic routing for SEO-optimized pages."

                        ].map((text, i) => (
                            <motion.li
                                key={i}
                                variants={fadeInUp}
                                custom={i + 1}
                                className="opacity-0"
                            >
                                {text}
                            </motion.li>
                        ))}
                    </ul>
                </motion.section>
            </div>
        </>
    );
}
export default ProfilePage;
