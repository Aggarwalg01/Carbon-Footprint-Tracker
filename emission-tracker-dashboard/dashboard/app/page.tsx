"use client";
import React, {
    useEffect as JavaScriptParser,
    useRef as HTMLElementReference,
    useState as ReactLockerState
} from "react";
import {motion, useScroll as FramerScrollParser, useTransform as ScrollInterpolation} from "framer-motion";
import LandingPageNavbar from "@/app/Components/LandingPageNavbar";
import WorkingLadyAnimation from "./src/WorkingLady.json"
import Lottie from "lottie-react";
import UnderlineHeading from "@/app/Components/UnderlineHeading";
import Loader from "@/app/Components/Loader"
import ScrollCoursel from "@/app/Components/ScrollCoursel";

export default function Home() {
    (
        async () => {
            // @ts-ignore
            const locomotiveScroll = (await import("locomotive-scroll")).default;
            const LocomotiveScroll = new locomotiveScroll();
        }
    )()
    const [LoaderThrowBack, SetLoaderThrowBack] = ReactLockerState(true);
    JavaScriptParser(() => {
        setTimeout(() => SetLoaderThrowBack(false), 2500);
    }, [])


    const BlackBoxRef = HTMLElementReference<HTMLDivElement | null>(null);
    const {scrollYProgress} = FramerScrollParser();
    const width = ScrollInterpolation(scrollYProgress, [0, 0.078], ["80vw", "100vw"]);
    const y = ScrollInterpolation(scrollYProgress, [0, 0.12], ["95vh", "0vh"]);
    const borderRadius = ScrollInterpolation(scrollYProgress, [0, 0.078], ["5rem", "0rem"]);


    const FormBox = {
        borderRadius: ScrollInterpolation(scrollYProgress, [0.2, 0.32], ["3rem", "0rem"]),
        width: ScrollInterpolation(scrollYProgress, [0.2, 0.336], ["80vw", "100vw"]),
    }

    const FormBoxReference = HTMLElementReference<HTMLDivElement | null>(null);

    const [UserUpdateDetails, SetUserUpdateDetails] = ReactLockerState({});

    const [MousePosition, SetMousePosition] = ReactLockerState({x: 0, y: 0});


    JavaScriptParser(() => {
        window.addEventListener("mousemove", (e): void => {
            SetMousePosition({x: e.clientX, y: e.clientY});
        })

        return () => window.removeEventListener("mousemove", (): void => {
        });
    }, [])


    const [UserData, SetUserDate] = ReactLockerState({
        name: "",
        electricity_bill: "",
        gas_bill: "",
        oil_bill: "",
        milage: "",
        flights: "",
        newspaper: false,
        recycle: false
    })

    const [isNewspaper, setNewspaper] = ReactLockerState(false);
    const [isRecycle, setRecycle] = ReactLockerState(false);

    const NameRef = HTMLElementReference<HTMLInputElement | null>(null);
    const OilRef = HTMLElementReference<HTMLInputElement | null>(null);
    const ElecRef = HTMLElementReference<HTMLInputElement | null>(null);
    const GasRef = HTMLElementReference<HTMLInputElement | null>(null);
    const FlightsRef = HTMLElementReference<HTMLInputElement | null>(null);
    const MilageRef = HTMLElementReference<HTMLInputElement | null>(null);

    const HandleSubmit = (e) => {
        e.preventDefault();
        SetUserDate(
            {
                name: NameRef.current.value,
                electricity_bill: ElecRef.current.value,
                gas_bill: GasRef.current.value,
                oil_bill: OilRef.current.value,
                flights: FlightsRef.current.value,
                newspaper: isNewspaper,
                recycle: isRecycle,
            }
        )

        console.log(UserData);
    }


    // @ts-ignore

    return (
        <React.Fragment>
            {LoaderThrowBack && <Loader/>}
            {/*<CustomAnimatedCursor/>*/}
            <LandingPageNavbar/>
            <motion.main
                animate={{width: "100vw"}}
                initial={{width: "0vw"}}
                transition={{ease: [0.85, 0, 0.15, 1], delay: 1.5, duration: 1}}
                className={` overflow-hidden px-[15vw] pt-[6rem] flex justify-center  h-[300vh] `}>


                <div>
                    <h1 className={`flex-1 uppercase leading-[7.6rem] pt-[10rem]  text-white font-bold text-[8rem]`}>
                        D|||||||||
                        <br/>
                        Show
                    </h1>

                    <h3 className={`text-white inline-block relative font-semibold text-[1.5rem] float-end`}>
                        Crafting a better future.
                        <div className={`w-full absolute left-0 h-[5px] rounded-full bg-white -bottom-2`}/>
                    </h3>
                </div>


                <div className={`flex-1 p-10`}>
                    <Lottie animationData={WorkingLadyAnimation}/>
                </div>

            </motion.main>


            <motion.div
                ref={BlackBoxRef}
                style={{width, top: y, borderRadius}}
                className={`bg-white overflow-hidden text-black absolute shadow-[0_0_3rem_3rem] shadow-black h-[280vh] left-1/2 -translate-x-1/2 p-10`}
            >

                <UnderlineHeading content={'About Carbon Footprint: '} color={`red-300`}/>
                <ScrollCoursel/>


                <h4 className={`text-[1.5rem] text-justify mt-[8rem]`}>
                    <span className={`text-[4rem] font-bold uppercase`}>DShow</span>
                    In a world increasingly aware of the urgent need to address climate change, our company emerges as a
                    beacon of hope and practical action. Dedicated to mitigating carbon footprints, we offer innovative
                    solutions tailored to individuals. Through personalized assessments and tailored strategies, we
                    empower people to understand, reduce, and offset their carbon emissions. Our holistic approach
                    integrates technology, education, and community engagement, fostering sustainable habits that lead
                    to lasting environmental impact. By harnessing the collective power of individuals, we aim to drive
                    significant reductions in greenhouse gas emissions, contributing to a healthier planet for current
                    and future generations. Our commitment extends beyond profit.
                </h4>


            </motion.div>

            <motion.div
                ref={FormBoxReference}
                style={{
                    borderRadius: FormBox.borderRadius,
                    width: FormBox.width,
                    // @ts-ignore
                    background: `radial-gradient(circle farthest-side at ${MousePosition.x - (FormBoxReference.current?.getBoundingClientRect().left)}px ${MousePosition.y - FormBoxReference.current?.getBoundingClientRect().top}px, #6f0630 0%, black 50%)`
                }}
                className={`bg-black z-[10000] text-white left-1/2 -translate-x-1/2 absolute top-[135vh] w-full  rounded-[3rem] p-4 h-[200vh]`}>

                <UnderlineHeading content={`Entitled Form: `} color={`white`}/>


                {/*pyaar jaise koi cheez nahi hai */}
                <motion.div
                    whileInView={{
                        opacity: 1
                    }}
                    initial={{
                        opacity: 0
                    }}
                    transition={{
                        duration: 1,
                        delay: 0.5
                    }}
                    className={`w-full`}>
                    <form className={`w-full flex gap-[1rem]  flex-col items-center p-10`}>
                        <label className={` text-[1.5rem]  text-left w-full`}>Full Name: </label>
                        <input
                            ref={NameRef}
                            placeholder={`Enter name here.`}
                            className={`border-[0.5px] p-4 rounded w-full text-[1rem]  border-white bg-transparent outline-none`}/>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <label className={` text-[1.5rem]  text-left w-full`}>This month's electricity bill: (Previous
                            Bill if needed)</label>
                        <input
                            ref={ElecRef}
                            placeholder={`Enter amount here.`}
                            type={`number`}
                            className={`border-[0.5px] p-4 rounded w-full text-[1rem]  border-white bg-transparent outline-none`}/>

                        <label
                            className={` text-[1.5rem]  text-left w-full`}>This month`s gas bill:
                        </label>
                        <input
                            ref={GasRef}
                            placeholder={`Enter amount here.`}
                            type={`number`}
                            className={`border-[0.5px] p-4 rounded w-full text-[1rem]  border-white bg-transparent outline-none`}/>


                        <label
                            className={` text-[1.5rem]  text-left w-full`}>This month's oil bill:
                        </label>
                        <input
                            placeholder={`Enter amount here.`}
                            ref={OilRef}
                            type={`number`}
                            className={`border-[0.5px] p-4 rounded w-full text-[1rem]  border-white bg-transparent outline-none`}/>
                        <label
                            className={` text-[1.5rem]  text-left w-full`}>Yearly vehicle milage:
                        </label>
                        <input
                            placeholder={`Enter amount here.`}
                            ref={MilageRef}
                            type={`number`}
                            className={`border-[0.5px] p-4 rounded w-full text-[1rem]  border-white bg-transparent outline-none`}/>


                        <label
                            className={` text-[1.5rem]  text-left w-full`}>Number of flights take past this year: (If on
                            an avg 4 hours)
                        </label>
                        <input
                            ref={FlightsRef}
                            placeholder={`Enter amount here.`}
                            type={`number`}
                            className={`border-[0.5px] p-4 rounded w-full text-[1rem]  border-white bg-transparent outline-none`}/>


                        <label
                            className={` text-[1.5rem]  text-left w-full`}>Do you recycle newspaper?
                        </label>

                        <div className={`w-full flex gap-[1rem]`}>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setNewspaper(true)
                                }}
                                className={`bg-white p-3 rounded text-black flex-1 hover:scale-110 transition-all duration-300`}>Yes
                            </button>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setNewspaper(false)
                                }}
                                className={`bg-black p-3 rounded text-white flex-1 border-[0.5px] border-white hover:scale-110 transition-all duration-300`}>No
                            </button>
                        </div>


                        <label
                            className={` text-[1.5rem]  text-left w-full`}>Do you recycle aluminum & tin?
                        </label>

                        <div className={`w-full flex gap-[1rem]`}>
                            <motion.button
                                whileTap={{background: "red"}}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setNewspaper(true)
                                }}
                                className={`bg-white p-3 rounded text-black flex-1 hover:scale-110 transition-all duration-300`}>Yes
                            </motion.button>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setNewspaper(false)
                                }}
                                className={`bg-black p-3 rounded text-white flex-1 border-[0.5px] border-white hover:scale-110 transition-all duration-300`}>No
                            </button>
                        </div>

                        <button className={`bg-white p-3 text-black w-full font-bold rounded mt-5`} onClick={(e) => {
                            HandleSubmit(e);
                        }}>Submit
                        </button>
                    </form>
                </motion.div>
            </motion.div>
        </React.Fragment>
    );
}
