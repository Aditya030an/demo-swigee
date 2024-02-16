import React, { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { MdCancel } from "react-icons/md";
import Mind from "./Mind";
import { SEARCH_API } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addCross, removeCross } from "../utils/sideSlice";
import Shimmer from "../utils/Shimmer";
const Search = () => {
  const [item, setItem] = useState([]);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const showIcon = () => {
    dispatch(addCross());
  };
  const removeIcon = () => {
    dispatch(removeCross());
  };

  useEffect(() => {
    getSearchInput(text);
    // console.log("input value change " , text);
  }, [text]);

  const getSearchInput = async (text) => {
    // console.log("inside getSearchInput", text);
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/suggest?lat=25.155275&lng=75.858818&str=" +
        text +
        "&trackingId=null"
    );
    const json = await data.json();
    // console.log(json);
    const item = json?.data?.suggestions;
    console.log(item);
    setItem(item);
  };
  const IMAGE =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/";
  const show = useSelector((store) => store.side.isSearch);
  console.log(show);
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className=" mt-44 w-3/4">
        <form className="w-full">
          <div className="border-2 border-gray-400 rounded-md flex items-center justify-around gap-3 pr-5">
            <div className=" grow text-4xl p-2 ">
              <input
                type="text"
                placeholder="search for reataurent and food"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                  showIcon();
                  console.log(e.target.value.length);
                  if (e.target.value.length === 0) {
                    removeIcon();
                  }
                }}
                className="w-full p-2 text-gray-700 font-medium text-3xl outline-none border-none"
              />
            </div>
            <div className=" w-10 h-10 text-3xl align-middle cursor-pointer">
              {show ? <FcSearch /> : <MdCancel />}
            </div>
          </div>
        </form>
      </div>
      {show ? (
        <Mind />
      ) : item === undefined ? (
        <Shimmer />
      ) : (
        <div className=" w-9/12 p-4">
          {item.length === 0 ? (
            <h1>Not found</h1>
          ) : (
            <div>
              {item.map((item) => {
                // console.log(index);
                return (
                  <div
                    key={item?.text}
                    className=" flex items-center justify-start gap-4 mb-4 hover:bg-blue-50"
                  >
                    <div>
                      <img src={IMAGE + item?.cloudinaryId} alt="image" className="w-20 rounded-md"/>
                    </div>
                    <div className=" flex flex-col items-start">
                      <div className="font-medium text-2xl">{item?.text}</div>
                      <div className="font-normal text-xl">{item?.tagToDisplay}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
