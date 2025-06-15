import { FaRegCalendarAlt, FaCar, FaGasPump, FaCog } from 'react-icons/fa';
import styles from './CarSpecifications.module.css';

const CarSpecifications = ({ year, type, fuelConsumption, engineSize }) => {
  const formatType = t => t[0].toUpperCase() + t.slice(1).toLowerCase();

  const specItems = [
    { icon: <FaRegCalendarAlt />, label: 'Year', value: year },
    { icon: <FaCar />, label: 'Type', value: formatType(type) },
    { icon: <FaGasPump />, label: 'Fuel Consumption', value: `${fuelConsumption} L/100km` },
    { icon: <FaCog />, label: 'Engine Size', value: engineSize },
  ];

  return (
    <div className={styles.specContainer}>
      <h3 className={styles.heading}>Car Specifications:</h3>
      <ul className={styles.specList}>
        {specItems.map(({ icon, label, value }) => (
          <li key={label} className={styles.specItem}>
            {icon}
            <span className={styles.specText}>
              {label}: {value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarSpecifications;