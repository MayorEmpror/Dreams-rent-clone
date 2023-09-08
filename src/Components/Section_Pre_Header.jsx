import React from "react";
export default function Section_Pre_Header() {
  return (
    <div className="bg-start grid h-[600px] w-full grid-cols-2 grid-rows-1 items-center bg-[url('https://dreamsrent.dreamguystech.com/html/assets/img/banner.jpg')] bg-cover">
      <div className="grid h-full  w-full items-stretch ">
        <div className=" flex h-full w-3/4 items-center justify-self-end  ">
          <div className="!important  items-left mt-10 self-center font-mono text-7xl">
            <span className="mt-5">
              <div className="mb-5 flex h-12 w-2/3 items-center rounded-full bg-white text-lg">
                <p>👍 100% Trusted car rental platform in the World</p>
              </div>
              <p className="cursive text-left">Find Your Best</p>
              <p className="cursive color text-left">Dream Car for Rental</p>
            </span>

            <p className="text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s
            </p>
            <div className=" flex h-20 w-full items-center">
              <button className="h-[56.666%] w-[26%] rounded-lg border-2 border-black bg-white text-lg font-medium ">
                Veiw all Cars →
              </button>
            </div>
          </div>
        </div>
        {/* <p>Dream Car for Rental</p> */}
        {/* <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
          </p> */}
        {/* <p className="bg-blue-300 h-1/2 w-full self-center"></p> */}
      </div>
      <img
        src="https://dreamsrent.dreamguystech.com/html/assets/img/car-right.png"
        className="w-3/4 justify-self-start "
        alt="car"
      />
    </div>
  );
}
