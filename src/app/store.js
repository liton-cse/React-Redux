import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counters/counterSlice";
import postsReducer from "../features/posts/postSlice";

export const store = configureStore({
  reducer: {
    counters: counterReducer,
    posts: postsReducer,
  },
});
