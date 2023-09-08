import React from "react";
export default function Heading(props) {
  const text_Styles =
    props.text === "White"
      ? "mt-3 text-center text-white"
      : "mt-3 text-center text-black/50";
  const Heading_Styles =
    props.Heading_Color +
    " cursive relative mx-auto mt-20 text-center text-5xl ";
  return (
    <div className="relative mx-auto flex h-full flex-col items-center">
      <p className={Heading_Styles}>{props.heading}</p>
      <img
        src="https://dreamsrent.dreamguystech.com/html/assets/img/bg/title-head.png"
        className="mt-3"
        alt="bow"
      />
      <p className={text_Styles}>
        Lorem Ipsum has been the industrys standard dummy text <br /> ever since
        the 1500s,
      </p>
    </div>
  );
}
