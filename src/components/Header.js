import { useState } from "react"
import { motion } from "framer-motion"

import { Logo, Hamburger } from "./assets"
import styles from "./Landing.css"
const Header = () => {
    const [showSecondNav, setShowSecondNav] = useState(false);

    const switcher = () => {
      setShowSecondNav(!showSecondNav);
    };

    console.log(showSecondNav)

    
    return (
        <>
        <section
        className="flex flex-row items-center 
         justify-between xl:px-[100px] px-[30px] montserrat pt-[35px] pb-[20px] text-[16px] font-normal "

        >
        <div className="">
        <img 
            src={Logo}
            alt="Logo"
            loading="lazy"
            className="w-[100px]"
        />
        </div>

        <div className="hidden xl:flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-between ">
        <a className="px-[40px]">Timeline</a>
            <a className="px-[40px]">Overview</a>
            <a className="px-[40px]">FAQs</a>
            <a className="px-[40px] pr-[100px]">Contact</a>
        </div>

        <div>
            <button
            className="headerBtn w-[172px] h-[53px]"
            >
                Register
            </button>
        </div>
        </div>

        <button
        onClick={switcher}
        className="z-50 xl:hidden flex"
        >
            <img 
                src={Hamburger}
                onClick={switcher}
            />
            
        </button>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`absolute top-[75px] text-center z-50 flex h-[100%] w-full flex-col items-start justify-start 
          leading-[80px] bg-[#100B20] px-[12px] py-[12px] transition-[0.3s] ${
            showSecondNav ?  "left-[0px]"  : "left-[-5100px]"
          }`}
        >

<div className="flex flex-col items-center justify-between w-full">
        <div className="flex flex-col items-center justify-between ">
        <a className="">Timeline</a>
            <a className="">Overview</a>
            <a className="">FAQs</a>
            <a className=" ">Contact</a>
        </div>

        <div>
            <button
            className="headerBtn w-[172px] h-[53px] flex flex-row items-center justify-center"
            >
                Register
            </button>
        </div>
        </div>

        </motion.ul>


        </section>
        </>
    )
}

export default Header