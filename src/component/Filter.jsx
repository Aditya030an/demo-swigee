import React from "react";
import FilterCard from "./FilterCard";
import { useDispatch, useSelector } from "react-redux";
import { removeFilterComponent } from "../utils/sideSlice";
const Filter = () => {
  const isFilter = useSelector((store)=>store.side.isFilter);
  return isFilter ? (
    <div
      className="absolute w-full h-screen z-50 "
    >
      <div className="fixed w-full h-screen bg-opacity-60 bg-black flex justify-center ">
        <FilterCard />
      </div>
    </div>
  ):null;
};

export default Filter;
