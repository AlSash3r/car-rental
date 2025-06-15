import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    cars: [],
  },
  reducers: {
    updateFavourite(state, action) {
      const newCar = action.payload;
      if (!newCar?.id) return;

      const exists = state.cars.some((car) => car.id === newCar.id);

      state.cars = exists
        ? state.cars.filter((car) => car.id !== newCar.id) 
        : [...state.cars, newCar]; 
    },
    clearFavourites(state) {
      state.cars = [];
    },
  },
});

export const { updateFavourite, clearFavourites } = favouritesSlice.actions;
export const favouritesReducer = favouritesSlice.reducer;
