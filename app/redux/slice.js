import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

export const blogSlice = createSlice({
    name: 'blogFunc',
    initialState: {
        blog: {},
        blogs: [],
        blogState: false,
        blogID: '',
        blogIDs: []
    },
    reducers: {
        addBlog: function(state, action){ //action{ payload: blogItem: {} }
            axios.post('http://localhost:1000/blog', blogItem)
            .catch(err => console.log(err))
        },
        editAndUpdate: function(state, action){ //action{ payload: { obj, id } }
            axios.put(`http://localhost:1000/blog/${action.payload.id}`, action.payload.obj)
        },
        deleteBlog: function(state, action){ //action{ payload: { id } }
            axios.delete(`http://localhost:1000/blog/${action.payload.id}`)
        },
        getBlogs: function(state, action){
            axios.get('http://localhost:1000/blog')
                .then(response => blogSlice.caseReducers.setReducer({ type: 'blogs', payload: { blogs: response.data } }))
                .catch(err => console.log(err))
        },
        getBlog: function(state, action){//action{ payload: { id } }
            axios.get(`http://localhost:1000/blog/${id}`)
                .then(response => blogSlice.caseReducers.setReducer({ type: 'blog', payload: { blog: response.data } }))
                .catch(err => console.log(err))
        },
        getBlogIDs: function(state, action){
            axios.get(`http://localhost:1000/blog/${id}`)
                .then(response => {
                    const data = response.data.map(item => {
                        return item.id
                    })

                    blogSlice.caseReducers.setReducer({ type: 'blogIDs', payload: { blogIDs: data } })

                })
                .catch(err => console.log(err))
        },

        //Will act as a Set State for Global States
        setReducer: function(state, action){ //action{ payload: { blog: {}, blogs: [], blogState: bool, blogID: '' or 0, blogIDs: [] }  }
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
                        blogState: action.payload.blogState
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