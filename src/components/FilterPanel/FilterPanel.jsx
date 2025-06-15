import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { NumericFormat } from "react-number-format";

import { selectCarsBrands } from "../../redux/cars/selectors";
import { fetchCars } from "../../redux/cars/operations";
import { setFilters } from "../../redux/filters/slice";

import styles from "./FilterPanel.module.css";
import { SelectStyles } from "./SelectStyles";

const FilterPanel = ({ onSearch }) => {
  const dispatch = useDispatch();
  const brands = useSelector(selectCarsBrands);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      brand: "",
      price: null,
      mileageFrom: null,
      mileageTo: null,
    },
  });

  const brandOptions = brands?.map((brand) => ({ value: brand, label: brand }));
  const priceOptions = [30, 40, 50, 60, 70, 80].map((p) => ({
    value: p,
    label: `To $${p}`,
  }));

  const onSubmit = (data) => {
    const query = {
      ...(data.brand && { brand: data.brand }),
      ...(data.price && { rentalPrice: Number(data.price) }),
      ...(typeof data.mileageFrom === "number" && { minMileage: data.mileageFrom }),
      ...(typeof data.mileageTo === "number" && { maxMileage: data.mileageTo }),
    };

    dispatch(setFilters(data));
    dispatch(fetchCars(query));
    onSearch?.();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.filtersForm}>
      <FilterField label="Car brand">
        <Controller
          name="brand"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={brandOptions}
              placeholder="Choose a brand"
              isSearchable
              styles={SelectStyles}
              classNamePrefix="select"
              value={brandOptions.find((opt) => opt.value === field.value) || null}
              onChange={(opt) => field.onChange(opt?.value || "")}
            />
          )}
        />
      </FilterField>
      <FilterField label="Price / 1 hour">
        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={priceOptions}
              placeholder="Choose a price"
              styles={SelectStyles}
              classNamePrefix="select"
              value={priceOptions.find((opt) => opt.value === field.value) || null}
              onChange={(opt) => field.onChange(opt?.value ?? null)}
            />
          )}
        />
      </FilterField>
      <FilterField label="Car mileage / km">
        <div className={styles.mileage}>
          <Controller
            name="mileageFrom"
            control={control}
            render={({ field }) => (
              <NumericFormat
                thousandSeparator=","
                allowNegative={false}
                placeholder="From"
                prefix="From "
                className={styles.mileageInput}
                value={field.value || ""}
                onValueChange={({ floatValue }) => field.onChange(floatValue ?? null)}
              />
            )}
          />
          <Controller
            name="mileageTo"
            control={control}
            render={({ field }) => (
              <NumericFormat
                thousandSeparator=","
                allowNegative={false}
                placeholder="To"
                prefix="To "
                className={styles.mileageToInput}
                value={field.value || ""}
                onValueChange={({ floatValue }) => field.onChange(floatValue ?? null)}
              />
            )}
          />
        </div>
      </FilterField>
      <div>
        <button type="submit" className={styles.button}>Search</button>
      </div>
    </form>
  );
};

const FilterField = ({ label, children }) => (
  <div className={styles.field}>
    <label className={styles.label}>{label}</label>
    {children}
  </div>
);

export default FilterPanel;