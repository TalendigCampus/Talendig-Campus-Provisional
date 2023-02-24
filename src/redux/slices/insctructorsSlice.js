import { createSlice } from "@reduxjs/toolkit";
import InstructorsInfo from "../../pages/AdminInstructors/InstructorsList/InstructorsInfo.json";

const instructorSlice = createSlice({
  name: "instructor",
  initialState: {
    InstructorsInfo,
    setInstructorToDelete: null,
    showUndo: false,
  },
  reducers: {
    deleteInstructor: (state, action) => {
      state.InstructorsInfo = state.InstructorsInfo.filter(
        (instructor) => instructor.id !== action.payload.instructorId
      );
    },
    addInstructor: (state, action) => {
      state.InstructorsInfo = [
        action.payload.instructor,
        ...state.InstructorsInfo,
      ];
    },
    instructorToDelete: (state, action) => {
      state.setInstructorToDelete = state.InstructorsInfo.find(
        (instructor) => instructor.id === action.payload.instructorId
      );
    },
    setShowUndo: (state, action) => {
      state.showUndo = action.payload.status;
    },
  },
});

export const {
  deleteInstructor,
  instructorToDelete,
  addInstructor,
  setShowUndo,
} = instructorSlice.actions;
export const selectInstructors = (state) => state.instructor.InstructorsInfo;
export const instructorToBeRemoved = (state) =>
  state.instructor.setInstructorToDelete;
export const showUndo = (state) => state.instructor.showUndo;

export default instructorSlice.reducer;
