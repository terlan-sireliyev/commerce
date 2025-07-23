// ./bookmark/bookmarkSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarks: [],
};

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      const item = action.payload;
      const exist = state.bookmarks.find((b) => b.id === item.id);
      if (!exist) {
        state.bookmarks.push(item);
      }
    },
    deleteBookmark: (state, action) => {
      const id = action.payload;
      state.bookmarks = state.bookmarks.filter((item) => item.id !== id);
    },
  },
});

export const { addBookmark, deleteBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
