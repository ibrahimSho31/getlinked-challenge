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
const LandingPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate loading delay for demonstration purposes
      const delay = setTimeout(() => {
        setLoading(false); 
      }, 4000); 
  
      return () => clearTimeout(delay);
    }, []);

    return (
        <>
            {
                loading ? <LoadingSpinner /> :
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