import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideOTP, hidePage, hideReferal, hideSignUp, hideSignUpCardOTP, showLogin, showReferal, showSignUpCardOTP  } from "../utils/userDataSlice";
import LoginCard from "./LoginCard";
import LoginOTP from "./LoginOTP";
import LoginSignCard from "./LoginSignCard";
import LoginSignCardOTP from "./LoginSignCardOTP";
const Login = () => {
  const dispatch = useDispatch();

  const handleShowPage = ()=>{
    dispatch(hidePage());
    dispatch(showLogin());
    dispatch(hideSignUp());
    dispatch(hideReferal());
    dispatch(hideOTP());
    dispatch(hideSignUpCardOTP());
  }
  const showPage = useSelector((store)=>store.userData.showPage);
  const showLoginPage = useSelector((store)=>store.userData.showLogin);
  // console.log("show Login page",showLoginPage);
  const showOTPPage = useSelector((store)=>store.userData.showOTP);
  // console.log("show otp page",showOTPPage);
  const showSignUpPage = useSelector((store)=>store.userData.showSignUp);
  // console.log("show signup page",showSignUpPage);
  const showSignUpOTP = useSelector((store)=>store.userData.showSignUpCardOTP);
  // console.log("show page",showPage);
  return showPage ? (
    <div className="borber-2 border-red-500 absolute h-screen w-full bg-opacity-55 flex justify-end bg-gray-600 z-50">
      <div className="border-2 border-green-400 w-5/12 bg-white opacity-100 flex pl-10 pt-10">
        <div className=" flex flex-col w-8/12">
          <button
            onClick={() => {
              handleShowPage();
            }}
            className="text-left text-4xl text-gray-500"
          >
            <div>X</div>
          </button>
          <div>
            {
              showLoginPage ? <LoginCard/> : null
            }
            {
              showOTPPage ? <LoginOTP/> : null
            }
            {
              showSignUpPage ? <LoginSignCard/> : null
            }
            {
              showSignUpOTP ? <LoginSignCardOTP/> :null
            }
          </div>
          <div className="">
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
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Login;
