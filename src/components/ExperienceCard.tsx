import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Props {
    title: string;
    company: string;
    date: string;
    description: string;
}

export default function ExperienceCard({ title, company, date, description }: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, rotate: -10, y: 100 }}
            animate={isInView ? { opacity: 1, rotate: 0, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="bg-white text-black w-[300px] md:w-[400px] rounded-xl shadow-xl p-6 font-sans"
            style={{
                perspective: '1000px',
            }}
        >
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-700 italic">{company} — {date}</p>
            <p className="mt-2 text-sm">{description}</p>
        </motion.div>
    );
}
