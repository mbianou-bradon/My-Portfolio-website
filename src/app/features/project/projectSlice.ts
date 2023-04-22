import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import React, { useEffect } from "react";
import { ProjectType } from "../../../../dataTypes"


const initialState: { projects: ProjectType[] }= {
    projects : []
}

export const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        createProject: (state, action: PayloadAction<ProjectType>) => {
            state.projects = [...state.projects, action.payload]
        }
    }
})

export const { createProject } = projectSlice.actions;
export default projectSlice.reducer;