import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  useEffect(() => {
    document.title = 'Error - Page Not Found';
  }, []);

  return (
    <div className={styles.errorWrapper}>
      <h2 className={styles.errorTitle}>Oops! Page not found</h2>
      <p className={styles.errorText}>Looks like this page doesn’t exist. Try going back to the home page.</p>
      <Link to="/" className={styles.homeLink}>Go to Home</Link>
    </div>
  );
};

export default ErrorPage;