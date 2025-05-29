


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
            className={`mt-8 px-6 py-3 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-blue-900 font-bold rounded-full hover:bg-cyan-400 transition absolute top-10 ${dir}-10 z-100 cursor-pointe max-sm:top-0  max-sm:${dir}-5`}
        >
            {label}
        </button>
    );
}
export default CustomButton;