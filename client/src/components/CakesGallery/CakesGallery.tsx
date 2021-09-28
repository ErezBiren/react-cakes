import { useSelector } from "react-redux";

import { RootState } from "../../store/store";
import CakeCard from "./CakeCard";
import styles from "./CakesGallery.module.css";

export default function CakesGallery() {
  const cakes = useSelector((state: RootState) => state.cakes.cakes);

  return (
    <section id="Catalog">
      <div className={`${styles.CakesGalleryContainer} container`}>
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
