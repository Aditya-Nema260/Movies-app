import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movieSlice";
import searchReducer from "../features/searchSlice";
import tvReducer from "../features/tvSlice";
export const store = configureStore({
  reducer: {
    movie: movieReducer,
    search: searchReducer,
    tv: tvReducer,
  },
});
