import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name:'forms',
    initialState: [],
    reducers:{
        addFinancialInfo: (state,action)=>{ 
            
            state.push(action.payload);
        },
    },
});

export const {addFinancialInfo} = formSlice.actions;
export default formSlice.reducer;