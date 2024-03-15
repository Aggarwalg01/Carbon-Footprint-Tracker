import React from "react";
import {motion, useScroll as FramerScrollParser, useTransform as ScrollInterpolation} from "framer-motion";


const ScrollCoursel = () => {

    const ScrollCourselOptions = [
        {},
        {},
        {},
        {},
        {}
    ]

    const {scrollYProgress} = FramerScrollParser();
    const x = ScrollInterpolation(scrollYProgress, [0.02, 0.2], ["50%", "-100%"]);
    return <motion.div
        style={{marginLeft: x}}
        className={`w-[200vw] flex gap-[1.5rem] mt-10`}>
        {ScrollCourselOptions.map((item, index) => {
            return <div key={index} className={`bg-[#f00e68] h-[20rem] rounded-2xl w-[35rem]`}/>
        })}
    </motion.div>
}

export default ScrollCoursel;
