import React from "react";
import { Comment_Data } from "./Commets_Data";
import Heading from "./Headings";
import Carousel from "react-multi-carousel";

//import Menifesto_Cards from "./Menifesto";
//import CarData from "./DataBase";
function Comments_Content(props) {
  return (
    <div className="flex h-60 flex-col rounded-lg bg-white">
      <div
        className="ml-5 mt-5 h-1/6 w-1/12 bg-[url('https://dreamsrent.dreamguystech.com/html/assets/img/quote.svg')] bg-no-repeat "
        alt="this"
      ></div>

      <div className="ml-5 flex h-1/4 w-full flex-row ">
        <div
          className=" h-full w-[10%] rounded-full bg-cover"
          style={{ backgroundImage: `url(${props.Src})` }}
        ></div>
        <p className="ml-5">
          <span className="text-lg font-semibold"> {props.Name}</span>
          <br />
          ⭐️⭐️⭐️⭐️⭐️ <span className="text-black/50">(5.0)</span>
        </p>
      </div>
      <p className="ml-5 mt-4 w-[97%] px-5 text-left text-black/50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorem
        nam perferendis numquam quas similique doloremque qui recusandae veniam,
        dolores deleniti iusto laboriosam nemo eius dignissimos
      </p>
    </div>
  );
}
export default function Comments() {
  const Num = [];
  for (let i = 0; i <= 4; i++) {
    Num.push(i);
  }
  const Mapings = Num.map((x, k) => {
    return (
      <Comments_Content
        Name={Comment_Data.Name[k]}
        Pic={Comment_Data.Prof_Pics[k]}
        Src={Comment_Data.Prof_Pics[k]}
        key={k}
        k={x}
      />
    );
  });
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
    <div className=" h-[578px] w-full ">
      <div className="flex h-full w-full flex-col bg-[url('https://dreamsrent.dreamguystech.com/html/assets/img/bg/about-testimonial.jpg')] bg-cover bg-center">
        <Heading
          heading="What People say about us?"
          text="White"
          Heading_Color=" text-white"
        />

        <Carousel
          infinite={true}
          containerClass="w-[72%] relative mx-auto mb-20"
          rewind="true"
          transitionDuration={100}
          itemClass="carousel-item-padding-50-px"
          responsive={responsive}
          className="h-full  justify-self-start"
        >
          {Mapings}
        </Carousel>
      </div>
    </div>
  );
}
