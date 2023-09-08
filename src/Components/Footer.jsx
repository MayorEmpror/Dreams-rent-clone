import React from "react";
import CarData from "./DataBase"
import List from "./List"
export default function Footer() {


  return (
    <div className="mt-20 flex h-[550px]  w-full flex-col bg-[#201F1D] text-white">
      <div className="flex h-full w-full flex-row">
        <div className="h-full w-1/12 ">
          <img
            src="https://dreamsrent.dreamguystech.com/html/assets/img/footer-left.png"
            alt="lines"
          />
        </div>
        <div className="ml-5 flex h-full w-full flex-row">

          <div className="grid-row-1 grid h-full w-3/4 grid-cols-3 ">
            <div className="h-full w-full ">
                <p className="mt-10 text-white text-xl font-bold">About Company</p>
                <List items={CarData.FooterContentLists.List_one}/>
            </div>


            <div className="h-full w-full ">
            <p className="mt-10 text-white text-xl font-bold">Vehicles Types</p>
            <List items={CarData.FooterContentLists.List_two}/>
            </div>

            <div className="h-full w-full ">
            <p className="mt-10 text-white text-xl font-bold">Quick links</p>
            <List items={CarData.FooterContentLists.List_three}/>
            </div>

          </div>
          <div className="h-full w-2/3 ">
            <p className="mt-10 text-white text-xl font-bold">Contact Info</p>
      
       <div className=" h-[10%] w-[18rem] mt-12 text-end  flex flex-row">
        <div className="h-full w-1/6 bg-orange-400 rounded-md"></div>
        <p className="font-semibold text-white text-xl ml-5">+ 1 (888) 760 1940</p>
        </div>
        <div className=" h-[10%] w-[18rem] mt-5 mb-5 text-end  flex flex-row ">
        <div className="h-full w-32 bg-orange-400 rounded-md"></div>
        <p className="font-semibold text-white  text-xl ml-5 -px-5"> support@example.com </p>
        </div>
        <input type="text" className="text-black h-[4rem] w-full rounded-lg" placeholder="Enter your email"/>
        <p className="mt-4 font-semibold">Connect with us</p>
        <div className=" h-[10%] w-full flex flex-row">
       <div className="rounded-full bg-blue-600 h-full w-[3rem]  ml-2"></div>
       <div className="rounded-full bg-red-600 h-full w-[3rem]  ml-2"></div>
       <div className="rounded-full bg-blue-800 h-full w-[3rem]  ml-2"></div>
       <div className="rounded-full bg-cyan-500 h-full w-[3rem]  ml-2"></div>
       <div className="rounded-full bg-blue-900 h-full w-[3rem]  ml-2"></div>
       
        </div>
          </div>
    

        </div>

        <div className="flex h-full w-1/4 items-end">
          <img
            src="https://dreamsrent.dreamguystech.com/html/assets/img/footer-right.png"
            alt="corner"
          />
        </div>
      </div>
      <div className="h-20 w-full ml-32 grid grid-cols-2 grid-row-1">
        <p className="self-center">© 2023 Dreams Rent. All Rights Reserved.</p>
        <div className=" h-5/6 w-1/3 ml-32 flex flex-row items-center">
            <div className="bg-white rounded-lg h-1/2 w-1/5  mr-2"></div>
            <div className="bg-white rounded-lg h-1/2 w-1/5  mr-2"></div>
            <div className="bg-white rounded-lg h-1/2 w-1/5  mr-2"></div>
            <div className="bg-white rounded-lg h-1/2 w-1/5  mr-2"></div>
        </div>
        {/* <p className="border-2 border-orange-400 h-2/3 rounded-full w-[3rem] self-start"></p> */}
      </div>
    </div>
  );
}
