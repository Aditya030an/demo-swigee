import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideOTP } from "../utils/sideSlice";
import { FaArrowLeft } from "react-icons/fa6";
import { signOTP } from "../utils/userDataSlice";
import { removeLogin, hideSignUp, removePhoneNumber } from "../utils/sideSlice";

const LoginOTP = () => {
  const dispatch = useDispatch();
  const [OTPnum, setOTPnum] = useState("");
  const phoneNumber = useSelector((store) => store.side.phoneItem);
  console.log(phoneNumber)

  const otp = useSelector((store) => store.side.OTP);
  console.log(otp);
  setTimeout(() => {
    setOTPnum(otp);
  }, 5000);

  const handleSignOTP=()=>{
    dispatch(signOTP(false));
  }

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
  const handleValid = ()=>{
    dispatch
  }
  return (
    <div className="flex flex-col">
      <div className=" flex pt-7 justify-between">
        <div className="flex flex-col  justify-around  w-3/5 ">
          <h1 className="text-5xl text-black font-normal">Enter OTP</h1>
          <h1 className="text-xl mt-2 text-gray-500">
            We've sent an OTP to your phone number
          </h1>
          <div className="w-9 h-1 bg-black"></div>
        </div>
        <div className=" w-1/3 aspect-square">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
            alt="otpImage"
          />
        </div>
      </div>
      <div className=" flex flex-col mt-7">
        <div className="border-2 border-gray-300 p-4 w-full">
          <div className="text-gray-500 font-medium">
            <h1>Phone number</h1>
          </div>
          <input
            type="tel"
            name="phone number"
            maxLength={10}
            readOnly={true}
            value={phoneNumber[phoneNumber.length - 1]}
            className="border-none outline-none text-2xl text-black w-full font-semibold"
          />
        </div>
        <div className="border-2 border-gray-300 p-4 w-full">
          <div className="text-gray-500 font-medium">
            <h1>One time password</h1>
          </div>
          <input
            type="tel"
            name="password"
            value={OTPnum}
            maxLength={7}
            onChange={(e) => {
              setOTPnum(e.target.value);
            }}
            className="border-none outline-none text-2xl text-black w-full font-semibold"
          />
        </div>
      </div>
      <div>
        <button
          className="bg-orange-500 text-white font-medium p-4 w-full mt-2"
          onClick={()=>{
            handleSignOTP();
            handleLogin();
            handleSignUp();
            handlePhoneNumber();
            handleOTP();
            handleValid();
          }}
        >
          <h1> VERIFY OTP </h1>
        </button>
      </div>
    </div>
  );
};

export default LoginOTP;
