import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./style.css";
import { fetchCakeData } from "./store/cakes-actions";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import AuthPage from "./pages/AuthPage";

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
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/admin">
        <AuthPage />
      </Route>
      <Route path="*">
        <NotFoundPage/>
        </Route>
    </Switch>
  );
}
