import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_KEY = "3449a74ae43b0baa635eaff5dbe9f93b";

export const searchMovies = createAsyncThunk(
  "search/searchMovies",
  async (query) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );
    
    return res.data;
  }
);
