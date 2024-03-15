import React, {useEffect as JavaScriptParser, useState as ReactLockerState} from "react";
import {motion} from "framer-motion";


const Loader = () => {
    const [Percentage, SetPercentage] = ReactLockerState(0);

    JavaScriptParser((): void => {
        if (Percentage < 100) setTimeout(() => SetPercentage(Percentage => Percentage + 1), 11)
    }, [Percentage])
    return <motion.div
        animate={{width: "0vw"}}
        transition={{duration: 1, delay: 1.5, ease: [0.85, 0, 0.15, 1]}}
        initial={{width: "100vw"}}
        className={`bg-white z-[9999] overflow-hidden text-black origin-right flex justify-end items-end text-[12rem] font-bold fixed h-screen w-screen top-0 left-0 `}>{Percentage}%</motion.div>
}

export default Loader;