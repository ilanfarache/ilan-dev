import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { FaUniversity, FaLaptopCode, FaGraduationCap, FaBook, FaCode, FaAward } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiJavascript, SiMongodb } from "react-icons/si";
import CustomButton from "../../components/CustomButton";
import { educationContent, navigation } from "../../data/content";

const EducationPage = () => {
    const navigate = useNavigate();

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: (delay: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: delay * 0.1,
                duration: 0.4
            },
        }),
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: (delay: number) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: delay * 0.1,
                duration: 0.3
            },
        }),
    };

    const bootcampSkills = [
        { icon: SiReact, name: "React", color: "text-blue-400" },
        { icon: SiNodedotjs, name: "Node.js", color: "text-green-400" },
        { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
        { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
    ];

    return (
        <>
            <CustomButton label={navigation.buttons.back} dir="left" onClick={() => navigate('/profile')} />

            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative">
                {/* Background effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-xl"></div>
                </div>

                <motion.div
                    className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20"
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
                    <motion.div
                        variants={fadeInUp}
                        custom={0}
                        className="text-center mb-16"
                    >
                        <div className="w-24 h-24 mx-auto bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center mb-6 shadow-2xl">
                            <FaGraduationCap className="text-3xl text-white" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent uppercase tracking-wider mb-4">
                            {educationContent.hero.title}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300">
                            {educationContent.hero.subtitle}
                        </p>
                    </motion.div>

                    {/* Education Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
                        {/* University Card */}
                        <motion.div
                            variants={scaleIn}
                            custom={1}
                            className="group relative"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="relative p-8 bg-white/10 rounded-2xl border border-white/20 hover:border-blue-400/50 transition-colors duration-200 shadow-xl h-full">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-2xl"></div>

                                <div className="relative z-10 text-center">
                                    <div className="inline-flex p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-6">
                                        <FaUniversity className="text-3xl text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">
                                        B.Sc. Information System Management
                                    </h3>
                                    <p className="text-lg text-blue-300 font-semibold mb-2">
                                        Netanya Academic College
                                    </p>
                                    <p className="text-gray-400 mb-6">2016 – 2019</p>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 text-gray-300">
                                            <FaBook className="text-blue-400" />
                                            <span>Database Management & Design</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-300">
                                            <FaCode className="text-purple-400" />
                                            <span>System Analysis & Programming</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-300">
                                            <FaAward className="text-cyan-400" />
                                            <span>Project Management</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Bootcamp Card */}
                        <motion.div
                            variants={scaleIn}
                            custom={2}
                            className="group relative"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="relative p-8 bg-white/10 rounded-2xl border border-white/20 hover:border-green-400/50 transition-colors duration-200 shadow-xl h-full">
                                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-2xl"></div>

                                <div className="relative z-10 text-center">
                                    <div className="inline-flex p-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mb-6">
                                        <FaLaptopCode className="text-3xl text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">
                                        React & Node.js Bootcamp
                                    </h3>
                                    <p className="text-lg text-green-300 font-semibold mb-2">
                                        Developers Institute
                                    </p>
                                    <p className="text-gray-400 mb-6">2020</p>

                                    <div className="space-y-4">
                                        <p className="text-gray-300 text-sm mb-4">
                                            Intensive full-stack development program
                                        </p>
                                        <div className="flex flex-wrap justify-center gap-3">
                                            {bootcampSkills.map((skill, index) => (
                                                <motion.div
                                                    key={skill.name}
                                                    variants={scaleIn}
                                                    custom={index + 3}
                                                    className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-2 border border-white/20"
                                                    whileHover={{ scale: 1.05 }}
                                                    transition={{ duration: 0.15 }}
                                                >
                                                    <skill.icon className={`text-sm ${skill.color}`} />
                                                    <span className="text-xs font-medium text-white">{skill.name}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Summary Section */}
                    <motion.div
                        variants={fadeInUp}
                        custom={3}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="p-8 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Educational Foundation
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                My academic background in Information Systems Management provided a solid foundation in
                                <span className="text-blue-400 font-semibold"> database design, system analysis, and project management</span>.
                                The intensive React & Node.js bootcamp equipped me with modern
                                <span className="text-green-400 font-semibold"> full-stack development skills</span>,
                                bridging theory with practical application in today's tech landscape.
                            </p>

                            <div className="flex justify-center mt-6">
                                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold">
                                    <FaGraduationCap className="text-xl" />
                                    <span>Ready for continuous learning</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}

export default EducationPage;
