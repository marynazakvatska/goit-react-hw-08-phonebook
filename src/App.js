import { lazy, Suspense } from "react";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch /*useSelector*/ } from "react-redux";
import { useEffect } from "react";
import { Switch } from "react-router-dom";
import { authOperations } from "./redux/auth";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const HomeView = lazy(() => import("./views/HomeViews/HomeViews"));
const RegisterView = lazy(() => import("./views/RegisterViews/RegisterViews"));
const LoginView = lazy(() => import("./views/LoginViews/LoginViews"));
const PhonebookView = lazy(() =>
  import("./views/PhoneBookViews/PhonebookView")
);

export default function App() {
  const dispatch = useDispatch();
  // const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Container>
        <AppBar />
        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>

            <PublicRoute exact path="/register" restricted>
              <RegisterView />
            </PublicRoute>

            <PublicRoute exact path="/login" redirectTo="/phonebook" restricted>
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/phonebook">
              <PhonebookView />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </Container>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
