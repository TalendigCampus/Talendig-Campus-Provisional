import { createSlice } from "@reduxjs/toolkit";
import TalentsInfo from "../../pages/pages/talent/info.json";

const talentSlice = createSlice({
  name: "talent",
  initialState: {
    TalentsInfo,
    setTalentToDelete: null,
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
    talentToDelete: (state, action) => {
      state.setTalentToDelete = state.TalentsInfo.find(
        (talent) => talent.talentId === action.payload.talentId
      );
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
  talentToDelete,
  setShowUndo,
  setAllowDelete,
} = talentSlice.actions;
export const selectTalents = (state) => state.talent.TalentsInfo;

export const talentToBeRemoved = (state) => state.talent.setTalentToDelete;

export const showUndo = (state) => state.talent.showUndo;

export const allowDelete = (state) => state.talent.allowDelete;

export default talentSlice.reducer;
