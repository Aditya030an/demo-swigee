import { combineSlices, createSlice } from "@reduxjs/toolkit";

const useDataSlice = createSlice({
  name: "userData",
  initialState: {
    showPage: false,
    showLogin: true,
    showOTP: false,
    showSignUp: false,
    showReferal: false,
    loginEnterPhoneNumber: "",
    showSignUpCardOTP: false,
    userDataInfo: [],
    findPhoneNumber: false,
    userName: "",
    userEmail:"",
  },
  reducers: {
    addPhoneNumber: (state, action) => {
      console.log("login phone number", action.payload);
      state.loginEnterPhoneNumber = action.payload;
      console.log("state phone number", state.loginEnterPhoneNumber);
    },
    showPage: (state, action) => {
      state.showPage = true;
    },
    hidePage: (state, action) => {
      state.showPage = false;
    },
    showLogin: (state, action) => {
      state.showLogin = true;
    },
    hideLogin: (state, action) => {
      state.showLogin = false;
    },
    showOTP: (state, action) => {
      state.showOTP = true;
    },
    hideOTP: (state, action) => {
      state.showOTP = false;
    },
    showSignUp: (state, action) => {
      state.showSignUp = true;
    },
    hideSignUp: (state, action) => {
      state.showSignUp = false;
    },
    showReferal: (state, action) => {
      state.showReferal = true;
    },
    hideReferal: (state, action) => {
      state.showReferal = false;
    },
    showSignUpCardOTP: (state, action) => {
      state.showSignUpCardOTP = true;
    },
    hideSignUpCardOTP: (state, action) => {
      state.showSignUpCardOTP = false;
    },
    addUserData: (state, action) => {
      const { phoneNumber, name, email, cart } = action.payload;
      state.userName = name;
      state.userEmail = email;

      //check if the user will the phoneNumber already exist
      const existingPhoneNumber = state.userDataInfo.find((user) => {
        user.phoneNumber === phoneNumber;
      });

      if (existingPhoneNumber === -1) {
        state.userDataInfo.push({ phoneNumber, name, email, cart });
      } 
      state.userDataInfo.map((user)=>{
        console.log("user",user.phoneNumber);
      })
      console.log("length of user data info" , state.userDataInfo.length);
    },
    findUserByPhoneNumber: (state, action) => {
      const phoneNumberToFind = action.payload;
      state.findPhoneNumber =
        state.userDataInfo.hasOwnProperty(phoneNumberToFind);
      console.log("findPhoneNumber", state.findPhoneNumber);
    },
    findName: (state, action) => {
      console.log("find name", action.payload);
      console.log(state.userDataInfo[action.payload]);
    },
    
  },
});

export const {
  addPhoneNumber,
  showPage,
  hidePage,
  showLogin,
  hideLogin,
  showOTP,
  hideOTP,
  showSignUp,
  hideSignUp,
  showReferal,
  hideReferal,
  showSignUpCardOTP,
  hideSignUpCardOTP,
  addUserData,
  findUserByPhoneNumber,
  findName,
} = useDataSlice.actions;
export default useDataSlice.reducer;
