import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";
import  authSelectors  from '../../auth/authSelectors';


export default function PrivateRoute({
    children,
    redirected = false,
  redirectTo = '/',
    ...routeProps }) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <Route {...routeProps}>
            {isLoggedIn ? children : <Redirect to =/* '/login' */ {redirectTo}/>}
        </Route>
    ) 
}
