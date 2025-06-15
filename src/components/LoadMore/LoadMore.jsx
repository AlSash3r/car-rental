import { useDispatch, useSelector } from "react-redux";
import { selectAllCars, selectPage, selectTotalPages } from "../../redux/cars/selectors";
import { nextPage } from "../../redux/cars/slice"; 
import styles from "./LoadMore.module.css";

const LoadMore = () => { 
  const dispatch = useDispatch();
  const allCars = useSelector(selectAllCars);
  const page = useSelector(selectPage);
  const total = useSelector(selectTotalPages);

  const showButton =
    allCars.length > 0 &&
    page < total &&
    (allCars.length >= 12 || page === 1);

  const handleClick = () => {
    if (page < total) {
      dispatch(nextPage()); 
    }
  };

  return showButton ? (
    <div className={styles.buttonWrapper}>
      <button className={styles.nextButton} onClick={handleClick}>
        Load More
      </button>
    </div>
  ) : null;
};

export default LoadMore; 