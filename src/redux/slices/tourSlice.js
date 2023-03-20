import { createSlice } from "@reduxjs/toolkit";

const tourSlice = createSlice({
  name: "tour",
  initialState: {
    tourKey: null,
    isMobile: false,
  },
  reducers: {
    doesKeyExist: (state, action) => {
      state.tourKey = !localStorage.getItem(action.payload.localStorageKey);
    },
    setShowTour: (state, action) => {
      state.tourKey = !state.tourKey;
    },
    setIsMobile: (state, action) => {
      state.isMobile = action.payload.isMobile;
    },
  },
});

export const { doesKeyExist, setShowTour, setIsMobile } = tourSlice.actions;

export const tourKey = (state) => state.tour.tourKey;
export const isMobile = (state) => state.tour.isMobile;

export default tourSlice.reducer;
