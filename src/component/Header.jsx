import { useDispatch, useSelector } from "react-redux";
import { addComponent } from "../utils/sideSlice";
import { FcSearch } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useState } from "react";
import { showPage } from "../utils/userDataSlice";
import { BiSolidOffer } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { IoMdHelpBuoy } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  const [activeLink, setActiveLink] = useState("/");
  const show = useSelector((store) => store.side.isSideBar);
  const inputState = useSelector((store) => store.side.item);
  const value = inputState[inputState.length - 1];
  console.log(value);
  const dispatch = useDispatch();

  const handleShow = () => {
    dispatch(addComponent());
    // console.log(show);
  };
  const handleShowPage = () => {
    dispatch(showPage());
  };
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };
  const noOfItem = useSelector((store) => store?.card?.noOfItem);

  const userName = useSelector((store) => store.userData.userName);
  console.log("userName", userName);
  return (
    <div className="h-24">
      <div className=" shadow-xl flex justify-around  bg-white w-full fixed  z-40">
        <div className="flex align-middle w-5/12 justify-center gap-3">
          <div className="w-3/5 ">
            <Link to={"/"}>
              <img src="../demoFood.png" alt="logo" className="w-32 ml-auto" />
            </Link>
          </div>
          <div className="flex w-full group">
            <p className="flex gap-3 justify-between text-xl font-black w-full mx-auto my-auto hover:border-b-4 hover:border-orange-400  cursor-pointer">
              <Link to={"/"}>
                <div
                  className={activeLink === "/" ? "text-red-500" : "text-black"}
                  onClick={() => {
                    handleLinkClick("/");
                  }}
                >
                  Home:-
                </div>
              </Link>
              <input
                type="text"
                placeholder="enter location"
                className="border-none outline-none text-xl font-normal w-full"
                value={value}
                onClick={() => {
                  handleShow();
                }}
              />
              <i className="group-hover:rotate-180 origin-center transition duration-150 group-hover:ease-in font-semibold text-xl">
                ^
              </i>
            </p>
          </div>
        </div>
        <div className=" flex-grow text-center flex-1 flex justify-around items-center">
          <ul className="flex justify-around items-center w-full ">
            <Link to={"/search"} className="w-1/5">
              <li
                className=" text-2xl font-medium cursor-pointer flex justify-center gap-2 items-center"
                onClick={() => {
                  handleLinkClick("/search");
                }}
              >
                <FcSearch />
                <div
                  className={
                    activeLink === "/search"
                      ? "text-red-500 hover:text-orange-600"
                      : "text-black hover:text-orange-600"
                  }
                >
                  Search
                </div>
              </li>
            </Link>
            <Link to={"/offer"} className=" w-1/5">
              <li
                className=" text-2xl font-medium cursor-pointer flex justify-center gap-2 items-center"
                onClick={() => {
                  handleLinkClick("/offer");
                }}
              >
                <div className="text-orange-500">
                  <BiSolidOffer />
                </div>
                <div
                  className={
                    activeLink === "/offer"
                      ? "text-red-500 hover:text-orange-600"
                      : "text-black hover:text-orange-600"
                  }
                >
                  Offer
                </div>
              </li>
            </Link>
            <Link to={"/help/partner-onboarding"} className=" w-1/5">
              <li
                className=" text-2xl font-medium cursor-pointer flex justify-center gap-2 items-center"
                onClick={() => {
                  handleLinkClick("/help/partner-onboarding");
                }}
              >
                <div className="">
                  <IoMdHelpBuoy />
                </div>
                <div
                  className={
                    activeLink === "/help/partner-onboarding"
                      ? "text-red-500 hover:text-orange-600"
                      : "text-black hover:text-orange-600"
                  }
                >
                  Help
                </div>
              </li>
            </Link>
            <li
              className=" group  w-1/5 text-2xl font-medium hover:text-orange-500 cursor-pointer truncate  flex items-center gap-3 justify-center"
              onClick={() => {
                handleShowPage();
              }}
            >
              <div className="text-lg w-3/12 flex items-end justify-end">
                <FaUser />
              </div>
              {/* Sign Up */}
              {userName ? (
                <div className=" w-9/12 truncate">{userName}</div>
              ) : (
                <div>Sign up</div>
              )}
              {userName ? (
                //group-hover:block hidden
                <div className="w-60  absolute top-16 group-hover:block hidden text-black">
                  <div className="mt-2 flex flex-col items-center">
                    <div className="w-5 -mb-3 rotate-45 aspect-square border-t-2 border-l-2 bg-white border-orange-500"></div>
                    <div className="w-full text-lg pl-4 pb-3 border-t-2 bg-white border-red-400 flex flex-col gap-3 text-left pt-6 rounded-xl shadow-2xl">
                      <div className="cursor-pointer hover:font-bold"><Link >Profile</Link></div>
                      <div className="cursor-pointer hover:font-bold">Orders </div>
                      <div className="cursor-pointer hover:font-bold">Swiggy One</div>
                      <div className="cursor-pointer hover:font-bold">Favourites</div>
                      <div className="cursor-pointer hover:font-bold">Logout</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </li>
            <Link to={"/cart"} className="w-1/5 ">
              <li
                className=" text-2xl font-medium cursor-pointer flex justify-center gap-2 items-center "
                onClick={() => {
                  handleLinkClick("/cart");
                }}
              >
                <div>
                  <FaCartShopping />
                </div>
                <div
                  className={
                    activeLink === "/cart"
                      ? "text-red-500 hover:text-orange-600 flex items-center justify-center gap-2"
                      : "text-black hover:text-orange-600  flex items-center justify-center gap-2"
                  }
                >
                  Cart
                  {noOfItem !== 0 ? (
                    <div>
                      {`->`}
                      {noOfItem}
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
