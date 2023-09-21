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
                <Header />
                <img
              src={Creative}
              className="absolute w-[18px] xl:w-[53px] xl:mt-[-50px] xl:ml-[450px] ml-[180px] mt-[-20px]"
               
            />
                <img
                src={Chain}
                alt="chain"
                className="w-[32px] "
                 
              />{" "}
              <img src={Fire} alt="fire" className="w-[32px] "   />
                <h1 className="text-[48px] mt-[20px] xl:mt-[-40px] xl:text-[64px] unica flex flex-row items-center">
              00<span className="text-[16px] mt-[20px] xl:mt-[30px]">H</span> 00{" "}
              <span className="text-[16px] mt-[20px] xl:mt-[30px]">M</span> 00{" "}
              <span className="text-[16px] mt-[20px] xl:mt-[30px]">S</span>
            </h1>
                <div className=" flex flex-col items-end justify-end xl:pt-[0px] pt-[20px] xl:mb-[-50px]">
            <img
              src={Globe}
              className="absolute z-10 xl:h-[600px] xl:w-[550px] blend w-[338px]"
              
            />
            <img
              src={Man}
              className=" z-1 xl:h-[600px] xl:w-[550px] w-[338px]"
              
              style={{
                filter: "hue-rotate(230deg)",
              }}
            />
          </div>
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