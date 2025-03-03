// src/redux/videoSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { YOUTUBE_VIDEO_API } from "./constant";

// Async thunk for fetching videos
export const fetchVideos = createAsyncThunk(
  
  "videos/fetchVideos",
  async (page, { rejectWithValue }) => {
    try {
      const response = await fetch(`${YOUTUBE_VIDEO_API}&page=${page}`);
      const json = await response.json();
      return json.items; // Extract only the video items
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    items: [],
    status: "idle",
    error: null,
    page: 1,
    hasMore: true, // Detect if more data is available
  },
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (action.payload.length === 0) {
          state.hasMore = false; // No more videos to load
        } else {
          state.items = [...state.items, ...action.payload]; // Append new videos
        }
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { incrementPage } = videoSlice.actions;
export default videoSlice.reducer;
