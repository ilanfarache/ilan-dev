import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import CustomButton from "../../components/CustomButton";
import { FaAngleDown, FaReact, FaCode, FaUsers, FaRocket, FaMobile, FaLaptopCode, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";
import { profileContent } from "../../data/content";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: delay * 0.2,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
        },
    }),
};



const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (delay: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: delay * 0.15,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
        },
    }),
};

const ProfilePage = () => {
    const navigate = useNavigate();
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
    const [emblaRef2, emblaApi2] = useEmblaCarousel({ loop: false });
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [canScrollPrev2, setCanScrollPrev2] = useState(false);
    const [canScrollNext2, setCanScrollNext2] = useState(false);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
    const scrollPrev2 = useCallback(() => emblaApi2 && emblaApi2.scrollPrev(), [emblaApi2]);
    const scrollNext2 = useCallback(() => emblaApi2 && emblaApi2.scrollNext(), [emblaApi2]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    const onSelect2 = useCallback(() => {
        if (!emblaApi2) return;
        setCanScrollPrev2(emblaApi2.canScrollPrev());
        setCanScrollNext2(emblaApi2.canScrollNext());
    }, [emblaApi2]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
    }, [emblaApi, onSelect]);

    useEffect(() => {
        if (!emblaApi2) return;
        onSelect2();
        emblaApi2.on('select', onSelect2);
    }, [emblaApi2, onSelect2]);

    const skills = [
        { icon: FaReact, name: "React", color: "text-blue-400" },
        { icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
        { icon: SiTailwindcss, name: "Tailwind", color: "text-teal-400" },
        { icon: SiNextdotjs, name: "Next.js", color: "text-gray-200" },
        { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
    ];

    return (
        <>
            <CustomButton label="Back" dir="left" onClick={() => navigate('/')} />
            <CustomButton label="Education" dir="right" onClick={() => navigate('/education')} />

            <div className="h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">

                {/* Hero Section */}
                <motion.section
                    className="h-screen snap-start flex flex-col items-center justify-center text-white font-mono text-center px-4 relative overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.2,
                                delayChildren: 0.3,
                            },
                        },
                    }}
                >
                    {/* Background effects */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    </div>

                    <motion.div
                        variants={scaleIn}
                        custom={0}
                        className="relative z-10 mb-4 md:mb-6"
                    >
                        <div className="w-20 h-20 md:w-32 md:h-32 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-2xl">
                            <FaLaptopCode className="text-2xl md:text-4xl text-white" />
                        </div>
                    </motion.div>

                    <motion.h1
                        variants={fadeInUp}
                        custom={1}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent uppercase tracking-wider"
                    >
                        {profileContent.hero.title}
                    </motion.h1>

                    <motion.div
                        variants={fadeInUp}
                        custom={2}
                        className="mt-6 md:mt-8 max-w-xs sm:max-w-lg md:max-w-4xl px-4"
                    >
                        <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray-300 leading-relaxed mb-3 md:mb-4">
                            Front-end developer with <span className="text-blue-400 font-semibold">3.5+ years</span> of experience building modern,
                            responsive web applications using React, TypeScript, Redux, and Tailwind.
                        </p>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed">
                            Strong background in UI/UX collaboration, REST API integration, and agile team environments.
                            Proficient with CI/CD and testing.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        custom={3}
                        className="mt-6 md:mt-8 flex flex-wrap justify-center gap-2 md:gap-4 px-4"
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                variants={scaleIn}
                                custom={index}
                                className="flex items-center gap-1 md:gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 md:px-4 py-1.5 md:py-2 border border-white/20"
                                whileHover={{ scale: 1.1, y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <skill.icon className={`text-base md:text-xl ${skill.color}`} />
                                <span className="text-xs md:text-sm font-medium">{skill.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.p
                        variants={fadeInUp}
                        custom={4}
                        className="mt-8 text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                    >
                        Passionate about clean code, teamwork, and continuous learning.
                    </motion.p>

                    <motion.div
                        variants={fadeInUp}
                        custom={5}
                        className="absolute bottom-10"
                    >
                        <FaAngleDown className="text-blue-400 animate-bounce text-4xl" />
                    </motion.div>
                </motion.section>

                {/* Goodi Experience Section */}
                <motion.section
                    className="h-screen snap-start flex flex-col items-center justify-center text-white font-mono px-4 py-12 relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.2,
                            },
                        },
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm"></div>

                    <div className="relative z-10 max-w-6xl mx-auto w-full">
                        <motion.div
                            variants={fadeInUp}
                            custom={0}
                            className="text-center mb-6 md:mb-8 px-4"
                        >
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 md:mb-4">
                                <FaRocket className="text-xl md:text-2xl lg:text-3xl text-blue-400" />
                                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold uppercase bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center">
                                    Front-End Developer at Goodi
                                </h2>
                            </div>
                            <p className="text-base md:text-lg lg:text-xl text-blue-300 font-semibold">3.5 Years of Innovation</p>
                        </motion.div>

                        {/* Desktop Grid */}
                        <div className="hidden lg:grid grid-cols-2 gap-4 mb-6 px-4">
                            {[
                                {
                                    icon: FaMobile,
                                    title: "Ordering Platform",
                                    description: "Built a full-featured ordering platform from scratch with React and Material-UI. Delivered responsive, pixel-perfect UI with animations.",
                                    gradient: "from-blue-500 to-cyan-500"
                                },
                                {
                                    icon: FaUsers,
                                    title: "Internal CRM",
                                    description: "Built and maintained an internal CRM for organization managers. Responsible for layout architecture, API integration, and dynamic UI rendering.",
                                    gradient: "from-purple-500 to-pink-500"
                                },
                                {
                                    icon: FaCode,
                                    title: "Development Excellence",
                                    description: "Implemented multilingual support with i18next, unit tests with Vitest, and React Developer Tools for optimization.",
                                    gradient: "from-green-500 to-teal-500"
                                },
                                {
                                    icon: FaUsers,
                                    title: "Agile Collaboration",
                                    description: "Worked in fully Agile team (2-week sprints, Jira), collaborating with PMs, QA testers, and back-end developers.",
                                    gradient: "from-orange-500 to-red-500"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={scaleIn}
                                    custom={index}
                                    className="group relative overflow-hidden"
                                    whileHover={{ y: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="relative p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 shadow-xl hover:shadow-blue-500/20 h-64">
                                        <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}></div>

                                        <div className="relative z-10">
                                            <div className={`inline-flex p-2 bg-gradient-to-r ${item.gradient} rounded-lg mb-3`}>
                                                <item.icon className="text-lg text-white" />
                                            </div>
                                            <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                                            <p className="text-gray-300 leading-relaxed text-sm">{item.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile Carousel */}
                        <div className="lg:hidden relative mb-6">
                            <div className="overflow-hidden" ref={emblaRef}>
                                <div className="flex">
                                    {[
                                        {
                                            icon: FaMobile,
                                            title: "Ordering Platform",
                                            description: "Built a full-featured ordering platform from scratch with React and Material-UI. Delivered responsive, pixel-perfect UI with animations.",
                                            gradient: "from-blue-500 to-cyan-500"
                                        },
                                        {
                                            icon: FaUsers,
                                            title: "Internal CRM",
                                            description: "Built and maintained an internal CRM for organization managers, used to manage members, wallets, activity reports, and team permissions. I was responsible for the overall layout architecture, API integration, and dynamic UI rendering based on role and organization data.",
                                            gradient: "from-purple-500 to-pink-500"
                                        },
                                        {
                                            icon: FaCode,
                                            title: "Development Excellence",
                                            description: "Implemented multilingual support with i18next, unit tests with Vitest, and React Developer Tools for optimization.",
                                            gradient: "from-green-500 to-teal-500"
                                        },
                                        {
                                            icon: FaUsers,
                                            title: "Agile Collaboration",
                                            description: "Worked in fully Agile team (2-week sprints, Jira), collaborating with PMs, QA testers, and back-end developers.",
                                            gradient: "from-orange-500 to-red-500"
                                        }
                                    ].map((item, index) => (
                                        <div key={index} className="flex-[0_0_80%] min-w-0 px-2">
                                            <motion.div
                                                variants={scaleIn}
                                                custom={index}
                                                className="group relative overflow-hidden"
                                                whileHover={{ y: -5 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <div className="relative p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 shadow-xl hover:shadow-blue-500/20 h-48">
                                                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg`}></div>

                                                    <div className="relative z-10 h-full flex flex-col">
                                                        <div className={`inline-flex p-1.5 bg-gradient-to-r ${item.gradient} rounded-lg mb-2 flex-shrink-0`}>
                                                            <item.icon className="text-base text-white" />
                                                        </div>
                                                        <h3 className="text-base font-bold text-white mb-2 flex-shrink-0">{item.title}</h3>
                                                        <div className="flex-1 overflow-y-auto">
                                                            <p className="text-gray-300 leading-relaxed text-xs pr-2">{item.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Carousel Controls */}
                            <div className="flex justify-center gap-4 mt-4">
                                <button
                                    onClick={scrollPrev}
                                    disabled={!canScrollPrev}
                                    className="p-2 bg-white/10 rounded-full border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
                                >
                                    <FaChevronLeft className="text-white text-sm" />
                                </button>
                                <button
                                    onClick={scrollNext}
                                    disabled={!canScrollNext}
                                    className="p-2 bg-white/10 rounded-full border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
                                >
                                    <FaChevronRight className="text-white text-sm" />
                                </button>
                            </div>
                        </div>

                        <motion.div
                            variants={fadeInUp}
                            custom={4}
                            className="text-center"
                        >
                            <div className="inline-flex items-center gap-3 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold text-sm">
                                <span>GitLab CI/CD Environment</span>
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Adopt a Contractor Experience Section */}
                <motion.section
                    className="h-screen snap-start flex flex-col items-center justify-center text-white font-mono px-4 py-16 relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.1,
                            },
                        },
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-l from-purple-900/50 to-blue-900/50"></div>

                    <div className="relative z-10 max-w-6xl mx-auto w-full">
                        <motion.div
                            variants={fadeInUp}
                            custom={0}
                            className="text-center mb-8 md:mb-12 px-4"
                        >
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 md:mb-4">
                                <SiNextdotjs className="text-xl md:text-2xl lg:text-3xl text-gray-200" />
                                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold uppercase bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-center">
                                    Full Stack Developer
                                </h2>
                            </div>
                            <p className="text-base md:text-lg lg:text-xl text-purple-300 font-semibold">Adopt a Contractor</p>
                        </motion.div>

                        {/* Desktop Grid */}
                        <div className="hidden md:grid grid-cols-3 gap-6 mb-8 px-4">
                            {[
                                {
                                    icon: SiNextdotjs,
                                    title: "Next.js Development",
                                    description: "Developed the company's main website from scratch using Next.js and MongoDB for data management.",
                                    color: "text-gray-200"
                                },
                                {
                                    icon: FaMobile,
                                    title: "Responsive Design",
                                    description: "Translated UI/UX designs into fully responsive, pixel-perfect web pages using CSS Modules.",
                                    color: "text-blue-400"
                                },
                                {
                                    icon: FaUsers,
                                    title: "Business Logic",
                                    description: "Collaborated with PM to implement business logic, user flows, and dynamic routing for SEO.",
                                    color: "text-purple-400"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    custom={index + 1}
                                    className="group relative"
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="h-64 p-6 bg-white/10 rounded-xl border border-white/20 hover:border-purple-400/50 transition-all duration-200 shadow-xl">
                                        <div className="flex flex-col items-center text-center h-full">
                                            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-4">
                                                <item.icon className={`text-2xl ${item.color}`} />
                                            </div>
                                            <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                                            <p className="text-gray-300 leading-relaxed text-sm flex-grow">{item.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile Carousel */}
                        <div className="md:hidden relative mb-6">
                            <div className="overflow-hidden" ref={emblaRef2}>
                                <div className="flex">
                                    {[
                                        {
                                            icon: SiNextdotjs,
                                            title: "Next.js Development",
                                            description: "Contributed to the development of the company’s main website by building several key pages and components using Next.js and CSS Modules.",
                                            color: "text-gray-200"
                                        },
                                        {
                                            icon: FaMobile,
                                            title: "Responsive Design",
                                            description: "Translated UI/UX designs into fully responsive, pixel-perfect web pages using CSS Modules.",
                                            color: "text-blue-400"
                                        },
                                        {
                                            icon: FaUsers,
                                            title: "Business Logic",
                                            description: "Collaborated with PM to implement business logic, user flows, and dynamic routing for SEO.",
                                            color: "text-purple-400"
                                        }
                                    ].map((item, index) => (
                                        <div key={index} className="flex-[0_0_80%] min-w-0 px-2">
                                            <motion.div
                                                variants={fadeInUp}
                                                custom={index + 1}
                                                className="group relative"
                                                whileHover={{ y: -5, scale: 1.02 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <div className="h-48 p-4 bg-white/10 rounded-lg border border-white/20 hover:border-purple-400/50 transition-all duration-200 shadow-xl">
                                                    <div className="flex flex-col items-center text-center h-full">
                                                        <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-3 flex-shrink-0">
                                                            <item.icon className={`text-xl ${item.color}`} />
                                                        </div>
                                                        <h3 className="text-base font-bold text-white mb-2 flex-shrink-0">{item.title}</h3>
                                                        <div className="flex-1 overflow-y-auto w-full">
                                                            <p className="text-gray-300 leading-relaxed text-xs pr-2">{item.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Carousel Controls */}
                            <div className="flex justify-center gap-4 mt-4">
                                <button
                                    onClick={scrollPrev2}
                                    disabled={!canScrollPrev2}
                                    className="p-2 bg-white/10 rounded-full border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
                                >
                                    <FaChevronLeft className="text-white text-sm" />
                                </button>
                                <button
                                    onClick={scrollNext2}
                                    disabled={!canScrollNext2}
                                    className="p-2 bg-white/10 rounded-full border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
                                >
                                    <FaChevronRight className="text-white text-sm" />
                                </button>
                            </div>
                        </div>

                        <motion.div
                            variants={fadeInUp}
                            custom={4}
                            className="text-center"
                        >
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold">
                                <SiMongodb className="text-xl text-green-400" />
                                <span>Full Stack Solution</span>
                                <SiNextdotjs className="text-xl" />
                            </div>
                        </motion.div>
                    </div>
                </motion.section>
            </div>
        </>
    );
}

export default ProfilePage;
