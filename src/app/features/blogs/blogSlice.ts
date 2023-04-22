import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import { BlogType } from "../../../../dataTypes";



const initialState: { blogs: BlogType[] }= {
    blogs : []
}

export const blogSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        createBlog: (state, action: PayloadAction<BlogType>) => {
            state.blogs = [...state.blogs, action.payload]
        }
    }
})

export const { createBlog } = blogSlice.actions;
export default blogSlice.reducer;