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

const SectionNine = () => {
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
      className="border-[1px] border-solid border-[#ffffff2e] border-x-[0px] border-t-[0px]
        px-[30px] flex flex-col xl:flex-row items-center xl:items-start justify-between montserrat xl:px-[130px] py-[50px]
        "
    >
      <section className="text-center xl:text-left">
        <img
          src={GreyStar}
          className="w-[15px] mt-[-20px] ml-[70%] xl:w-[30px] absolute xl:ml-[330px] blinking"
          loading="lazy"
        />

        <img
          src={Flare2}
          className="absolute w-[500px] left-0 mt-[550px] z-10"
          loading="lazy"
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
          loading="lazy"
        />

        <p className="text-[12px] xl:text-[14px] xl:w-[438px] font-[400] pb-[50px]">
          Below are our privacy & policy, which outline a lot of goodies. it’s
          our aim to always take of our participant
        </p>

        <img
          src={darkPurpleStar}
          className="w-[10px] xl:w-[30px] absolute ml-[-15px] xl:ml-[-50px] mt-[350px] blinking"
          loading="lazy"
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
          <h2 className="text-[12px] xl:text-[14px] pb-[20px] text-left z-40">
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
                loading="lazy"
              />
              <p className="text-[12px] xl:text-[14px] leading-[21px] xl:leading-[30px] mt-[-10px]">
                {policy.policy}
              </p>
            </div>
          ))}

          <button
            className="headerBtn self-center w-[122px] z-40
                    xl:w-[172px] h-[40px] xl:h-[53px] my-[30px] text-[12px]"
          >
            Read More
          </button>
        </section>
      </section>

      <img
        src={Star}
        className="w-[10px] hidden xl:block absolute xl:ml-[75%] xl:mt-[150px] blinking"
        loading="lazy"
      />
      <section className="flex flex-col items-center justify-center xl:ml-[-100px] xl:mt-[-200px] mt-[-100px]">
        <img
          src={lock}
          className="absolute   z-[40] xl:ml-[70px] w-[249px] xl:w-[530px]"
          loading="lazy"
        />
        <img
          src={manOnLock}
          className="relative z-[50] pt-[200px] xl:pt-[300px] xl:w-[559px] w-[269px]"
          loading="lazy"
        />

        <img
          src={purpleStar}
          className="w-[15px] xl:ml-[-200px] ml-[-280px] mt-[-150px] absolute xl:mt-[550px] blinking"
          loading="lazy"
        />
        <img
          src={Star}
          className="w-[15px] xl:ml-[-350px] mt-[-150px] ml-[40%] absolute xl:mt-[750px] blinking"
          loading="lazy"
        />
        <img
          src={GreyStar}
          className="w-[10px] mt-[400px] ml-[280px] xl:w-[30px] xl:ml-[650px] absolute xl:mt-[750px] blinking z-[50]"
          loading="lazy"
        />
      </section>
    </section>
  );
};

export default SectionNine;
