import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cakesActions } from "../store/cakes-Slice";
import { db } from "./../firebase";
import firebase from "firebase";

function CakeForm() {
  const [cakeData, setCakeData] = useState({
    id: "",
    name: "",
    price: 0,
    imgSrc: "",
    description: "",
  });
  const dispatch = useDispatch();

  const selectedCakeID = useSelector((state) => state.cakes.selectedCakeID);

  const cake = useSelector((state) =>
    state.cakes.cakes.find((cake) => cake.id == selectedCakeID)
  );

  useEffect(() => {
    if (cake) {
      setCakeData({
        id: cake.id ? cake.description : 0,
        name: cake.name ? cake.description : "",
        price: cake.price ? cake.description : 0,
        imgSrc: cake.imgSrc ? cake.description : "",
        description: cake.description ? cake.description : "",
      });
      console.log("cakeData: " + JSON.stringify(cakeData));
    }
  }, [selectedCakeID]);

  const handleChange = (e) => {
    setCakeData({ ...cakeData, [e.target.name]: e.target.value });
  };

  const clear = () => {
    setCakeData({
      id: "",
      name: "",
      price: 0,
      imgSrc: "",
      description: "",
    });
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    if (cakeData.id) {
      console.log("update cake");
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
    clear();
  };

  const sendCakeData = async () => {
    console.log(JSON.stringify(cakeData));

    const sendRequest = async () => {
      const response = await fetch("http://localhost:5000/cakes", {
        method: "PUT", // todo: check why not put?
        body: JSON.stringify(cakeData),
      });

      if (!response.ok) {
        throw new Error("sending new data failed.");
      }
    };

    await sendRequest();
  };

  return (
    <div>
      <form onSubmit={handleSumbit}>
        <input
          name="name"
          value={cakeData && cakeData.name}
          placeholder="name"
          onChange={handleChange}
        />
        <input
          name="price"
          value={cakeData && cakeData.price}
          placeholder="price"
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
    </div>
  );
}

export default CakeForm;
