import CakeCard from "./CakeCard";
import styles from "./CakesGallery.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function CakesGallery() {
  const cakes = useSelector((state: RootState) => state.cakes.cakes);

  return (
    <section id="catalog">
      <div className={`${styles.CakesGallery_container} container`}>
        {cakes &&
          cakes.map(({ id, name, price, imageSource, description }) => (
            <CakeCard
              key={id}
              id={id}
              name={name}
              price={price}
              imageSource={imageSource}
              description={description}
            />
          ))}
      </div>
    </section>
  );
}
