import{ useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import PublicRoute from "./components/PublicRoute/PublicRoute";
import { Switch } from "react-router-dom";

/* import Phonebook from "./components/Phonebook/Phonebook"; */
import AppBar from './components/UserMenu/AppBar/AppBar';
import operations from './auth/authOperations';
import  authSelectors  from './auth/authSelectors';


const HomeView = lazy(() => import('./views/HomeView/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView/LoginView'));
const PhoneView = lazy(() => import('./views/PhoneView/PhoneView'));




function App() {
  const dispatch = useDispatch();
  const isFetchingCurrectUser = useSelector(authSelectors.getIsFetchingCurrent)
  
  useEffect(() => {
    dispatch(operations.fetchCurrentUser);
  }, [dispatch]
  )

  return (
   /*  isFetchingCurrectUser && */ (
    <div>
     
      <AppBar />
 
     {/*  <Phonebook /> */}

      <Switch>
        <Suspense fallback={<p>Loading...</p>}>
       {/*  <Route exact path="/" component={HomeView} />
        <Route exact path="/register" component={RegisterView} />
        <Route exact path="/login" component={LoginView} /> */}
          {/*  <Route exact path="/contacts" component={ContactsView}  /> */}
      
        <PublicRoute exact path='/' >
          <HomeView />
      </PublicRoute>

            <PublicRoute  exact path='/register' restricted>
          <RegisterView />
        </PublicRoute>
        
        <PublicRoute  exact path='/login' redirectTo='/contacts' restricted>
          <LoginView />
      </PublicRoute>

        <PrivateRoute path='/contacts' redirectTo='/login'>
          <PhoneView />
        </PrivateRoute>
        

      
      </Suspense>
      </Switch>
    </div>
  ));
}

export default App;
