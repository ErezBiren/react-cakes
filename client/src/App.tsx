import "./style.css";

import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import AdminPage from "./pages/AdminPage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import { fetchCakeData } from "./store/cakes-actions";

export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,

        main: "#000000",
      },
    },
  });

  const dispatch = useDispatch();

  let isInitial = true;

  useEffect(() => {
    if (isInitial) {
      isInitial = false;

      dispatch(fetchCakeData());
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/">
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/auth">
            <AuthPage />
          </Route>

          <Route path="/admin">
            <AdminPage />
          </Route>

          <Route path="/profile">
            <ProfilePage />
          </Route>

          <Route path="/cart">
            <CartPage />
          </Route>

          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
