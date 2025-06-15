import { IoLocationOutline } from "react-icons/io5";
import s from './CarOverview.module.css';

const CarOverview = ({ car }) => {
  if (!car) return null;

  return (
    <div className={s.wrapper}>
      <div className={s.titleRow}>
        <h2 className={s.name}>
          {car.brand} {car.model}, {car.year}
        </h2>
        <p className={s.identifier} title={car.id}>
          ID: {car.id.slice(0, 4)}
        </p>
      </div>

      <div className={s.infoBlock}>
        <div className={s.locationGroup}>
          <IoLocationOutline />
          <p className={s.location}>{car.address.split(', ').slice(1).join(', ')}</p>
          <p className={s.mileage}>Mileage: {car.mileage} km</p>
        </div>
      </div>

      <p className={s.price}>${car.rentalPrice}</p>
      <p className={s.description}>{car.description}</p>
    </div>
  );
};

export default CarOverview;