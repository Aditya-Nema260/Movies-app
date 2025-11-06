import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "3449a74ae43b0baa635eaff5dbe9f93b";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const res = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}`);
  return res.data;
});

export const fetchTrendingMovies = createAsyncThunk("movies/fetchTrending", async () => {
  const res = await axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  return res.data;
});

export const fetchPopularMovies = createAsyncThunk("movies/fetchPopular", async () => {
  const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  return res.data;
});

export const fetchUpcomingMovies = createAsyncThunk("movies/fetchUpcoming", async () => {
  const res = await axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`);
  return res.data;
});

// 🎥 Single Movie Detail
export const fetchMovieDetail = createAsyncThunk("movies/fetchDetail", async (id) => {
  const res = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return res.data;
});
