import React from "react";
export default function App_ShowCase() {
  return (
    <div className="relative mx-auto mt-[-28rem] flex h-[500px] w-[1380px] flex-row bg-[#201F1D] ">
      <div className=" flex  w-5/6 flex-col items-center">
        <div>
          <p className="cursive mt-20 text-6xl text-white">
            {" "}
            Dreamsrental User Friendly <br /> App Available
          </p>
          <p className="mt-3 text-xl text-white">
            Appropriately monetize one-to-one interfaces rather than
            cutting-edge <br /> Competently disinte rmediate backward.
          </p>
          <div className=" mt-10 flex h-[15%] w-[60%] flex-row">
            <div className="mr-1 flex h-full w-1/2 flex-row items-center bg-orange-400">
              <span className=" mx-3 h-[60%] w-1/4"></span>
              <span className="items-left flex flex-col">
                <span className="text-md text-white">Get it on</span>
                <span className="font-semibold text-white">Google Play</span>
              </span>
            </div>
            <div className="mr-1 flex h-full w-1/2 flex-row items-center bg-[#343a40]">
              <span className=" mx-3 h-[60%] w-1/4"></span>
              <span className="items-left flex flex-col">
                <span className="text-md text-white">Get it on</span>
                <span className="font-semibold text-white">App Store</span>
              </span>
            </div>
          </div>
          <div>
            <img
              src="https://dreamsrent.dreamguystech.com/html/assets/img/bg/app-left.png"
              alt="zig zag orange lines"
              className="mt-5"
            />
          </div>
        </div>
      </div>
      <div
        className="flex h-full w-2/3 items-center bg-[#201F1D] 
    "
      >
        <img
          src="https://dreamsrent.dreamguystech.com/html/assets/img/bg/app-right.png"
          alt="rectangle of dots "
          className="mb-[21rem]"
        />
        <img
          src="https://dreamsrent.dreamguystech.com/html/assets/img/app-car.png"
          alt="car"
          className="relative left-[-6rem] mx-auto h-2/3"
        />
      </div>
    </div>
  );
}
