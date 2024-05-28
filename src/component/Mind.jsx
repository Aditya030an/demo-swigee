import React, { useEffect, useState } from "react";
import data from "../utils/data";
import ShimmerTop from "../utils/ShimmerTop";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const Mind = () => {
  const json = data();
  const mindData = json[0]?.card?.card;
  const insideMind = mindData?.imageGridCards?.info;
  const tittle = mindData?.header?.title;
  // const scrollContainer = document.getElementById('scrollContainer');
  // console.log(scrollContainer);
  // const moveLeft = ()=>{
  //   scrollContainer.addEventListener("click" , function(){
  //       console.log("click");
  //   })
  //   scrollContainer.scroll({
  //     right:120,
  //     behavior:"smooth",
  //   })
  // }

  const scrollContainer = document.getElementById("scrollContainer");
  console.log(scrollContainer);
  function scrollWin(x, y) {
    console.log(x, y);
    scrollContainer.scrollBy(x, y);
  }
  return insideMind === undefined ? (
    // <h1>Loding....</h1>
    <ShimmerTop />
  ) : (
    <div className="">
      <div className=" w-9/12 mx-auto my-4 flex flex-col gap-4 border-b-2 border-gray-300">
        <div className=" flex items-center justify-between">
          <h1 className=" text-3xl font-bold font-sans ">
            {" "}
            {"UserName " + tittle}
          </h1>
          <div className=" flex w-32 justify-around items-center">
            <button
              className=" text-4xl rounded-full "
              onClick={() => scrollWin(-500, 0)}
            >
              <FaArrowLeft />
            </button>
            <button
              className="text-4xl rounded-full"
              onClick={() => scrollWin(500, 0)}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div
          className="  w-full overflow-auto"
          id="scrollContainer"
        >
          <div className=" w-screen flex">
            <div className="flex ">
              {insideMind.map((item) => {
                return (
                  <div key={item.id} className=" flex flex-col w-60 p-5 mb-24">
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
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mind;
