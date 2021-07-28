import React, { useEffect } from "react";
import Header from "./components/Header";
import CakesGallery from "./components/CakesGallery/CakesGallery";
import {  useDispatch } from "react-redux";
import "./style.css";
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
    <div>
      <Header />
      <CakesGallery />
    </div>
  );
}
