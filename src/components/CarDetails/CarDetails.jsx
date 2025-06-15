import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../Loader/Loader";
import BookingForm from "../BookingForm/BookingForm";
import CarOverview from "../CarOverview/CarOverview";
import CarFeaturesList from "../CarFeatures/CarFeatures";
import CarSpecifications from "../CarSpecifications/CarSpecifications";

import { fetchCarDetails } from "../../redux/cars/operations"; 
import { selectCarDetails, selectIsLoading } from "../../redux/cars/selectors";

import styles from "./CarDetails.module.css";

const CarDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const car = useSelector(selectCarDetails);
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCarDetails(id)); 
  }, [dispatch, id]);

  if (loading || !car) return <Loader />;

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.mediaSection}>
        <img className={styles.imagePreview} src={car.img} alt={car.model} />
        <BookingForm />
      </div>
      <div>
        <CarOverview car={car} />
        <div className={styles.infoGrid}>
          <CarFeaturesList title="Rental Conditions:" items={car.rentalConditions} />
          <CarSpecifications {...car} />
          <CarFeaturesList
            title="Accessories and Functionalities:"
            items={[...car.accessories, ...car.functionalities]}
          />
        </div>
      </div>
    </div>
  );
};

export default CarDetails;