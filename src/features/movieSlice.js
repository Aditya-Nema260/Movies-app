import { createSlice } from "@reduxjs/toolkit";
import {
  fetchMovies,
  fetchTrendingMovies,
  fetchPopularMovies,
  fetchUpcomingMovies,
  fetchMovieDetail,
} from "./movieThunk";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    items: [],
    trending: [],
    popular: [],
    upcoming: [],
    detail: null,
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })

      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.trending = action.payload;
      })

      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.popular = action.payload;
      })

      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.upcoming = action.payload;
      })

      .addCase(fetchMovieDetail.fulfilled, (state, action) => {
        state.detail = action.payload;
      });
  },
});

export default movieSlice.reducer;
