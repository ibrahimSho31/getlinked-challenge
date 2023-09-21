import Header from "./Header";
import { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

import styles from "./Landing.css";
import {
  BtmFlare,
  topPurple,
  Star,
  darkPurpleStar,
  purpleStar,
  GreyStar,
  StarOutline,
  Sitting,
  Walking,
} from "./assets";

import { useApplication } from "./hooks/useApplication";
import CongratsDialog from "./congrats";

// import { getCategory } from "./hooks/getCategory";
import axios from "axios";
const Register = () => {
  const { mutate, isLoading, error } = useApplication();
  const apiUrl = "https://backend.getlinked.ai/hackathon/categories-list";

  const [results, setResult] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle successful response
        setResult(response.data);
      })
      .catch((error) => {
        // Handle error
      });
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for demonstration purposes
    const delay = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(delay);
  }, []);

  const [teamName, seteamName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [projectTopic, setProjectTopic] = useState("");
  const [checked, setChecked] = useState(false);
  const [category, setCategory] = useState("");

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setGroupSize(selectedCategory);
  };

  console.log(category);

  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleApplication = async (e) => {
    e.preventDefault();

    mutate(
      {
        email: email,
        phoneNumber: phoneNumber,
        teamName: teamName,
        groupSize: groupSize,
        projectTopic: projectTopic,
        checked: checked,
        category: category,
      },
      {
        onError: (error) => {
          setErrorMessage("Failed, please check your information");
        },
        onSuccess: (success) => {
          setOpen(true);
          setErrorMessage("");
        },
      }
    );
  };

  return (
    <>
      {loading ? (
        <>
          <LoadingSpinner />

          <section className="hidden">
            <Header />

            {open && <CongratsDialog open={open} setOpen={setOpen} />}
            <img
              src={topPurple}
              className="absolute w-[300px] xl:w-[800px] xl:mt-[-100px] xl:ml-[-50px] rotate-[270deg]"
            />
            <section
              className="montserrat flex flex-col xl:flex-row items-center xl:items-start z-40
             text-left xl:px-[150px] px-[20px] xl:justify-between xl:pt-[30px] pb-[50px]"
            >
              <section className=" flex flex-col text-[16px] font-[400]">
                <h1 className="text-[#D434FE] clashDisplayBig text-[20px]  ml-[-60px] block xl:hidden ">
                  Register
                </h1>
                <img
                  src={purpleStar}
                  className="w-[30px] blinking hidden xl:block mb-[50px]"
                />
                <img src={Sitting} className="w-[195px] xl:w-[700px] z-40" />
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
                  className="w-[10px] xl:w-[30px]  mb-[20px] xl:mb-[0px] blinking absolute xl:mt-[500px] xl:ml-[-15px] ml-[200px]"
                />

                <section className="xl:bg-[#1c152e]  z-40 pb-[50px] flex flex-col w-full rounded-[12px] xl:w-[617px] px-[20px] xl:p-[50px]">
                  <form onSubmit={handleApplication}>
                    <h1 className="text-[#D434FE] clashDisplayBig text-[20px] hidden xl:block">
                      Register
                    </h1>
                    <h1 className="flex flex-row">
                      <img src={Walking} className="h-[30px]" />
                    </h1>
                    <h1 className="uppercase text-[20px] xl:text-[24px] font-[400] pt-[10px] pb-[20px]">
                      Create your account
                    </h1>

                    <div className="flex flex-col xl:flex-row w-full justify-between">
                      <div className="w-full xl:w-[47%]">
                        <h1 className="text-[13px] xl:text-[14px] pb-[3px]">
                          Team's Name
                        </h1>
                        <input
                          placeholder="Enter the name of your group"
                          className="h-[47px] bg-[#FFFFFF08] text-[12px] rounded-[4px] border-[1px] border-[solid] border-[#FFFFFF] xl:bg-transparent w-full px-[20px]"
                          onChange={(e) => seteamName(e.target.value)}
                          value={teamName}
                          required
                        />
                      </div>

                      <div className="w-full xl:w-[47%] xl:my-[0px] my-[10px]">
                        <h1 className="text-[13px] xl:text-[14px] pb-[3px]">
                          Phone
                        </h1>
                        <input
                          placeholder="Enter your phone number"
                          className="h-[47px] bg-[#FFFFFF08] text-[12px] rounded-[4px] border-[1px] border-[solid] border-[#FFFFFF] xl:bg-transparent w-full px-[20px]"
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          value={phoneNumber}
                          required
                        />
                      </div>
                    </div>

                    <div className="flex flex-col xl:flex-row w-full justify-between xl:my-[30px]">
                      <div className="w-full xl:w-[47%]">
                        <h1 className="text-[13px] xl:text-[14px] pb-[3px]">
                          Email
                        </h1>
                        <input
                          placeholder="Enter your email address"
                          className="h-[47px] bg-[#FFFFFF08] text-[12px] rounded-[4px] border-[1px] border-[solid] border-[#FFFFFF] xl:bg-transparent w-full px-[20px]"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          required
                          type="email"
                        />
                      </div>

                      <div className="w-full xl:w-[47%] xl:my-[0px] my-[10px]">
                        <h1 className="text-[13px] xl:text-[14px] pb-[3px]">
                          Project Topic
                        </h1>
                        <input
                          placeholder="What is your group project topic"
                          className="h-[47px] bg-[#FFFFFF08] text-[12px] rounded-[4px] border-[1px] border-[solid] border-[#FFFFFF] xl:bg-transparent w-full px-[20px]"
                          onChange={(e) => setProjectTopic(e.target.value)}
                          value={projectTopic}
                          required
                        />
                      </div>
                    </div>

                    <div className="flex flex-row w-full justify-between">
                      <div className="w-[67%] xl:w-[47%]">
                        <h1 className="text-[13px] xl:text-[14px] pb-[3px]">
                          Category
                        </h1>
                        <select className="h-[47px] bg-[#FFFFFF08] text-[12px] rounded-[4px] border-[1px] border-[solid] border-[#FFFFFF] xl:bg-transparent w-full px-[20px]">
                          <option>Select your category</option>
                          {results.map((result, id) => (
                            <option
                              onClick={() => {
                                setCategory(result.id);
                              }}
                              key={id}
                            >
                              {result.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="w-[30%] xl:w-[47%]">
                        <h1 className="text-[13px] xl:text-[14px] pb-[3px]">
                          Group Size
                        </h1>
                        <select
                          className="h-[47px] bg-[#FFFFFF08] text-[12px] rounded-[4px] border-[1px] border-[solid] border-[#FFFFFF] xl:bg-transparent w-full px-[20px]"
                          onChange={handleCategoryChange}
                          value={groupSize}
                        >
                          <option value="">Select</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                        </select>
                      </div>
                    </div>

                    <p className="italic text-[9px] xl:text-[12px] text-[#FF26B9] font-[400] py-[15px]">
                      Please review your registration details before submitting
                    </p>

                    <div className="flex flex-row items-center pb-[15px]">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={(e) => {
                          setChecked(e.target.checked);
                        }}
                        className="mr-[10px]"
                        required
                      />
                      <p className="text-[10px] xl:text-[12px]">
                        I agreed with the event terms and conditions and privacy
                        policy
                      </p>
                    </div>

                    {errorMessage !== "" && (
                      <p className="text-[12px] text-[red] pb-[20px] ">
                        {errorMessage}
                      </p>
                    )}

                    <div className="flex flex-row items-center justify-center ">
                      <button
                        className="headerBtn w-[179px] xl:w-full h-[53px]"
                        type="submit"
                      >
                        <h1 className="xl:block hidden">Register Now</h1>{" "}
                        <h1 className="xl:hidden block">Submit</h1>
                      </button>
                    </div>
                  </form>
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
      ) : (
        <section className="xl:pb-[50px]">
          <Header />

          {open && <CongratsDialog open={open} setOpen={setOpen} />}
          <img
            src={topPurple}
            className="absolute w-[300px] xl:w-[800px] xl:mt-[-100px] xl:ml-[-50px] rotate-[270deg]"
          />
          <section
            className="montserrat flex flex-col xl:flex-row items-center xl:items-start z-40 sm:h-[100vh] xl:h-[100%]
             text-left xl:px-[150px] px-[20px] xl:justify-between xl:pt-[30px] pb-[50px]"
          >
            <section className=" flex flex-col text-[16px] font-[400]">
              <h1 className="text-[#D434FE] clashDisplayBig text-[20px]  ml-[-60px] block xl:hidden ">
                Register
              </h1>
              <img
                src={purpleStar}
                className="w-[30px] blinking hidden xl:block mb-[50px]"
              />
              <img src={Sitting} className="w-[195px] xl:w-[700px] z-40" />
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
                className="w-[10px] xl:w-[30px]  mb-[20px] xl:mb-[0px] blinking absolute 
            xl:mt-[500px] xl:ml-[-50px] ml-[200px]"
              />

              <section className="xl:bg-[#1c152e]  z-40 pb-[50px] flex flex-col w-full rounded-[12px] xl:w-[617px] px-[20px] xl:p-[50px]">
                <form onSubmit={handleApplication}>
                  <h1 className="text-[#D434FE] clashDisplayBig text-[20px] hidden xl:block">
                    Register
                  </h1>
                  <h1 className="flex flex-row">
                    <img src={Walking} className="h-[30px]" />
                  </h1>
                  <h1 className="uppercase text-[20px] xl:text-[24px] font-[400] pt-[10px] pb-[20px]">
                    Create your account
                  </h1>

                  <div className="flex flex-col xl:flex-row w-full justify-between">
                    <div className="w-full xl:w-[47%]">
                      <h1 className="text-[13px] xl:text-[14px] pb-[3px]">
                        Team's Name
                      </h1>
                      <input
                        placeholder="Enter the name of your group"
                        className="h-[47px] bg-[#FFFFFF08] text-[12px] rounded-[4px] border-[1px] border-[solid] border-[#FFFFFF] xl:bg-transparent w-full px-[20px]"
                        onChange={(e) => seteamName(e.target.value)}
                        value={teamName}
                        type="text"
                        required
                      />
                    </div>

                    <div className="w-full xl:w-[47%] xl:my-[0px] my-[10px]">
                      <h1 className="text-[13px] xl:text-[14px] pb-[3px]">
                        Phone
                      </h1>
                      <input
                        placeholder="Enter your phone number"
                        className="h-[47px] bg-[#FFFFFF08] text-[12px] rounded-[4px] border-[1px] border-[solid] border-[#FFFFFF] xl:bg-transparent w-full px-[20px]"
                        onChange={(e) => {
                          let inputValue = e.target.value;

                          inputValue = inputValue.replace(/[^0-9]/g, "");

                          if (inputValue.length > 13) {
                            inputValue = inputValue.slice(0, 13);
                          }

                          setPhoneNumber(inputValue);
                        }}
                        value={phoneNumber}
                        type="text"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col xl:flex-row w-full justify-between xl:my-[30px]">
                    <div className="w-full xl:w-[47%]">
                      <h1 className="text-[13px] xl:text-[14px] pb-[3px]">
                        Email
                      </h1>
                      <input
                        placeholder="Enter your email address"
                        className="h-[47px] bg-[#FFFFFF08] text-[12px] rounded-[4px] border-[1px] border-[solid] border-[#FFFFFF] xl:bg-transparent w-full px-[20px]"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        type="email"
                      />
                    </div>

                    <div className="w-full xl:w-[47%] xl:my-[0px] my-[10px]">
                      <h1 className="text-[13px] xl:text-[14px] pb-[3px]">
                        Project Topic
                      </h1>
                      <input
                        placeholder="What is your group project topic"
                        className="h-[47px] bg-[#FFFFFF08] text-[12px] rounded-[4px] border-[1px] border-[solid] border-[#FFFFFF] xl:bg-transparent w-full px-[20px]"
                        onChange={(e) => setProjectTopic(e.target.value)}
                        value={projectTopic}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-row w-full justify-between">
                    <div className="w-[67%] xl:w-[47%]">
                      <h1 className="text-[13px] xl:text-[14px] pb-[3px]">
                        Category
                      </h1>
                      <select
                        className="h-[47px] bg-[#FFFFFF08] text-[12px] rounded-[4px] border-[1px] border-[solid] border-[#FFFFFF] xl:bg-transparent w-full px-[20px]"
                        value={category}
                        onChange={(e) => {
                          setCategory(e.target.value);
                        }}
                      >
                        <option>Select your category</option>
                        {results.map((result, id) => (
                          <option key={id} value={result.id}>
                            {result.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="w-[30%] xl:w-[47%]">
                      <h1 className="text-[13px] xl:text-[14px] pb-[3px]">
                        Group Size
                      </h1>
                      <select
                        className="h-[47px] bg-[#FFFFFF08] text-[12px] rounded-[4px] border-[1px] border-[solid] border-[#FFFFFF] xl:bg-transparent w-full pl-[10px] xl:px-[20px]"
                        onChange={handleCategoryChange}
                        value={groupSize}
                      >
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                      </select>
                    </div>
                  </div>

                  <p className="italic text-[9px] xl:text-[12px] text-[#FF26B9] font-[400] py-[15px]">
                    Please review your registration details before submitting
                  </p>

                  <div className="flex flex-row items-center pb-[15px]">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => {
                        setChecked(e.target.checked);
                      }}
                      className="mr-[10px]"
                      required
                    />
                    <p className="text-[10px] xl:text-[12px]">
                      I agreed with the event terms and conditions and privacy
                      policy
                    </p>
                  </div>

                  {errorMessage !== "" && (
                    <p className="text-[12px] text-[red] pb-[20px] ">
                      {errorMessage}
                    </p>
                  )}

                  <div className="flex flex-row items-center justify-center ">
                    <button
                      className="headerBtn w-[179px] xl:w-full h-[53px]"
                      type="submit"
                    >
                      <h1 className="xl:block hidden">Register Now</h1>{" "}
                      <h1 className="xl:hidden block">Submit</h1>
                    </button>
                  </div>
                </form>
              </section>

              <img
                src={Star}
                className="w-[15px] hidden xl:block xl:mt-[-270px] mr-[20px] xl:w-[30px] blinking self-end xl:mb-[50px] xl:mt-[-20px] xl:mr-[-60px] relative"
              />
              <img
                src={BtmFlare}
                className="absolute bottom-0 right-0 hidden xl:block xl:w-[600px]"
              />
            </section>
          </section>
        </section>
      )}
    </>
  );
};

export default Register;
