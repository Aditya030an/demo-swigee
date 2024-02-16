import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeApply, removeFilterComponent } from "../utils/sideSlice";
import {
  Store,
  Delivery,
  Cuisines,
  Explore,
  Rating,
  Veg,
  Offers,
  Xyz,
} from "../utils/FilterItem";
import { setOption } from "../utils/sideFilterSlice";

const FilterCard = () => {
  const filterList = [
    "Sort",
    "Delivery Time",
    "Cuisines",
    "Explore",
    "Rating",
    "Veg/Non-Veg",
    "Offers",
    "Xyz",
  ];
  const componentItem = [
    <Store />,
    <Delivery />,
    <Cuisines />,
    <Explore />,
    <Rating />,
    <Veg />,
    <Offers />,
    <Xyz />,
  ];
  const [index, setIndex] = useState();
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(removeFilterComponent());
  }

  const common = "text-orange-500";
  const css = useSelector((store) => store.filter.item);
  const handleCss = (index) => {
    dispatch(setOption(index));
  };

  const show = useSelector((store) => store.side.isApply);
  // console.log(show);
  const showApplyButton = () => {
    dispatch(removeApply());
  };


  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-7/12 h-3/6  bg-white rounded-2xl opacity-100 absolute my-auto p-2 px-1 flex flex-col border-2 border-green-300 ">
        <div className="border-b-2 border-gray-300 flex justify-between items-center p-1">
          <h1 className="font-semibold text-gray-700 text-4xl">Filter</h1>
          <button
            onClick={() => {
              handleClick();
              showApplyButton();
            }}
            className=" w-9 rounded-full aspect-square text-xl font-bold text-gray-700 shadow-xl shadow-slate-300"
          >
            X
          </button>
        </div>
        <div className=" flex">
          <div className="border-2 border-black w-5/12 h-4/5 overflow-y-scroll">
            <ul className="">
              {filterList.map((item, index) => {
                return (
                  <li
                    onClick={() => {
                      // console.log(index);
                      setIndex(index);
                      handleCss(index);
                    }}
                    className=" font-bold text-gray-500 text-2xl p-3 px-3 cursor-pointer"
                    key={item}
                  >
                    <div className={css[index] ? common : null}>{item}</div>

                    {/* {item} */}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="border-2 border-black w-full h-4/5 overflow-hidden ">
            {index === undefined ? componentItem[0] : componentItem[index]}
          </div>
        </div>
        {show ? (
          <div className="text-white  absolute -bottom-20 w-full h-20 -mx-1 rounded-b-2xl bg-white flex items-center justify-end gap-28 cursor-pointer px-7 shadow-md shadow-gray-600 mb-2">
            <button
              className="text-orange-600 text-2xl font-bold"
              onClick={() => {
                handleClick();
                showApplyButton();
              }}
            >
              Clear Filter
            </button>
            <button className="text-white text-2xl font-bold bg-orange-600 p-3 rounded-2xl w-40 cursor-pointer">
              Apply
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FilterCard;
