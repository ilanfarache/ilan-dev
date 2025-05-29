// BackgroundEffect.tsx
export const BackgroundEffect = () => {
    return (
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#1f2937] via-[#111827] to-black">
            <div className="absolute inset-0 opacity-10 mix-blend-overlay" />
        </div>
    );
};
