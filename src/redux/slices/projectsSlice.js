import { createSlice, current } from "@reduxjs/toolkit";
import projectsInfo from "../../pages/pages/AdminProyects/userProjects.json";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projectsInfo,
    currentProject: null,
    currentFolderId: null,
    updateType: "",
    showUndo: false,
    showUpdate: false,
  },
  reducers: {
    deleteProject: (state, action) => {
      state.projectsInfo = state.projectsInfo.filter(
        (recruiter) => recruiter.id !== action.payload.recruiterId
      );
    },
    addProject: (state, action) => {
      state.projectsInfo.unshift(action.payload.recruiter);
    },
    setCurrentProject: (state, action) => {
      state.currentProject = state.projectsInfo.find(
        (project) => project.projectId === action.payload.projectId
      );
    },
    updateProject: (state, action) => {
      if (action.payload.type === "proyecto") {
        const project = state.projectsInfo.find(
          (project) => project.projectId === action.payload.projectId
        );

        project.projectName = action.payload.projectName;
      } else if (action.payload.type === "carpeta") {
        const projectIndex = state.projectsInfo.findIndex(
          (project) => project.projectId === state.currentProject.projectId
        );
        const project = state.projectsInfo[projectIndex];

        const folderIndex = project.projectDetails.findIndex(
          (folder) => folder.folderId === action.payload.folderId
        );

        project.projectDetails[folderIndex].name = action.payload.folderName;
      }
    },
    setShowUndo: (state, action) => {
      state.showUndo = action.payload.status;
    },
    setShowUpdate: (state, action) => {
      state.showUpdate = action.payload.status;
    },
    setUpdateType: (state, action) => {
      state.updateType = action.payload.type;
    },
    setFolderId: (state, action) => {
      state.currentFolderId = action.payload.folderId;
    },
  },
});

export const {
  deleteRecruiter,
  setCurrentProject,
  addRecruiter,
  setShowUndo,
  setUpdateType,
  setShowUpdate,
  updateProject,
  setFolderId,
} = projectsSlice.actions;
export const selectProjects = (state) => state.projects.projectsInfo;
export const currentProject = (state) => state.projects.currentProject;
export const updateType = (state) => state.projects.updateType;
export const currentFolderId = (state) => state.projects.currentFolderId;
export const showUpdate = (state) => state.projects.showUpdate;

export default projectsSlice.reducer;
