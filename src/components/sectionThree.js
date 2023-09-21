import styles from "./Landing.css";
import { Woman, topPurple, Flare5 } from "./assets";
const SectionThree = () => {
  return (
    <>
      <section
        className="flex flex-col-reverse xl:flex-row items-center z-[50] justify-between 
              xl:px-[0px] xl:pt-[50px] pb-[30px] 
  px-[20px] text-center xl:text-left border-[1px] border-solid
   border-[#ffffff2e] border-x-[0px] border-t-[0px]"
      >
        <img
          src={topPurple}
          className=" w-[300px] mb-[400px] xl:w-[1200px] left-[-50px] absolute xl:mt-[400px] z-10 xl:left-[-120px]"
          loading="lazy"
        />

        <div className="z-[50] xl:px-[100px]">
          <h1 className="clashDisplayBig xl:text-[32px] text-[20px] z-40 pb-[20px]">
            Rules and <br />
            <span className="text-[#D434FE]">Guidelines</span>
          </h1>
          <p className="xl:w-[500px] w-full z-40  montserrat text-[13px] xl:text-[14px] leading-[27px]">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
        <img
          src={Flare5}
          className="absolute right-0 w-[150px] mb-[-200px] xl:mt-[550px] xl:w-[300px] z-10"
          loading="lazy"
        />
        <div className="z-40">
          <img
            src={Woman}
            className="xl:w-[664px] w-[294px] z-40"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
};

export default SectionThree;
