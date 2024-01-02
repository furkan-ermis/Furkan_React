import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getBlogsAsync = createAsyncThunk("blogs/getBlogs", async () => {
  try {
    const response = await axios.get("http://localhost:3000/Blogs");
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});
const BlogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
  },
  reducers: {
    postBlog: (action) => {
      try {
        const { data } = axios.post(
          " http://localhost:3000/Blogs",
          action.payload
        );
        console.log(data);
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBlogsAsync.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.blogs = action.payload;
    });
  },
});

export const { getBlogs } = BlogSlice.actions;

export default BlogSlice.reducer;
