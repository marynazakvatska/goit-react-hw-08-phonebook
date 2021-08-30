const getIsLoggedIn = state => state.auth.isLoggedIn;


const getUserName = state => state.auth.user.name;

 const getUserEmail = state => state.auth.user.email;

 const getToken = state => state.auth.token;

const getIsFetchingCurrent = state => state.auth.getIsFetchingCurrentUser;

const authSelectors = {
    getIsLoggedIn,
    getUserName,
    getIsFetchingCurrent,
    getUserEmail,
     getToken,
}

export default authSelectors;