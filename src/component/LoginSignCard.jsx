import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  showLogin,
  showReferal,
  showOTP,
  hideLogin,
  hideSignUp,
  hideOTP,
  showSignUpCardOTP,
  addUserData,
} from "../utils/userDataSlice";
import LoginSignCardOTP from "./LoginSignCardOTP";

const LoginSignCard = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const number = useSelector((store) => store.userData.loginEnterPhoneNumber);
  const [phoneNumber, setPhoneNumber] = useState(number);
  const handleChange = (e) => {
    const clearPhoneNumber = e.target.value.replace(/[^0-9]/g, "");
    setPhoneNumber(clearPhoneNumber);
    setValidNumber(true);
  };
  const [validNumber, setValidNumber] = useState(true);
  const [validName, setValidName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [shouldExecuteSignUpPageChange, setShouldExecuteSignUpPageChange] =
    useState(false);

  const handleContinue = () => {
    let isValid = true;

    if (name.length === 0) {
      setValidName(false);
      isValid = false;
    } else {
      setValidName(true);
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
      isValid = false;
    }
    if (phoneNumber === undefined || phoneNumber?.length !== 10) {
      setValidNumber(false);
      isValid = false;
    } else {
      setValidNumber(true);
    }
    if (isValid) {
      console.log(
        "All fields are valid. Setting shouldExecuteSignUpPageChange to true."
      );
      setShouldExecuteSignUpPageChange(true);
      console.log("true", isValid);
    } else {
      console.log("isValid", isValid);
    }
    console.log("handleContainer");
  };

  const Referal = useSelector((store) => store.userData.showReferal);
  const showReferralInput = () => {
    console.log("referal input");
    dispatch(showReferal());
  };
  const handlePage = () => {
    dispatch(showLogin());
    dispatch(hideSignUp());
    dispatch(hideOTP());
  };
  
  const handleSignUpPageChange = () => {

    const formObj = {
      phoneNumber,
      name,
      email,
      cart:[],
  }
    console.log("fomObj",formObj);
    setShouldExecuteSignUpPageChange(false);
    dispatch(hideLogin());
    dispatch(hideOTP());
    dispatch(showSignUpCardOTP());
    dispatch(hideSignUp());
    // setFormData({phoneNumber:validNumber, name:validName, email:validEmail , cart:[]})
    dispatch(addUserData(formObj));
    // dispatch(addUserName(name));
  };
 

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-3  justify-evenly">
          <h1 className="text-5xl text-black font-normal">Sign Up</h1>
          <p className="text-xl">
            or<span> </span>
            <button
              onClick={() => {
                handlePage();
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
        {Referal ? (
          <div className="border-2 border-gray-300 p-4 w-full">
            <div className="text-gray-500 font-medium">Referral Code</div>
            <input
              type="text"
              name="Referral Code"
              className="border-none outline-none text-2xl text-black w-full font-semibold"
            />
          </div>
        ) : (
          <button
            onClick={() => {
              showReferralInput();
            }}
            className="text-blue-400 text-xl p-4 text-left"
          >
            Have a referral code?
          </button>
        )}

        <button
          className="bg-orange-500 text-white font-medium p-4 w-full mt-2"
          onClick={() => {
            handleContinue();
            
            // handleValue(validNumber , validName , validEmail);
            // handleSignUpPageChange();
          }}
        >
          CONTINUE
        </button>
        {shouldExecuteSignUpPageChange && handleSignUpPageChange()}
      </div>
    </div>
  );
};

export default LoginSignCard;
