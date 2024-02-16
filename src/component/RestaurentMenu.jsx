import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import RestMenu from "./RestMenu";
import { IMAGE_API } from "../utils/constant";
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
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.1685786&lng=79.9338798&restaurantId=" +
        restId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    const items = json?.data?.cards;
    console.log(items);
    setmenu(items);
    console.log(menu);
    setOffer(items[1]?.card?.card?.gridElements?.infoWithStyle?.offers);
    console.log(offer);
    // setRestaurent(items[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    setRestItem(items[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    console.log(restItem);
  };
  return (
    <div className="flex items-center justify-center">
      <div className="border-2 border-red-600 w-9/12 mt-4">
        <div className="flex items-center justify-between border-2 border-dotted border-b-red-900">
          <div>
            <p>{menu[0]?.card?.card?.info?.name}</p>
            <p>{menu[0]?.card?.card?.info?.labels[2]?.message}</p>
            <p>
              {menu[0]?.card?.card?.info?.city} ,{" "}
              {menu[0]?.card?.card?.info?.sla?.lastMileTravelString}
            </p>
          </div>
          <div>
            <p>{menu[0]?.card?.card?.info?.avgRatingString}</p>
            <p>{menu[0]?.card?.card?.info?.totalRatingsString}</p>
          </div>
        </div>
        <div>
          <div>
            {menu[0]?.card?.card?.info?.sla?.slaString}
            {menu[0]?.card?.card?.info?.costForTwoMessage}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-around">
            {offer.map((item, index) => {
              return (
                <div className="" key={index}>
                  <div>{item?.info?.header}</div>
                  <div>{item?.info?.couponCode}</div>
                  <div>{item?.info?.description}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="border-2 border-red-500">
          menu
          {restItem.length === 0
            ? null
            : restItem.map((item, index) => {
                // console.log("item:" , item);
                return index === 0 ? (
                  <div key={index}>Pure Veg</div>
                ) : (
                  <div key={index} className="border-2 border-green-500">
                    <div className="border-2 border-pink-400">
                      {item?.card?.card?.title}
                    </div>
                    <div className="border-2 border-blue-500" >
                      {item?.card?.card?.itemCards?.map((menu) => {
                        return (
                          <div>
                            <div className="border-2 border-purple-400 flex justify-between">
                              <div className="border-2 border-orange-400">
                                <div>{menu?.card?.info?.name}</div>
                                <div>{menu?.card?.info?.price / 100}</div>
                                <div>{menu?.card?.info?.description}</div>
                              </div>
                              <div className="border-2 border-black">
                                <img
                                  src={IMAGE_API + menu?.card?.info?.imageId}
                                  alt="image"
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default RestaurentMenu;
