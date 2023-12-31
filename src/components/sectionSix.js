import styles from "./Landing.css";
import { line, GreyStar, Star, darkPurpleStar } from "./assets";

const SectionSix = () => {
  const timelines = [
    {
      id: 1,
      header: "Hackathon Announcement",
      body: "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
      date: "November 18, 2023",
    },
    {
      id: 2,
      header: "Teams Registration begins",
      body: "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
      date: "November 18, 2023",
    },
    {
      id: 3,
      header: "Teams Registration ends",
      body: "Interested Participants are no longer Allowed to register",
      date: "November 18, 2023",
    },
    {
      id: 4,
      header: "Announcement of the accepted teams and ideas",
      body: "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
      date: "November 18, 2023",
    },
    {
      id: 5,
      header: "Getlinked Hackathon 1.0 Offically Begins",
      body: "Accepted teams can now proceed to build their ground breaking skill driven solutions",
      date: "November 18, 2023",
    },
    {
      id: 6,
      header: "Demo Day",
      body: "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
      date: "November 18, 2023",
    },
  ];
  return (
    <>
      <section className="pb-[50px] pt-[50px] flex flex-col items-center justify-center"
      id="timeline"
      >
        <h1 className="clashDisplayBig text-[20px] xl:text-[32px]">Timeline</h1>

        <p className="montserrat w-[290px] xl:w-[100%] text-[13px] xl:text-[14px] ">
          Here is the breakdown of the time we anticipate{" "}
          <br className="hidden xl:block" /> using for the upcoming event.
        </p>

        <section>
          <div className="flex flex-col items-center justify-center xl:pt-[20px] pt-[30px] pl-[20px]">
            <img
              src={darkPurpleStar}
              className="self-start blinking ml-[30px] mb-[20px] xl:w-[30px] w-[14px]"
               
            />
            {timelines.map((timeline, id) => (
              <div
                key={id}
                className="w-full  flex flex-col items-center justify-between pb-[20px] xl:pb-[0px]"
              >
                <section className="imgOvr flex flex-col xl:flex-row xl:items-end items-start w-full montserrat tl">
                  {/* Conditional rendering of timeline.header and timeline.body */}

                  {timeline.id % 2 === 0 ? (
                    <div className=" xl:order-3 xl:w-[500px] hidden xl:flex flex-col text-left order-2">
                      <h1 className="text-[#D434FE] xl:w-[511px]  text-[24px] font-[900]">
                        {timeline.header}
                      </h1>
                      <p className="text-[14px] xl:w-[486px]">
                        {timeline.body}
                      </p>
                    </div>
                  ) : (
                    <div className=" xl:order-1 xl:w-[500px] hidden xl:flex flex-col text-right flex flex-col items-end order-2">
                      <h1 className="text-[#D434FE]  xl:w-[511px] text-[24px] font-[900]">
                        {timeline.header}
                      </h1>
                      <p className="text-[14px] xl:w-[486px] ">
                        {timeline.body}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-row xl:order-2 xl:mx-[50px]">
                    <div className="flex flex-col items-center xl:w-[70px] justify-center  ">
                      <img
                        src={line}
                        className={`flex w-[4px] ${
                          timeline.id === 1
                            ? "h-[80px] xl:h-[100px] xl:mb-[-10px]"
                            : "h-[80px] xl:h-[70px] xl:my-[-10px]"
                        } flex-col items-center justify-center rounded-[4px]`}
                         
                      />
                      <div className="bg-gradient-to-br from-[#903AFF] to-[#D434FE]  w-[20px] h-[20px] xl:w-14  xl:h-14 my-[20px] rounded-full flex items-center justify-center">
                        <span className="text-white text-[12px] xl:text-xl font-bold">
                          {timeline.id}
                        </span>
                      </div>
                    </div>

                    <div className="xl:hidden flex flex-col justify-between h-[100%]  text-left w-full">
                      <h1 className="text-[#D434FE] text-[12px] font-[900] w-full">
                        {timeline.header}
                      </h1>
                      <p className="text-[12px]"> {timeline.body}</p>
                    </div>
                  </div>

                  {/* Conditional rendering of timeline.date based on even or odd id */}
                  {timeline.id % 2 === 0 ? (
                    <div className="xl:order-1 hidden xl:flex  xl:flex-row xl:items-end xl:justify-end order-2 xl:w-[500px] xl:text-right self-center mt-[100px] text-[#D434FE] text-[24px] montserrat font-[900]">
                      <h1 className="text-right flex flex-row items-end justify-end">{timeline.date}</h1>
                    </div>
                  ) : (
                    <div className="xl:order-3 hidden xl:flex xl:flex-row xl:items-start xl:justify-start  order-2 xl:w-[500px] xl:text-right  self-center mt-[100px] text-[#D434FE] text-[24px] montserrat font-[900]">
                      <h1 className="text-right flex flex-row items-end justify-end">{timeline.date}</h1>
                    </div>
                  )}

                  <div className="pl-[30px] mt-[-40px] xl:hidden flex">
                    <h1 className="text-[12px] text-[#D434FE]">
                      {timeline.date}
                    </h1>
                  </div>
                </section>
              </div>
            ))}
            <img
              src={Star}
              className="absolute xl:right-[300px] xl:w-[30px] w-[10px] right-[100px] xl:mt-[-120px] mt-[-60px] blinking"
               
            />

            <img
              src={GreyStar}
              className="self-start blinking w-[10px]"
               
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default SectionSix;
