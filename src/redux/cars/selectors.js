export const selectAllCars = (state) => state.cars.cars || [];
export const selectCarDetails = (state) => state.cars.details;
export const selectCarsBrands = (state) => state.cars.brands;
export const selectPage = (state) => state.cars.page;
export const selectTotalPages = (state) => state.cars.totalPages;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;
