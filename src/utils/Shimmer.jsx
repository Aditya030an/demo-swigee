import React from "react";
import ShimmerCard from "./ShimmerCard";
const Shimmer = () => {
  return (
    <div className=" flex w-9/12 mx-auto">
      {Array(3)
        .fill(" ")
        .map((e, index) => {
          return (
            <div key={index} className=" p-2">
              <ShimmerCard />
            </div>
          );
        })}
    </div>
  );
};

export default Shimmer;
