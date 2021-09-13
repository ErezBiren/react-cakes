import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./style.css";
import { fetchCakeData } from "./store/cakes-actions";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import CartPage from "./pages/CartPage";
import AdminPage from "./pages/AdminPage";
import PasswordReset from "./pages/PasswordReset";

export default function App() {
  const dispatch = useDispatch();
  let isInitial = true;

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      dispatch(fetchCakeData());
    }
  }, []);

  return (
    <Switch>
      <Route path="/react-cakes" exact>
        <HomePage />
      </Route>
      <Route path="/react-cakes/auth">
        <AuthPage />
      </Route>
      <Route path="/react-cakes/admin">
        <AdminPage />
      </Route>
      <Route path="/react-cakes/password_reset">
        <PasswordReset />
      </Route>
      <Route path="/react-cakes/profile">
        <ProfilePage />
      </Route>
      <Route path="/react-cakes/cart">
        <CartPage />
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
}
