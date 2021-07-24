import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cakesActions } from "../store/cakes-Slice";
import { db } from "./../firebase";
import firebase from "firebase";

function CakeForm() {
  const [cakeData, setCakeData] = useState({
    name: "",
    price: 0,
    imgSrc: "",
    description: "",
  });
  const dispatch = useDispatch();

  const cake = useSelector((state) => state.cakes.selectedCake);

  useEffect(() => {
    if (cake) {
      setCakeData(cake);
    }
  }, [cake]);

  const handleChange = (e) => {
    setCakeData({ [e.target.name]: e.target.value });
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    if (cake) {
      dispatch(cakesActions.updateCake(cakeData));
    } else {
      // db.collection("cakes").add({
      //   name: cakeData.name,
      //   price: cakeData.price,
      //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      //   description: cakeData.description,
      //   imgSrc: cakeData.imgSrc,
      // });

      sendCakeData();

      dispatch(cakesActions.addCake(cakeData));
    }
  };

  const sendCakeData = async () => {
    console.log(JSON.stringify(cakeData));

    const response = await fetch("http://localhost:5000", {
      method: "PUT",
      body: JSON.stringify(cakeData),
    });

    if (!response.ok) {
      throw new Error("sending new data failed.");
    }

    const responseData = await response.JSON();
  };

  return (
    <form onSubmit={handleSumbit}>
      <input
        name="name"
        value={cakeData && cakeData.name}
        placeholder="Title"
        onChange={handleChange}
      />
      <input
        name="price"
        value={cakeData && cakeData.price}
        placeholder="Price"
        onChange={handleChange}
      />
      <input
        name="description"
        value={cakeData && cakeData.description}
        placeholder="description"
        onChange={handleChange}
      />
      <input
        name="imgSrc"
        value={cakeData && cakeData.imgSrc}
        placeholder="imgSrc"
        onChange={handleChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default CakeForm;
