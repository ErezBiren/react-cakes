import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCakeData, updateCakeData } from "../store/cakes-actions";
import { cakesActions } from "../store/cakes-Slice";
import { RootState } from "../store/store";

export default function CakeForm() {
  const [cakeData, setCakeData] = useState({
    id: "",
    name: "",
    price: 0,
    imageSource: "",
    description: "",
  });
  const dispatch = useDispatch();

  const selectedCakeID: string = useSelector(
    (state: RootState) => state.cakes.selectedCakeID
  );

  const cake = useSelector((state: RootState) =>
    state.cakes.cakes
      ? state.cakes.cakes.find((cake) => cake.id === selectedCakeID)
      : null
  );

  useEffect(() => {
    if (cake) {
      setCakeData({
        id: cake.id ? cake.id : "",
        name: cake.name ? cake.name : "",
        price: cake.price ? cake.price : 0,
        imageSource: cake.imageSource ? cake.imageSource : "",
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
      imageSource: "",
      description: "",
    });
  };

  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
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
          name="imageSource"
          value={cakeData && cakeData.imageSource}
          placeholder="imageSource"
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
      <button onClick={clear}>Clear Form</button>
    </div>
  );
}
