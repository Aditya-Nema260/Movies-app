import { createSlice } from "@reduxjs/toolkit";
import { searchMovies } from "./searchThunk";

const searchSlice = createSlice({
  name: "search",
  initialState: { results: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(searchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(searchMovies.rejected, (state) => {
        state.loading = false;
        state.error = "Search failed";
      });
  },
});

export default searchSlice.reducer;
