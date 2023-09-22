import {
  Logo,
  Instagram,
  x,
  LinkedIn,
  Facebook,
  Location,
  Phone,
  Star,
  GreyStar,
  purpleStar,
} from "./assets";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    {
      id: 1,
      name: "Overview",
    },
    {
      id: 2,
      name: "Timeline",
    },
    {
      id: 3,
      name: "FAQs",
    },
    {
      id: 4,
      name: "Register",
    },
  ];

  const scrollToTimeline = () => {
    const timeline = document.getElementById("timeline");
    timeline.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  const scrollToFaqs = () => {
    const faqs = document.getElementById("faqs");
    faqs.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  const scrollToPrivacy = () => {
    const privacy = document.getElementById("privacyPolicy");
    privacy.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
 
  return (
    <section className="bg-[#100B20]  montserrat text-left flex flex-col items-center w-[100] py-[100px] px-[70px] xl:px-[0px] ftr">
      <section className="flex xl:w-[80%] w-[100%] flex-col xl:flex-row items-start xl:items-center justify-between xl:h-[201px]">
        <img
          src={Star}
          className="w-[15px] xl:w-[20px] self-start blinking absolute ml-[-40px] xl:relative xl:ml-[0px] mt-[70px]"
           
        />
        <div className="flex flex-col items-start xl:ml-[20px] justify-between h-[100%] ">
          <section>
            <img src={Logo}   />
            <p className="xl:w-[412px] text-[12px] leading-[20px] pt-[10px] w-[270px] overText">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </section>

          <section className="flex flex-row items-center justify-start w-full text-[12px] pt-[30px] xl:pt-[0px]">
            <p className="xl:mr-[30px]r">Terms of Use</p>

            <hr className="bg-[#D434FE] w-[2px] h-[20px] xl:h-[100%] border-none mx-[30px]" />
            <p onClick={scrollToPrivacy} className="cursor-pointer">Privacy Policy</p>
          </section>
        </div>

        <div className="flex flex-col items-start h-[100%] py-[50px] xl:py-[0px]">
          <h1 className="text-[#D434FE] text-[14px] font-[600]">
            Userful Links
          </h1>
          
          <div className="py-[10px]">
          <Link to='/register' className="text-[12px] font-[400] ">
                Overview
                </Link>
          </div>

          <div className="pb-[10px]">
          <button className="text-[12px] font-[400] "
                onClick={scrollToTimeline}
                >
                Timeline
                </button>
</div>

<div className="pb-[10px]">
<button onClick={scrollToFaqs} className="text-[12px] font-[400] ">
                FAQs
                </button>
</div>

<div className="pb-[20px]">
<Link to='/register' className="text-[12px] font-[400] ">
                Register
                </Link>
</div>


          <div className="flex flex-row items-center justify-between w-full">
            <p className="text-[#D434FE] text-[12px] pr-[10px]">Follow us</p>
            <img
              src={Instagram}
              className="w-[24px] mr-[10px]"
               
            />
            <img src={x} className="w-[19px] mr-[10px]"   />
            <img src={Facebook} className="w-[10px] mr-[10px]"   />
            <img src={LinkedIn} className="w-[24px]"   />
          </div>
        </div>

        <img
          src={GreyStar}
          className="w-[20px] self-start blinking hidden xl:block"
           
        />

        <div className="h-[100%]">
          <h1 className="text-[#D434FE] text-[14px] font-[600] pb-[10px]">
            Contact Us
          </h1>

          <div className="flex flex-row items-center pb-[20px]">
            <img src={Phone} className="w-[13px] mr-[15px]"   />
            <a className="text-[12px] font-[400]" href="tel:+2346707653444">+234 6707653444</a>
          </div>

          <div className="flex flex-row items-start">
            <img src={Location} className="w-[13px] mr-[15px]"   />
            <p className="text-[12px] font-[400] w-[89px] mt-[-2px]">
              27,Alara Street Yaba 100012 Lagos State
            </p>
          </div>
        </div>

        <img
          src={Star}
          className="w-[10px]  xl:w-[20px] self-end blinking"
           
        />
      </section>

      <section className="mt-[80px] flex flex-col items-center">
        <img
          src={purpleStar}
          className="w-[10px] xl:w-[20px] mb-[30px] blinking"
           
        />
        <h1 className="text-[12px] font-[400]">
          All rights reserved. © getlinked Ltd.
        </h1>
      </section>
    </section>
  );
};

export default Footer;
