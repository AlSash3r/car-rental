import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { carsReducer } from "./cars/slice";
import { filtersReducer } from "./filters/slice";
import { favouritesReducer } from "./favourites/slice";

const favouritesPersistConfig = {
  key: "favourites",
  storage,
  whitelist: ["cars"],
};

const persistedFavouritesReducer = persistReducer(
  favouritesPersistConfig,
  favouritesReducer
);

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
    favourites: persistedFavouritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
