import { ThreeDots } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.spinnerContainer}>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#3470FF"
          ariaLabel="loading"
          visible
        />
      </div>
    </div>
  );
};

export default Loader;