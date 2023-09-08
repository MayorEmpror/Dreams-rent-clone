import React from "react";
import CarData from "./DataBase";
export default function Facts_Number() {
  console.log(CarData.Facts.Icon_Url);
  const Facts_dATA = CarData.Facts.Content_Type.map((k, x) => {
    return (
      <div
        id={x}
        key={k}
        className="flex h-[56%] w-full items-center rounded-lg bg-white "
      >
        <div
          style={{ backgroundImage: `url(${CarData.Facts.Icon_Url[x]})` }}
          className="ml-5 h-3/4 w-1/3 rounded-lg bg-[#201F1D]  bg-center bg-no-repeat"
        ></div>
        <div className=" ml-3 flex h-full w-2/3 flex-col rounded-lg ">
          <p className="cursive  ml-3 mt-8 text-4xl">{CarData.Facts.Data[x]}</p>
          <p className="text-md ml-3 text-black/50">
            {CarData.Facts.Content_Type[x]}
          </p>
        </div>
      </div>
    );
  });
  console.log(Facts_dATA);
  return (
    <div className="flex h-[450px] w-full flex-row bg-[#201F1D]">
      <div className=" flex h-full w-[15%] items-start ">
        <img
          src="https://dreamsrent.dreamguystech.com/html/assets/img/bg/facts-left.png"
          className="-ml-16 mt-3 h-3/4"
          alt="car"
        />
      </div>
      <div className="relative mx-auto h-full w-11/12">
        <div className="relative mx-auto flex h-full flex-col items-center ">
          <p className="cursive relative mx-auto mt-20 text-center text-5xl text-white">
            Facts By The Numbers
          </p>
          <img
            src="https://dreamsrent.dreamguystech.com/html/assets/img/bg/title-head.png"
            className="mt-3"
            alt="bow"
          />
          <p className="mt-3 text-center text-white">
            Lorem Ipsum has been the industrys standard dummy text <br /> ever
            since the 1500s,
          </p>

          <div className=" grid-row-1 grid h-1/2 w-full grid-cols-4 items-center gap-4">
            {Facts_dATA}
          </div>
        </div>
      </div>
      <div className=" flex h-full w-[15%] items-start ">
        <img
          src="https://dreamsrent.dreamguystech.com/html/assets/img/bg/facts-right.png"
          className="relative mx-auto mt-10  h-1/4"
          alt="car"
        />
      </div>
    </div>
  );
}
