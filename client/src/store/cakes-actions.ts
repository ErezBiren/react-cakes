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

    try {

      await db.collection("cakes").doc(cake.id).update(cake);
      dispatch(cakesActions.updateCake(cake));
    } catch (error) {
      console.error(error);
    }

  };
};

export const addCakeData = (cake: CakeData) => {
  return async (dispatch: AppDispatch) => {

    try {

      const doc = await db.collection("cakes").add({
        name: cake.name,
        price: cake.price,
        description: cake.description,
        imageSource: cake.imageSource,
      });

      const newCake = { ...cake, id: doc.id };
      dispatch(cakesActions.addCake(newCake));
    }
    catch (error) {
      console.error(error)
    }
  };
};

export const fetchCakeData = () => {
  return async (dispatch: AppDispatch) => {
    const querySnapshot = await db.collection("cakes").get()

    querySnapshot.forEach((doc) => {
      const cake = { id: doc.id, ...doc.data() };
      dispatch(cakesActions.addCake(cake));
    });
  };
};
