import { createSlice } from "@reduxjs/toolkit";

export const pokemonwishSlice = createSlice({
  name: "pokemonwrited",
  initialState: "",
  reducers: {
    setNewPk : (state, action) =>{return action.payload}
  }
});

export const {setNewPk} = pokemonwishSlice.actions;

export default pokemonwishSlice.reducer;