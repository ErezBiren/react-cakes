import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cakesActions } from "../store/cakes-Slice";
import { sendCakeData, updateCakeData } from "../store/cakes-actions";

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
    state.cakes.cakes
      ? state.cakes.cakes.find((cake) => cake.id == selectedCakeID)
      : null
  );

  useEffect(() => {
    if (cake) {
      setCakeData({
        id: cake.id ? cake.id : 0,
        name: cake.name ? cake.name : "",
        price: cake.price ? cake.price : 0,
        imgSrc: cake.imgSrc ? cake.imgSrc : "",
        description: cake.description ? cake.description : "",
      });
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

      dispatch(updateCakeData(cakeData));

      dispatch(cakesActions.updateCake(cakeData));
    } else {
      console.log("addcake");
      dispatch(sendCakeData(cakeData));

      

      clear();
    }
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
      <button onClick={clear}>Clear Form</button>
    </div>
  );
}

export default CakeForm;
