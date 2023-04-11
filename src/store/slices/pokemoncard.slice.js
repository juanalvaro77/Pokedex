import { createSlice } from "@reduxjs/toolkit";

export const pokemoncardSlice = createSlice({
  name: "pokemoncard",
  initialState: [],
  reducers: {
    setNewCard : (state, action) =>{return action.payload}
  }
});

export const {setNewCard} = pokemoncardSlice.actions;

export default pokemoncardSlice.reducer;