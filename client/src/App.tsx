import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Admin from "./pages/Admin";
import { useDispatch } from "react-redux";
import "./style.css";
import { fetchCakeData } from "./store/cakes-actions";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";

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
        <Homepage />
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
      <Route path="*">
        <NotFound/>
        </Route>
    </Switch>
  );
}
