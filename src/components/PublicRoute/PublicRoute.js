import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";
import  authSelectors  from '../../auth/authSelectors';

/* 
<Redirect to="/login" />; */

export default function PublicRoute({
    children,
    restricted = false,
      redirectTo = '/',
    ...routeProps }) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;
  
    return (
        <Route {...routeProps}>
            { shouldRedirect ? <Redirect to={redirectTo} /> :  children}
        </Route>
    ) 
}
