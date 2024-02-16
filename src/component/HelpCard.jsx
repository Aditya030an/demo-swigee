import React, { useEffect, useState } from "react";
import { HELP_SUPPORT_API } from "../utils/constant";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const HelpCard = () => {
  const [sideItem, setSideItem] = useState([]);
  useEffect(() => {
    getSideItem();
  }, []);
  const getSideItem = async () => {
    const data = await fetch(HELP_SUPPORT_API + "?");
    const json = await data.json();
    const item = json?.data?.issueTypes?.data;
    console.log(item);
    setSideItem(item);
    console.log(sideItem);
  };
  return (
    <div className="border-2 border-red-500 h-screen w-9/12">
      <div>Help and Support</div>
      <div className="flex items-center justify-center border-2 border-white ">
        <div className="w-1/3 grow-0 ">
          {sideItem.length === 0
            ? null
            : sideItem.map((item) => {
                return (
                  <Link to={item.type} key={item.type}>
                    <div>{item.title}</div>
                  </Link>
                );
              })}
        </div>
        <div className="w-full grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HelpCard;
