import { cakesActions, CakeData } from "./cakes-Slice";
import { db } from "../firebase";
import { AppDispatch } from "./store";

const isFireBase = true;

export const deleteCakeData = (cakeId: string) => {
  if (isFireBase) {
    return async (dispatch: AppDispatch) => {
      db.collection("cakes").doc(cakeId).delete();
      dispatch(cakesActions.deleteCake(cakeId));
    };
  } else {
  }
};

export const updateCakeData = (cake: CakeData) => {
  if (isFireBase) {
    return async (dispatch: AppDispatch) => {
      db.collection("cakes").doc(cake.id).update(cake);
    };
  } else {
  }
};

export const addCakeData = (cake: CakeData) => {
  if (isFireBase) {
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
  } else
    return async (dispatch: AppDispatch) => {
      console.log(JSON.stringify(cake));

      const sendRequest = async () => {
        const response = await fetch("http://localhost:5000/cakes", {
          method: "PUT", // todo: check why not put?
          body: JSON.stringify(cake),
        });

        if (!response.ok) {
          throw new Error("sending new data failed.");
        }
      };

      try {
        await sendRequest();
        //todo: GUI SUCCESS notification
      } catch (error) {
        console.log(error);
        //todo: GUI error notification
      }
    };
};

export const fetchCakeData = () => {
  if (isFireBase) {
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
  } else {
    return async (dispatch: AppDispatch) => {
      const fetchData = async () => {
        const response = await fetch("http://localhost:5000/cakes");

        if (!response.ok) {
          throw new Error("Could not fetch cakes data");
        }

        const cakesData = await response.json();
        return cakesData;
      };

      try {
        const cakesData = await fetchData();
        dispatch(cakesActions.replaceCakes(cakesData.items || [])); // make shure it's not empty
        //todo: GUI SUCCESS notification
      } catch (error) {
        console.log(error);
        //todo: GUI error notification
      }
    };
  }
};
