import React from "react";
import {motion, useScroll as FramerScrollParser, useTransform as ScrollInterpolation} from "framer-motion";
import {FaFacebook} from "react-icons/fa6";
import {AiFillInstagram, AiFillTwitterCircle} from "react-icons/ai";


const LandingPageNavbar = () => {
    const LandingPageNavbarOption = [
        {Name: "LogIn/SignUp", to: ""},
        {Name: "Dashboard", to: ""}
    ]

    const {scrollYProgress} = FramerScrollParser();
    const color = ScrollInterpolation(scrollYProgress, [0, 0.10], ["rgba(255,255,255,1)", "rgba(0,0,0,1)"])
    const paddingInline = ScrollInterpolation(scrollYProgress, [0, 0.10], ["15vw", "2vw"]);
    return <React.Fragment>
        <motion.nav
            style={{color, paddingInline}}
            className={`w-screen flex p-8 justify-between items-center blur_it100 fixed top-0 text-white z-[9999]`}>
            <h1 className={`text-[1.5rem] font-bold`}>D-Show</h1>
            <ul className={`flex gap-[1.5rem]`}>
                {LandingPageNavbarOption.map((item, index) => {
                    return <li
                        className={`p-2 rounded hover:bg-white hover:text-black`}
                        key={index} onClick={() => window.location.assign(`/${item.to}`)}>{item.Name}</li>
                })}
            </ul>
        </motion.nav>


        {/*side social navbar*/}


        <div
            className={`absolute p-3 flex flex-col gap-[1.5rem] transition-all duration-1000 top-1/2 -translate-y-1/2 right-0 bg-white rounded-l-[2rem]`}>
            <FaFacebook size={30} className={`hover:my-[1rem] transition-all duration-300`}/>
            <AiFillTwitterCircle size={30} className={`hover:my-[1rem] transition-all duration-300`}/>
            <AiFillInstagram size={30} className={`hover:my-[1rem] transition-all duration-300`}/>
        </div>
    </React.Fragment>
}

export default LandingPageNavbar;
