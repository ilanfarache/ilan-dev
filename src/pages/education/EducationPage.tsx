import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { FaUniversity, FaLaptopCode } from "react-icons/fa"
import CustomButton from "../../components/CustomButton";

const EducationPage = () => {
    const navigate = useNavigate()
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: (delay: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: delay * 0.3, duration: 0.6 },
        }),
    };

    return (
        <div className="h-screen flex items-center justify-center">
            <CustomButton label="< Back" dir="left" onClick={() => navigate('/profile')} />


            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex flex-col justify-center items-center w-64 h-44 bg-amber-50 border border-zinc-200 border-l-4 rounded-2xl p-4 shadow-xl ring-2 text-center transition-transform duration-300 hover:scale-105 hover:shadow-cyan-200">
                    <FaUniversity className="text-2xl text-cyan-600 mb-2" />
                    <h3 className="text-lg font-bold text-zinc-800">B.Sc. – Information System Management</h3>
                    <p className="text-sm text-zinc-600">Netanya Academic College</p>
                    <p className="text-sm text-zinc-500">2016 – 2019</p>
                </motion.div>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex flex-col justify-center items-center w-64 h-44 bg-amber-50 border border-zinc-200 border-l-4 rounded-2xl p-4 shadow-xl ring-2 text-center transition-transform duration-300 hover:scale-105 hover:shadow-cyan-200">
                    <FaLaptopCode className="text-2xl text-cyan-600 mb-2" />

                    <h3 className="text-lg font-bold text-zinc-800">React & Node.js Bootcamp</h3>
                    <p className="text-sm text-zinc-600">Developers Institute</p>
                    <p className="text-sm text-zinc-500">2020</p>
                </motion.div>
            </div>
        </div>
    );
}
export default EducationPage;
