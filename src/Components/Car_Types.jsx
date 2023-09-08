import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarData from "./DataBase";
import Heading from "./Headings";
export default function Car_Types() {
  const Car_Tiles = [];
  for (let i = 0; i <= 4; i++) {
    Car_Tiles.push(i);
  }

  const car_tiles_disp = Car_Tiles.map((k, x) => {
    return (
      <div
        id={x}
        key={k}
        className=" flex h-60  w-60 flex-col items-start bg-white text-center  text-xl text-black"
      >
        <div
          className=" h-1/2 w-full  bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${CarData.Popular_Cars.ImgUrl[x]})` }}
        ></div>
        <p className="relative mx-auto text-start font-semibold  ">
          {" "}
          {CarData.Popular_Cars.Name[k]} <br />
          <span>
            <p className="text-center text-sm font-thin text-black/50">
              {" "}
              {CarData.Popular_Cars.Quantity[k]} cars
            </p>
          </span>
        </p>
      </div>
    );
  });
  console.log(Car_Tiles + " car tiles");
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
    <div className="h-[578px] bg-slate-50">
      <div className="h-1/4 w-full  ">
        <Heading heading={"  Most Popular Car types"} />
      </div>
      <div className=" relative mx-auto mt-32   h-[35%] w-3/4 ">
        <Carousel
          infinite={true}
          containerClass="carousel-container"
          rewind="true"
          transitionDuration={100}
          itemClass="carousel-item-padding-40-px"
          responsive={responsive}
          className="h-full "
        >
          {car_tiles_disp}
        </Carousel>
      </div>
    </div>
  );
}
