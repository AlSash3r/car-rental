import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { updateFavourite } from "../../redux/favourites/slice"; 
import { selectFavourites } from "../../redux/favourites/selectors"; // ✅ Добавлен импорт селектора

import styles from "./CarCard.module.css";

const CarCard = ({ car }) => {
  const dispatch = useDispatch();
  const favourites = useSelector(selectFavourites);
  const isActive = favourites.some((item) => item.id === car.id);

  const {
    id,
    brand,
    model,
    year,
    type,
    img,
    rentalPrice,
    rentalCompany,
    mileage,
    address,
  } = car;
  const handleToggle = () => dispatch(updateFavourite(car)); 

  const formattedLocation = address?.split(", ").slice(1).join(" | ");
  const formattedType = type[0].toUpperCase() + type.slice(1).toLowerCase();
  const formattedMileage = `${mileage.toLocaleString("uk-UA")} km`;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.thumbBox}>
        <img src={img} alt={`${brand} ${model}`} className={styles.carImage} />
        <button className={styles.favControl} onClick={handleToggle}>
          {isActive ? (
            <IoIosHeart className={styles.favIconActive} />
          ) : (
            <IoIosHeartEmpty className={styles.favIcon} />
          )}
        </button>
      </div>

      <div className={styles.titleBlock}>
        <h3 className={styles.carName}>
          {brand} <span className={styles.modelHighlight}>{model}</span>, {year}
        </h3>
        <h3 className={styles.carName}>${rentalPrice}</h3>
      </div>

      <div className={styles.metaInfo}>
        <span>{formattedLocation} | </span>
        <span>{rentalCompany} | </span>
        <span>{formattedType} | {formattedMileage}</span>
      </div>

      <Link to={`/catalog/${id}`} className={styles.ctaButton}>Read more</Link>
    </div>
  );
};

export default CarCard;