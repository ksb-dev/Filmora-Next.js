import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POPULAR_MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`;
const TOP_RATED_MOVIES_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`;
const NOW_PLAYING_MOVIES_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`;

const initialState = {
  movies: [],
  sortedMovies: [],
  loading: false,
  error: {
    msg: "",
    isError: false,
  },
  totalPages: 0,
};

export const getMovies = createAsyncThunk(
  "movies/getMovies",

  async (category: string) => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    const pageNo = Number(sessionStorage.getItem("page"));
    const page = pageNo ? pageNo : 1;

    sessionStorage.setItem("page", String(page));

    var data, res;

    if (category === "popular") {
      if (page === 1) {
        data = await fetch(POPULAR_MOVIES_URL);
      } else {
        data = await fetch(POPULAR_MOVIES_URL + `&page=${page}`);
      }
    } else if (category === "top_rated") {
      if (page === 1) {
        data = await fetch(TOP_RATED_MOVIES_URL);
      } else {
        data = await fetch(TOP_RATED_MOVIES_URL + `&page=${page}`);
      }
    } else if (category === "now_playing") {
      if (page === 1) {
        data = await fetch(NOW_PLAYING_MOVIES_URL);
      } else {
        data = await fetch(NOW_PLAYING_MOVIES_URL + `&page=${page}`);
      }
    }
    res = await data?.json();

    return res;
  }
);

export const MoviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.loading = true;
        state.error.isError = false;
        state.error.msg = "";
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.results) {
          state.sortedMovies = action.payload.results;
          state.movies = action.payload.results;
          state.totalPages = action.payload.total_pages;
        } else {
          state.sortedMovies = action.payload;
          state.movies = action.payload;
        }
        state.error.isError = false;
      })
      .addCase(getMovies.rejected, (state) => {
        state.loading = false;
        state.error.isError = true;
        state.error.msg = "Failed to fetch movies.";
        state.movies = [];
        state.sortedMovies = [];
        state.totalPages = 0;
      });
  },
});

export default MoviesSlice.reducer;
export const {} = MoviesSlice.actions;
