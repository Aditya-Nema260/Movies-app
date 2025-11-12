import { createSlice } from "@reduxjs/toolkit";
import { fetchTVShows,fetchTvDetail } from "./tvThunk";

const tvSlice = createSlice({
  name: "tv",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTVShows.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTVShows.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTVShows.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch TV shows";
      })
      .addCase(fetchTvDetail.fulfilled, (state, action) => {
        state.detail = action.payload;
      });
  },
});

export default tvSlice.reducer;
