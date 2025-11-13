import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = "3449a74ae43b0baa635eaff5dbe9f93b";

export const fetchTVShows = createAsyncThunk("tv/fetchTVShows", async () => {
  const res = await axios.get(
    `${BASE_URL}/trending/tv/week?api_key=${API_KEY}`
  );
  console.log("Helo Tv", res.data);

  return res.data;
});

export const fetchTvDetail = createAsyncThunk(
  "movies/fetchDetail",
  async (id) => {
    const res = await axios.get(`${BASE_URL}/tv/${id}?api_key=${API_KEY}`);
    return res.data;
  }
);
