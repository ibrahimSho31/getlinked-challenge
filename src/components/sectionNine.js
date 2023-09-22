import {
  lock,
  manOnLock,
  check,
  GreyStar,
  darkPurpleStar,
  Star,
  purpleStar,
  Flare2,
} from "./assets";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const SectionNine = () => {
  const secnineRef = useRef(null); 
  const slidingDiv4Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries?.forEach((entry) => {
          if (entry.isIntersecting) {
            
            secnineRef.current.style.opacity = 1;
            slidingDiv4Ref.current.classList.add("slide-in-r"); 
          } else {
            
            secnineRef.current.style.opacity = 0;
          }
        });
      },
      { threshold: 0.1 } 
    );

    const secnineElement = secnineRef.current;

    if (secnineElement) {
      observer.observe(secnineElement);
  
      return () => {
        observer.unobserve(secnineElement);
      };
    }
  }, []); 

  const policies = [
    {
      id: 1,
      policy:
        "The Standard License grants you a non-exclusive right to navigate and register for our event",
    },
    {
      id: 2,
      policy:
        "You are licensed to use the item available at any free source sites, for your project developement",
    },
  ];

  return (
    <section
      className="
        px-[30px] flex flex-col xl:flex-row items-center xl:items-start justify-between montserrat xl:px-[130px] py-[50px]
        "
    >
      <section className="text-center xl:text-left" ref={slidingDiv4Ref} id="privacyPolicy">
        <img
          src={GreyStar}
          className="w-[15px] mt-[-20px] ml-[70%] xl:w-[30px] absolute xl:ml-[330px] blinking"
           
        />

        <img
          src={Flare2}
          className="absolute w-[500px] left-[-150px] mt-[550px] z-10"
           
        />
        <h1 className="clashDisplayBig text-[20px] xl:text-[32px] pt-[20px]">
          Privacy Policy and <br />{" "}
          <span className="text-[#D434FE]"> Terms</span>
        </h1>

        <h2 className="text-[12px] xl:text-[14px] text-[#FFFFFFBF] py-[20px]">
          Last updated on September 12, 2023
        </h2>
        <img
          src={darkPurpleStar}
          className="w-[15px] xl:w-[30px] absolute mt-[50px] ml-[70%] xl:ml-[540px] xl:mt-[-50px] blinking"
           
        />

        <p className="text-[12px] xl:text-[14px] xl:w-[438px] font-[400] pb-[50px]">
          Below are our privacy & policy, which outline a lot of goodies. it’s
          our aim to always take of our participant
        </p>

        <img
          src={darkPurpleStar}
          className="w-[10px] xl:w-[30px] absolute ml-[-15px] xl:ml-[-50px] mt-[350px] blinking"
           
        />

        <section
          className="bg-[#D9D9D908] w-full xl:w-[569px] p-[20px] xl:p-[50px] rounded-[5px]
                 border-solid border-[1px] border-[#D434FE] flex flex-col z-40 "
        >
          <p className="text-[12px] xl:text-[14px] leading-[30px]">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>

          <h1 className="pt-[30px] pb-[15px] text-[#D434FE] text-[16px] font-[700] text-left">
            Licensing Policy
          </h1>
          <h2 className="text-[12px] xl:text-[14px] pb-[20px] text-left z-10">
            Here are terms of our Standard License:
          </h2>

          {policies.map((policy, id) => (
            <div
              key={id}
              className="flex flex-row z-40 items-start pb-[20px] text-left"
            >
              <img
                src={check}
                className="w-[17px] xl:w-[20px] mr-[20px]"
                 
              />
              <p className="text-[12px] xl:text-[14px] leading-[21px] xl:leading-[30px] mt-[-10px] ovrPlc">
                {policy.policy}
              </p>
            </div>
          ))}


          <Link
                  to="/register"
                  className="headerBtn self-center w-[122px] z-40 montserrat
                    xl:w-[172px] h-[40px] xl:h-[53px] my-[30px] text-[12px] flex flex-row items-center justify-center"
                >
                  Read More
                </Link>
        </section>
      </section>

      <img
        src={Star}
        className="w-[10px] hidden xl:block absolute xl:ml-[75%] xl:mt-[150px] blinking"
         
      />
      <section className="flex flex-col items-center justify-center xl:ml-[-100px] xl:mt-[-200px] mt-[-40px]">
        <img
          src={lock}
          className="absolute   z-10 xl:ml-[70px] w-[249px] xl:w-[530px]"
           
        />
        <img
          src={manOnLock}
          className="relative z-10 pt-[200px] xl:pt-[300px] xl:w-[559px] w-[269px] floating-image"
          ref={secnineRef}
          alt="Man On Lock"
        />

        <img
          src={purpleStar}
          className="w-[15px] xl:ml-[-200px] ml-[-280px] mt-[-150px] absolute xl:mt-[550px] blinking"
           
        />
        <img
          src={Star}
          className="w-[10px] xl:ml-[-350px] mt-[-130px] ml-[150px] absolute xl:mt-[750px] blinking"
           
        />
                <img
          src={Star}
          className="w-[10px] block xl:hidden mt-[400px] ml-[-180px] xl:w-[30px] xl:ml-[650px] absolute xl:mt-[750px] blinking z-10"
           
        />
        <img
          src={GreyStar}
          className="w-[10px] mt-[430px] ml-[280px] xl:w-[30px] xl:ml-[650px] absolute xl:mt-[750px] blinking z-10"
           
        />
      </section>
    </section>
  );
};

export default SectionNine;
