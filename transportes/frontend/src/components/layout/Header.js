import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../../styles/components/layout/Header.module.css';

const Header = (props) => {
    const history = useHistory();

    return (
        <header>
            <div className={styles.holder}>
                <div className={styles.logo} onClick={() => history.push("/")}>
                    <img src="images/logo.png" width="100" alt="Transportes X"/>
                    <h1>Transportes X</h1>
                </div>
            </div>
        </header>
    );
}

export default Header;