import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        blog: {},
        blogs: [],
        blogEditableState: false,
        editableBlog: {},
        blogID: '',
        blogIDs: []
    },
    reducers: {
        addBlog: function(state, action){ //action{ payload: blogItem: {} }
            axios.post('http://localhost:1000/blog', action.payload.blogItem)
            .then(response => blogSlice.caseReducers.setState({type: 'blogs', payload: { blogs: response.data }}))
            .catch(err => console.log(err))
        },
        editAndUpdate: function(state, action){ //action{ payload: { obj, id } }
            axios.put(`http://localhost:1000/blog/${action.payload.id}`, action.payload.obj)
        },
        deleteBlog: function(state, action){ //action{ payload: { id } }
            axios.delete(`http://localhost:1000/blog/${action.payload.id}`)
        },
        setBlogs: function(state, action){
            axios.get('http://localhost:1000/blog')
                .then(response => blogSlice.caseReducers.setState({type: 'blogs', payload: { blogs: response.data }}))
                .catch(err => console.log(err))
        },
        setBlog: function(state, action){//action{ payload: { id } }
            axios.get(`http://localhost:1000/blog/${action.payload.id}`)
                .then(response => blogSlice.caseReducers.setState({ type: 'blog', payload: {blog: response.data} }))
                .catch(err => console.log(err))
        },
        setBlogIDs: function(state, action){
            axios.get(`http://localhost:1000/blog/${id}`)
                .then(response => {
                    const data = response.data.map(item => {
                        return item.id
                    })

                    blogSlice.caseReducers.setState({ type: 'blogIDs', payload: {blogIDs: response.data} })

                })
                .catch(err => console.log(err))
        },
        setBlogID: function(state, action){
            blogSlice.caseReducers.setState({ type: 'blogID', payload: { id: action.payload.id } })
        },

        setBlogEditState: function(state, action){
            blogSlice.caseReducers.setState({ type: 'editBlogState', payload: { blogState: action.payload.editState } })
        },
        setEditableBlog: function(state, action){

        },
        //Will act as a Set State for Global States
        setState: function(state, action){ //action{ payload: { blog: {}, blogs: [], blogState: bool, blogID: '' or 0, blogIDs: [] }  }
            switch(action.type){
                case 'blog':{ //Getting the Blog item as an object

                    return {
                        ...state,
                        blog: action.payload.blog
                    }

                }
                case 'blogs': { //Getting all of the blogs 

                    return {
                        ...state,
                        blogs: action.payload.blogs
                    }
                }
                case 'editBlogState': { //Blog State where the program determines if the its on edit mode or not

                    return {
                        ...state,
                        blogEditableState: action.payload.blogState
                    }
                }
                case 'blogID': { //Return the Blog ID of a certain Blog

                    return {
                        ...state,
                        blogID: action.payload.blogID
                    }
                }
                case 'blogIDs': { // Return all of the IDs from all of the blog for the dynamic routes

                    return {
                        ...state,
                        blogIDs: action.payload.blogIDs
                    }
                }
            }
        } 
    }

})

export const { addBlog, editAndUpdate, deleteBlog, getBlog, getBlogIDs, getBlogs, setState, setBlogID, setBlogEditState } = blogSlice.actions

export default blogSlice.reducer