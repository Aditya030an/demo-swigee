import { fas } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  hideLogin,
  hideOTP,
  hideSignUp,
  showOTP,
  showSignUp,
  addPhoneNumber,
  findUserByPhoneNumber,
} from "../utils/userDataSlice";
const LoginCard = () => {
  const dispatch = useDispatch();
  const [phoneNumber , setPhoneNumber] = useState("");
  const [validPhoneNumber , setValidPhoneNumber] = useState(true);
  const handleChange = (e) => {
    const clearPhoneNumber = e.target.value.replace(/[^0-9]/g, "");
    setPhoneNumber(clearPhoneNumber);
    if(clearPhoneNumber.length !== 10){
      setValidPhoneNumber(false);
    }else{
      setValidPhoneNumber(true);
    }
  };

  const handlePageChange = () => {
    /* login = false , sign = true , otp = false */
    dispatch(hideLogin());
    dispatch(hideOTP());
    dispatch(showSignUp());
  };

  // const [validNumber, setValidNumber] = useState(false);
  
  const findNumber = useSelector((store)=>store.userData.findPhoneNumber);
  const handleLoginPageChange = () => {
    dispatch(findUserByPhoneNumber(phoneNumber));
    console.log(findNumber);
    if (findNumber === true) {
      dispatch(hideLogin());
      dispatch(showOTP());
      dispatch(hideSignUp());
    } else {
      dispatch(hideLogin());
      dispatch(hideOTP());
      dispatch(showSignUp());
    }
    dispatch(addPhoneNumber(phoneNumber));
  };
  return (
    <div>
      <div className="flex justify-between ">
        <div className="flex flex-col gap-3 justify-evenly">
          <h1 className="text-5xl text-black font-normal">Login</h1>
          <p className="text-xl">
            or<span> </span>
            <button
              onClick={() => {
                handlePageChange();
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
            {validPhoneNumber ?
              <div className="text-gray-500">Phone number</div>:
              <div className="text-red-500">Enter valid Phone Number</div>
            }
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
            {
              validPhoneNumber ? 
              handleLoginPageChange():null
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
