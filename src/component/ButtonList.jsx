import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilterComponent, removeFilterComponent } from "../utils/sideSlice";
import { setOrignal } from "../utils/sideFilterSlice";

const ButtonList = () => {
  const buttonList = [
    "Filter",
    "Sort By",
    "Fast Delivery",
    "New on Shop",
    "Rating 4.0+",
    "Pure Veg",
    "Offers",
    "Rs.300-Rs.600",
    "Less than Rs.300",
  ];
  const dispatch = useDispatch();
  const handleClick = (item) => {
    if (item === "Filter") {
      dispatch(addFilterComponent());
      dispatch(setOrignal());
    }
  };
  return (
    <div className=" shadow-gray-300 shadow-xl h-16 flex items-center bg-transparent"  >
      {buttonList.map((item, index) => {
        return (
          <button
            key={item}
            onClick={() => {
              handleClick(item);
            }}
            className="border-2 border-gray-200  rounded-full px-5 mx-1 py-1 text-base font-normal text-gray-600"
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonList;
