import { cakesActions, CakeData } from "./cakes-Slice";
import { db } from "../firebase";
import { AppDispatch } from "./store";

export const deleteCakeData = (cakeId: string) => {
  return async (dispatch: AppDispatch) => {
    await db.collection("cakes").doc(cakeId).delete();
    dispatch(cakesActions.deleteCake(cakeId));
  };
};

export const updateCakeData = (cake: CakeData) => {
  return async (dispatch: AppDispatch) => {
    await db.collection("cakes").doc(cake.id).update(cake);
    dispatch(cakesActions.updateCake(cake));
  };
};

export const addCakeData = (cake: CakeData) => {
  return async (dispatch: AppDispatch) => {
    db.collection("cakes").add({
      name: cake.name,
      price: cake.price,
      description: cake.description,
      imageSource: cake.imageSource,
    })
      .then(function (doc) {
        const newCake = { ...cake, id: doc.id };
        dispatch(cakesActions.addCake(newCake));
      });
  };
};

export const fetchCakeData = () => {
  return async (dispatch: AppDispatch) => {
    db.collection("cakes")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const cake = { id: doc.id, ...doc.data() };
          dispatch(cakesActions.addCake(cake));
        });
      });
  };
};
 