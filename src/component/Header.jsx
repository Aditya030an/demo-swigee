import { useDispatch, useSelector } from "react-redux";
import { addComponent , addLogin } from "../utils/sideSlice";
import { FcSearch } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState("/");
  const show = useSelector((store) => store.side.isSideBar);
  const login = useSelector((store) => store.side.isLogin);
  const inputState = useSelector((store) => store.side.item);
  const value = inputState[inputState.length - 1];
  console.log(value);
  const dispatch = useDispatch();

  const handleShow = () => {
    dispatch(addComponent());
    // console.log(show);
  };
  const handleClick = ()=>{
    dispatch(addLogin());
    console.log("Login",login)
  }
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };
  return (
    <div className=" h-24">
      <div className=" shadow-xl flex justify-around bg-white w-full fixed border-2 border-green-500 z-40">
        <div className="flex align-middle w-5/12 justify-center gap-3">
          <div className="w-3/5 ">
            <Link to={"/"}>
              <img src="../demoFood.png" alt="logo" className="w-32 ml-auto" />
            </Link>
          </div>
          <div className="flex w-full group">
            <p className="flex gap-3 justify-between text-xl font-black w-full mx-auto my-auto mt-12 hover:border-b-4 hover:border-orange-400  cursor-pointer">
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
        <div className=" flex-grow text-center flex-1 flex justify-around items-end ">
          <ul className="flex justify-around items-center w-full ">
            <Link to={"/search"} className="w-1/5">
              <li
                className=" text-2xl font-medium hover:border-b-4 hover:border-orange-400 hover:text-orange-600 cursor-pointer flex justify-center gap-2 items-center pb-3"
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
                className=" text-2xl font-medium hover:border-b-4 hover:border-orange-400 hover:text-orange-600 cursor-pointer pb-3"
                onClick={() => {
                  handleLinkClick("/offer");
                }}
              >
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
            <Link
              to={"/help/partner-onboarding"}
              className=" w-1/5"
            >
              <li
                className=" text-2xl font-medium hover:border-b-4 hover:border-orange-400 hover:text-orange-600 cursor-pointer pb-3"
                onClick={() => {
                  handleLinkClick("/help/partner-onboarding");
                }}
              >
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
            <li className="  w-1/5 text-2xl font-medium hover:border-b-4 hover:border-orange-400 hover:text-orange-600 cursor-pointer truncate pb-3"
            onClick={()=>{
              handleClick();
            }}>
              Sign Up
            </li>
            <Link to={"/cart"} className="w-1/5 ">
              <li
                className=" text-2xl font-medium hover:border-b-4 hover:border-orange-400 hover:text-orange-600 cursor-pointer pb-3"
                onClick={() => {
                  handleLinkClick("/help/partner-onboarding");
                }}
              >
                <div
                  className={
                    activeLink === "/help"
                      ? "text-red-500 hover:text-orange-600"
                      : "text-black hover:text-orange-600"
                  }
                >
                  Cart
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
