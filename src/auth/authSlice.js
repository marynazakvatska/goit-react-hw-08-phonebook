import { createSlice } from "@reduxjs/toolkit";
import  operations  from "./authOperations";


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
        [operations.register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
         [operations.logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
         [operations.logOut.fulfilled](state, action) {
 state.user = {name: null, email: null};
            state.token = null;
            state.isLoggedIn = false;
        },
         
         [ operations.fetchCurrentUser.pending ](state) {
             state.isFetchingCurrectUser = true;
         },
         
        [operations.fetchCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
             state.isFetchingCurrectUser = false;
        },

        [ operations.fetchCurrentUser.rejected ](state) {
             state.isFetchingCurrectUser = false;
         },
         
    },
})

export default authSlice.reducer;