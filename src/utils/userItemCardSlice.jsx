import { createSlice } from "@reduxjs/toolkit";

const userItemCardSlice = createSlice({
    name:"cardItem",
    initialState:{
        item:[],
        noOfItem:"",
    },
    reducers:{
        addItemStore:(state , action)=>{
            console.log("store addItem" , action.payload);
            state.item = action.payload;
        },
        noOfItem:(state , action)=>{
            state.noOfItem = action.payload;
            // console.log("number of item" , state.noOfItem);
        }
    }
}); 

export const {addItemStore , noOfItem} = userItemCardSlice.actions;
export default userItemCardSlice.reducer;