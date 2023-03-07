import { createSlice } from "@reduxjs/toolkit";
import TalentsInfo from "../../pages/pages/adminPages/AdminTalent/info.json";

const talentSlice = createSlice({
  name: "talent",
  initialState: {
    TalentsInfo,
    currentTalent: null,
    showUndo: false,
    allowDelete: false,
  },
  reducers: {
    deleteTalent: (state, action) => {
      state.TalentsInfo = state.TalentsInfo.filter(
        (talent) => talent.talentId !== action.payload.talentId
      );
    },
    addTalent: (state, action) => {
      state.TalentsInfo.unshift(action.payload.newTalent);
    },
    setCurrentTalent: (state, action) => {
      state.currentTalent = state.TalentsInfo.find(
        (talent) => talent.talentId === action.payload.talentId
      );
    },
    updateTalent: (state, action) => {
      state.currentTalent = action.payload.currentTalent;

      const index = state.TalentsInfo.findIndex(
        (Talent) => Talent.talentId === action.payload.currentTalent.talentId
      );

      if (index !== -1) state.TalentsInfo[index] = action.payload.currentTalent;
    },
    deleteTecnologies: (state, action) => {
      state.currentTalent = state.TalentsInfo.map((talent) => {
        if (talent.talentId === action.payload.talentId) {
          action.payload.tecnologies.forEach((value) => {
            talent.technology = talent.technology.filter((t) => t !== value);
          });
        }

        return talent;
      });
    },
    addTecnology: (state, action) => {
      state.currentTalent = state.TalentsInfo.map((talent) => {
        if (talent.talentId === action.payload.talentId) {
          talent.technology.push(action.payload.tecnologyId);
        }

        return talent;
      });
    },
    setShowUndo: (state, action) => {
      state.showUndo = action.payload.status;
    },
    setAllowDelete: (state, action) => {
      state.allowDelete = action.payload.status;
    },
  },
});

export const {
  deleteTalent,
  addTalent,
  setCurrentTalent,
  setShowUndo,
  setAllowDelete,
  updateTalent,
  deleteTecnologies,
  addTecnology,
} = talentSlice.actions;
export const selectTalents = (state) => state.talent.TalentsInfo;

export const CurrentTalent = (state) => state.talent.currentTalent;

export const showUndo = (state) => state.talent.showUndo;

export const allowDelete = (state) => state.talent.allowDelete;

export default talentSlice.reducer;
