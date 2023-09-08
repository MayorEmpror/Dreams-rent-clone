import React from "react";
import Heading from "./Headings";
import Selection from "./Selection";
export default function ShowCaseGrid() {
return (
    <div className="h-fit w-full bg-slate-100">
    <div className="h-1/4 w-full  ">
      <Heading heading={"Explore Most popular cars"} />
    </div>
 <Selection />
  </div>
)
}