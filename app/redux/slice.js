import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        blogs: [],
        editableBlog: {},
        editState: false
    },
    reducers: {
        addblog: (state, action) => {
            axios.post('http://localhost:1000/blog', action.payload.blog) 
            state.blogs.push(action.payload.blog)
        },
        updateblog: (state, action) => {
            axios.put(`http://localhost:1000/blog/${action.payload.id}`, action.payload.obj)

            const newBlogs = state.blogs;

            newBlogs.forEach((item, index) => {
                if(String(item.id) === String(action.payload.id)){
                    item[index] = action.payload.obj;
                }
            });

            return{
                ...state,
                blogs: newBlogs
            }

        },
        deleteBlog: (state, action) => {
            axios.delete(`http://localhost:1000/blog/${action.payload.id}`)

            state.blogs.forEach((item, index) => {
                if(String(item.id) === String(action.payload.id)){
                    newBlogs.splice(index, 1)
                }
            })
        },
        changeEditState: (state, action) => {
            return{
                ...state,
                editState: action.payload.editState,
                editableBlog: action.payload.editBlog

            }
        }
    }

})

export const { addblog, updateblog, deleteBlog, changeEditState } = blogSlice.actions

export default blogSlice.reducer
