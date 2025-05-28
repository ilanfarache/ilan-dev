import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import LogoGrid from "../../components/LogoGrid";

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
                <h1 className="text-3xl md:text-5xl font-bold">Welcome to My Profile</h1>
                <p className="mt-2 text-xl">Ilan Farache – Front-End Developer</p>
                <button
                    onClick={() => navigate('/profile')}
                    className="cursor-pointer mt-8 px-6 py-3 ring-2 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-black rounded-full hover:bg-cyan-300  transition"
                >
                    View Profile
                </button>
            </motion.div>

            <LogoGrid />

        </div>
    );
}
export default HomePage;
