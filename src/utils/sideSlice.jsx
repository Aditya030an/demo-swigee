import { combineSlices, createSlice } from "@reduxjs/toolkit";
const sideSlice = createSlice({
  name: "side",
  initialState: {
    isSideBar: true,
    isFilter: false,
    isApply: false,
    filterItem: [],
    item: [],
    isSearch: true,
    isLogin:false,
    isSignUp:false,
    isOTP:false,
    phoneItem:[],
    OTP:"",
  },
  reducers: {
    setInput: (state, action) => {
      // state = [];
      console.log(action);
      state.item.push(action.payload);
    },
    addComponent: (state) => {
      state.isSideBar = false;
    },
    removeComponent: (state) => {
      state.isSideBar = true;
    },
    addFilterComponent: (state) => {
      state.isFilter = true;
    },
    removeFilterComponent: (state) => {
      state.isFilter = false;
    },
    addApply: (state, action) => {
      console.log("store "+action.payload);
      // if yes remove no add
      // state.filterItem.push(action.payload);
      const index = state.filterItem.indexOf(action.payload);
      // console.log(index);
      if(index === -1){
        state.filterItem.push(action.payload);
      }
      else{
        state.filterItem.splice(index , 1);
      }
      for(let value of state.filterItem){
        console.log(value);
      }
      state.isApply = true;
    },
    removeApply: (state, action) => {
      state.isApply = false;
      state.filterItem.splice(0 , state.filterItem.length);
    },
    addCross:(state)=>{
      state.isSearch = false;
    },
    removeCross:(state)=>{
      state.isSearch = true;
    },
    addLogin:(state)=>{
      state.isLogin = true;
    },
    removeLogin:(state)=>{
      state.isLogin = false;
    },
    showSignUp:(state)=>{
      state.isSignUp = true;
    },
    hideSignUp:(state)=>{
      state.isSignUp = false;
    },
    showOTP:(state)=>{
      state.isOTP = true;
    },
    hideOTP:(state)=>{
      state.isOTP = false;
    },
    addPhoneNumber:(state , action)=>{
      console.log("phoneNumber" , action.payload);
      state.phoneItem.push(action.payload);
    },
    removePhoneNumber:(state , action)=>{
      state.phoneItem.length = 0;
    },
    addOTP:(state , action)=>{
      console.log("OTP->",action.payload);
      state.OTP = action.payload;
    }
  },
});

export const {
  setInput,
  removeComponent,
  addComponent,
  removeFilterComponent,
  addFilterComponent,
  addApply,
  removeApply,
  addCross,
  removeCross,
  addLogin,
  removeLogin,
  showSignUp,
  hideSignUp,
  showOTP,
  hideOTP,
  addPhoneNumber,
  removePhoneNumber,
  addOTP,
} = sideSlice.actions;
export default sideSlice.reducer;
