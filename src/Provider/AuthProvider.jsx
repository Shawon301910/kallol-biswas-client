import Lenis from "lenis";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [directionDev, setDirectionDev] = useState("down");

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.3,
            duration: 1,
            easing: (t) => Math.sin((t * Math.PI) / 2),
        });

        lenis.on("scroll", (e) => {
            if (e.direction === 1) {
                setDirectionDev("down");
            } else {
                setDirectionDev("up");
            }
        });

        const ref = time => {
            lenis.raf(time);
            requestAnimationFrame(ref);
        };

        requestAnimationFrame(ref);
    }, []);

    const info = {
        directionDev
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;