import {
  trophy,
  gold,
  silver,
  bronze,
  purpleStar,
  Star,
  GreyStar,
  Flare5,
  FLare6,
} from "./assets";
import styles from "./Landing.css";

const SectionSeven = () => {
  return (
    <section className="flex flex-col xl:flex-row montserrat overflow-x-hidden items-center justify-between border-[1px]  xl:px-[100px] pt-[70px] xl:pt-[100px]  border-solid border-[#ffffff2e] border-x-[0px] border-t-[0px]">
      <section className="flex flex-col items-center xl:mt-[-150px]">
        <div className="xl:text-left text-center xl:hidden flex flex-col ">
          <img
            src={purpleStar}
            className="w-[10px] xl:w-[30px] xl:hidden block mt-[-50px] ml-[50px] absolute xl:ml-[-600px] blinking"
            loading="lazy"
          />
          <img
            src={purpleStar}
            className="w-[10px] xl:w-[30px] xl:hidden block absolute mt-[50px] ml-[300px] blinking"
            loading="lazy"
          />
          <h1 className="clashDisplayBig text-[20px] z-40 xl:text-[32px]">
            Prizes and <br /> <span className="text-[#D434FE]">Rewards</span>
          </h1>
          <p className="text-[12px] xl:text-[16px] w-[277px] z-40 font-[400] pb-[50px] xl:pb-[0px]">
            Highlight of the prizes or rewards for winners{" "}
            <br className="hidden xl:block" /> and for participants.
          </p>
        </div>
        <img
          src={FLare6}
          className="absolute w-[270px] xl:w-[600px] xl:ml-[200px] left-0 mt-[50px] xl:mt-[-100px] z-10"
          loading="lazy"
        />
        <img
          src={trophy}
          className="w-[321px] xl:w-[548px] z-40"
          loading="lazy"
        />
        <img
          src={Star}
          className="w-[20px] absolute ml-[40%] blinking hidden xl:flex"
          loading="lazy"
        />
        <img
          src={Star}
          className="w-[10px] xl:w-[20px] absolute mt-[550px] ml-[250px] blinking"
          loading="lazy"
        />
      </section>

      <section className="flex xl:w-[500px] w-[200px] xl:pr-[100px] flex-col items-center justify-center">
        <div className="flex flex-row ">
          <img
            src={purpleStar}
            className="w-[10px] xl:w-[30px] hidden xl:block absolute xl:ml-[-600px] blinking"
            loading="lazy"
          />
          <div className="xl:text-left z-40 hidden xl:flex text-center flex-col">
            <h1 className="clashDisplayBig text-[32px]">
              Prizes and <br /> <span className="text-[#D434FE]">Rewards</span>
            </h1>
            <p className="text-[16px] font-[400]">
              Highlight of the prizes or rewards for winners <br /> and for
              participants.
            </p>
          </div>
          <img
            src={purpleStar}
            className="w-[30px] hidden xl:block absolute xl:ml-[300px] blinking mt-[70px]"
            loading="lazy"
          />
          <img
            src={Star}
            className="w-[10px] xl:w-[20px] ml-[-100px] absolute xl:ml-[500px] blinking xl:mt-[250px]"
            loading="lazy"
          />
        </div>

        <div className="flex w-[200px] flex-row pt-[0px] xl:pt-[260px] items-center justify-center">
          <div
            className="bg-[#D434FE1F] z-40 px-[20px]  mt-[40px] xl:mt-[-200px]  rounded-[8px] w-[90px] xl:w-[212px] flex flex-col items-center justify-center
                     h-[125px] xl:h-[290px] border-[1px] border-solid border-[#D434FE]"
          >
            <img
              src={silver}
              className="w-[179px] min-w-[80px] relative top-[-80px] xl:top-[-120px] mb-[-80px]"
              loading="lazy"
            />
            <h1 className="text-[12px] xl:text-[36px] font-[900]">2nd</h1>
            <p className="text-[12px] xl:text-[24px] font-[600]">Runner</p>
            <h2 className="text-[14px] xl:text-[32px] text-[#D434FE] font-[900]">
              N300,000
            </h2>
          </div>

          <div className="flex flex-col items-center justify-between mt-[50px]">
            <img
              src={gold}
              className="w-[125px] xl:w-[296px] relative z-[40] top-[-20px] xl:top-[-200px]"
              loading="lazy"
            />
            <div
              className="bg-[#903AFF1F] relative top-[-60px] xl:top-[-300px] rounded-[8px] w-[90px] xl:w-[212px] flex flex-col items-center justify-center
                     h-[147px] xl:h-[320px] border-[1px] border-solid border-[#903AFF] mx-[10px] xl:mx-[30px]  "
            >
              <h1 className="text-[12px] xl:text-[36px] font-[900] ">1st</h1>
              <p className="text-[12px] xl:text-[24px] font-[600]">Runner</p>
              <h2 className="text-[14px] xl:text-[32px] text-[#D434FE] font-[900]">
                N400,000
              </h2>
            </div>
          </div>

          <div
            className="bg-[#D434FE1F] z-40 px-[20px]  rounded-[8px] w-[90px] xl:w-[212px] 
                    flex flex-col items-center justify-center mt-[40px] xl:mt-[-200px]
                     h-[125px] xl:h-[290px] border-[1px] border-solid border-[#D434FE]"
          >
            <img
              src={bronze}
              className="w-[179px] min-w-[80px] relative top-[-80px] xl:top-[-120px] mb-[-80px]"
              loading="lazy"
            />
            <h1 className="text-[12px] xl:text-[36px] font-[900]">3rd</h1>
            <p className="text-[12px] xl:text-[24px] font-[600]">Runner</p>
            <h2 className="text-[14px] xl:text-[32px] text-[#D434FE] font-[900]">
              N150,000
            </h2>
          </div>

          <img
            src={Flare5}
            className="absolute right-0 w-[200px] xl:w-[300px] z-10"
            loading="lazy"
          />
        </div>
        <img
          src={GreyStar}
          className="w-[10px] xl:w-[20px] absolute xl:ml-[200px] ml-[100px] blinking mt-[300px] xl:mt-[550px]"
          loading="lazy"
        />
      </section>
    </section>
  );
};

export default SectionSeven;
