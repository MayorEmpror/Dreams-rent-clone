import React from "react";
import Choice from "./Choice";
import Section_Header from "./Section_Header";
import Navbar from "./Navbar";
import ShowCaseGrid from "./ShowCaseGrid"
import Section_Pre_Header from "./Section_Pre_Header";
import Car_Types from "./Car_Types";
import Facts_Number from "./facts";
import Recomended_Cars from "./RecomendedCars";
import Comments from "./Comments";
import FAQs from "./FAQs";
import Pricing from "./Pricing";
import App_ShowCase from "./App_ShowCase";
import Footer from "./Footer";
export default function App_Content() {
      return (
      <div className="w-full bg-slate-100">
      <Navbar />
      <Section_Pre_Header />
      <Section_Header />
      <ShowCaseGrid/>
      <Car_Types />
      <Facts_Number />
      <Recomended_Cars />
      <Choice />
      <Comments />
      <FAQs />
      <Pricing />
      <App_ShowCase />
      <Footer />
      </div>
      );
}

//
