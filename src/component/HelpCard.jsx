import React, { useEffect, useState } from "react";
import { HELP_SUPPORT_API } from "../utils/constant";
import { Outlet, useParams } from "react-router";
import { Link } from "react-router-dom";

const HelpCard = () => {
  const [activeLink, setActiveLink] = useState("partner-onboarding");
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };
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
  const param = useParams();
  console.log("inside help card", param);
  return (
    <div className=" h-full w-9/12">
      <div className="text-5xl font-semibold text-white">Help & Support</div>
      <div className="text-xl text-white font-medium mt-2">
        Let's take a step ahead and help you better
      </div>
      <div className="flex  justify-center  bg-white p-7 pb-0 ">
        <div className="w-2/5 grow-0  bg-gray-300 flex justify-end">
          <div className="mt-7 w-10/12 ">
            {sideItem.length === 0
              ? null
              : sideItem.map((item) => {
                  return (
                    <Link to={item.type} key={item.type}>
                      <div
                        className={
                          activeLink === item.type
                            ? " p-7 text-2xl  hover:scale-3 hover:font-semibold bg-white font-semibold "
                            : " p-7 text-2xl hover:scale-3 hover:font-semibold"
                        }
                        onClick={() => {
                          handleLinkClick(item.type);
                        }}
                      >
                        {item.title}
                      </div>
                    </Link>
                  );
                })}
          </div>
        </div>
        <div className="w-full grow  h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HelpCard;
