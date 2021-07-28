import React from "react";
import "./Header.css";
import CakeForm from "./CakeForm";
import { authActions } from "../store/auth-Slice";
import { useSelector, useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();

  const isAdmin = useSelector((state) => state.admin.isAdmin);

  return (
    <div class="header_container">
      <button onClick={() => dispatch(authActions.toggleAdmin())}>
        is Admin
      </button>
      {isAdmin && <CakeForm />}
      <h1>העוגות של דידי</h1>
      <h1>055-1234567</h1>
    </div>
  );
}
