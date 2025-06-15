import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';

import VehicleCard from '../CarCard/CarCard';
import PaginationButton from '../LoadMore/LoadMore';
import Spinner from '../Loader/Loader';
import Filters from '../FilterPanel/FilterPanel';

import {
  selectAllCars,
  selectIsLoading,
  selectError,
} from '../../redux/cars/selectors';

import styles from './CarCatalog.module.css';

const CarCatalog = () => {
  const carList = useSelector(selectAllCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const scrollAnchor = useRef(null);

  useEffect(() => {
    if (carList.length > 12 && scrollAnchor.current) {
      const height = scrollAnchor.current.getBoundingClientRect().height;
      window.scrollBy({ top: height * 2, behavior: 'smooth' });
    }
  }, [carList]);

  useEffect(() => {
    if (error) {
      toast.error('Failed to fetch cars. Please try again later.');
    }
  }, [error]);

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.catalogWrapper}>
      <Filters />
      <ul className={styles.grid}>
        {carList.map((car, idx) => (
          <li key={car.id} ref={idx === 0 ? scrollAnchor : null}>
            <VehicleCard car={car} />
          </li>
        ))}
      </ul>
      <PaginationButton />
    </div>
  );
};

export default CarCatalog;