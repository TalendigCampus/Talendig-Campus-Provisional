import { createSlice, current } from "@reduxjs/toolkit";
import projectsInfo from "../../pages/pages/AdminProyects/userProjects.json";
import { PROJECT_UPDATE_TYPE } from "../../common/constants/data";
import { PROJECT_DELETE_TYPE } from "../../common/constants/data";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projectsInfo,
    currentProject: null,
    currentFolder: null,
    currentFile: null,
    updateType: "",
    showUndo: false,
    showUpdate: {
      value: false,
      type: "",
    },
    currentTalentProjects: null,
  },
  reducers: {
    deleteProject: (state, action) => {
      if (action.payload.type === PROJECT_DELETE_TYPE.project) {
        state.projectsInfo = state.projectsInfo.filter(
          (project) => project.projectId !== action.payload.projectId
        );
      } else if (action.payload.type === PROJECT_DELETE_TYPE.folder) {
        const project = state.projectsInfo.find(
          (project) => project.projectId === state.currentProject.projectId
        );

        const newFolder = project.projectDetails.filter(
          (folder) => folder.folderId !== action.payload.folderId
        );

        project.projectDetails = newFolder;
        state.currentProject = project;
      } else if (action.payload.type === PROJECT_DELETE_TYPE.file) {
        const project = state.projectsInfo.find(
          (project) => project.projectId === state.currentProject.projectId
        );

        const folder = project.projectDetails.find(
          (folder) => folder.folderId === state.currentFolder.folderId
        );

        folder.files = folder.files.filter(
          (file) => file.fileId !== action.payload.fileId
        );

        state.currentFolder.files = folder.files;
      }
    },
    addProject: (state, action) => {
      if (action.payload.type === PROJECT_UPDATE_TYPE.project) {
        state.projectsInfo.unshift(action.payload.project);
      } else if (action.payload.type === PROJECT_UPDATE_TYPE.folder) {
        const project = state.projectsInfo.find(
          (project) => project.projectId === state.currentProject.projectId
        );
        project.projectDetails.unshift(action.payload.projectFolder);
        state.currentProject.projectDetails.unshift(
          action.payload.projectFolder
        );
      } else if (action.payload.type === PROJECT_UPDATE_TYPE.file) {
        const project = state.projectsInfo.find(
          (project) => project.projectId === state.currentProject.projectId
        );

        const folder = project.projectDetails.find(
          (folder) => folder.folderId === state.currentFolder.folderId
        );

        folder.files.unshift(action.payload.folderFile);
        state.currentFolder.files.unshift(action.payload.folderFile);
      }
    },
    setCurrentProject: (state, action) => {
      state.currentProject = state.projectsInfo.find(
        (project) => project.projectId === action.payload.projectId
      );
    },
    setCurrentFolder: (state, action) => {
      const project = state.projectsInfo.find(
        (project) => project.projectId === state.currentProject.projectId
      );

      const folder = project.projectDetails.find(
        (folder) => folder.folderId === action.payload.folderId
      );
      state.currentFolder = folder;
    },
    setCurrentFile: (state, action) => {
      const project = state.projectsInfo.find(
        (project) => project.projectId === state.currentProject.projectId
      );

      const folder = project.projectDetails.find(
        (folder) => folder.folderId === state.currentFolder.folderId
      );

      const file = folder.files.find(
        (file) => file.fileId === action.payload.fileId
      );
      state.currentFile = file;
    },
    updateProject: (state, action) => {
      if (action.payload.type === PROJECT_UPDATE_TYPE.project) {
        const project = state.projectsInfo.find(
          (project) => project.projectId === action.payload.projectId
        );

        project.projectName = action.payload.projectName;
      } else if (action.payload.type === PROJECT_UPDATE_TYPE.folder) {
        const project = state.projectsInfo.find(
          (project) => project.projectId === state.currentProject.projectId
        );

        const folder = project.projectDetails.find(
          (folder) => folder.folderId === action.payload.folderId
        );

        folder.name = action.payload.folderName;
        state.currentProject = project;
      } else if (action.payload.type === PROJECT_UPDATE_TYPE.file) {
        const project = state.projectsInfo.find(
          (project) => project.projectId === state.currentProject.projectId
        );

        const folder = project.projectDetails.find(
          (folder) => folder.folderId === state.currentFolder.folderId
        );

        const file = folder.files.find(
          (file) => file.fileId === action.payload.fileId
        );

        file.name = action.payload.fileName;
        state.currentFile = file;
        state.currentFolder = folder;
      }
    },
    setShowUndo: (state, action) => {
      state.showUndo = action.payload.status;
    },
    setShowUpdate: (state, action) => {
      state.showUpdate.value = action.payload.status || false;
      state.showUpdate.type = action.payload.type || "";
    },
    setUpdateType: (state, action) => {
      state.updateType = action.payload.type;
    },
    setProjectsByTalent: (state, action) => {
      state.currentTalentProjects = state.projectsInfo.filter(
        (project) => project.talentId === action.payload.talentId
      );
    },
  },
});

export const {
  deleteProject,
  setCurrentProject,
  addProject,
  setShowUndo,
  setUpdateType,
  setShowUpdate,
  updateProject,
  setCurrentFolder,
  setCurrentFile,
  setProjectsByTalent,
} = projectsSlice.actions;
export const selectProjects = (state) => state.projects.projectsInfo;
export const currentProject = (state) => state.projects.currentProject;
export const updateType = (state) => state.projects.updateType;
export const currentFolder = (state) => state.projects.currentFolder;
export const currentFile = (state) => state.projects.currentFile;
export const showUpdate = (state) => state.projects.showUpdate;
export const showUndo = (state) => state.projects.showUndo;
export const currentTalentProjects = (state) =>
  state.projects.currentTalentProjects;

export default projectsSlice.reducer;
