import { configureStore } from "@reduxjs/toolkit";
import moviesreducer from "./features/movieslice";
export const store = configureStore({
  reducer: {
    movies: moviesreducer,
  },
});
