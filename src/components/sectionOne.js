
import {
  Chain,
  Man,
  Creative,
  Fire,
  Globe,
  Star,
  purpleLine,
  GreyStar,
  topPurple,
} from "./assets";
import { NavLink } from "react-router-dom";
import styles from "./Landing.css";
import { useEffect, useState } from "react";
const SectionOne = () => {

  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    // Define the image source URL
    const imageUrl = Man;

    // Create an image element
    const img = new Image();

    // Add an event listener to handle the image load
    img.onload = () => {
      // Once the image is loaded, update the state variable
      setImageSrc(imageUrl);
    };

    // Set the image source to trigger the load event
    img.src = imageUrl;
  }, []);

    // Set the target date to September 30th
    const targetDate = new Date("2023-09-30T00:00:00Z");

    // Calculate the remaining time
    const calculateTimeRemaining = () => {
      const currentDate = new Date();
      const timeDifference = targetDate - currentDate;
  
      if (timeDifference <= 0) {
        // Timer has reached the target date
        return { hours: "00", minutes: "00", seconds: "00" };
      }
  
      const hours = String(Math.floor((timeDifference / (1000 * 60 * 60)) % 24)).padStart(2, "0");
      const minutes = String(Math.floor((timeDifference / 1000 / 60) % 60)).padStart(2, "0");
      const seconds = String(Math.floor((timeDifference / 1000) % 60)).padStart(2, "0");
  
      return { hours, minutes, seconds };
    };
  
    const [remainingTime, setRemainingTime] = useState(calculateTimeRemaining());
  
    useEffect(() => {
      const interval = setInterval(() => {
        const updatedRemainingTime = calculateTimeRemaining();
        setRemainingTime(updatedRemainingTime);
  
        if (updatedRemainingTime.hours === "00" && updatedRemainingTime.minutes === "00" && updatedRemainingTime.seconds === "00") {
          clearInterval(interval); // Stop the timer when it reaches 00:00:00
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

    const text = "Igniting a Revolution in HR Innovation";
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const typingSpeed = 50; // Typing speed in milliseconds
  
    useEffect(() => {
      const timer = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }
      }, typingSpeed);
  
      return () => clearTimeout(timer);
    }, [currentIndex]);
    

  return (
    <>
      <section
        className="z-10 xl:pl-[80px] pt-[10px] xl:pt-[40px] flex flex-col w-full
      border-[1px] border-solid border-[#ffffff2e] border-x-[0px] justify-between"
      >
        <img
          src={topPurple}
          className="w-[900px] absolute top-0 z-1"
           
        />

        <section className="flex flex-col xl:flex-row items-center justify-between z-[10]">
          <img
            src={Star}
            alt="star"
            className="xl:flex hidden relative mt-[50px] blinking pl-[100px]"
             
          />

          <h1
            className="montserrat ovrTxt pt-[30px] xl:pt-[0px] pb-[30px] text-[16px] xl:w-full w-[330px] xl:text-[36px] 
                    italic font-[700] flex flex-col xl:pr-[50px] justify-end xl:items-end items-center"
          >
              {displayText}
            <img
              src={purpleLine}
              className="flex flex-row self-end justify-end xl:w-[253px] w-[115px] "
               
            />
          </h1>
          <img
            src={Star}
            className="w-[10px] block xl:hidden xl:w-[30px] ml-[-140px] mt-[70px] xl:mt-[100px]  xl:ml-[650px] blinking absolute"
             
          />

          <img
            src={GreyStar}
            className="w-[10px] xl:w-[30px] ml-[250px] mt-[70px] xl:mt-[100px]  xl:ml-[650px] blinking absolute"
             
          />
        </section>

        <section className="flex flex-col xl:flex-row items-center justify-between metrixBg">
          <div className="flex flex-col items-center xl:items-start w-full xl:w-[50%] text-center xl:text-left z-[30] ">
            <img
              src={Creative}
              className="absolute w-[18px] xl:w-[53px] xl:mt-[-50px] xl:ml-[450px] ml-[180px] mt-[-20px]"
               
            />
            <h1 className="clashDisplayBig ovrTxt2 text-[32px] xl:text-[70px]  flex flex-row xl:mb-[-30px]">
              getlinked Tech
            </h1>
            <h1 className="clashDisplayBig ovrTxt2 text-[32px] xl:text-[70px]  flex flex-row">
              Hackathon <span className="text-[#D434FE] pl-[5px]"> 1.0</span>{" "}
              <img
                src={Chain}
                alt="chain"
                className="w-[32px] "
                 
              />{" "}
              <img src={Fire} alt="fire" className="w-[32px] "   />
            </h1>

            <p className="montserrat text-[13px] xl:text-[20px] w-[264px] xl:w-[522px]">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>

            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col w-[172px] h-[53px] mt-[40px] mb-[0px] bodyWrap text-white rounded-[8px] justify-center items-center font-[900] "
                  : " w-[172px] h-[53px] headerBtn mt-[40px] mb-[0px] flex flex-row items-center justify-center transition duration-300 ease-in-out rounded-[8px] "
              }
            >
              <button className=" ">Register</button>
            </NavLink>

            <img
              src={GreyStar}
              className="w-[15px] block xl:hidden absolute mt-[180px] ml-[200px] xl:ml-[450px] blinking"
               
            />

            <img
              src={GreyStar}
              className="xl:flex hidden mt-[30px] ml-[450px] blinking"
               
            />

<h1 className="text-[48px] mt-[20px] xl:mt-[-40px] xl:text-[64px] unica flex flex-row items-center">
      {remainingTime.hours}{" "}
      <span className="text-[16px] mt-[20px] xl:mt-[30px]">H</span>{" "}
      {remainingTime.minutes}{" "}
      <span className="text-[16px] mt-[20px] xl:mt-[30px]">M</span>{" "}
      {remainingTime.seconds}{" "}
      <span className="text-[16px] mt-[20px] xl:mt-[30px]">S</span>
    </h1>
          </div>

          <div className=" flex flex-col imgOvr items-end justify-end xl:pt-[0px] pt-[20px] xl:mb-[-50px]">
            <img
              src={Globe}
              className=" z-10 xl:h-[600px] xl:w-[550px] blend w-[338px]"
              
            />
     {imageSrc && (
        <img
          src={imageSrc}
              className="relative mt-[-300px] xl:mt-[-600px] z-1 xl:h-[600px] xl:w-[550px] w-[338px]"
              
              style={{
                filter: "hue-rotate(230deg)",
              }}
            />
     )}
          </div>
        </section>
      </section>
    </>
  );
};

export default SectionOne;
