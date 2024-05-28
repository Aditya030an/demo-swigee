import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRupeeSign } from "react-icons/fa";
import { BiFoodTag } from "react-icons/bi";
import { IMAGE_API } from "../utils/constant";
import { GiMoneyStack } from "react-icons/gi";
import { addItemStore, noOfItem } from "../utils/userItemCardSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store?.card?.item);
  console.log("cartItem", cartItem);

  let [price , setPrice] = useState([]);
  
  useEffect(()=>{
    const totalPrice = cartItem.reduce((acc , item)=>{
      const itemPrice = item?.defaultPrice === undefined ? item?.price/100 : item?.defaultPrice/100;
      return acc+itemPrice;
    } , 0)

    setPrice((prevPrice)=>[totalPrice]);
  } ,[cartItem])

  console.log("price" ,price);

  const dispatch = useDispatch();
  
  const [addItem, setAddItem] = useState([...cartItem]);
  const removeItemFromCard = (index) => {
    const updatedItems = [...addItem];
    updatedItems.splice(index, 1);
    setAddItem(updatedItems);
  };
  useEffect(()=>{
    dispatch(addItemStore(addItem))
    dispatch(noOfItem(addItem.length))
  } , [removeItemFromCard]);

  return cartItem.length === 0 ? (
    <div className=" mt-20 relative py-10 ">
      <div className=" flex items-center justify-between  ">
        <div className="text-8xl font-semibold text-orange-500 w-1/4 whitespace-pre-line mt-4">
          <div className="p-7">No</div>
          <div className="p-7">Food</div>
          <div className="p-7">Yet's...</div>
        </div>
        <div className="w-1/4  h-full text-6xl font-semibold text-orange-500 flex flex-col items-end justify-end">
          <div className="p-7">Yarr Bhuk Lag</div>
          <div className="p-7">Rhi H.......</div>
        </div>
      </div>
      <div className=" absolute top-0  w-full h-full flex items-center justify-center ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6yM6obvqjBZEg9fbsXDy9vO2Tntzk0fzQZQ&usqp=CAU"
          alt="image of empty cart"
          className="w-1/2 aspect-video"
        />
      </div>
    </div>
  ) : (
    <div className=" flex mt-12 ">
      <div className="w-2/3  p-2">
        {cartItem.map((item , index) => {
          return (
            <div className="" key={item?.id}>
              {/* {console.log("menu id" , menu?.card?.info?.id)} */}
              <div className=" flex bg-white p-2 border-b-2 border-gray-400">
                <div className="w-4/5">
                  <div className="text-green-600 text-xl font-bold">
                    <BiFoodTag />
                  </div>
                  <div className="text-xl mt-2 ">{item?.name}</div>
                  <div className="flex items-center gap-1 text-xl font-medium">
                    <FaRupeeSign />
                    {item?.defaultPrice === undefined ? (
                      <div>{item?.price / 100}</div>
                    ) : (
                      <div>{item?.defaultPrice / 100}</div>
                    )}
                  </div>
                  <div className="text-gray-400 font-semibold">
                    {item?.description}
                  </div>
                </div>
                <div className=" relative w-1/5">
                  {item?.imageId ?
                  <img
                    src={IMAGE_API + item?.imageId }
                    // onerror="this.src='path/to/default-image.jpg'"
                    className=" rounded-2xl w-full h-40 shadow-2xl "
                  />
                  
                  :
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEaHvNLrWCO_aZmKTnfiD4TEH1kXUA_THlqg&usqp=CAU"
                    // onerror="this.src='path/to/default-image.jpg'"
                    className=" rounded-2xl w-full h-40 shadow-2xl  "
                  />
                }
                  <div className="absolute  w-full bottom-1 flex justify-center items-center">
                    <button
                      className="text-green-500 text-xl font-semibold border-2 border-gray-400 rounded-md px-4 py-1 bg-white "
                      onClick={() => {
                        removeItemFromCard(index);
                      }}
                    >
                      -Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-1/3   p-2">
        <div className="text-3xl font-medium text-orange-500 p-2 border-b-2 border-gray-400 flex gap-2 items-center justify-between shadow-xl">
          BILL
          <div className="text-green-700">
            <GiMoneyStack />
          </div>
        </div>
        <div>
          {cartItem.map((item) => {
            return (
              <div className="border-b-2 border-gray-300 border-dotted flex items-center justify-between p-2 mt-2">
                <div className="text-xl font-medium text-black">{item.name}</div>
                <div className="text-lg font-normal flex items-center gap-1">
                  {item?.defaultPrice === undefined ? (
                    <div>{item?.price / 100}</div>
                  ) : (
                    <div>{item?.defaultPrice / 100}</div>
                  )}
                  <FaRupeeSign/>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-between p-2 bg-orange-400 mt-2 rounded-lg shadow-lg">
          <div className="text-xl font-bold  text-black ">
            Total:
          </div>
          <div className="text-xl font-bold  text-black flex items-center gap-1">
            {price[0]}
            <FaRupeeSign/>
            <div className="text-lg text-gray-500 font-normal">
              only
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
