import { createSlice } from "@reduxjs/toolkit";
import  authOperations  from "./authOperations";


const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isFetchingCurrectUser: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
         [authOperations.logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
         [authOperations.logOut.fulfilled](state, action) {
 state.user = {name: null, email: null};
            state.token = null;
            state.isLoggedIn = false;
        },
         
         [ authOperations.fetchCurrentUser.pending ](state) {
             state.isFetchingCurrectUser = true;
         },
         
        [authOperations.fetchCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
             state.isFetchingCurrectUser = false;
        },

        [ authOperations.fetchCurrentUser.rejected ](state) {
             state.isFetchingCurrectUser = false;
         },
         
    },
})

export default authSlice.reducer;