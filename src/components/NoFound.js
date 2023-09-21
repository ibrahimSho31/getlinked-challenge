import { NavLink } from "react-router-dom"

const NoFound = () => {
    return (
        <>
        <section className="h-[100vh] flex flex-col items-center montserrat justify-center">
            <h1 className="text-[30px]">404!</h1>
            <h1 className="text-[40px] pb-[20px]">Page not Found</h1>
            <NavLink
              to="/"
            className=" w-[172px] h-[53px] headerBtn  flex flex-row items-center justify-center transition duration-300 ease-in-out rounded-[8px]"
            >
              <button className=" ">Back to Home</button>
            </NavLink>
        </section>
        </>
    )
}

export default NoFound