import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import RestMenu from "./RestMenu";
import { IMAGE_API } from "../utils/constant";
import {
  FaArrowDown,
  FaChevronDown,
  FaStar,
  FaChevronUp,
} from "react-icons/fa6";
import { BiFoodTag } from "react-icons/bi";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { IoIosLeaf } from "react-icons/io";
// import { GrSquare } from "react-icons/gr";
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItemStore , noOfItem } from "../utils/userItemCardSlice";

const RestaurentMenu = () => {
  const [menu, setmenu] = useState([]);
  const [offer, setOffer] = useState([]);
  const [restItem, setRestItem] = useState([]);
  const { restId } = useParams();
  useEffect(() => {
    getMenu();
  }, []);
  const getMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.155275&lng=75.858818&restaurantId=" +
        restId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    const items = json?.data?.cards;
    // console.log("item", items);
    // console.log("item length", items.length);
    setmenu(items);
    setOffer(
      items[items.length - 2]?.card?.card?.gridElements?.infoWithStyle?.offers
    );
    // setRestaurent(items[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    setRestItem(
      items[items.length - 1]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  };
  // console.log(menu);
  // console.log(offer);
  // console.log("restItem",restItem);
  const [addItem, setAddItem] = useState([]);

  const dispatch = useDispatch();
  const addingItemInCard = (item) => {
    setAddItem([...addItem, item]);
    console.log("added item:", item);
    // dispatch(addItemStore(addItem));
  };

  useEffect(() => {
    dispatch(addItemStore(addItem));
    dispatch(noOfItem(addItem.length))
  }, [addingItemInCard]);


  const [show, setShow] = useState();
  const handleShow = (index) => {
    setShow(index);
  };
  return (
    <div className="flex items-center justify-center">
      <div className=" w-7/12 mt-4">
        <div className="flex items-center justify-between ">
          <div className=" p-2">
            <p className="font-bold text-4xl mb-3">
              {menu[0]?.card?.card?.info?.name}
            </p>
            <p className="text-gray-600 text-lg">
              {menu[0]?.card?.card?.info?.labels[2]?.message}
            </p>
            <p className="text-gray-600 text-lg">
              {menu[0]?.card?.card?.info?.city} ,{" "}
              {menu[0]?.card?.card?.info?.sla?.lastMileTravelString}
            </p>
          </div>
          <div className="border-2 border-gray-300 rounded-md p-2 mr-4">
            <p className="border-b-2 border-gray-300  font-semibold text-green-600 text-2xl flex items-center justify-center">
              <FaStar />
              <div className="ml-2">
                {menu[0]?.card?.card?.info?.avgRatingString}
              </div>
            </p>
            <p className="p-2 font-bold  text-gray-600 ">
              {menu[0]?.card?.card?.info?.totalRatingsString}
            </p>
          </div>
        </div>
        <div className="p-2 border-t-2 border-gray-300 border-dotted">
          <div className=" text-xl text-black font-bold">
            {menu[0]?.card?.card?.info?.sla?.slaString}
            <div className=" flex items-center gap-1">
              <div className="text-3xl ">
                <HiOutlineCurrencyRupee />
              </div>
              {menu[0]?.card?.card?.info?.costForTwoMessage}
            </div>
          </div>
        </div>
        <div className=" overflow-x-scroll">
          <div className="flex items-center  w-screen cursor-pointer">
            {offer === undefined
              ? null
              : offer?.map((item, index) => {
                  return (
                    <div className="mr-3 p-2  w-1/4">
                      <div
                        className="border-2 border-gray-300 rounded-lg p-2"
                        key={index}
                      >
                        <div className=" flex gap-2 font-semibold text-lg">
                          <img
                            src={
                              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/" +
                              item?.info?.logoBottom
                            }
                          />
                          <div>{item?.info?.header}</div>
                        </div>

                        <div>
                          {item?.info?.couponCode} | {item?.info?.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
        <div className="">
          {restItem === undefined
            ? null
            : restItem?.map((item, index) => {
                // console.log("item:" , item);
                // console.log("index length in restItem", restItem.length);
                return index === 0 ? (
                  <div
                    key={index}
                    className="flex items-center gap-1 p-4 font-semibold border-b-2 border-gray-300"
                  >
                    <div className="text-green-600 text-2xl">
                      <IoIosLeaf />
                    </div>
                    PURE VEG
                  </div>
                ) : index < restItem.length - 2 ? (
                  <div key={index} className=" ">
                    <div className=" text-xl font-bold p-2 py-5 flex items-center justify-between">
                      <div>
                        {item?.card?.card?.title}
                        {`  `}({item?.card?.card?.itemCards?.length})
                      </div>
                      <div
                        className="mr-3"
                        onClick={() => {
                          handleShow(index);
                        }}
                      >
                        {show !== index ? <FaChevronDown /> : <FaChevronUp />}
                      </div>
                    </div>
                    {show !== index ? (
                      <div className="bg-gray-200 py-3">
                        {item?.card?.card?.itemCards?.map((menu) => {
                          return (
                            <div className="" key={menu?.card?.info?.id}>
                              {/* {console.log("menu id" , menu?.card?.info?.id)} */}
                              <div className=" flex bg-white p-2 border-b-2 border-gray-400">
                                <div className="w-4/5">
                                  <div className="text-green-600 text-xl font-bold">
                                    <BiFoodTag />
                                  </div>
                                  <div className="text-xl mt-2 ">
                                    {menu?.card?.info?.name}
                                  </div>
                                  <div className="flex items-center gap-1 text-xl font-medium">
                                    <FaRupeeSign />
                                    {menu?.card?.info?.defaultPrice ===
                                    undefined ? (
                                      <div>{menu?.card?.info?.price / 100}</div>
                                    ) : (
                                      <div>
                                        {menu?.card?.info?.defaultPrice / 100}
                                      </div>
                                    )}
                                  </div>
                                  <div className="text-gray-400 font-semibold">
                                    {menu?.card?.info?.description}
                                  </div>
                                </div>
                                <div className=" relative w-1/5">
                                  {menu?.card?.info?.imageId ? (
                                    <img
                                      src={
                                        IMAGE_API + menu?.card?.info?.imageId
                                      }
                                      // onerror="this.src='path/to/default-image.jpg'"
                                      className=" rounded-2xl w-full h-40 shadow-2xl "
                                    />
                                  ) : (
                                    <img
                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEaHvNLrWCO_aZmKTnfiD4TEH1kXUA_THlqg&usqp=CAU"
                                      // onerror="this.src='path/to/default-image.jpg'"
                                      className=" rounded-2xl w-full h-40 shadow-2xl  "
                                    />
                                  )}
                                  <div className="absolute  w-full bottom-1 flex justify-center items-center">
                                    <button
                                      className="text-green-500 text-xl font-semibold border-2 border-gray-400 rounded-md px-4 py-1 bg-white "
                                      onClick={() => {
                                        addingItemInCard(menu?.card?.info);
                                      }}
                                    >
                                      + Add
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <div key={index} className="bg-gray-300">
                    {index === restItem.length - 2 ? (
                      <div className="">
                        <img
                          src={
                            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_60/" +
                            item.card.card.imageId
                          }
                          alt="image"
                        />
                        {item.card.card.text}
                      </div>
                    ) : (
                      <div>
                        <div>{item.card.card.name}</div>
                        <div>(Outlet-{item.card.card.area})</div>
                        <div>{item.card.card.completeAddress}</div>
                      </div>
                    )}
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default RestaurentMenu;
