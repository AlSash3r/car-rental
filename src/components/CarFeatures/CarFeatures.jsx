import { FaRegCircleCheck } from "react-icons/fa6";
import styles from './CarFeatures.module.css';

const CarFeatures = ({ title, items }) => {
  if (!items?.length) return null;

  return (
    <div className={styles.featureBlock}>
      <h3 className={styles.heading}>{title}</h3>
      <ul className={styles.featureList}>
        {items.map((item, i) => (
          <li key={i} className={styles.featureItem}>
            <FaRegCircleCheck />
            <span className={styles.featureText}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarFeatures;