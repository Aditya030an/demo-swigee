import React, { useEffect, useState } from "react";
import data from "../utils/data";
import ShimmerTop from "../utils/ShimmerTop";
import { FaArrowRight ,  FaArrowLeft} from "react-icons/fa";
const Mind = () => {
  const json = data();
  const mindData = json[0]?.card?.card;
  const insideMind = mindData?.imageGridCards?.info;
  const tittle = mindData?.header?.title;
  const scrollContainer = document.getElementById('scrollContainer');
  console.log(scrollContainer);
  const moveLeft = ()=>{
    scrollContainer.addEventListener("click" , function(){
        console.log("click");
    })
    scrollContainer.scroll({
      right:120,
      behavior:"smooth",
    })
  }

  return insideMind === undefined ? (
    // <h1>Loding....</h1>
    <ShimmerTop/>
  ) :(
    <div className="">
      <div className="scroll border-2 w-9/12 mx-auto my-4 flex flex-col gap-4 border-b-2 border-gray-300" >
        <div className="border-2 border-red-500 flex items-center justify-between">
        <h1 className=" text-3xl font-bold font-sans "> { "UserName " + tittle}</h1>
        <div className="border-2 border-green-500 flex w-32 justify-around items-center">
          <button className="border-2 border-yellow-500 text-4xl rounded-full " onClick={()=>{moveLeft()}}>< FaArrowLeft/></button>
          <button className="border-2 border-pink-500 text-4xl rounded-full"><FaArrowRight/></button>
        </div>
        </div>
        <div className="  w-full overflow-auto border-2 border-black " >
          <div className=" w-screen flex border-2 border-orange-600">
            <div className="flex border-2 border-blue-300 " >
              { 
                insideMind.map((item) => {
                  return (
                    <div
                    key={item.id}
                    className=" flex flex-col w-60 p-5 mb-24"
                    >
                      <img
                        className="border-2 border-orange-400 rounded-full shadow-stone-700 w-3/5 mx-auto"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqhWs9s18IQ6y-re_1-oJwM5ktdrAEFQ2I3Q&usqp=CAU"
                        alt="Image"
                      />
                      <h1 className="mx-auto text-xl font-medium text-gray-500">
                        {item?.action?.text}
                      </h1>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mind;
