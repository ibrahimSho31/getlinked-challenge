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
         justify-between xl:px-[100px] px-[30px] montserrat pt-[35px] pb-[20px] text-[16px] font-normal "
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
            <Link to="/" className="px-[40px] z-20">
              <p>Timeline</p>
            </Link>
            <Link to="/" className="px-[40px] z-20">
              <p>Overview</p>
            </Link>
            <Link to="/" className="px-[40px] z-20">
              <p>FAQs</p>
            </Link>

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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`absolute top-0 text-center xl:hidden z-50 flex h-[100vh] w-full flex-col items-start justify-start 
          leading-[80px] bg-[#150E28]  transition-[0.3s] ${
            showSecondNav ? "left-[0px]" : "left-[-5100px]"
          }`}
        >
          <section className="fixed bg-[#150E28] px-[12px]  py-[12px] z-50 h-[100vh] w-full">
            <button
              className="flex flex-row items-end justify-end w-full mt-[30px] pr-[50px]"
              onClick={switcher}
            >
              <img src={Close} className="w-[15px]"   />
            </button>
            <div className="flex flex-col items-start text-left pl-[30px] w-full">
              <div className="flex flex-col items-start ">
                <Link to="/">
                  <p>Timeline</p>
                </Link>
                <Link to="/" className="my-[-20px]">
                  <p>Overview</p>
                </Link>
                <Link to="/">
                  <p>FAQs</p>
                </Link>
                <NavLink
                  to="/contactus"
                  className={({ isActive }) =>
                    isActive
                      ? "flex flex-col activeHeaderBtn  justify-center items-center font-[900] "
                      : "  h-[40px] flex flex-row items-center justify-center transition duration-300 ease-in-out"
                  }
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
