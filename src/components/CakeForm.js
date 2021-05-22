import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCake } from "./../redux/cakesReducer";

function CakeForm() {
  const [cakeData, setCakeData] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCakeData({ [e.target.name]: e.target.value });
  };

  const handleSumbit = (e) => {
    console.log("1");
    e.preventDefault();
    // console.log("2");
    // dispatch(addCake(cakeData));
  };

  return (
    <form>
      <input
        name="name"
        value={cakeData.name}
        placeholder="Title"
        onChange={handleChange}
      />
      <input
        name="price"
        value={cakeData.price}
        placeholder="Price"
        onChange={handleChange}
      />
      <input type="submit" value="Submit" onChange={handleSumbit} />
    </form>
  );
}

export default CakeForm;
