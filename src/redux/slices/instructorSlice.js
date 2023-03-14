import { createSlice } from "@reduxjs/toolkit";
import InstructorsInfo from "../../pages/AdminInstructors/InstructorsList/InstructorsInfo.json";

const instructorSlice = createSlice({
  name: "instructor",
  initialState: {
    InstructorsInfo,
    currentInstructor: null,
    showUndo: false,
  },
  reducers: {
    deleteInstructor: (state, action) => {
      state.InstructorsInfo = state.InstructorsInfo.filter(
        (instructor) => instructor.id !== action.payload.instructorId
      );
    },
    addInstructor: (state, action) => {
      state.InstructorsInfo.unshift(action.payload.instructor);
    },
    setCurrentInstructor: (state, action) => {
      console.log(action.payload.instructorId);
      state.currentInstructor = state.InstructorsInfo.find(
        (instructor) => instructor.id === action.payload.instructorId
      );
    },
    updateInstructor: (state, action) => {
      state.currentInstructor = action.payload.currentInstructor;

      const index = state.InstructorsInfo.findIndex(
        (instructor) => instructor.id === action.payload.currentInstructor.id
      );

      if (index !== -1)
        state.InstructorsInfo[index] = action.payload.currentInstructor;
    },
    deleteTecnologies: (state, action) => {
      state.InstructorsInfo = state.InstructorsInfo.map((instructor) => {
        if (instructor.id === action.payload.id) {
          action.payload.tecnologies.forEach((value) => {
            instructor.technology = instructor.technology.filter(
              (t) => t !== value
            );
          });
        }

        return instructor;
      });
    },
    addTecnology: (state, action) => {
      state.InstructorsInfo = state.InstructorsInfo.map((instructor) => {
        if (instructor.id === action.payload.id) {
          instructor.technology.push(action.payload.tecnologyId);
        }

        return instructor;
      });
    },
    setShowUndo: (state, action) => {
      state.showUndo = action.payload.status;
    },
  },
});

export const {
  deleteInstructor,
  setCurrentInstructor,
  addInstructor,
  setShowUndo,
  updateInstructor,
  deleteTecnologies,
  addTecnology,
} = instructorSlice.actions;
export const selectInstructors = (state) => state.instructor.InstructorsInfo;
export const currentInstructor = (state) => state.instructor.currentInstructor;
export const showUndo = (state) => state.instructor.showUndo;

export default instructorSlice.reducer;
