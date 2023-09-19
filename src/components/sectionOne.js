import { Chain, Man, Creative, Fire, Globe, Star, purpleLine, RightPurpleLight, Metrix, GreyStar, topPurple } from "./assets"
import styles from "./Landing.css"
const SectionOne = () => {
    
    return (
        <>

            <section
            className="z-10 xl:pl-[80px] pt-[40px] flex flex-col border-[1px] border-solid border-[#ffffff2e] border-x-[0px]"
        //     style={{
        //                 backgroundImage: `url(${topPurple})`,
        //                 // backgroundImage: showLightening ? `url(${lightningStrikeGif})` : 'none',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'contain',
        // // backgroundPosition: 'left',
        // // backgroundPositionX:"300px",
        // backgroundPositionY: "-100px",
        // zIndex: "50"
        // // filter: 'hue-rotate(290deg)',
        //             }}
            >
                    <img 
            src={topPurple}
            className="w-[900px] absolute top-0 z-1"
            loading="lazy"
        />

                <section
                className="flex flex-col xl:flex-row items-center justify-between z-[10]"

                >
                                    {/* <img 
                        src={topPurple}
                        className="z-[1] ml-[-150px] xl:mt-[300px] h-[300px] xl:h-[500px]"
                    /> */}
                    <img 
                        src={Star}
                        alt="star"
                        className="xl:flex hidden relative mt-[50px] blinking pl-[100px]"
                        loading="lazy"
                    />

                    <h1 className="montserrat pt-[30px] xl:pt-[0px] text-[16px] xl:w-full w-[330px] xl:text-[36px] 
                    italic font-[700] flex flex-col xl:pr-[50px] justify-end xl:items-end items-center">
                    Igniting a Revolution in HR Innovation
                    <img 
                        src={purpleLine}
                        className="flex flex-row self-end justify-end xl:w-[253px] w-[115px] "
                        loading="lazy"
                    />
                    </h1>
                </section>
                
                <section className="flex flex-col xl:flex-row items-center justify-between metrixBg"
        //         style={{
        //                 backgroundImage: `url(${Metrix})`,
        //                 // backgroundImage: showLightening ? `url(${lightningStrikeGif})` : 'none',
        // backgroundRepeat: 'repeat',
        // backgroundSize: 'cover',
        // backgroundPosition: 'right',
        //             }}
                >
                    <div className="flex flex-col items-center xl:items-start w-full xl:w-[50%] text-center xl:text-left z-[30] "

                    >

                        <h1 className="clashDisplayBig text-[32px] xl:text-[70px]  flex flex-row xl:mb-[-30px]">
                        getlinked Tech
                        </h1>
                        <h1 className="clashDisplayBig text-[32px] xl:text-[70px]  flex flex-row">
                        Hackathon <span className="text-[#D434FE] pl-[5px]"> 1.0</span> <img 
                            src={Chain}
                            alt="chain"
                            className="w-[32px] "
                        /> <img 
                            src={Fire}
                            alt="fire"
                            className="w-[32px] "
                            loading="lazy"
                        />
                        </h1>

                        <p className="montserrat text-[13px] xl:text-[20px] xl:w-[522px]">
                        Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
                        </p>

                        <button className="headerBtn w-[152px] xl:w-[172px] h-[46px] xl:h-[53px] mt-[30px]">
                            Register
                        </button>

                        <img 
                        src={GreyStar}
                        className="xl:flex hidden mt-[30px] ml-[450px] blinking" loading="lazy"
                        />

                        <h1 className="text-[48px] xl:text-[64px] unica flex flex-row items-center">
                            00<span className="text-[16px] mt-[20px]">H</span> 00 <span className="text-[16px] mt-[20px]">M</span> 00 <span className="text-[16px] mt-[20px]">S</span>
                        </h1>
                    </div>

                    <div className=" relative" 
                    >
                    <div className="manBlend xl:mb-[-27px] z-[10]"
                                    style={{
                        backgroundImage: `url(${Man})`,
                        
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        minWidth: '330px',  // Set a minimum width for this div
    
        
                    }}
                    
                    >
                    <div
                                                        style={{
                        backgroundImage: `url(${RightPurpleLight})`,
                        
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        backgroundPositionX: "-50px"
        
                    }}
                    >
                    <img 
                        src={Globe}
                        className=" z-[10] xl:h-[600px] xl:w-[550px] blend w-[338px]"
                        loading="lazy"
                        style={{
      filter: 'hue-rotate(0deg)', // Apply a different filter to the child img
    }}
                    />
                    </div>

                    </div>

                    </div>


                </section>







            </section>
        </>
    )
}

export default SectionOne