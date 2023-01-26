import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    mode: "Light",
    user: null,
    token: null,
    posts: [],
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{ // fn that involve modifying global/inital state
        setMode : (state) => {
            state.mode = state.mode === "light" ? "dark" : "light" ; // toggle over modes
        },
        setLogin : (state,action) => {  // 
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setFriends: (state,action) =>{
            if(state.user){
                state.user.friends = action.payload.friends;
            }else{
                console.error("user friends dont exist")
            }
        },
        setPosts : (state,action) =>{
            state.user.posts = action.payload.posts;
        },
        setPost : (state,action) => {
            // kinda coomplicated then others
            const updatedPosts = state.posts.map((post)=>{
                if(post._id===action.payload.post._id) return action.payload.post;
                return post;
            });
            state.posts = updatedPosts;
        }
    }
})

export const {setMode,setFriends,setLogin,setPost,setPosts} = authSlice.actions;
export default authSlice.reducer;