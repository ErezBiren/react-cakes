import "./style.css";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Provider } from "react-redux";
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
  const dispatch = useDispatch();
  let isInitial = true;

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      dispatch(fetchCakeData());
    }
  }, []);

  return (

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
  );
}
