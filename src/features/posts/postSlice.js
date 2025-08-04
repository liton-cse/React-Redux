import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./postsApi";

const initialState = {
  isLoading: false,
  posts: [],
  isError: false,
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fatchposts", async () => {
  const posts = await getPosts();
  return posts;
});
const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error?.message;
    });
  },
});

export default postSlice.reducer;
