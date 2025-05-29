import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import LogoGrid from "../../components/LogoGrid";
import Image from '../../assets/profile.png';
const HomePage = () => {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white font-mono text-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <h1 className="text-3xl md:text-5xl font-bold max-sm:m-10">Welcome to My Profile</h1>
                <img
                    src={Image}
                    alt="Profile Picture"
                    className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto mt-6 shadow-lg"
                />
                <p className="mt-2 text-xl">Ilan Farache – Front-End Developer</p>
                <button
                    onClick={() => navigate('/profile')}
                    className="cursor-pointer mt-8 px-6 py-3 ring-2 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-black rounded-full hover:bg-cyan-300  transition"
                >
                    View My Resume
                </button>
            </motion.div>

            <LogoGrid />

        </div>
    );
}
export default HomePage;
