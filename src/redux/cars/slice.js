import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchCars, fetchBrands, fetchCarDetails } from "./operations";

const initialState = {
  brands: [],
  cars: [],
  page: 1,
  totalPages: null,
  details: null,
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    nextPage(state) {
      state.page += 1;
    },
    resetCars(state) {
      state.cars = [];
      state.page = 1;
      state.totalPages = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.totalPages = payload.totalPages;
        state.cars =
          state.page === 1 ? payload.cars : [...state.cars, ...payload.cars];
      })
      .addCase(fetchBrands.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.brands = payload;
      })
      .addCase(fetchCarDetails.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.details = payload;
      })
      .addMatcher(
        isAnyOf(
          fetchCars.pending,
          fetchBrands.pending,
          fetchCarDetails.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchCars.rejected,
          fetchBrands.rejected,
          fetchCarDetails.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload ?? null;
        }
      );
  },
});

export const { nextPage, resetCars } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
