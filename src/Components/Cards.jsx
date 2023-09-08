import React from "react";
export default function Card(props) {
  return (
    <>
      <div className=" flex h-full w-full flex-col">
        <div className="bg-blue-30 flex h-1/2 w-full items-center ">
          <div
            className={` relative mx-auto h-[5.6vw] w-[5.6vw] rounded-full border-2 border-dashed border-${props.color} flex items-center`}
          >
            <div
              className={`${props.backColor} relative mx-auto flex h-[4vw] w-[4vw] items-center rounded-full`}
            >
              <img
                src="https://dreamsrent.dreamguystech.com/html/assets/img/icons/services-icon-01.svg"
                alt="icon"
                className="relative mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="-mt-4">
          <p className="text-center  text-2xl font-bold">
            {props.text_heading}
          </p>
          <p className="mt-2  text-center  text-black/50">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s,
          </p>
        </div>
      </div>
    </>
  );
}
// teal-600
// green
//1. Choose Locations
