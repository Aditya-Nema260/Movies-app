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
      state.favorites.push(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    removeFromFavourite: (state, action) => {
      state.favorites = state.favorites.filter(
        (content) => content.id !== action.payload.id
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const { addToFavourite, removeFromFavourite } = favoriteSlice.actions;
export default favoriteSlice.reducer;

/*


import { createSlice } from "@reduxjs/toolkit";

console.log("hello from favorite");

const initialState = {
  favorites: JSON.parse(localStorage.getItem("favorites")) || [
    {
      adult: false,
      backdrop_path: "/tLf5hjuO4gx62lVojPiHsIzCroh.jpg",
      genre_ids: [53, 28],
      id: 1025527,
      original_language: "fr",
      original_title: "Six jours",
      overview:
        "11 years ago, inspector Malik couldn’t solve a kidnapping case and a little girl died. Now with only a few days before the crime gets classified, he decides to reopen the case. Malik owes it to the mother and to himself. As he digs into the past, a child is kidnapped again. The pattern is the same one as a decade ago, it’s no coincidence. Malik knows he has a few days to make things right and to bring justice.",
      popularity: 375.426,
      poster_path: "/1LMMSf17jD8bqvoLYC0qBJDWOBd.jpg",
      release_date: "2024-12-11",
      title: "Abyss",
      video: false,
      vote_average: 6.066,
      vote_count: 53,
    },
  ],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavourite: (state, action) => {
      state.favorites.push(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    removeFromFavourite: (state, action) => {
      state.favorites = state.favorites.filter(
        (content) => content.id !== action.payload.id
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },

});

export const { addToFavourite, removeFromFavourite } = favoriteSlice.actions;
export default favoriteSlice.reducer;


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
    favorite:favoriteReducer
  },
})



import { useSelector } from "react-redux";
import Card from "../component/Card";

const Favorites = () => {
  const { favorites } = useSelector((state) => state.favorite);
  console.log(favorites);

  return (
    <div>
      {favorites.length !== 0 ? (
        favorites?.map((obj) => <Card key={obj.id} object={obj} />)
      ) : (
        <p>No favorite list fond</p>
      )}
    </div>
  );
};

export default Favorites;
*/
