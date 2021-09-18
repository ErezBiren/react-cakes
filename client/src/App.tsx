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

export default function App() {
  const dispatch = useDispatch();
  let isInitial = true;

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      dispatch(fetchCakeData());
    }
  }, []);

 const repositoryName = 'react-cakes';

  return (
    <Switch>
      <Route path={`/${repositoryName}`} exact>
        <HomePage />
      </Route>
      <Route path={`/${repositoryName}/auth`}>
        <AuthPage />
      </Route>
      <Route path={`/${repositoryName}/admin`}>
        <AdminPage />
      </Route>
      <Route path={`/${repositoryName}/profile`}>
        <ProfilePage />
      </Route>
      <Route path={`/${repositoryName}/cart`}>
        <CartPage />
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
}
