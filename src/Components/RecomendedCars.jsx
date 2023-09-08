import React from "react";
import Heading from "./Headings";
import Carousel from "react-multi-carousel";
import Menifesto_Cards from "./Menifesto";
import "react-multi-carousel/lib/styles.css";
import CarData from "./DataBase";
const Num = [];
for (let i = 0; i <= 4; i++) {
  Num.push(i);
}
const Mapings = Num.map((x, k) => {
  return (
    <Menifesto_Cards
      IsCarosel={true}
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
export default function Recomended_Cars() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="h-[1000px] w-full bg-slate-100">
      <div className="h-1/4 w-full  ">
        <Heading heading="Recommended Car Rental deals" />
      </div>

      <Carousel
        infinite={true}
        containerClass="w-[72.46%] relative mx-auto"
        rewind="true"
        transitionDuration={100}
        itemClass="carousel-item-padding-20-px"
        responsive={responsive}
        className="h-[55%] justify-self-start bg-slate-100"
      >
        {Mapings}
      </Carousel>
    </div>
  );
}
