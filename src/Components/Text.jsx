import React from "react";
export default function Text(props) {
  return (
    <>
      <div
        className={`font-semibold"> <p className="text-center  font-arial relative relative left-1/2  mx-auto flex   h-full  w-20  items-center border-2 border-white text-center text-${props.color}-500`}
      >
        <p>Home</p>
      </div>
    </>
  );
}
