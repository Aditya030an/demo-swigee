import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeLogin, hideSignUp, removePhoneNumber } from "../utils/sideSlice";
import { signOTP } from "../utils/userDataSlice";
import LoginCard from "./LoginCard";
import LoginSignCard from "./LoginSignCard";
import LoginOTP from "./LoginOTP";
import { FaArrowLeft } from "react-icons/fa6";
const Login = () => {
  const valid = useSelector((store)=>store.userData.valid);
  console.log("inside Login",valid);
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(removeLogin());
  };
  const handleSignUp = () => {
    dispatch(hideSignUp());
  };
  const handlePhoneNumber = ()=>{
    dispatch(removePhoneNumber());
  }
  const handleOTP = () => {
    dispatch(hideOTP());
  };
  const handleSignOTP=()=>{
    dispatch( signOTP (false));
  }
  const show = useSelector((store) => store.side.isLogin);
  const showSign = useSelector((store) => store.side.isSignUp);
  const showOTP = useSelector((store) => store.side.isOTP);
  const signOTP = useSelector((store)=>store.userData.isSignOTP);
  // const validPage = useSelector((store)=>store.userData.validPage);
  // const viewPage = useSelector((store)=>store.userData.viewPage);
  return show ? (
    <div className="borber-2 border-red-500 absolute h-screen w-full bg-opacity-55 flex justify-end bg-gray-600 z-50">
      <div className="border-2 border-green-400 w-5/12 bg-white opacity-100 flex pl-10 pt-10">
        <div className=" flex flex-col w-8/12">
          <button
            onClick={() => {
              handleLogin();
              handleSignUp();
              handlePhoneNumber();
              handleOTP();
              handleSignOTP();
            }}
            className="text-left text-4xl text-gray-500"
          >
            {showOTP && showSign && signOTP ? <div><FaArrowLeft /></div> : <div>X</div>}
          </button>
          <div>
            {(showSign) ? (<LoginSignCard />) : (showOTP ? (valid ? <LoginOTP /> : (signOTP  ? <LoginOTP/> : <LoginSignCard/>)) : (<LoginCard />)) }

          </div>
          <div className="">
            {showOTP ? (
              <div></div>
            ) : (
              <div>
                <p className="text-gray-500">
                  By clicking on Login, I accept the{" "}
                  <span className="text-black font-semibold">
                    Terms & Condition{" "}
                  </span>
                  &
                  <span className="text-black font-semibold">
                    {" "}
                    Privacy Policy
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Login;
