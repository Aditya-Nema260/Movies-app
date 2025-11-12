import { createSlice } from "@reduxjs/toolkit";

function getUserEmail() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  
  return user?.email || "guest";
}

function getStoredFavorites() {
  const email = getUserEmail();
  return JSON.parse(localStorage.getItem(`favorites_${email}`)) || [];
}

const initialState = {
  favorites: getStoredFavorites(),
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavourite: (state, action) => {
      const email = getUserEmail();
      const key = `favorites_${email}`;
      const content = state.favorites.find((m) => m.id === action.payload.id);
      if (!content) {
        state.favorites.push(action.payload);
        localStorage.setItem(key, JSON.stringify(state.favorites));
      }
      console.log([...state.favorites].length);
      
    },

    removeFromFavourite: (state, action) => {
      const email = getUserEmail();
      const key = `favorites_${email}`;
      state.favorites = state.favorites.filter(
        (content) => content.id !== action.payload.id
      );
      localStorage.setItem(key, JSON.stringify(state.favorites));
    },

    loadUserFavorites: (state) => {
      state.favorites = getStoredFavorites();
    },
  },
});

export const {
  addToFavourite,
  removeFromFavourite,
  loadUserFavorites,
} = favoriteSlice.actions;
export default favoriteSlice.reducer;
