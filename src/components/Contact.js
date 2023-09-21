import Header from "./Header";
import { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner"
import styles from "./Landing.css";
import {
  Instagram,
  x,
  LinkedIn,
  Facebook,
  Star,
  darkPurpleStar,
  purpleStar,
  GreyStar,
  StarOutline,
  BtmFlare,
  topPurple,
} from "./assets";
import { useContact } from "./hooks/useContact";

const Contact = () => {
  const { mutate, isLoading, error } = useContact();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for demonstration purposes
    const delay = setTimeout(() => {
      setLoading(false); 
    }, 3000);

    return () => clearTimeout(delay);
  }, []);




  const [firstName, setFirstName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");


  const [errorMessage, setErrorMessage] = useState('')

  const handleContactUs = async (e) => {
    e.preventDefault();

    mutate(
      {
        email: mail,
        phoneNumber: number,
        message: message,
        firstName: firstName,
      },
      {
        onError: (error) => {
            setErrorMessage('Failed, please check your information')
            
        },
        onSuccess: (success) => {
          setErrorMessage('')
        },
      }
    );
  };

  
  return (
    <>
                    {
                loading ? 
                <>

                <LoadingSpinner /> 
                <section className="hidden">
      <Header />

      <img
        src={topPurple}
        className="absolute w-[300px] xl:w-[800px] xl:mt-[-100px] xl:ml-[-50px] rotate-[270deg] z-20"
         
      />
      <section
        className="montserrat flex flex-col xl:flex-row items-center xl:items-start
             text-left xl:px-[150px] px-[20px] justify-between h-[100vh] xl:pt-[30px]"
      >
        <section className=" hidden xl:flex flex-col text-[16px] font-[400] z-40">
          <img
            src={purpleStar}
            className="w-[30px] blinking hidden xl:block mb-[50px]"
             
          />
          <h1 className="text-[#D434FE] clashDisplayBig text-[32px]">
            Get in touch
          </h1>
          <h2 className="py-[15px]">
            Contact <br /> Information
          </h2>
          <p className="w-[119px]">27,Alara Street Yaba 100012 Lagos State</p>
          <p className="py-[15px]">Call Us : 07067981819</p>
          <p className="w-[272px]">
            we are open from Monday-Friday 08:00am - 05:00pm
          </p>

          <div className="py-[15px]">
            <h1 className="text-[#D434FE] text-[16px] font-[400] pb-[10px]">
              Share on
            </h1>

            <div className="flex flex-row items-center  w-full">
              <img
                src={Instagram}
                className="w-[24px] mr-[20px]"
                 
              />
              <img src={x} className="w-[19px] mr-[20px]"   />
              <img
                src={Facebook}
                className="w-[10px] mr-[20px]"
                 
              />
              <img src={LinkedIn} className="w-[24px]"   />
            </div>
          </div>
        </section>

        <img
          src={StarOutline}
          className="w-[30px] self-center hidden xl:block xl:mt-[-300px]"
           
        />

        <section className="flex flex-col">
          <img
            src={GreyStar}
            className="w-[15px] blinking self-end xl:mb-[50px] xl:mt-[-20px] mr-[40px] xl:mr-[0px] absolute xl:block mt-[50px]"
             
          />

          <img
            src={darkPurpleStar}
            className="w-[10px] xl:w-[30px]  mb-[20px] xl:mb-[0px] blinking xl:absolute xl:mt-[500px] xl:ml-[-15px] ml-[200px]"
             
          />

          <section className="xl:bg-[#1c152e] z-40 flex flex-col w-full rounded-[12px] xl:w-[617px] px-[50px] xl:p-[50px]">
            <form onSubmit={handleContactUs}>
              <h1 className="text-[#D434FE] clashDisplayBig text-[20px] ">
                Questions or need assistance?
              </h1>
              <h1 className="text-[#D434FE] clashDisplayBig text-[20px] pb-[30px]">
                Let us know about it!
              </h1>

              <div className="flex flex-col ">
                <input
                  placeholder="First Name"
                  className="h-[47px] rounded-[4px] border-[1px] border-[solid] border-[#FFFFFF] bg-transparent px-[20px]"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  required
                />

                <input
                  onChange={(e) => setMail(e.target.value)}
                  value={mail}
                  placeholder="Mail"
                  type="email"
                  className="h-[47px] my-[50px] rounded-[4px] border-[1px] border-[solid] border-[#FFFFFF] bg-transparent px-[20px]"
                  required
                />

                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  placeholder="Messages"
                  className="h-[119px] text-white pt-[20px] rounded-[4px] border-[1px] resize-none px-[20px]
                            border-[solid] border-[#FFFFFF] bg-transparent flex flex-row items-start justify-start"
                            required
                >
                  {" "}
                </textarea>
              </div>

              {
                  errorMessage !== '' && <p className="text-[12px] text-[red] pt-[20px] ">{errorMessage}</p>
                }

              <div className="flex flex-row items-center justify-center pt-[20px] xl:pt-[50px]">
                <img
                  src={darkPurpleStar}
                  className="w-[15px] absolute ml-[-300px] blinking xl:hidden"
                   
                />


                <button className="headerBtn w-[172px] h-[53px]" type="submit">
                  Submit
                </button>
              </div>
            </form>

            <div className="py-[15px] xl:hidden flex flex-col items-center justify-center w-full">
              <h1 className="text-[#D434FE] text-[16px] font-[400] pb-[10px]">
                Share on
              </h1>

              <div className="flex flex-row items-center justify-center w-full">
                <img
                  src={Instagram}
                  className="w-[24px] mr-[20px]"
                   
                />
                <img src={x} className="w-[19px] mr-[20px]"   />
                <img
                  src={Facebook}
                  className="w-[10px] mr-[20px]"
                   
                />
                <img src={LinkedIn} className="w-[24px]"   />
              </div>
            </div>
          </section>

          <img
            src={Star}
            className="w-[15px] mt-[-270px] mr-[20px] xl:w-[30px] blinking self-end xl:mb-[50px] xl:mt-[-20px] xl:mr-[-60px] relative"
             
          />
          <img
            src={BtmFlare}
            className="absolute bottom-0 right-0 hidden xl:block xl:w-[600px]"
             
          />
        </section>
      </section>
      </section>
                </>
                :
                <>
      <Header />

      <img
        src={topPurple}
        className="absolute w-[300px] xl:w-[800px] xl:mt-[-100px] xl:ml-[-50px] rotate-[270deg] z-20"
         
      />
      <section
        className="montserrat flex flex-col xl:flex-row items-center xl:items-start
             text-left xl:px-[150px] px-[20px] justify-between h-[100vh] xl:pt-[30px]"
      >
        <section className=" hidden xl:flex flex-col text-[16px] font-[400] z-40">
          <img
            src={purpleStar}
            className="w-[30px] blinking hidden xl:block mb-[50px]"
             
          />
          <h1 className="text-[#D434FE] clashDisplayBig text-[32px]">
            Get in touch
          </h1>
          <h2 className="py-[15px]">
            Contact <br /> Information
          </h2>
          <p className="w-[119px]">27,Alara Street Yaba 100012 Lagos State</p>
          <p className="py-[15px]">Call Us : 07067981819</p>
          <p className="w-[272px]">
            we are open from Monday-Friday 08:00am - 05:00pm
          </p>

          <div className="py-[15px]">
            <h1 className="text-[#D434FE] text-[16px] font-[400] pb-[10px]">
              Share on
            </h1>

            <div className="flex flex-row items-center  w-full">
              <img
                src={Instagram}
                className="w-[24px] mr-[20px]"
                 
              />
              <img src={x} className="w-[19px] mr-[20px]"   />
              <img
                src={Facebook}
                className="w-[10px] mr-[20px]"
                 
              />
              <img src={LinkedIn} className="w-[24px]"   />
            </div>
          </div>
        </section>

        <img
          src={StarOutline}
          className="w-[30px] self-center hidden xl:block xl:mt-[-300px]"
           
        />

        <section className="flex flex-col">
          <img
            src={GreyStar}
            className="w-[15px] blinking self-end xl:mb-[50px] xl:mt-[-20px] mr-[40px] xl:mr-[0px] absolute xl:block mt-[50px]"
             
          />

          <img
            src={darkPurpleStar}
            className="w-[10px] xl:w-[30px]  mb-[20px] xl:mb-[0px] blinking xl:absolute xl:mt-[500px] xl:ml-[-15px] ml-[200px]"
             
          />

          <section className="xl:bg-[#1c152e] z-40 flex flex-col w-full rounded-[12px] xl:w-[617px] px-[50px] xl:p-[50px]">
            <form onSubmit={handleContactUs}>
              <h1 className="text-[#D434FE] clashDisplayBig text-[20px] ">
                Questions or need assistance?
              </h1>
              <h1 className="text-[#D434FE] clashDisplayBig text-[20px] pb-[30px]">
                Let us know about it!
              </h1>

              <div className="flex flex-col ">
                <input
                  placeholder="First Name"
                  className="h-[47px] rounded-[4px] border-[1px] border-[solid] border-[#FFFFFF] bg-transparent px-[20px]"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  required
                />

                <input
                  onChange={(e) => setMail(e.target.value)}
                  value={mail}
                  placeholder="Mail"
                  type="email"
                  className="h-[47px] my-[50px] rounded-[4px] border-[1px] border-[solid] border-[#FFFFFF] bg-transparent px-[20px]"
                  required
                />

                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  placeholder="Messages"
                  className="h-[119px] text-white pt-[20px] rounded-[4px] border-[1px] resize-none px-[20px]
                            border-[solid] border-[#FFFFFF] bg-transparent flex flex-row items-start justify-start"
                            required
                >
                  {" "}
                </textarea>
              </div>

              {
                  errorMessage !== '' && <p className="text-[12px] text-[red] pt-[20px] ">{errorMessage}</p>
                }

              <div className="flex flex-row items-center justify-center pt-[20px] xl:pt-[50px]">
                <img
                  src={darkPurpleStar}
                  className="w-[15px] absolute ml-[-300px] blinking xl:hidden"
                   
                />


                <button className="headerBtn w-[172px] h-[53px]" type="submit">
                  Submit
                </button>
              </div>
            </form>

            <div className="py-[15px] xl:hidden flex flex-col items-center justify-center w-full">
              <h1 className="text-[#D434FE] text-[16px] font-[400] pb-[10px]">
                Share on
              </h1>

              <div className="flex flex-row items-center justify-center w-full">
                <img
                  src={Instagram}
                  className="w-[24px] mr-[20px]"
                   
                />
                <img src={x} className="w-[19px] mr-[20px]"   />
                <img
                  src={Facebook}
                  className="w-[10px] mr-[20px]"
                   
                />
                <img src={LinkedIn} className="w-[24px]"   />
              </div>
            </div>
          </section>

          <img
            src={Star}
            className="w-[15px] mt-[-270px] mr-[20px] xl:w-[30px] blinking self-end xl:mb-[50px] xl:mt-[-20px] xl:mr-[-60px] relative"
             
          />
          <img
            src={BtmFlare}
            className="absolute bottom-0 right-0 hidden xl:block xl:w-[600px]"
             
          />
        </section>
      </section>
      </>
                }
    </>
  );
};

export default Contact;
