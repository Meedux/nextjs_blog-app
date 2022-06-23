import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

export const blogSlice = createSlice({
    name: 'blogFunc',
    initialState: {
        blog: {},
        blogs: [],
        editBlogState: false,
        blogID: '',
        blogIDs: []
    },
    reducers: {
        addBlog: function(state, action){ //action{ payload: blogItem: {} }

        },
        editAndUpdate: function(state, action){ //action{ payload: { obj, id } }

        },
        deleteBlog: function(state, action){ //action{ payload: { id } }

        },
        getBlogs: function(state, action){

        },
        getBlog: function(state, action){//action{ payload: { id } }

        },
        getBlogIDs: function(state, action){

        },
        setReducer: function(state, action){ //action{ payload: { blog: {}, blogs: [], editBlogState: bool, blogID: '' or 0, blogIDs: [] }  }
            switch(action.type){
                case 'blog':{ //Getting the Blog item as an object

                    break
                }
                case 'blogs': { //Getting all of the blogs 

                    break
                }
                case 'editBlogState': { //Blog State where the program determines if the its on edit mode or not

                    break
                }
                case 'blogID': { //Return the Blog ID of a certain Blog

                    break
                }
                case 'blogIDs': { // Return all of the IDs from all of the blog for the dynamic routes
                    
                    break
                }
            }
        } 
    }

})