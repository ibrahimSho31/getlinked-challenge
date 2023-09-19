import styles from "./Landing.css"
import { purpleStar, arrow, thinkBig, darkPurpleStar, people, elipse, GreyStar, Star } from "./assets";


const SectionFour = () => {
    const attributes = [
        {
            id: 1,
            title: "Innovation and Creativity:",
            content: "Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features."
        },
        {
            id: 2,
            title: "Functionality:",
            content: "Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution."
        },
        {
            id: 3,
            title: "Impact and Relevance:",
            content: "Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits."
        },
        {
            id: 4,
            title: "Technical Complexity:",
            content: "Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution."
        },
        {
            id: 5,
            title: "Adherence to Hackathon Rules:",
            content: "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements."
        },
    ]

    return (
        <>
      <section className="flex flex-col xl:flex-row items-center xl:items-end z-[50] 
      justify-between xl:px-[100px] pt-[50px] pb-[180px] 
  px-[20px] text-center xl:text-left border-[1px] 
  border-solid border-[#ffffff2e] border-x-[0px] border-t-[0px]">

        <div className="flex flex-col items-center justify-center  xl:w-[900px]">
          <img
            src={darkPurpleStar}
            className="flex self-center ml-[-350px] mb-[100px] xl:mr-[30px] blinking"
            loading="lazy"
          />
          <img 
            src={elipse}
            className="absolute mt-[-400px] ml-[-400px] z-[10] hidden xl:flex"
            loading="lazy"
          />
          <img src={GreyStar} className="hidden xl:flex self-end blinking absolute mr-[300px]" 
            loading="lazy"
          />
          <img src={people} className="self-center min-w-[264px] w-full z-[40]"
          loading="lazy" />
          <img src={Star} className="hidden xl:flex self-end blinking mr-[30px]"
          loading="lazy" />
        </div>

        

        <div className="flex flex-col items-center w-full xl:w-[50%]">
          <div className="clashDisplay text-[25px] xl:text-[32px] flex w-full
           flex-row items-center justify-center xl:justify-between">

            <h1 className="xl:w-[398px] clashDisplayBig w-full pb-[15px]">
              Judging Criteria<br />
              <span className="text-[#D434FE]">Key attributes</span>
            </h1>
            
          </div>
          {
            attributes.map((attribute, id) => (
                <div key={id}
                className=" montserrat text-[13px] w-[90%] xl:w-full xl:text-[15px] leading-[27px] pb-[10px]"
                >
                <p className="text-[#FF26B9]">
                    {attribute.title} <span className="text-[#FFF]">{attribute.content}</span>
                </p>

                </div>
            ))
          }

          <button className="headerBtn xl:self-start w-[152px] xl:w-[172px] h-[46px] xl:h-[53px] mt-[30px]">
                            Read More
                        </button>
        </div>


      </section>
        </>
    )
}

export default SectionFour