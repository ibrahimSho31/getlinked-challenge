import Header from "./Header"
import SectionOne from "./sectionOne"
import SectionTwo from "./sectionTwo"
import SectionThree from "./sectionThree"
import SectionFour from "./sectionFour"
import SectionFive from "./sectionFive"
import SectionSix from "./sectionSix"
import SectionSeven from "./sectionSeven"
import SectionEight from "./sectionEight"
import SectionNine from "./sectionNine"
import Footer from "./Footer"
import LoadingSpinner from "./LoadingSpinner"
import { useState, useEffect } from "react"
import { Man, Globe, Fire, Chain, Creative } from "./assets"
const LandingPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate loading delay for demonstration purposes
      const delay = setTimeout(() => {
        setLoading(false); 
      }, 3000); 
  
      return () => clearTimeout(delay);
    }, []);

    return (
        <>
            {
                loading ? 

                <>
                <LoadingSpinner /> 
                <section className="hidden">
                {/* <Header />
                <SectionOne /> */}
                <div className="flex flex-col items-center xl:items-start w-full xl:w-[50%] text-center xl:text-left z-[30] ">
            <img
              src={Creative}
              className="absolute w-[18px] xl:w-[53px] xl:mt-[-50px] xl:ml-[450px] ml-[180px] mt-[-20px]"
               
            />
            <h1 className="clashDisplayBig text-[32px] xl:text-[70px]  flex flex-row xl:mb-[-30px]">
              getlinked Tech
            </h1>
            <h1 className="clashDisplayBig text-[32px] xl:text-[70px]  flex flex-row">
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


            <button className=" ">Register</button>
            <h1 className="text-[48px] mt-[20px] xl:mt-[-40px] xl:text-[64px] unica flex flex-row items-center">
              00<span className="text-[16px] mt-[20px] xl:mt-[30px]">H</span> 00{" "}
              <span className="text-[16px] mt-[20px] xl:mt-[30px]">M</span> 00{" "}
              <span className="text-[16px] mt-[20px] xl:mt-[30px]">S</span>
            </h1>
          </div>
                <img
              src={Man}
              className="relative mt-[-300px] xl:mt-[-600px] z-1 xl:h-[600px] xl:w-[550px] w-[338px]"
              
              style={{
                filter: "hue-rotate(230deg)",
              }}
            />
                </section>

                </>

                :
            <>
            <Header />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
            <SectionEight />
            <SectionNine />
            <Footer />
                </>
            }

            
        </>
    )
}

export default LandingPage