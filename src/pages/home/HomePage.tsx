import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import Image from '../../assets/profile.png';
import { FaCode, FaRocket, FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";

// Import des logos pour les faire flotter
import ReactLogo from '../../assets/svg/react-logo.svg?react';
import MdbLogo from '../../assets/svg/mdb-logo.svg?react';
import JSLogo from '../../assets/svg/js-logo.svg?react';
import ReduxLogo from '../../assets/svg/redux-logo.svg?react';
import TailwindLogo from '../../assets/svg/tailwind-logo.svg?react';
import TsLogo from '../../assets/svg/ts-logo.svg?react';

const HomePage = () => {
    const navigate = useNavigate();

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: (delay: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: delay * 0.2,
                duration: 0.6,
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
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
            },
        }),
    };

    const socialLinks = [
        { icon: FaGithub, href: "https://github.com/ilanfarache", label: "GitHub" },
        { icon: FaLinkedin, href: "https://www.linkedin.com/in/ilan-farache/", label: "LinkedIn" },
    ];

    // Configuration des logos flottants
    const floatingLogos = [
        { Logo: ReactLogo, x: "10%", y: "20%", delay: 0, duration: 20 },
        { Logo: JSLogo, x: "85%", y: "15%", delay: 2, duration: 25 },
        { Logo: TsLogo, x: "15%", y: "70%", delay: 4, duration: 30 },
        { Logo: ReduxLogo, x: "90%", y: "65%", delay: 6, duration: 22 },
        { Logo: TailwindLogo, x: "5%", y: "45%", delay: 8, duration: 28 },
        { Logo: MdbLogo, x: "80%", y: "40%", delay: 10, duration: 26 },
    ];

    return (
        <div className="h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-2xl"></div>
                <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-xl"></div>
            </div>

            {/* Logos flottants */}
            <div className="absolute inset-0 pointer-events-none">
                {floatingLogos.map((item, index) => (
                    <motion.div
                        key={index}
                        className="absolute"
                        style={{ left: item.x, top: item.y }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0, 0.3, 0.1, 0.4, 0.2],
                            scale: [0, 1, 0.8, 1.2, 1],
                            y: [0, -20, 10, -15, 5],
                            x: [0, 10, -5, 15, -10],
                            rotate: [0, 10, -5, 8, -3]
                        }}
                        transition={{
                            duration: item.duration,
                            delay: item.delay,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                    >
                        <item.Logo className="w-16 h-16 md:w-20 md:h-20 text-white/20 hover:text-white/40 transition-colors duration-300" />
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="relative z-10 flex flex-col items-center justify-center h-full text-white font-mono text-center px-4 py-20"
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
                {/* Hero Section */}
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        variants={scaleIn}
                        custom={0}
                        className="relative mb-6"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-60 animate-pulse"></div>
                            <img
                                src={Image}
                                alt="Profile Picture"
                                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto shadow-2xl border-4 border-white/20 backdrop-blur-sm"
                            />
                        </div>
                    </motion.div>

                    <motion.h1
                        variants={fadeInUp}
                        custom={1}
                        className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent uppercase tracking-wider mb-4"
                    >
                        Welcome to My Profile
                    </motion.h1>

                    <motion.div
                        variants={fadeInUp}
                        custom={2}
                        className="mb-6"
                    >
                        <h2 className="text-xl md:text-3xl font-semibold text-white mb-3">
                            Ilan Farache
                        </h2>
                        <div className="flex items-center justify-center gap-3 text-base md:text-xl text-blue-300">
                            <FaCode className="text-blue-400" />
                            <span className="font-medium">Front-End Developer</span>
                            <FaRocket className="text-purple-400" />
                        </div>
                    </motion.div>

                    <motion.p
                        variants={fadeInUp}
                        custom={3}
                        className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6"
                    >
                        Passionate developer with <span className="text-blue-400 font-semibold">3.5+ years</span> of experience
                        crafting modern, responsive web applications.
                        Specialized in <span className="text-purple-400 font-semibold">React, TypeScript, and innovative UI/UX</span>.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        variants={scaleIn}
                        custom={4}
                        className="mb-8"
                    >
                        <motion.button
                            onClick={() => navigate('/profile')}
                            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative z-10">View My Resume</span>
                            <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        variants={fadeInUp}
                        custom={5}
                        className="flex justify-center gap-6"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={scaleIn}
                                custom={index + 6}
                                className="group p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:bg-white/20"
                                whileHover={{ y: -5, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <social.icon className="text-2xl text-gray-300 group-hover:text-blue-400 transition-colors duration-300" />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>



            </motion.div>
        </div>
    );
}

export default HomePage;
