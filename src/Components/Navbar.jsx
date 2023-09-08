import React from "react";
export default function Navbar() {
  const Home =
    " relative mx-auto text-center  border-2 border-white w-20 h-full  flex items-center   font-semibold";
  const Home_P = "text-center relative left-1/2 font-arial text-yellow-500";
  const NavLinks =
    " relative mx-auto text-center  border-2 border-white w-20 h-full  flex items-center text-md  font-semibold";
  const NavLinks_P = "text-center relative  font-arial font-";
  return (
    <div className=" sticky top-0 z-50 flex h-[80px] w-full flex-row bg-white">
      <div className=" flex h-full w-1/3 items-center ">
        <img
          src="https://dreamsrent.dreamguystech.com/html/assets/img/logo.svg"
          alt="kjl;"
          className="ml-5"
        />
      </div>

      <div id="Navgrid" className=" flex h-full  w-1/3 flex-row">
        <div className={Home}>
          <p className={Home_P}>Home</p>
        </div>
        <div className={NavLinks}>
          {" "}
          <p className={NavLinks_P}>Listings </p>
        </div>
        <div className={NavLinks}>
          {" "}
          <p className={NavLinks_P}>Pages </p>
        </div>
        <div className={NavLinks}>
          {" "}
          <p className={NavLinks_P}>Blog </p>
        </div>
        <div className={NavLinks}>
          {" "}
          <p className={NavLinks_P}>Contact </p>
        </div>
      </div>

      <div
        id="signInButtons"
        className=" ml-5 grid h-full  w-[34vw] items-center"
      >
        <div className="flex  h-full flex-row items-center justify-self-end bg-white pr-5">
          <button className="mr-3 h-2/3 w-32 justify-self-start rounded bg-black  font-semibold text-white ">
            Sign In
          </button>
          <button className="h-2/3 w-32 justify-self-end rounded bg-yellow-500  font-semibold text-white  ">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
