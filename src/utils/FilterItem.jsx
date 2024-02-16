import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addApply } from "./sideSlice";

export const Store = () => {
  const storeList = [
    "Relevance (Default)",
    "Delivert Time",
    "Rating",
    "Cost:Low to High",
    "Cost: Hidg to Low",
  ];

  const dispatch = useDispatch();
  const showAppplyButton = (index) => {
    const item = storeList[index];
    // console.log("Filteritem "+item )
    dispatch(addApply(item));
  };

  return (
    <div className=" mt-4 pl-7">
      <div className=" text-gray-500 font-medium">SORT BY</div>
      <div className=" flex flex-col mt-2">
        {storeList.map((item, index) => {
          return (
            <>
              {/* <input
                type="checkbox"
                className="appearance-none w-6 h-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              /> */}
              <div
                className=" flex items-center gap-3 text-xl text-gray-500 p-1  my-1"
                key={index}
              >
                <div className="shadow-xl shadow-gray-600 w-5 h-5 rounded-full flex items-center justify-center ">
                  <input
                    type="checkbox"
                    // className=" appearance-none  w-5 h-5 m-auto rounded-full  checked:bg-orange-500 cursor-pointer"
                    className={
                      index === 0
                        ? "appearance-none  w-5 h-5 m-auto rounded-full bg-orange-500 cursor-pointer"
                        : "appearance-none  w-5 h-5 m-auto rounded-full  checked:bg-orange-500 cursor-pointer"
                    }
                    onClick={() => {
                      // console.log(index);
                      showAppplyButton(index);
                    }}
                  />
                </div>
                <p key={item}> {item}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
export const Delivery = () => {
  return (
    <div className="flex flex-col  gap-2 text-xl text-gray-500 p-1 my-2">
      <p>FILTER BY</p>
      <div className=" flex items-center gap-2 p-3">
        <div className="shadow-xl shadow-gray-600 w-5 h-5 rounded-full flex items-center justify-center">
          <input
            type="checkbox"
            // className=" w-5 h-5 border-2 border-gray-500 checked:bg-orange-500"
            className="appearance-none  w-5 h-5 rounded-full checked:bg-orange-500 cursor-pointer"
          />
        </div>
        <p>Fast Delivery</p>
      </div>
    </div>
  );
};

const cuisinesList = [
  "Afghani",
  "American",
  "Arabian",
  "Asian",
  "Bakery",
  "Barbecue",
  "Beverages",
  "Biryani",
  "Burmese",
  "Cafe",
  "Cakes and Pastries",
  "Chaat",
  "Chinese",
  "Afghani",
  "American",
  "Arabian",
  "Asian",
  "Bakery",
  "Barbecue",
  "Beverages",
  "Biryani",
  "Burmese",
  "Cafe",
  "Cakes and Pastries",
  "Chaat",
  "Chinese",
  "Afghani",
  "American",
  "Arabian",
  "Asian",
  "Bakery",
  "Barbecue",
  "Beverages",
  "Biryani",
  "Burmese",
  "Cafe",
  "Cakes and Pastries",
  "Chaat",
  "Chinese",
];
export const Cuisines = () => {
  return (
    <div>
      <div>FILTER BY CUISINE</div>
      <div className="border-2 border-green-500 overflow-y-scroll h-80 mt-1">

        {cuisinesList.map((item, index) => {
          return (
            <div
              className=" flex items-center gap-3 text-xl text-gray-500 p-1  my-2"
              key={index}
            >
              <div className="shadow-xl shadow-gray-600 w-5 h-5 rounded-full flex items-center justify-center ">
                <input
                  type="checkbox"
                  className="appearance-none  w-5 h-5 m-auto rounded-full  checked:bg-orange-500 cursor-pointer"
                />
              </div>
              <p key={item}>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export const Explore = () => {
  return (
    <div>
      <h1>FILTER BY</h1>
      <div className="flex gap-4">
        <input type="checkbox" />
        <p>New on Swiggy</p>
      </div>
    </div>
  );
};
export const Rating = () => {
  return (
    <div>
      <h1>FILTER BY</h1>
      <div>
        <div className="flex gap-4">
          <input type="checkbox" />
          <p>Ratings 4.5+</p>
        </div>
        <div className="flex gap-4">
          <input type="checkbox" />
          <p>Rating 4.0+</p>
        </div>
        <div className="flex gap-4">
          <input type="checkbox" />
          <p>Rating 3.5+</p>
        </div>
      </div>
    </div>
  );
};
export const Veg = () => {
  const [gender, setGender] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <form>
      <div>FILTER BY</div>
      <label>
        <input
          type="radio"
          name="gender"
          value="Pure Veg"
          checked={gender === "Pure Veg"}
          onChange={handleGenderChange}
          className="mr-2"
        />
        Pure Veg
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="Non Veg"
          checked={gender === "Non Veg"}
          onChange={handleGenderChange}
          className="mr-2"
        />
        Non Veg
      </label>
    </form>
  );
};
export const Offers = () => {
  return (
    <div>
      <h1>REATAURANTS WITH</h1>
      <div className="flex gap-4">
        <input type="checkbox" />
        <p>Offers</p>
      </div>
    </div>
  );
};
export const Xyz = () => {
  return (
    <div>
      <h1>FILTER BY</h1>
      <div>
        <div className="flex gap-4">
          <input type="checkbox" />
          <p>Rs.300-Rs.600</p>
        </div>
        <div className="flex gap-4">
          <input type="checkbox" />
          <p>Grater than Rs.600</p>
        </div>
        <div className="flex gap-4">
          <input type="checkbox" />
          <p>Less than Rs.300</p>
        </div>
      </div>
    </div>
  );
};
