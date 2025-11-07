import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movieSlice";
import searchReducer from "../features/searchSlice";
import tvReducer from "../features/tvSlice";
import favoriteReducer from "../features/favoritesSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    search: searchReducer,
    tv: tvReducer,
    favorite: favoriteReducer,
  },
});
