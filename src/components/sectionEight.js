import {
  vuzual,
  winWise,
  paybox,
  libertyAssured,
  libertyPay,
  whisper,
  Flare3,
  Flare4,
  darkPurpleStar,
  purpleStar,
  Star,
} from "./assets";

const SectionEight = () => {
  return (
    <section
      className="montserrat flex flex-col items-center py-[50px]
        border-[1px] border-solid border-[#ffffff2e] border-x-[0px] border-t-[0px]
        "
    >
      <h1 className="clashDisplayBig text-[20px] xl:text-[32px]">
        Partners and Sponsors
      </h1>

      <p className="text-[12px] w-[286px] xl:w-[452px] z-40 xl:text-[14px] leading-[27px] pt-[20px]">
        Getlinked Hackathon 1.0 is honored to have the following major{" "}
        <br className="hidden xl:block" /> companies as its partners and
        sponsors
      </p>
      <img
        src={darkPurpleStar}
        className="absolute mr-[65%] mt-[160px] xl:left-[200px] xl:mt-[180px] blinking w-[15px] xl:w-[30px]"
        loading="lazy"
      />

      <img
        src={Flare4}
        className="absolute left-0 w-[200px] mt-[70px] xl:mt-[0px] xl:w-[500px] z-10"
        loading="lazy"
      />

      <section
        className="border-[1px] border-solid z-40 border-[#D434FE] rounded-[5px] xl:px-[200px] 
             xl:py-[130px] h-[128px] xl:h-[560px] w-[80%] flex flex-col items-center mt-[50px]"
      >
        <img
          src={purpleStar}
          className="absolute w-[15px] xl:w-[30px] mt-[40px] ml-[30px] xl:mt-[80px] xl:ml-[100px] blinking"
          loading="lazy"
        />
        <div className="flex flex-row items-center justify-center w-full h-[100%] w-[30px]">
          <div className="flex z-40 flex-col py-[20px] pr-[10px] justify-between items-center h-[100%]">
            <img
              src={libertyAssured}
              className="w-[31px] z-40 xl:w-[120px]"
              loading="lazy"
            />
            <hr className="xl:w-[200px] w-[100%] h-[3px] bg-[#D434FE] border-none" />
            <img
              src={whisper}
              className="w-[39px] z-40 xl:w-[147px]"
              loading="lazy"
            />
          </div>

          <div className="flex z-40 flex-col mx-[10px] justify-between items-center h-[100%]  xl:mt-[15px]">
            <div className="flex flex-row h-full ">
              <hr className="w-[3px] h-[70%] xl:h-[80%] bg-[#D434FE] border-none mt-[10px]" />

              <img
                src={libertyPay}
                className="w-[56px] z-40 xl:w-[213px] mx-[20px] xl:mt-[-30px]"
                loading="lazy"
              />

              <hr className="w-[3px] h-[70%] xl:h-[80%] bg-[#D434FE] border-none mt-[10px]" />
            </div>

            <hr className="xl:w-[200px] w-[50px] h-[5px] bg-[#D434FE] border-none" />

            <div className="flex flex-row h-full xl:hidden">
              <hr className="w-[3px] h-[70%] xl:h-[80%] bg-[#D434FE] border-none mt-[10px]" />
              <img
                src={paybox}
                className="w-[54px] z-40 xl:hidden block  xl:w-[213px] mx-[20px]"
                loading="lazy"
              />
              <hr className="w-[3px] h-[70%] xl:h-[80%] bg-[#D434FE] border-none mt-[10px]" />
            </div>

            <div className="hidden xl:flex flex-row h-full xl:pt-[30px] w-full">
              <hr className="w-[3px] h-[80%] bg-[#D434FE] border-none" />
              <img
                src={paybox}
                className="w-[54px] z-40 xl:w-[213px] xl:mx-[20px]"
                loading="lazy"
              />
              <hr className="w-[3px] h-[80%] bg-[#D434FE] border-none" />
            </div>
          </div>

          <div className="flex z-40 flex-col py-[20px] pl-[10px] items-center justify-between h-[100%] mt-[-14px] xl:mt-[-54px]">
            <img
              src={winWise}
              className="w-[34px] z-40 xl:w-[131px]"
              loading="lazy"
            />
            <hr className="xl:w-[200px] w-[100%] h-[3px] bg-[#D434FE] border-none xl:ml-[-20px]" />
            <img
              src={vuzual}
              className="w-[49px] z-40 xl:w-[231px]"
              loading="lazy"
            />
          </div>

          <img
            src={Flare3}
            className="absolute right-0 w-[150px] xl:w-[500px] xl:mt-[400px] mt-[250px] z-10"
            loading="lazy"
          />
          <img
            src={Star}
            className="absolute ml-[60%] mt-[100px] xl:right-[350px] xl:mt-[480px] blinking w-[10px] xl:w-[30px]"
            loading="lazy"
          />
        </div>
      </section>
    </section>
  );
};

export default SectionEight;
