import React from "react";
export default function Menifesto_Cards(props) {
  // eslint-disable-next-line no-unused-vars
  const [IsCarosel, SetIsCarosel] = React.useState(props.IsCarosel);
  const ParrentClassName = IsCarosel
    ? "flex h-[32rem] w-full flex-col rounded-xl bg-white"
    : "flex h-full w-full flex-col rounded-xl bg-white";

  return (
    <div className={ParrentClassName}>
      <div className="relative  mx-auto mt-5  h-1/2 w-[94%] overflow-hidden rounded-lg">
        <div className="relative z-20 ml-4 mt-4 h-1/4 w-full">
          <button className="h-[2rem] w-[5rem] rounded-lg bg-white text-black/50">
            {props.brand}
          </button>
        </div>
        <div
          style={{ backgroundImage: `url(${props.Picture})` }}
          className="relative mx-auto -mt-20 h-full w-full  rounded-lg  bg-cover bg-no-repeat transition delay-150 duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
        ></div>
      </div>
      <div className="bg-blue-20 relative mx-auto flex h-1/2 w-[94%] flex-col rounded-lg bg-cover bg-no-repeat">
        <p className="mt-2 text-xl font-semibold">{props.Name}</p>
        <p className=" mt-2  font-semibold text-black/50">
          ⭐️⭐️⭐️⭐️⭐️⭐️ (5.0)
        </p>
        <hr className="mt-5" />
        <div className="text-medium grid  h-[29%] w-full grid-cols-3 grid-rows-2 text-black/50">
          <p>{props.System}</p>
          <p>10KM</p>
          <p>Petrol</p>
          <p>Power</p>
          <p>{props.Registration}</p>
          <p>5 persons</p>
        </div>
        <div className="grid  h-[71%] w-full grid-cols-1 grid-rows-2 gap-1 ">
          <div className="grid-row-1 mb-2 mt-5 grid h-[70%] w-full grid-cols-2 items-center rounded-md bg-slate-100">
            <span className="text-black/50 ">📍 {props.location}</span>
            <span className="justify-self-end text-black/50">
              <span className="text-2xl font-bold text-red-500 ">
                {props.Pricing}
              </span>{" "}
              /Day
            </span>
            <p></p>
          </div>
          <div className="text-md flex h-[70%] w-full items-center rounded-md bg-black  text-center text-white">
            <p className="relative mx-auto text-center font-bold">Rent Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}
