import React, {useEffect as JavascriptParser, useState as ReactLockerState} from "react";
import {motion} from "framer-motion";

const CustomAnimatedCursor = () => {
    const [Window, SetWindow] = ReactLockerState({x: 0, y: 0});
    JavascriptParser(() => {
        window.addEventListener("mousemove", (e): void => {
            SetWindow({x: e.clientX, y: e.clientY});
        })

        return () => window.removeEventListener("mousemove", () => {
        });
    }, [])
    return <React.Fragment>
        <motion.div animate={{x: Window.x - 12, y: Window.y - 12}} transition={{type: "tween", ease: "backOut"}}
                    className={`bg-white z-[9999] border-[1px] border-black w-[1.5rem] h-[1.5rem] rounded-full fixed pointer-events-none`}/>

    </React.Fragment>
}

export default CustomAnimatedCursor;