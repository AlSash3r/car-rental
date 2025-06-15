import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import CarCatalogList from "../../components/CarCatalog/CarCatalog";
import { selectIsLoading, selectPage, selectAllCars } from "../../redux/cars/selectors";
import { fetchCars, fetchBrands } from "../../redux/cars/operations";
import Header from "../../components/Header/Header";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);
  const cars = useSelector(selectAllCars);

  useEffect(() => {
    dispatch(fetchCars({ page: currentPage })); 
  }, [dispatch, currentPage]);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  return (
    <main>
      <Header />
      {isLoading ? <Loader /> : <CarCatalogList />}
    </main>
  );
};

export default CatalogPage;