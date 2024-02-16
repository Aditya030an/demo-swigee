import { combineSlices, createSlice } from "@reduxjs/toolkit";

const sideFilterSlice = createSlice({
  name: "filter",
  initialState: {
    // validItem: [true, false, false, false, false, false, false, false],
    setItem: [false, false, false, false, false, false, false, false],
    item:[true, false, false, false, false, false, false, false],
    prev:[true, false, false, false, false, false, false, false],
  },
  reducers: {
    setOption: (state, action) => {
      // state.item[toShow] = true;
      let prev = null;
      let current = action.payload;
      if(current !== prev){
        // for(let i =0 ; i<8 ; i++){
        //   state.item[i] = state.setItem[i];
        //   console.log(state.item[i]);
        // }
        state.item = [...state.setItem];
        state.item[current] = true;
        // for(let value of state.item){
        //   console.log(value);
        // }
      }
      prev = current;
    },
    setOrignal:(state , action)=>{
      state.item = [...state.prev];
    }
  },
});

export const { setOption , setOrignal } = sideFilterSlice.actions;
export default sideFilterSlice.reducer;
