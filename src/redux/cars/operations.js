import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://car-rental-api.goit.global";
axios.defaults.baseURL = BASE_URL;

export const fetchCars = createAsyncThunk(
  "cars/fetchAll",
  async (filters, { rejectWithValue, signal }) => {
    try {
      const { data } = await axios.get("/cars", {
        params: filters,
        signal,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchBrands = createAsyncThunk(
  "cars/fetchBrands",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/brands");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCarDetails = createAsyncThunk(
  "cars/fetchDetails",
  async (carId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/cars/${carId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
