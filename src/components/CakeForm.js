import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCake } from "./../redux/cakesSlice";
import { db } from "./../firebase";
import firebase from "firebase";

function CakeForm() {
  const [cakeData, setCakeData] = useState({ name: "", price: 0 });
  const dispatch = useDispatch();

  const selectedCakeId = useSelector((state) => state.selectedCakeId);

  const cake = useSelector((state) =>
    selectedCakeId ? state.cakes.find((c) => c.id === selectedCakeId) : null
  );

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

    if (selectedCakeId) {
      dispatch(updateCake(cakeData));
    } else {
      db.collection("cakes").add({
        name: cakeData.name,
        price: cakeData.price,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      dispatch(addCake(cakeData));
    }
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
      <input type="submit" value="Submit" />
    </form>
  );
}

export default CakeForm;
