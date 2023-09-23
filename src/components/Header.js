import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import { Logo, Hamburger, Close } from "./assets";
import styles from "./Landing.css";
const Header = () => {
  const [showSecondNav, setShowSecondNav] = useState(false);

  const switcher = () => {
    setShowSecondNav(!showSecondNav);
  };

  return (
    <>
      <section
        className="flex flex-row items-center 
         justify-between xl:px-[100px] px-[30px] inter pt-[35px] pb-[20px] text-[16px] font-normal "
      >
        <div className="z-40">
          <NavLink to="/">
            <img
              src={Logo}
              alt="Logo"
               
              className="w-[100px] z-[45]"
            />
          </NavLink>
        </div>

        <div className="hidden xl:flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-between ">
            <a href="/#timeline" className="px-[40px] z-20">
              Timeline
            </a>
            <Link to="/" className="px-[40px] z-20">
              <p>Overview</p>
            </Link>
            <a href="/#faqs" className="px-[40px] z-20">
              FAQs
            </a>

            <NavLink
              to="/contactus"
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col mr-[60px] w-[25%] activeHeaderBtn rounded-[8px] justify-center py-[10px] items-center font-[900] "
                  : " mr-[60px] w-[25%] h-[40px] flex flex-row items-center justify-center transition duration-300 ease-in-out rounded-[8px] "
              }
            >
              <p className="px-[40px] pr-[100px]">Contact</p>
            </NavLink>
          </div>

          <div>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col w-[172px] h-[53px]  bodyWrap text-white rounded-[8px] justify-center items-center font-[900] "
                  : " w-[172px] h-[53px] headerBtn  flex flex-row items-center justify-center transition duration-300 ease-in-out rounded-[8px] "
              }
            >
              <button className=" ">Register</button>
            </NavLink>
          </div>
        </div>

        <button onClick={switcher} className="z-50 xl:hidden flex">
          <img src={Hamburger} onClick={switcher}   />
        </button>

        <motion.ul
  initial={{ opacity: 0, left: "-1600px" }}
  animate={{
    opacity: showSecondNav ? 1 : 0,
    left: showSecondNav ? "0px" : "-1600px",
  }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className={`absolute top-0 text-center xl:hidden z-50 flex h-[100vh] w-full flex-col items-start justify-start 
          leading-[80px] bg-[#150E28]  transition-[0.2s] `}
        >
          <section className="fixed bg-[#150E28] px-[12px]  py-[12px] z-50 h-[100vh] w-full">
            <button
              className="flex flex-row  items-end justify-end w-full mt-[30px] pr-[30px]"
              
            >
            
            <img src="/images/close.png" className="w-[40px] " onClick={switcher}  />
            
            
          
              
            </button>
            <div className="flex z-50 flex-col items-start text-left pl-[30px] w-full">
              <div className="flex flex-col z-50 items-start ">
                <a href="/#timeline"
                onClick={switcher}>
                  Timeline
                </a>
                <Link to="/" className="my-[-20px]"
                onClick={switcher}>
                  <p>Overview</p>
                </Link>
                <a href="/#faqs"
                onClick={switcher}>
                  FAQs
                </a>
                <NavLink
                  to="/contactus"
                  className={({ isActive }) =>
                    isActive
                      ? "mt-[-20px] flex flex-col activeHeaderBtn  justify-center items-center font-[900] "
                      : "mt-[-20px] flex flex-row items-center justify-center transition duration-300 ease-in-out"
                  }
                  onClick={switcher}
                >
                  <p>Contact</p>
                </NavLink>
              </div>

              <div>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive
                      ? "flex flex-col w-[172px] h-[53px] mt-[20px] bodyWrap text-white rounded-[8px] justify-center items-center font-[900] "
                      : " w-[172px] h-[53px] headerBtn  mt-[20px] flex flex-row items-center justify-center transition duration-300 ease-in-out rounded-[8px] "
                  }
                  onClick={switcher}
                >
                  <button className=" ">Register</button>
                </NavLink>
              </div>
            </div>
          </section>
        </motion.ul>
      </section>
    </>
  );
};

export default Header;
