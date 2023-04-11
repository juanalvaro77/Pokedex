import { createSlice } from "@reduxjs/toolkit";

export const visitorSlice = createSlice({
  name: "visitor",
  initialState: "",
  reducers: {
    setNewValue : (state, action) =>{return action.payload}
  }
});


export const {setNewValue} = visitorSlice.actions;

export default visitorSlice.reducer;