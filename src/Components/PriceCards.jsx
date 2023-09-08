import React from "react";
import CarData from "./DataBase";
export default function PriceCards(props) {
  const [bgColor, SetbgColor] = React.useState(
    props.color_DE_heading_Background
  );
  const [TextColor, SetTextColor] = React.useState();
  function OnMouseEnter() {
    SetbgColor(props.Hover_Color);
    SetTextColor(props.Text);
  }
  function OnMouseLeave() {
    SetbgColor(props.color_DE_heading_Background);
    SetTextColor(" ");
  }
  const features_Not_Provided = CarData.PricingQuestions.Card_two.Lose.map(
    (e, k) => {
      return (
        <span key={k}>
          <p className=" pl-5 pt-5 line-through">
            <span className="mr-2"> ☣️</span>
            {e}
          </p>
        </span>
      );
    }
  );
  const features_Provided = CarData.PricingQuestions.Card_two.Get.map(
    (e, k) => {
      return (
        <span key={k}>
          <p className=" pl-5 pt-5">
            <span className="mr-2"> ☣️</span>
            {e}
          </p>
        </span>
      );
    }
  );
  // #ff9307
  return (
    <div
      className={
        "h-[90%] w-11/12 rounded-xl border border-slate-300   bg-white duration-300  hover:bg-cyan-700 " +
        TextColor
      }
      onMouseEnter={OnMouseEnter}
      onMouseLeave={OnMouseLeave}
    >
      <div
        className={
          " relative mx-auto mb-5 mt-5 flex h-[12%] w-5/6 flex-col items-center rounded-lg text-black " +
          bgColor
        }
      >
        <p className="relative mx-auto mt-1 text-center text-2xl font-bold ">
          {props.heading}
        </p>
        <p className="pb-3 ">For the basics</p>
      </div>

      <span className={"cursive pl-4 text-5xl "}>{props.price}</span>
      <p className={"ml-5 "}> Per user per month</p>

      {features_Provided}
      {features_Not_Provided}
      <br />
      <div
        className={
          " relative mx-auto  flex h-[8%] w-5/6 flex-col items-center rounded-md text-black " +
          props.Border +
          bgColor
        }
      >
        <p
          className={
            "relative mx-auto mt-1 flex items-center text-center text-lg font-bold "
          }
        >
          {props.Selection}
        </p>
      </div>
    </div>
  );
}
