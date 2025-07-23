// ./ReduxStore/store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

// slice-lar
import favoriteSlice from "./favorite/FavoriteSlice";
import bookmarkSlice from "./bookmark/Bookmark"
// reducer-ləri birləşdiririk
const rootReducer = combineReducers({
  favoriteName: favoriteSlice,
  bookmarkName: bookmarkSlice ,
});

// persist config
const persistConfig = {
  key: "root",
  storage,
};

// persistlənmiş reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// store yaradılır
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// persistor
export const persist = persistStore(store);
