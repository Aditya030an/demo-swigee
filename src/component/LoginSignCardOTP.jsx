import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  hideOTP,
  hidePage,
  hideSignUp,
  hideSignUpCardOTP,
  showLogin,
  findName
} from "../utils/userDataSlice";

const LoginSignCardOTP = () => {
  const dispatch = useDispatch();
  const number = useSelector((store) => store.userData.loginEnterPhoneNumber);
  const [phoneNumber, setPhoneNumber] = useState(number);
  const [validPhoneNumber, setValidPhoneNumber] = useState(true);
  const handleChange = (e) => {
    const clearPhoneNumber = e.target.value.replace(/[^0-9]/g, "");
    setPhoneNumber(clearPhoneNumber);
    if (clearPhoneNumber.length !== 10) {
      setValidPhoneNumber(false);
    } else {
      setValidPhoneNumber(true);
    }
  };
  const handlePageChange = () => {
    dispatch(showLogin());
    dispatch(hideOTP());
    dispatch(hideSignUp());
    dispatch(hideSignUpCardOTP());
  };

  const [OtpValue, setOtpValue] = useState("");
  function getRandomNumber(max) {
    let ans = "";
    for (let i = 0; i < 7; i++) {
      const randomNumber = Math.floor(Math.random() * (max + 1));
      ans += randomNumber;
    }
    return ans;
  }
  function getOTP() {
    const number = getRandomNumber(9);
    console.log("Random Number->", number);
    const time = setTimeout(() => {
      alert(`Your OTP will be ${number}`);
      setOtpValue(number);
    }, 5000);
    //   clearTimeout(time);
  }
  const stateSignOTP = useSelector((store) => store.userData.showSignUpCardOTP);
  useEffect(() => {
    if (stateSignOTP) {
      getOTP();
    }
  }, []);
  const handlePage = () => {
    dispatch(showLogin());
    dispatch(hideOTP());
    dispatch(hideSignUp());
    dispatch(hideSignUpCardOTP());
    dispatch(hidePage());
    dispatch(findName(phoneNumber));
  };
  return (
    <div>
      <div className="flex justify-between ">
        <div className="flex flex-col gap-3 justify-evenly">
          <h1 className="text-5xl text-black font-normal">Sign Up</h1>
          <p className="text-xl">
            or<span> </span>
            <button
              onClick={() => {
                handlePageChange();
              }}
              className="text-orange-400 hover:text-black"
            >
              login to youe account
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
            {validPhoneNumber ? (
              <div className="text-gray-500">Phone number</div>
            ) : (
              <div className="text-red-500">Enter valid Phone Number</div>
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
        <div className="border-2 border-gray-300 p-4 w-full">
          <div className="text-gray-500 font-medium">
            <h1>One time password</h1>
          </div>
          <input
            type="tel"
            name="password"
            value={OtpValue}
            maxLength={7}
            readOnly={true}
            onChange={(e) => {
              setOtpValue(e.target.value);
            }}
            className="border-none outline-none text-2xl text-black w-full font-semibold"
          />
        </div>
        <div>
          <button
            className="bg-orange-500 text-white font-medium p-4 w-full mt-2"
            onClick={() => {
              handlePage();
            }}
          >
            <h1> VERIFY OTP </h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignCardOTP;
