import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/components/layout/Nav.module.css';

const Nav = () => {
  return (
    <nav>
      <div className={styles.holder}>
        <ul>
          <li className={styles.active}><Link to="/">Home</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/novedades">Novedades</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          {/* <li><Link to="/servicios">Servicios</Link></li> */}
          <li><Link to="/layout-basico">Layout Basico</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;