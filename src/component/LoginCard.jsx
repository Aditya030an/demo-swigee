import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  showOTP,
  showSignUp,
  addPhoneNumber,
  addOTP,
  removePhoneNumber,
} from "../utils/sideSlice";
import { isNamePresent } from "../utils/userDataSlice";
const LoginCard = () => {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (e) => {
    const clearPhoneNumber = e.target.value.replace(/[^0-9]/g, "");
    setPhoneNumber(clearPhoneNumber);
    SetValid(false);
  };
  const handleSignUp = () => {
    dispatch(showSignUp());
  };
  const showSign = useSelector((store) => store.side.isSignUp);
  // console.log("Login", showSign);

  const [valid, SetValid] = useState(false);
  const CheckNumber = () => {
    SetValid(true);
  };
  const verify = useSelector((store) => store.userData.valid);
  const handleOTP = () => {
    dispatch(showOTP());
    dispatch(isNamePresent(phoneNumber));
    dispatch(addPhoneNumber(phoneNumber));
    {
      verify ? getOTP() : console.log("getOTP verify", verify);
    }
  };
  function getRandomNumber(max) {
    let ans = "";
    for (let i = 0; i < 7; i++) {
      const randomNumber = Math.floor(Math.random() * (max + 1));
      ans += randomNumber;
    }
    return ans;
  }
  const getOTP = () => {
    const number = getRandomNumber(9);
    console.log("Random Number->", number);
    setTimeout(() => {
      alert(`Your OTP will be ${number}`);
    }, 5000);
    dispatch(addOTP(number));
  };
  const handlePhoneNumber = () => {
    dispatch(removePhoneNumber());
  };

  // const viewPage = ()=>{
  //   dispatch(viewPage(true));
  // }
  return (
    <div>
      <div className="flex justify-between ">
        <div className="flex flex-col gap-3 justify-evenly">
          <h1 className="text-5xl text-black font-normal">Login</h1>
          <p className="text-xl">
            or<span> </span>
            <button
              onClick={() => {
                handleSignUp();
                handlePhoneNumber();
              }}
              className="text-orange-400 hover:text-black"
            >
              create an account
            </button>
          </p>
          <div className="w-9 h-1 bg-black"></div>
        </div>
        <div className="w-1/3 aspect-square">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
            alt="Login image"
            className=""
          />
        </div>
      </div>
      <div className=" flex flex-col mt-7">
        <div className="border-2 border-gray-400 p-4 w-full">
          <div className="text-gray-500 font-medium">
            {valid ? (
              phoneNumber.length < 10 ? (
                <div className="text-red-500">Enter valid number</div>
              ) : null
            ) : (
              <div className="text-gray-500">Phone number</div>
            )}
          </div>
          <input
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
            maxLength={10}
            className="border-none outline-none text-2xl text-black w-full font-semibold"
          />
        </div>
        <button
          className="bg-orange-500 text-white font-medium p-4 w-full mt-2"
          onClick={() => {
            CheckNumber();
            {
              phoneNumber.length === 10 ? (handleOTP(), viewPage()) : null;
            }
          }}
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default LoginCard;
