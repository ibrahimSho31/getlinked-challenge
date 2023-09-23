import styles from "./Landing.css";
import {
  thinker,
  smallMark,
  bigMark,
  plus,
  darkPurpleStar,
  purpleStar,
  GreyStar,
  Star,
} from "./assets";
import { useEffect, useRef } from "react";

const SectionFive = () => {
  const secfiveRef = useRef(null); 
  const slidingDiv3Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries?.forEach((entry) => {
          if (entry.isIntersecting) {
            
            secfiveRef.current.style.opacity = 1;
            slidingDiv3Ref.current.classList.add("slide-in-r"); 
          } else {
            
            secfiveRef.current.style.opacity = 0;
          }
        });
      },
      { threshold: 0.1 } 
    );

    const secfiveElement = secfiveRef.current;

    if (secfiveElement) {
      observer.observe(secfiveElement);
  
      return () => {
        observer.unobserve(secfiveElement);
      };
    }
  }, []); 

  const questions = [
    {
      id: 1,
      question: "Can I work on a project I started before the hackathon?",
    },
    {
      id: 2,
      question: "What happens if I need help during the hackathon?",
    },
    {
      id: 3,
      question: "What happens if I don't have an idea for a project?",
    },
    {
      id: 4,
      question: "Can I join a team or do I have to come with one?",
    },
    {
      id: 5,
      question: "What happens after the hackathon ends",
    },
    {
      id: 6,
      question: "Can I work on a project I started before the hackathon?",
    },
  ];

  return (
    <>
      <section
        className="flex flex-col xl:flex-row items-center z-[40] justify-between 
              xl:px-[0px] pt-[20px] xl:pt-[100px] pb-[30px]  overflow-x-hidden
  px-[20px] text-center xl:text-left border-[1px] border-solid
   border-[#ffffff2e] border-x-[0px] border-t-[0px]"
   id="faqs"
      >
        <div className="z-[40] xl:px-[150px] mb-[100px] xl:mb-[0px]" ref={slidingDiv3Ref}>
          <img
            src={darkPurpleStar}
            className="w-[15px] xl:w-[30px] xl:1-[30px] xl:ml-[-30px] xl:pb-[20px] blinking"
             
          />
          <h1 className="clashDisplayBig xl:text-[32px] text-[20px] pb-[20px]">
            Frequently Ask <br />
            <span className="text-[#D434FE]">Question</span>
          </h1>
          <p className="xl:w-[500px] w-full   montserrat text-[13px] xl:text-[14px] leading-[27px] pb-[50px]">
            We got answers to the questions that you might <br /> want to ask
            about <span className="font-[700]"> getlinked Hackathon 1.0</span>
          </p>

          {questions.map((question, id) => (
            <div key={id}>
              <div className="flex flex-row items-center justify-between pb-[15px]">
                <p className="montserrat text-[14px] text-left">
                  {question.question}
                </p>
                <img src={plus}   />
              </div>

              <hr className="bg-[#D434FE] w-full h-[2px] border-none mb-[30px]" />
            </div>
          ))}
        </div>

        <div>
          <div className="flex flex-row items-center justify-center xl:pr-[300px] absolute mt-[-80px]">
            <img
              src={smallMark}
              className="mt-[50px] w-[30px] ml-[50px] "
               
            />
            <img
              src={bigMark}
              className="xl:ml-[80px] ml-[35px] mr-[20px] w-[50px] xl:mr-[40px]"
               
            />
            <img
              src={purpleStar}
              className=" mr-[20px] blinking xl:mr-[40px]"
               
            />
            <img
              src={smallMark}
              className="mt-[50px] w-[30px]"
               
            />
          </div>

          <div className="flex flex-col xl:pr-[50px] justify-center ">
            <img
              src={purpleStar}
              className="w-[20px] absolute mt-[-200px] xl:mt-[-400px] ml-[50px] blinking"
               
            />
            <div className="flex flex-row">
              <img
                src={GreyStar}
                className=" blinking xl:flex hidden w-[30px]"
                 
              />
              <img
                src={GreyStar}
                className=" blinking flex xl:hidden absolute mt-[150px] w-[20px]"
                 
              />
              <img
                src={thinker}
                className="xl:ml-[-100px] min-w-[322px] floating-image"
                ref={secfiveRef}
              />
            </div>

            <div className="flex flex-row items-center justify-center">
              <img src={Star} className="ml-[200px] blinking"   />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionFive;
