import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const api_key = "3449a74ae43b0baa635eaff5dbe9f93b";

export const searchMovies = createAsyncThunk(
  "search/searchMovies",
  async (query) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${api_key}&query=${query}`
    );

    return res.data;
  }
);
