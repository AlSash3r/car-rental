import { NavLink, Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Header.module.css';

const Header = () => {
  const getLinkClass = ({ isActive }) =>
    clsx(styles.navItem, isActive && styles.activeLink);

  return (
    <div className={styles.headerBar}>
      <Link to="/" className={styles.brand}>
        <img src="/Logo.svg" alt="Rental Car Logo" />
      </Link>
      <nav className={styles.navMenu}>
        <NavLink to="/" className={getLinkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={getLinkClass}>
          Catalog
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;