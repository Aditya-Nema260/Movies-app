import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "3449a74ae43b0baa635eaff5dbe9f93b";


export const fetchTVShows = createAsyncThunk("tv/fetchTVShows", async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`
  );
  const data = await res.json();
  return data;
});
