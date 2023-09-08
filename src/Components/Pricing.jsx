import React from "react";
import PriceCards from "./PriceCards";
//Et Si Tu N'Existais Pas
import Heading from "./Headings";
import { Switch } from "@headlessui/react";
export default function Pricing() {
  const [enabled, setEnabled] = React.useState(false);
  return (
    <div className="flex h-[1500px] w-full flex-col items-stretch bg-slate-50">
      <Heading heading={"Transparent Pricing For you"} />

      <div className="relative  top-[-551px] w-full">
        <div className=" relative  mx-auto h-fit w-fit ">
          <span className="mr-5 text-lg"> Monthly</span>

          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? "bg-green-600" : "bg-gray-200"}
      
        relative    mx-auto inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${
                enabled ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
          <span className="ml-5 text-lg">Annually</span>
        </div>
      </div>

      <div className=" relative top-[-500px] mx-auto grid h-5/6 w-5/6 grid-cols-4 grid-rows-1 items-center gap-4">
        {/* first */}
        <div className="h-[90%] w-11/12 rounded-xl    bg-cyan-700 ">
          <div className="flex  h-1/4 w-full flex-col items-stretch pl-4 pt-5">
            <p className="cursive text-4xl text-white">
              {" "}
              Save more with <br />
              Good Plans
            </p>
            <p className="pt-2 text-white">
              Choose a plan and get onboard in Minutes, then get $100 with next
              payment
            </p>
            <img
              src="https://dreamsrent.dreamguystech.com/html/assets/img/price-plan.png"
              alt="car"
              className="mt-20 self-end"
            />
          </div>
        </div>

        <PriceCards
          heading="Essential"
          Selection="Request a demo"
          Border=" border "
          Text=" text-white"
          price={"$49"}
          color_DE_heading_Background=" bg-white text-black "
          Hover_Color=" bg-white text-black "
        />
        <PriceCards
          heading="Recommended "
          Selection="Request a demo"
          Text=" text-white"
          price={"$95"}
          color_DE_heading_Background=" bg-[#ff9307] text-white"
          Hover_Color=" bg-black text-white"
        />

        <PriceCards
          heading="Pro"
          Selection="Request a demo"
          Border=" border "
          Text=" text-white"
          price={"$154"}
          color_DE_heading_Background=" bg-white text-black "
          Hover_Color=" bg-white text-black "
        />
      </div>
    </div>
  );
}
