import React from "react";
import Heading from "./Headings";
const Choice_Tiles =
  "bg-white h-2/3 w-full flex flex-col   rounded-lg justify-self-end hover:shadow-lg transition-all duration-150 shadow-md";
const Para_Icons_Styles_Default =
  " h-[35%] w-5/6 relative mx-auto rounded-lg mt-4 items-center flex ";
function Para_Icons(props) {
  const Type = props.type;
  var Colored_Styles = "";
  if (Type === "booking") {
    Colored_Styles = Para_Icons_Styles_Default + "bg-black";
  } else if (Type === "location") {
    Colored_Styles = Para_Icons_Styles_Default + "bg-[127384]";
  } else if (Type === "Satisfaction") {
    Colored_Styles = Para_Icons_Styles_Default + "bg-[#FFA633]";
  }
  return (
    <div className={Colored_Styles}>
      <img
        src="https://dreamsrent.dreamguystech.com/html/assets/img/icons/bx-user-check.svg"
        alt="man icon"
        className="relative mx-auto
          "
      />
    </div>
  );
}
function Choice_Tiles_Containers(props) {
  return (
    <div className={Choice_Tiles}>
      {/* <div className="bg-black h-[35%] w-5/6 relative mx-auto rounded-lg mt-4 items-center flex">
      <img src="https://dreamsrent.dreamguystech.com/html/assets/img/icons/bx-user-check.svg" alt="man icon" 
       className="relative mx-auto
    "/>
    </div> */}
      <Para_Icons type={props.type} />
      <p className="relative mx-auto py-5 text-center text-2xl font-extrabold ">
        {props.text}
      </p>
      <p className="text-md px-3 pb-4 text-center text-black/50">
        Completely carinate e business testing process whereas fully researched
        customer service. Globally extensive content with quality.
      </p>
    </div>
  );
}
export default function component() {
  return (
    <div className=" flex h-[600px] flex-row bg-slate-50">
      <div className="h-full w-1/6 bg-[url('https://dreamsrent.dreamguystech.com/html/assets/img/bg/choose-left.png')] bg-cover "></div>
      <div className="relative mx-auto flex h-full w-full flex-col bg-slate-50">
        <Heading heading="Why Choose Us" />
        <div className="relative mx-auto grid h-[60rem]   w-full grid-cols-3 items-center justify-items-stretch gap-4 bg-slate-50 ">
          <Choice_Tiles_Containers
            type={"booking"}
            text="Easy & Fast Booking"
          />
          <Choice_Tiles_Containers
            type={"location"}
            text="Many Pickup Location"
          />
          <Choice_Tiles_Containers
            type={"Satisfaction"}
            text="Customer Satisfaction"
          />
        </div>
      </div>
      <div className=" h-full w-1/6 bg-cover "></div>
    </div>
  );
}
