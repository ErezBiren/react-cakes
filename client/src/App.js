import React from "react";
import Header from "./components/Header";
import Main from "./components/CakesGallery/CakesGallery";
import CakeForm from "./components/CakeForm";
import { authActions } from "./store/auth-Slice";
import { useSelector, useDispatch } from "react-redux";

import "./style.css";

export default function App() {
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.admin.isAdmin);

  return (
    <div>
      <button onClick={() => dispatch(authActions.toggleAdmin())}>
        is Admin
      </button>
      {isAdmin && <CakeForm />}
      <Header />
      <Main />
    </div>
  );
}
