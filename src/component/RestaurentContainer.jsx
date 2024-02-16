import React, { useEffect } from "react";
import data from "../utils/data";
import { TOP_IMAGE } from "../utils/constant";
import Shimmer from "../utils/Shimmer";
const RestaurentContainer = () => {
  const json = data();
  const restorentData = json[1]?.card?.card;
  const insideRestorent =
  restorentData?.gridElements?.infoWithStyle?.restaurants;
  console.log(insideRestorent);


  return  insideRestorent === undefined ? (
    <Shimmer />
  ) :  (
    <div className="flex flex-wrap items-center gap-x-1">
      {insideRestorent.map((item) => {
        return (
          <div
            key={item?.info?.id}
            className="flex flex-col w-80 p-3 mb-3 hover:scale-95 transition-all ease-in-out "
          >
            <img
              src={TOP_IMAGE + item.info.cloudinaryImageId}
              className="w-96 aspect-video rounded-3xl scale-100 -z-50"
            />

            {/* <span className="text-3xl  font-semibold">{item?.info?.aggregatedDiscountInfoV3?.header}</span> */}
            {item?.info?.aggregatedDiscountInfoV3?.header ? (
              <h1 className="text-2xl text-orange-200 -mt-9 ml-3 font-bold ">
                {item?.info?.aggregatedDiscountInfoV3?.header +
                  " " +
                  item?.info?.aggregatedDiscountInfoV3?.subHeader}
              </h1>
            ) : (
              <h1 className="opacity-100"></h1>
            )}
            <p className="mx-3 text-xl font-bold mt-2 truncate">{item?.info?.name}</p>
            <p className="mx-3 flex gap-3">
              <p className="font-semibold text-xl">
                {item?.info?.avgRatingString}
              </p>
              <p className="font-black text-4xl -mt-4">.</p>
              <p className="font-semibold text-xl">
                {item?.info?.sla.slaString}
              </p>
            </p>
            <p className="mx-3 font-normal text-xl text-gray-400 truncate">
              {item?.info?.sla.lastMileTravelString}
            </p>
            <p className="mx-3 font-normal text-xl text-gray-400 tracking-tighter truncate">
              {item?.info?.cuisines.join(" , ")}
            </p>
            <p className="mx-3 font-normal text-xl text-gray-400 truncate">
              {item?.info?.locality}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurentContainer;
