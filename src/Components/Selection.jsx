import React from "react";
import CarData from "./DataBase.js";
import Menifesto_Cards from "./Menifesto.jsx";

const Mapings = CarData.System.map((x, k) => {
  return (
    <Menifesto_Cards
      IsCarosel={false}
      key={k}
      System={x}
      Picture={CarData.ImgUrl[k]}
      Name={CarData.Name[k]}
      Pricing={CarData.Pricing[k]}
      Registration={CarData.Registration[k]}
      location={CarData.location[k]}
      brand={CarData.brand[k]}
    />
  );
});
const Card_Content_Array = CarData.icons_brand.map((x, k) => {
  return (
    <Card_Content
      key={k}
      backgroundColor={CarData.backgroundColor[k]}
      type={CarData.type[k]}
      icon={x}
    />
  );
});

function Cards_Cars() {
  return (
    <>
      <div className=" grid-row-3 relative mx-auto mt-10  grid h-[1800px] w-3/4 grid-cols-3 gap-4 pb-20">
        {Mapings}
      </div>
    </>
  );
}

function Card_Content(props) {
  return (
    <div
      className={`${props.backgroundColor} mx-2 flex h-[84%] w-1/5 flex-row items-center rounded-lg`}
    >
      <div className="relative mx-auto ml-4 flex h-2/3 w-1/4 items-center rounded-lg bg-white text-center ">
        <p className="relative mx-auto text-center">{props.icon}</p>
      </div>
      <div className=" relative mx-auto flex h-3/4 w-2/3 items-center rounded-lg text-center ">
        <p className="relative mx-auto text-center "> {props.type}</p>
      </div>
    </div>
  );
}

export default function Selection() {
  return (
    <>
      <div className=" h-16 w-full ">
        <div className=" relative mx-auto mt-12  flex h-full w-[57rem] flex-row">
          {Card_Content_Array}
        </div>
      </div>
      <Cards_Cars />
    </>
  );
}
