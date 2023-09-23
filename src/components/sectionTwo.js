import { purpleStar, arrow, thinkBig, darkPurpleStar } from "./assets";
import { useEffect, useRef } from "react";
import styles from "./Landing.css";
const SectionTwo = () => {
  const sectwoRef = useRef(null); 
  const sectwoDivRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries?.forEach((entry) => {
          if (entry.isIntersecting) {
            
            sectwoRef.current.style.opacity = 1;
            sectwoRef.current.classList.add("slidein-r")
            sectwoDivRef.current.classList.add("slide-in-l"); 
          } else {
            
            sectwoRef.current.style.opacity = 0;
            
          }
        });
      },
      { threshold: 0.1 } 
    );

    const sectwoElement = sectwoRef.current;

    if (sectwoElement) {
      observer.observe(sectwoElement);
  
      return () => {
        observer.unobserve(sectwoElement);
      };
    }
  }, []); 

  return (
    <>
      <section
        className="flex flex-col xl:flex-row items-center z-[40] justify-between xl:px-[100px] pt-[50px] pb-[50px] 
  px-[20px] text-center xl:text-left border-[1px] border-solid border-[#ffffff2e] border-x-[0px] border-t-[0px]"
      >
        <div className="flex flex-row items-start justify-center  px-[70px]">
          <img
            src={purpleStar}
            className="flex self-center w-[10px] xl:w-[30px] mt-[-150px] xl:mr-[30px] blinking"
             
          />
          <img
            src={thinkBig}
            className="w-[490px] min-w-[264px] z-20 floating-image"
            ref={sectwoRef}
          />
          <img
            src={arrow}
            className="hidden xl:flex self-end ml-[-30px] z-20"
             
          />
        </div>
        <img src={arrow} className="w-[25px] flex xl:hidden"   />

        <div className="flex flex-col items-center pt-[20px] xl:pt-[0px]" ref={sectwoDivRef}>
          <div
            className="clashDisplay text-[25px] xl:text-[32px] flex w-full
           flex-row items-center justify-center xl:justify-between"
          >
            <h1 className="xl:w-[398px] text-[20px] xl:text-[32px] clashDisplayBig w-full">
              Introduction to getlinked <br />
              <span className="text-[#D434FE]">tech Hackathon 1.0</span>
            </h1>
            <img
              src={darkPurpleStar}
              className="blinking w-[8px] xl:w-[30px]"
               
            />
          </div>
          <p className="xl:w-[500px] w-[321px] xl:w-[535px] xl:px-[0px] px-[30px]  montserrat text-[13px] xl:text-[14px] leading-[27px]">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </section>
    </>
  );
};

export default SectionTwo;
