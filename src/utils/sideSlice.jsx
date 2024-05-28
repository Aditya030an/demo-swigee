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
} = sideSlice.actions;
export default sideSlice.reducer;
