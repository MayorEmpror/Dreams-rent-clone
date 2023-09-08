import React from "react";
const Parrent_Container =
  "relative -top-9 mx-auto grid h-32 w-3/4 grid-cols-7 grid-rows-1 rounded-lg bg-white";
const InputStyles =
  "!important -mt-3 ml-5 h-5/6 w-full rounded-lg border  border-slate-200 bg-slate-50 text-sm focus:border-none focus:outline-none focus:ring-slate-200";
const Input_location_box =
  "!important -mt-3 ml-5 h-5/6 w-full rounded-lg  border border-slate-200 text-sm focus:border-none focus:outline-none focus:ring-slate-200";
const Search_Button =
  "bg-color !important -mt-3 ml-5 mr-2 h-5/6 w-5/6  rounded-lg border border-slate-200  text-sm font-semibold text-white focus:border-none focus:outline-none focus:ring-slate-200";
function Input_Picup(props) {
  return (
    <div className="col-span-2  flex h-full w-full  flex-col rounded-lg">
      <div className="flex h-1/2 w-full  items-center rounded-lg ">
        <p className="ml-5  font-semibold">{props.heading}</p>
      </div>
      <div className="items-top  flex h-1/2 w-full rounded-lg">
        <input
          placeholder={props.placeholder1}
          type="text"
          name="PickUp"
          id="PickUp"
          className={InputStyles}
        />
        <input
          placeholder={props.placeholder2}
          type="text"
          name="PickUp"
          id="PickUp"
          className={InputStyles}
        />
      </div>
    </div>
  );
}
export default function InputData() {
  return (
    <div className={Parrent_Container}>
      <div className="col-span-2  flex h-full w-full  flex-col rounded-lg">
        <div className="flex h-1/2 w-full  items-center rounded-lg ">
          <p className="ml-5  font-semibold">Pickup Location</p>
        </div>
        <div className="items-top  flex h-1/2 w-full rounded-lg">
          <input
            placeholder="ಚ Enter City, Airport, or Address"
            type="text"
            name="PickUp"
            id="PickUp"
            className={Input_location_box}
          />
        </div>
      </div>
      <Input_Picup
        heading={"Pickup Date"}
        placeholder1={"04/11/2023"}
        placeholder2={"11:00 AM"}
      />
      <Input_Picup
        heading={"Return Date"}
        placeholder1={"04/11/2023"}
        placeholder2={"11:00 AM"}
      />
      <div className="col-span-1  flex h-full w-full  flex-col rounded-lg">
        <div className="flex h-1/2 w-full  items-center rounded-lg "></div>
        <div className="items-top  flex h-1/2 w-full rounded-lg">
          <button
            type="text"
            name="PickUp"
            id="PickUp"
            className={Search_Button}
          >
            🔎 Search
          </button>
        </div>
      </div>
    </div>
  );
}
