import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideOTP, hideSignUp } from "../utils/sideSlice";
import { compose } from "@reduxjs/toolkit";
import userDataSlice, {
  addUserInfo,
  isNamePresent,
  signOTP,
} from "../utils/userDataSlice";

const LoginSignCard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const number = useSelector((store) => store.side.phoneItem);
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState(number[number.length - 1]);

  const handleChange = (e) => {
    const clearPhoneNumber = e.target.value.replace(/[^0-9]/g, "");
    setPhoneNumber(clearPhoneNumber);
    setValidNumber(true);
  };
  const [show, setShow] = useState(false);
  const showReferralInput = () => {
    setShow(true);
  };
  const handleSignUp = () => {
    dispatch(hideSignUp());
  };
  const showSign = useSelector((store) => store.side.isSignUp);
  // console.log("sign", showSign);

  const [validNumber, setValidNumber] = useState(true);
  const [validName, setValidName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validProcess, setValidProcess] = useState(false);
  const handleContinue = () => {
    if (name.length === 0) {
      setValidName(false);
    } else {
      setValidName(true);
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
    if (phoneNumber === undefined) {
      setValidNumber(false);
    } else if (phoneNumber?.length !== 10) {
      setValidNumber(false);
    } else {
      setValidNumber(true);
    }
    console.log("handleContainer");
  };

  const handleUserData = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      name.length > 0 &&
      phoneNumber.length === 10 &&
      emailRegex.test(email)
    ) {
      setValidProcess(true);
      console.log("true");
      // const data = useSelector((store)=>store.userData.item);
      // console.log("data",data);
      const info = {
        phoneNumber: phoneNumber,
        name: name,
        email: email,
        cart: null,
      };
      dispatch(addUserInfo(info));
      dispatch(isNamePresent(phoneNumber));
    }
    else{
      console.log("HandleUserData" , false);
    }
  };
  const handleOTP = () => {
    dispatch(hideOTP());
  };
  const handleSignOTP = () => {
    dispatch(signOTP(true));
    //verify pe click keruga to false
  };
  const printUserData = ()=>{
    const userData = useSelector((store)=>store.userData.item);
    userData.forEach((obj , index) => {
        console.log(`Object ${index + 1}`);
        console.log(obj.phoneNumber);
        console.log(obj.name);
        console.log(obj.email);
        console.log(obj.cart);
    });
  }
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-3  justify-evenly">
          <h1 className="text-5xl text-black font-normal">Sign Up</h1>
          <p className="text-xl">
            or<span> </span>
            <button
              onClick={() => {
                handleSignUp();
                handleOTP();
              }}
              className="text-orange-400 hover:text-black"
            >
              login to your account
            </button>
          </p>
          <div className="w-9 h-1 bg-black"></div>
        </div>
        <div className="w-1/3 aspect-square">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
            alt="Login image"
          />
        </div>
      </div>
      <div className=" flex flex-col mt-7">
        <div className="border-2 border-gray-300 p-4 w-full">
          {validNumber ? (
            <div className="text-gray-500 font-medium">Phone number</div>
          ) : (
            <div className="text-red-500 font-medium">
              Enter valid Phone number
            </div>
          )}

          <input
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
            maxLength={10}
            className="border-none outline-none text-2xl text-black w-full font-semibold"
          />
        </div>
        <div className="border-2 border-gray-300 p-4 w-full">
          {validName ? (
            <div className="text-gray-500 font-medium">Name</div>
          ) : (
            <div className="text-red-500 font-medium">Enter valid Name</div>
          )}
          <input
            type="text"
            name="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              // setValidName(true);
            }}
            className="border-none outline-none text-2xl text-black w-full font-semibold"
          />
        </div>
        <div className="border-2 border-gray-300 p-4 w-full">
          {validEmail ? (
            <div className="text-gray-500 font-medium">Email</div>
          ) : (
            <div className="text-red-500 font-medium">Enter valid Email</div>
          )}
          <input
            type="email"
            name="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              // setValidEmail(true);
            }}
            className="border-none outline-none text-2xl text-black w-full font-semibold"
          />
        </div>
        {show ? (
          <div className="border-2 border-gray-300 p-4 w-full">
            <div className="text-gray-500 font-medium">Referral Code</div>
            <input
              type="text"
              name="Referral Code"
              className="border-none outline-none text-2xl text-black w-full font-semibold"
            />
          </div>
        ) : null}
        {!show ? (
          <button
            onClick={() => {
              showReferralInput();
            }}
            className="text-blue-400 text-xl p-4 text-left"
          >
            Have a referral code?
          </button>
        ) : null}
        <button
          className="bg-orange-500 text-white font-medium p-4 w-full mt-2"
          onClick={() => {
            handleContinue();
            handleUserData();
            handleSignOTP();
            printUserData();
            // {
            //   validProcess ? 
            //   (handleUserData(),
            //   handleSignOTP()):null
            // }
          }}
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default LoginSignCard;
