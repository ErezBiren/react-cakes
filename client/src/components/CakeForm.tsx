import { useState, useEffect, SyntheticEvent, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cakesActions } from "../store/cakes-Slice";
import { addCakeData, updateCakeData } from "../store/cakes-actions";
import { RootState } from "../store/store";

export default function CakeForm() {
  const [cakeData, setCakeData] = useState({
    id: "",
    name: "",
    price: 0,
    imgSrc: "",
    description: "",
  });
  const dispatch = useDispatch();

  const selectedCakeID: string = useSelector(
    (state: RootState) => state.cakes.selectedCakeID
  );

  const cake = useSelector((state: RootState) =>
    state.cakes.cakes
      ? state.cakes.cakes.find((cake) => cake.id == selectedCakeID)
      : null
  );

  useEffect(() => {
    if (cake) {
      setCakeData({
        id: cake.id ? cake.id : "",
        name: cake.name ? cake.name : "",
        price: cake.price ? cake.price : 0,
        imgSrc: cake.imgSrc ? cake.imgSrc : "",
        description: cake.description ? cake.description : "",
      });
    }
  }, [selectedCakeID]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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

  const handleSumbit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (cakeData.id) {
      dispatch(updateCakeData(cakeData));
      dispatch(cakesActions.updateCake(cakeData));
    } else {
      dispatch(addCakeData(cakeData));
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
