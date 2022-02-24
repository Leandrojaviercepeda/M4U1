import React from 'react';
import styles from '../styles/components/pages/HomePage.module.css';
import clsx from 'clsx';

const HomePage = () => {
  return (
    <main className={styles.holder}>
      <div className={styles.homeimg}>
        <img src="images/home/img01.jpg" alt="avion"/>
      </div>
      <div className={styles.columnas}>
        <div className={clsx(styles.bienvenidos, styles.left)}>
          <h2>Bienvenidos</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className={clsx(styles.testimonios, styles.right)}>
          <h2>Testimonios</h2>
          <div className={styles.testimonio}>
            <span className={styles.cita}>Simplemente excelente</span>
            <span className={styles.autor}>Juan Perez</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;