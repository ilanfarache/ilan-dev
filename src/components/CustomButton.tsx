type PropsButton = {
    label: string;
    dir?: "left" | "right";
    onClick: () => void;
}

const CustomButton = ({
    label,
    onClick,
    dir = "left",
}: PropsButton) => {
    return (
        <button
            onClick={onClick}
            className={`
                fixed top-6 z-50 
                ${dir === 'left' ? 'left-6' : 'right-6'}
                px-4 py-2 md:px-6 md:py-3
                bg-white/10 backdrop-blur-sm
                border border-white/20 hover:border-white/40
                text-white font-semibold text-sm md:text-base
                rounded-xl hover:bg-white/20
                transition-all duration-300
                shadow-xl hover:shadow-2xl
                hover:scale-105 active:scale-95
                group
            `}
        >
            <span className="flex items-center gap-2">
                {dir === 'left' && <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>}
                {label}
                {dir === 'right' && <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>}
            </span>
        </button>
    );
}

export default CustomButton;