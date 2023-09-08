import React from "react";
import Heading from "./Headings";
import CarData from "./DataBase";
const AccordionElements = CarData.Array_FAQs.map((e, k) => {
  return (
    <AccordionElement
      key={k}
      f={"a"}
      hidden_Content="
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quia reprehenderit corporis nesciunt. Et, impedit consequatur at aliquam accusantium, quod dolores a repudiandae rerum qui iure repellendus beatae sint recusandae!  
    "
    >
      {e}
    </AccordionElement>
  );
});
function AccordionElement(props) {
  const [state, SetState] = React.useState(true);
  const Height = state ? "h-16" : "h-32";
  const show = state ? " hidden" : " block ";

  return (
    <div
      className={
        "relative  mx-auto mt-5 grid w-5/6 grid-cols-4 grid-rows-2 justify-items-stretch rounded-md bg-white transition-all duration-200 " +
        Height
      }
    >
      <p className="row-span- col-span-3 pl-3 pt-3 text-lg font-semibold ">
        {" "}
        {props.children}
        <br />
        <span
          className={
            "text-md  col-span-3 row-span-1 pl-3 pt-3 font-normal text-black/50" +
            show
          }
        >
          {props.hidden_Content}
        </span>{" "}
      </p>

      <div className="col-span-1 row-span-2  justify-self-end  ">
        <button
          className=" relative mx-auto mr-2 mt-5 h-5 w-5 rounded-full bg-black/50 text-white duration-200 hover:bg-amber-600
     "
          onClick={() => {
            SetState((preval) => !preval);
            console.log(props.f + ":" + state);
          }}
        >
          ^
        </button>
      </div>
    </div>
  );
}

function Accordion() {
  return <div>{AccordionElements}</div>;
}
//import CarData from "./DataBase"

export default function FAQs() {
  return (
    <div className="flex h-[1000px] w-full flex-col bg-slate-100">
      <div className="flex h-1/4 w-full flex-col  ">
        <Heading heading="What People say about us?" />
      </div>
      <div className="mt-5 flex h-3/4 w-full flex-col bg-slate-100">
        <Accordion />
      </div>
    </div>
  );
}
