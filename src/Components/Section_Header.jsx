import React from "react";
import Card from "./Cards";
import Heading from "./Headings";
import InputData from "./InputData";
export default function Section_Header() {
  return (
    <>
      <div className="h-[707px] w-full bg-slate-100/30 ">
        <InputData />
        <div className=" h-[500px] w-full">
          <Heading heading={" How It Works"} />
        </div>
        <div className=" relative mx-auto -mt-80 grid h-[400px] w-3/4 grid-cols-3 grid-rows-1">
          <Card
            color={"teal-600"}
            text_heading={"1. Choose Locations"}
            backColor={"green"}
          />
          <Card
            color={"orange-600"}
            text_heading={"1. Choose Locations"}
            backColor={"bg-color"}
          />
          <Card
            color={"black"}
            text_heading={"1. Choose Locations"}
            backColor={"bg-black"}
          />
        </div>
      </div>
    </>
  );
}
