import React, { useEffect } from "react";
import Header from "./components/Header";
import CakesGallery from "./components/CakesGallery/CakesGallery";
import CakeForm from "./components/CakeForm";
import { authActions } from "./store/auth-Slice";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { fetchCakeData } from "./store/cakes-actions";

export default function App() {
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.admin.isAdmin);

  let isInitial = true;

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      dispatch(fetchCakeData());
    }
  }, []);

  return (
    <div>
      <button onClick={() => dispatch(authActions.toggleAdmin())}>
        is Admin
      </button>
      {isAdmin && <CakeForm />}
      <Header />
      <CakesGallery />
    </div>
  );
}
