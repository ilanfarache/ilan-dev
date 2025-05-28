import ReactLogo from '../assets/svg/react-logo.svg?react';
import MdbLogo from '../assets/svg/mdb-logo.svg?react';
import JSLogo from '../assets/svg/js-logo.svg?react';
import ReduxLogo from '../assets/svg/redux-logo.svg?react';
import TailwindLogo from '../assets/svg/tailwind-logo.svg?react';
import TsLogo from '../assets/svg/ts-logo.svg?react';
import { useMemo } from 'react';




// Ajoute autant de logos que tu veux


export default function LogoGrid() {
    const logos = useMemo(() => [
        ReactLogo,
        MdbLogo,
        JSLogo,
        ReduxLogo,
        TailwindLogo,
        TsLogo
    ], []);
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center mt-10">
            {logos.map((Logo, index) => (
                <Logo
                    key={index}
                    className={`w-24 h-24 opacity-0 animate-fade-in animate-delay-${index}`}
                />
            ))}
        </div>
    );
}