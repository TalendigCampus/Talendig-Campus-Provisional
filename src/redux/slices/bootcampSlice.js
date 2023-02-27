import { createSlice } from "@reduxjs/toolkit";
import bootcampsInfo from "../../pages/Bootcamps/bootcamp.json";

const bootcampSlice = createSlice({
  name: "bootcamp",
  initialState: {
    bootcampsInfo,
    setBootcampToDelete: null,
    bootcampProfile: null,
    showUndo: false,
  },
  reducers: {
    deleteBootcamp: (state, action) => {
      state.bootcampsInfo = state.bootcampsInfo.filter(
        (bootcamp) => bootcamp.id !== action.payload.id
      );
    },
    addBootcamp: (state, action) => {
      state.bootcampsInfo = [action.payload.bootcamp, ...state.bootcampsInfo];
    },
    bootcampToDelete: (state, action) => {
      state.setBootcampToDelete = state.bootcampsInfo.find(
        (bootcamp) => bootcamp.id === action.payload.id
      );
    },
    bootcampProfile: (state, action) => {
      state.bootcampProfile = state.bootcampsInfo.find(
        (bootcamp) => bootcamp.id === action.payload.id
      );
    },
    bootcampToEdit: (state, action) => {
      state.bootcampsInfo = state.bootcampsInfo.map((bootcamp) => {
        let bootcampInfo;
        if (bootcamp.id === action.payload.id) {
          bootcampInfo = {
            ...bootcamp,
            ...action.payload,
          };

          return bootcampInfo;
        } else {
          return bootcamp;
        }
      });
      console.log("after: ", state.bootcampsInfo);
    },
    setShowUndo: (state, action) => {
      state.showUndo = action.payload.status;
    },
  },
});

export const {
  deleteBootcamp,
  addBootcamp,
  bootcampToDelete,
  setShowUndo,
  bootcampProfile,
  bootcampToEdit,
} = bootcampSlice.actions;
export const selectBootcamps = (state) => state.bootcamp.bootcampsInfo;
export const selectBootcampProfile = (state) => state.bootcamp.bootcampProfile;
export const bootcampToBeRemoved = (state) =>
  state.bootcamp.setBootcampToDelete;
export const showUndo = (state) => state.bootcamp.showUndo;

export default bootcampSlice.reducer;
