import { createSlice, current } from "@reduxjs/toolkit";

const useDataSlice = createSlice({
    name:"userData",
    initialState:{
        item:[],
        valid:false,
        validPage:false,
        viewPage:false,
        isSignOTP:false,
        isCard:false,
    },
    reducers:{
        addUserInfo:(state , action)=>{
            console.log("inside store",action.payload);
            state.item.push(action.payload);
        },
        isNamePresent: (state, action) => {
            const isNamePresent = state.item.some(user => user.phoneNumber === action.payload);
            console.log("phone number present",isNamePresent);
            state.valid = isNamePresent;
        },
        validPage:(action)=>{
            state.validPage = action.payload;
        },
        viewPage:(action)=>{
            state.viewPage = action.payload;
        },
        signOTP:(state ,action)=>{
            state.isSignOTP = action.payload;
            console.log(state);
        },
        showCard:(state , action)=>{
            state.isCard = action.payload;
        },
        removeCard:(state , action)=>{
            state.isCard = action.payload;
        }
    }
})

export const {addUserInfo , isNamePresent ,signOTP , showCard , removeCard} = useDataSlice.actions;
export default useDataSlice.reducer;