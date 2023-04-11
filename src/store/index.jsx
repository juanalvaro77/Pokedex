import { configureStore } from "@reduxjs/toolkit";
import visitor from "./slices/visitor.slice";
import pokemonwrited from "./slices/pokemonwish.slice";
import pokemoncard from "./slices/pokemoncard.slice";
export default configureStore({
  reducer: {
    visitor,
    pokemonwrited,
    pokemoncard
  }
});