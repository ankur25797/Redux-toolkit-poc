import { createSlice } from "@reduxjs/toolkit";

const form2Slice = createSlice({
    name:'form2',
    initialState: [],
    reducers:{
        addTradingInfo: (state,action)=>{
            
            state.push(action.payload);
        },
    },
});

export const {addTradingInfo} = form2Slice.actions;
export default form2Slice.reducer;