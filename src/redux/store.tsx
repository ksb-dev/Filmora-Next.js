import { configureStore } from "@reduxjs/toolkit";
import { ModeSlice } from "./services/getMode";
import { MoviesSlice } from "./services/getMovies";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    mode: ModeSlice.reducer,
    movies: MoviesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
