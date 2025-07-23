import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  favoriteItems: [],
};
export const favoriteSlice = createSlice({
  name: "favoriteName",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const actionFavorites = action.payload;
      const favorites = state.favoriteItems.find(
        (item) => item.id === actionFavorites.id,
      );
      if (!favorites) {
        state.favoriteItems.push(actionFavorites);
        // console.log(actionFavorites)
      }
    },
    deletFavorite: (state, action) => {
      const id = action.payload;
      state.favoriteItems = state.favoriteItems.filter((item) => item.id !== id);
    },
    
  },
});
export const { addFavorite, deletFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
