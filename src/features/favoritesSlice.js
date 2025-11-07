import { createSlice } from "@reduxjs/toolkit";

console.log("hello from favorite");

const initialState = {
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavourite: (state, action) => {
      const content = state.favorites.find((m) => m.id == action.payload.id);
      if (!content) {
        state.favorites.push(action.payload);
        console.log(state);

        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    removeFromFavourite: (state, action) => {
      console.log("hello from remove", action.payload.id);

      state.favorites = state.favorites.filter(
        (content) => content.id !== action.payload.id
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const { addToFavourite, removeFromFavourite } = favoriteSlice.actions;
export default favoriteSlice.reducer;

